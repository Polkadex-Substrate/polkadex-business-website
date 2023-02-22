import { Signer } from '@polkadot/types/types';
import React, { useCallback, useEffect, useState } from 'react';

interface Web3Account {
  address: string;
  name?: string;
}

interface StoreState {
  account?: Web3Account;
  allAccounts: Web3Account[];
  loading: boolean;
}
const initialState: StoreState = {
  allAccounts: [],
  loading: false,
};
export interface WalletCtx extends StoreState {
  getSinger: (address: string) => Promise<Signer>;
  setAccount: (address: string) => void;
}

export const WalletContext = React.createContext<WalletCtx>(null);
export const WalletProvider = ({
  children,
}: React.PropsWithChildren<unknown>) => {
  const [isInjected, setIsInjected] = useState<boolean>(false);
  const [state, setState] = useState<StoreState>(initialState);

  const connectWallet = useCallback(async (): Promise<void> => {
    const { web3Enable, web3EnablePromise } = await import(
      '@polkadot/extension-dapp'
    );
    setState((prevState) => ({ ...prevState, loading: true }));
    const allInjected = await web3Enable('polkadex');
    await web3EnablePromise;
    if (allInjected.length > 0) setIsInjected(true);
  }, []);

  const setAccount = useCallback((address: string) => {
    setState((prevState) => ({
      ...prevState,
      account: prevState.allAccounts.find((acc) => acc.address === address),
    }));
  }, []);

  const getSinger = useCallback(async (address: string): Promise<Signer> => {
    const { web3FromAddress } = await import('@polkadot/extension-dapp');
    const injector = await web3FromAddress(address);
    return injector.signer;
  }, []);

  useEffect(() => {
    connectWallet().then(() =>
      setState((prevState) => ({ ...prevState, loading: false })),
    );
  }, [connectWallet]);

  useEffect(() => {
    let sub;
    if (isInjected) {
      import('@polkadot/extension-dapp').then(({ web3AccountsSubscribe }) => {
        sub = web3AccountsSubscribe((accounts) => {
          const allAccounts: Web3Account[] = accounts.map(
            ({ address, meta }) => ({
              address,
              name: meta.name,
            }),
          );
          setState((prevState) => ({
            ...prevState,
            allAccounts,
          }));
        });
      });
    }
    return () => sub && sub();
  }, [isInjected]);

  const value: WalletCtx = { ...state, setAccount, getSinger };
  return (
    <WalletContext.Provider value={value}>{children}</WalletContext.Provider>
  );
};
