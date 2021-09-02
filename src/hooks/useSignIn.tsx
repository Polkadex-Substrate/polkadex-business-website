import { useState } from 'react';

type Props = {
  account?: any;
  name: string;
  address: string;
  injector?: any;
};
export default function useSignIn() {
  const [account, setAccount] = useState<Props>({
    account: '',
    name: '',
    address: '',
    injector: '',
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
      return { currAccount, injector };
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
