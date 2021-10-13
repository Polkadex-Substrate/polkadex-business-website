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

export function usePolkadotSign({ isMainnet }) {
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
  const [polkadotApiPromise, setPolkadotApiPromise] =
    useState<ApiPromise>(null);
  const [isMigrated, setIsMigrated] = useState(false);
  const [polkadotError, setPolkadotError] = useState({
    status: false,
    code: 0,
    message: '',
  });
  useEffect(() => {
    extensionChecker();
  }, []);

  useEffect(() => {
    if (!polkadotApiPromise) polkadotApiInstance();
  }, [polkadotApiPromise]);

  useEffect(() => {
    if (isMigrated) fetchUpdatedAccount();
  }, [isMigrated]);

  // Update balance
  const fetchUpdatedAccount = async () => {
    const { data: balance } = await polkadotApiPromise.query.system.account(
      selectedPolkadotAccount.address,
    );
    setSelectedPolkadotAccount({
      ...selectedPolkadotAccount,
      balance: balance.toHuman(),
    });
  };

  // Change the selected Polkadot{.js} account
  const handleChangePolkadotAccount = async (address: string) => {
    const result = polkadotAccounts.filter((item) => item.address === address);
    setSelectedPolkadotAccount(result[0]);

    await polkadotApiPromise.query.system.events((events) => {
      // Loop through the Vec<EventRecord>
      events.forEach((record) => {
        // Extract the phase, event and the event types
        const { event, phase } = record;
        if (event.method === 'NativePDEXMintedAndLocked') {
          const account = event.data[1].toJSON();
          if (account === result[0].address) {
            setIsMigrated(true);
          }
        }
      });
    });
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
      const wsProvider = new WsProvider(
        isMainnet
          ? process.env.RANGER_HOST_URL_MAINNET
          : process.env.RANGER_HOST_URL_TESTNET,
      );
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

      const allAccounts = await web3Accounts({
        ss58Format: isMainnet ? 88 : 42,
      });
      if (allAccounts.length) {
        result = await Promise.all(
          allAccounts.map(async (item) => {
            const injector = await web3FromAddress(item.address);
            const publicKey = decodeAddress(item.address);
            const hexPublicKey = u8aToHex(publicKey);

            // get balance
            const { data: balance } =
              await polkadotApiPromise.query.system.account(item.address);
            return {
              ...item,
              hexPublicKey,
              balance: balance.toHuman(),
              ...injector,
            };
          }),
        );
        setPolkadotAccounts(result);
        return result[0];
      }
      setPolkadotError({
        status: true,
        code: 4,
        message: 'Your Polkadot{.js} wallet is empty ',
      });

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
  // Select Polkadot{.js} account and listen events
  const handlePolkadotAccount = async () => {
    const result = await handlePolkadotAccounts();
    setSelectedPolkadotAccount(result);
    // listen to events
    await polkadotApiPromise.query.system.events((events) => {
      // Loop through the Vec<EventRecord>
      events.forEach((record) => {
        // Extract the phase, event and the event types
        const { event, phase } = record;

        if (event.method === 'NativePDEXMintedAndLocked') {
          const account = event.data[1].toJSON();
          if (account === result.address) {
            setIsMigrated(true);
          }
        }
      });
    });
  };

  return {
    polkadotError,
    selectedPolkadotAccount,
    polkadotLoading,
    isMigrated,
    handlePolkadotAccount,
    handleChangePolkadotAccount,
    polkadotAccounts,
    polkadotApiPromise,
  };
}
