import { useState, useEffect } from 'react';
import { decodeAddress } from '@polkadot/util-crypto';
import { u8aToHex } from '@polkadot/util';
import { ApiPromise, WsProvider } from '@polkadot/api';
import pTypes from 'utils/p_types.json';
import { Balance } from '@polkadot/types/interfaces';

type Props = {
  account?: any;
  name: string;
  address: string;
  hexPublicKey: string;
  injector?: any;
  balance: Balance;
};
export default function useSignIn() {
  const [account, setAccount] = useState<Props>({
    account: '',
    name: '',
    address: '',
    injector: '',
    hexPublicKey: '',
    balance: null,
  });
  const [loading, setLoading] = useState(false);
  const [relayerEvent, setRelayerEvent] = useState(false);
  const [apiPromise, setApiPromise] = useState<ApiPromise>(null);
  const [isMigrated, setIsMigrated] = useState(false);
  const [error, setError] = useState({
    status: false,
    message: '',
  });

  useEffect(() => {
    if (apiPromise) {
      fetchUpdatedAccount();
    }
  }, [relayerEvent]);

  const fetchUpdatedAccount = async () => {
    const { data: balance } = await apiPromise.query.system.account(account.address);
    setAccount({ ...account, balance: balance.free });
    setIsMigrated(true);
  }

  const fetchAccount = async () => {
    const data = await fetchAccountData();
    if (data) {
      setAccount({
        account: data.currAccount,
        name: data.currAccount.meta.name,
        address: data.currAccount.address,
        hexPublicKey: data.hexPublicKey,
        balance: data.balance,
        ...data.injector,
      });
    }
  };

  const fetchAccountData = async () => {
    setLoading(true);
    try {
      const { web3Enable } = await import('@polkadot/extension-dapp');
      const allInjected = await web3Enable('Polkadex');

      const { web3Accounts, web3FromAddress } = await import(
        '@polkadot/extension-dapp'
      );

      const allAccounts = await web3Accounts();
      const currAccount = allAccounts[0];
      const injector = await web3FromAddress(currAccount.address);
      const publicKey = decodeAddress(currAccount.address);
      const hexPublicKey = u8aToHex(publicKey);

      const wsProvider = new WsProvider('ws://127.0.0.1:9944');
      // I need know the pallet types for migration the one used is for polkadotIDO 
      const api = await ApiPromise.create({ provider: wsProvider, types: pTypes });
      // set api promise
      setApiPromise(api);

      // get balance 
      const { data: balance } = await api.query.system.account(currAccount.address);

      // listen to events
      api.query.system.events((events) => {
        // Loop through the Vec<EventRecord>
        events.forEach((record) => {
          // Extract the phase, event and the event types
          const { event, phase } = record;
          if (event.method === 'NativePDEXMintedAndLocked') {
            const account = event.data[1].toJSON()
            if (account === currAccount.address) {
              setRelayerEvent(!relayerEvent);
            }
          }
        });
      });

      return { currAccount, injector, hexPublicKey, balance: balance.free };
    } catch (err) {
      setError({ status: true, message: err.message });
    }
    setLoading(false);
  };

  return {
    error,
    account,
    loading,
    isMigrated,
    fetchAccount,
  };
}
