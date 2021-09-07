import { useState } from 'react';
import { decodeAddress } from '@polkadot/util-crypto';
import { u8aToHex } from '@polkadot/util';

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
