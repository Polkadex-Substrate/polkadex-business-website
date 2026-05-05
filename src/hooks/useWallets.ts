import { Signer } from '@polkadot/api/types';
import { useEffect, useState } from 'react';

export interface Web3Account {
  substrateAddress: string;
  type: 'substrate' | 'ethereum';
  name?: string;
}
export interface SubstrateAccount extends Web3Account {
  signer: Signer;
  type: 'substrate';
}

export const useWallets = () => {
  const [wallets, setWallets] = useState<SubstrateAccount[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!wallets?.length) {
      fetchWalletsAsync();
    }
  }, [wallets]);

  async function fetchWalletsAsync() {
    try {
      const { web3Enable, web3Accounts, web3FromAddress } = await import(
        '@polkadot/extension-dapp'
      );
      await web3Enable('polkadex-thea');
      const allAccounts = await web3Accounts({ ss58Format: 88 });
      const promises = Promise.all(
        allAccounts.map(async (account): Promise<SubstrateAccount> => {
          return {
            name: account.meta.name,
            substrateAddress: account.address,
            type: 'substrate',
            signer: (await web3FromAddress(account.address)).signer,
          };
        }),
      );
      setWallets(await promises);
    } catch (e) {
      setError('Please give authorization in Polkadot.js wallet or:');
      console.log(e);
    }
  }
  return {
    wallets,
    error,
  };
};
