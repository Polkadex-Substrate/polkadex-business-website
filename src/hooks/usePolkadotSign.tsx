//! Create Error Message Timeout

import { ApiPromise, WsProvider } from '@polkadot/api';
import { MetadataVersioned } from '@polkadot/types/metadata/MetadataVersioned';
import { Signer } from '@polkadot/types/types';
import { u8aToHex } from '@polkadot/util';
import { decodeAddress } from '@polkadot/util-crypto';
import { useEffect, useState } from 'react';
import pTypes from 'utils/p_types.json';

type Props = {
  meta?: {
    name: string;
  };
  name?: string;
  address: string;
  hexPublicKey?: string;
  signer?: Signer;
  provider?: any;
  balance: any;
  version?: MetadataVersioned;
};

export function usePolkadotSign() {
  const [selectedPolkadotAccount, setSelectedPolkadotAccount] = useState<Props>(
    {
      meta: {
        name: '',
      },
      address: '',
      balance: null,
    },
  );
  const [polkadotAccounts, setPolkadotAccounts] = useState<Props[]>([]);
  const [polkadotLoading, setPolkadotLoading] = useState(false);
  const [relayerEvent, setRelayerEvent] = useState(false);
  const [polkadotApiPromise, setPolkadotApiPromise] = useState<ApiPromise>(
    null,
  );
  const [isMigrated, setIsMigrated] = useState(false);
  const [polkadotError, setPolkadotError] = useState({
    status: false,
    code: 0,
    message: '',
  });
  useEffect(() => {
    if (!polkadotApiPromise) {
      polkadotApiInstance();
    }
  }, []);

  // useEffect(() => {
  //   if (polkadotApiPromise && selectedPolkadotAccount) {
  //     fetchUpdatedAccount();
  //   }
  // }, [relayerEvent]);

  useEffect(() => {
    extensionChecker();
  }, []);

  // Update balance
  // const fetchUpdatedAccount = async () => {
  //   const { data: balance } = await polkadotApiPromise.query.system.account(
  //     selectedPolkadotAccount.address,
  //   );
  //   setSelectedPolkadotAccount({
  //     ...selectedPolkadotAccount,
  //     balance: balance.toHuman(),
  //   });
  //   setIsMigrated(true);
  // };

  // Change the selected Polkadot{.js} account
  const handleChangePolkadotAccount = (address: string) => {
    const result = polkadotAccounts.filter((item) => item.address === address);
    setSelectedPolkadotAccount(result[0]);
  };

  // Check if Polkadot{.js} extenson is installed
  const extensionChecker = async () => {
    const polkadotExtension = await import('@polkadot/extension-dapp');
    const extension = await polkadotExtension.web3Enable('Polkadex');

    if (!extension.length) {
      setPolkadotError({
        status: true,
        code: 1,
        message: 'Please install Polkadot{.js} extension',
      });
    }
  };

  // Create a Polkador{.js} Instance connection
  const polkadotApiInstance = async () => {
    try {
      const wsProvider = new WsProvider(process.env.RANGER_HOST_URL);
      // I need know the pallet types for migration the one used is for polkadotIDO
      const api = await ApiPromise.create({
        provider: wsProvider,
        types: pTypes,
      });
      // set api promise
      setPolkadotApiPromise(api);
    } catch (err) {
      setPolkadotError({
        status: true,
        code: 3,
        message: 'Error in connection establishment',
      });
    }
  };

  // Fetch Polkadot{.js} wallets
  const handlePolkadotAccounts = async () => {
    setPolkadotLoading(true);
    let result = [];
    try {
      const { web3Enable, web3Accounts, web3FromAddress } = await import(
        '@polkadot/extension-dapp'
      );
      await web3Enable('Polkadex');

      const allAccounts = await web3Accounts();
      if (allAccounts.length) {
        result = await Promise.all(
          allAccounts.map(async (item) => {
            const injector = await web3FromAddress(item.address);
            const publicKey = decodeAddress(item.address);
            const hexPublicKey = u8aToHex(publicKey);

            // get balance
            const {
              data: balance,
            } = await polkadotApiPromise.query.system.account(item.address);
            return {
              ...item,
              hexPublicKey,
              balance: balance.toHuman(),
              ...injector,
            };
          }),
        );
        setSelectedPolkadotAccount(result[0]);
        setPolkadotAccounts(result);
      } else {
        setPolkadotError({
          status: true,
          code: 4,
          message: 'Your Polkadot wallet {.js} is empty ',
        });
      }
      setPolkadotLoading(false);
    } catch (err) {
      setPolkadotLoading(false);
      setPolkadotError({
        status: true,
        code: 4,
        message: 'We can"t get the accounts',
      });
    }
  };

  return {
    polkadotError,
    selectedPolkadotAccount,
    polkadotLoading,
    isMigrated,
    handlePolkadotAccounts,
    handleChangePolkadotAccount,
    polkadotAccounts,
    polkadotApiPromise,
  };
}
