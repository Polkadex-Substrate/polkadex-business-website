import { useState } from 'react';
import { decodeAddress } from '@polkadot/util-crypto';
import { u8aToHex } from '@polkadot/util';
import { ApiPromise, WsProvider } from '@polkadot/api';
import pTypes from 'utils/p_types.json';

type Props = {
  account?: any;
  name: string;
  address: string;
  hexPublicKey: string;
  injector?: any;
};
export default function useSignIn() {
  const [account, setAccount] = useState<Props>({
    account: '',
    name: '',
    address: '',
    injector: '',
    hexPublicKey: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({
    status: false,
    message: '',
  });

  const fetchAccount = async () => {
    const data = await fetchAccountData();
    if (data) {
      setAccount({
        account: data.currAccount,
        name: data.currAccount.meta.name,
        address: data.currAccount.address,
        hexPublicKey: data.hexPublicKey,
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

      /**
       * This did not work we need the pallet types for migration and I dont have that knowledge yet
       * 
       * Things to do 
       * 1. Get the balance
       * 2. Listen for events from the relayer
       */
      const wsProvider = new WsProvider('ws://127.0.0.1:9944');
      // I need know the pallet types for migration the one used is for polkadotIDO 
      const api = await ApiPromise.create({ provider: wsProvider, types: pTypes });
      const { nonce, data: balance } = await api.query.system.account(currAccount.address);
      console.log({ nonce: nonce.toHuman(), data: balance.toJSON() });
      
      return { currAccount, injector, hexPublicKey };
    } catch (err) {
      setError({ status: true, message: err.message });
    }
    setLoading(false);
  };

  return {
    error,
    account,
    loading,
    fetchAccount,
  };
}
