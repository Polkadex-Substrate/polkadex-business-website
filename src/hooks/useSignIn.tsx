import { useState } from 'react';
import { convertPublicKeyToCurve25519, decodeAddress } from '@polkadot/util-crypto';
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
    balance: null
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

      /**
       * This did not work we need the pallet types for migration and I dont have that knowledge yet
       * 
       * Things to do 
       * 1. Get the balance
       * 2. Listen for events from the relayer
       */
      const wsProvider = new WsProvider('wss://blockchain.polkadex.trade');
      // I need know the pallet types for migration the one used is for polkadotIDO 
      const api = await ApiPromise.create({ provider: wsProvider, types: pTypes });
      const { nonce, data: balance } = await api.query.system.account(currAccount.address);
      console.log({ nonce: nonce.toHuman(), data: balance });
      
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
    fetchAccount,
  };
}
