import { id } from '@ethersproject/hash';
import { BigNumber, constants as EthersConstants, ethers } from 'ethers';
import { useEffect, useState } from 'react';
import * as PolkadexContract from 'utils/contracts';
import * as PolkadexMigrateContract from 'utils/contracts/migrate';
import { connectWeb3, createContractInstance } from 'utils/etherjs';
import { formatAmount } from 'utils/helpers';

type Props = {
  tokenBalance: string;
  accounts: Array<string>;
  account: string;
  provider: ethers.providers.Provider;
  signer: ethers.Signer;
};

export const MIGRATE_STATUS = {
  INITIAL: 0,
  APPROVING: 1,
  AUTHORIZING: 2,
  PROCESSING_ON_ETHEREUM: 3,
  PROCESSING_ON_RELAYER: 4,
  FAILED: 5,
};

export function useEthereumSign({ isMainnet }) {
  const PdexContract = isMainnet
    ? PolkadexContract.PdexContract
    : PolkadexContract.PdexTestContract;

  const PdexMigratateTokenContract = isMainnet
    ? PolkadexMigrateContract.PdexMigratateTokenContract
    : PolkadexMigrateContract.PdexMigratateTestTokenContract;

  const [contractAndWalletData, setContractAndWalletData] = useState<
    Partial<Props>
  >({});
  const [ethereumApiPromise, setEthereumApiPromise] = useState(null);
  const [status, setStatus] = useState([]);
  const [ethereumLoading, setEthereumLoading] = useState(false);
  const [percent, setPercent] = useState(100);

  const [ethereumError, setEthereumError] = useState({
    status: false,
    code: 0,
    message: '',
  });

  useEffect(() => {
    extensionChecker();
  }, []);

  useEffect(() => {
    if (!ethereumApiPromise) ethereumtApiInstance();
  }, []);

  const handleUpdate = (code: number, txd: string) => {
    setStatus((prevState) => [
      ...prevState.map((statusInfo) => {
        if (statusInfo.code === code)
          return {
            ...statusInfo,
            tx: txd,
          };
        return {
          ...statusInfo,
        };
      }),
    ]);
  };

  // Create a Ethereum Instance connection
  const ethereumtApiInstance = async () => {
    try {
      const connect = await connectWeb3();
      // pdex token contract
      const tokenContract = createContractInstance(
        PdexContract.contractAddress,
        PdexContract.abi,
        connect.provider,
      );
      setEthereumApiPromise({ tokenContract, connect });
    } catch (err) {
      setEthereumError({
        status: true,
        code: 3,
        message: 'Error in connection establishment',
      });
    }
  };
  // Check if Metamask extenson is installed
  const extensionChecker = async () => {
    const ethereumExtension = await import('utils/etherjs');
    const extension = await ethereumExtension.connectWeb3();
    if (!extension?.provider)
      setEthereumError({
        status: true,
        code: 1,
        message: 'Please install Metamask extension',
      });
  };
  // Fetch Metamask wallets
  const handleEthereumAccounts = async () => {
    setEthereumLoading(true);
    let result = [];

    try {
      const { chainId } =
        await ethereumApiPromise.connect.signer.provider.getNetwork();

      if (isMainnet && chainId !== 1) {
        setEthereumError({
          status: true,
          code: 5,
          message: 'Open Metamask and change the Network for Ethereum Mainnet',
        });
      } else if (!isMainnet && chainId !== 3) {
        setEthereumError({
          status: true,
          code: 5,
          message: 'Open Metamask and change the Network for Ropsten Testnet',
        });
      } else {
        const allAccounts =
          await ethereumApiPromise.tokenContract.provider.listAccounts();
        if (allAccounts?.length) {
          result = await Promise.all(
            allAccounts.map(async (item) => {
              const tokenBalanceInWei =
                await ethereumApiPromise.tokenContract.balanceOf(item);
              const tokenBalance = ethers.utils.formatUnits(tokenBalanceInWei);
              return {
                tokenBalance: formatAmount(tokenBalance),
                account: item,
                provider: await ethereumApiPromise.connect.provider,
                signer: await ethereumApiPromise.connect.signer,
              };
            }),
          );
          setContractAndWalletData(result[0]);
          setEthereumLoading(false);
        }
      }
      setEthereumLoading(false);
    } catch (error) {
      setEthereumLoading(false);
      setEthereumError({
        status: true,
        code: 4,
        message: 'We can"t get the accounts',
      });
    }
  };

  // Use this for now will clean the code up when its ready
  const handleMigration = async (selectedAddress) => {
    if (contractAndWalletData.signer) {
      try {
        const tokenContract = createContractInstance(
          PdexContract.contractAddress,
          PdexContract.abi,
          contractAndWalletData.signer,
        );

        // this will be pdex token contract
        // const pdexContractInstance = createContractInstance(PdexContract.contractAddress, PdexContract.abi, contractAndWalletData.signer)

        // migrate
        const pdexMigrateTestTokenContractInstance = createContractInstance(
          PdexMigratateTokenContract.contractAddress,
          PdexMigratateTokenContract.abi,
          contractAndWalletData.signer,
        );

        // listen to PdexMigratedEvent
        pdexMigrateTestTokenContractInstance.on(
          'PdexMigratedEvent',
          async () => {
            const tokenBalanceInWei = await tokenContract.balanceOf(
              contractAndWalletData.account,
            );
            const tokenBalance = ethers.utils.formatUnits(tokenBalanceInWei);

            contractAndWalletData.tokenBalance = formatAmount(tokenBalance);

            setContractAndWalletData({ ...contractAndWalletData });
          },
        );
        if (+contractAndWalletData.tokenBalance > 0) {
          setStatus((prevState) => [
            ...prevState,
            {
              code: MIGRATE_STATUS.APPROVING,
            },
          ]);

          const amountInPercent =
            (percent / 100) * Number(contractAndWalletData.tokenBalance);
          const amountToMigrate = ethers.utils.parseEther(`${amountInPercent}`);
          const apporovePdexMigrateContract = await tokenContract.approve(
            PdexMigratateTokenContract.contractAddress,
            EthersConstants.MaxUint256,
          );

          handleUpdate(
            MIGRATE_STATUS.APPROVING,
            apporovePdexMigrateContract.hash,
          );

          await apporovePdexMigrateContract.wait();
          // migrate
          setStatus((prevState) => [
            ...prevState,
            { code: MIGRATE_STATUS.PROCESSING_ON_ETHEREUM },
          ]);

          const migrate = await pdexMigrateTestTokenContractInstance.migrate(
            contractAndWalletData.account,
            selectedAddress.hexPublicKey,
            amountToMigrate,
          );
          handleUpdate(MIGRATE_STATUS.PROCESSING_ON_ETHEREUM, migrate.hash);

          await migrate.wait();
          // approve on relayer
          setStatus((prevState) => [
            ...prevState,
            { code: MIGRATE_STATUS.PROCESSING_ON_RELAYER },
          ]);
        }
      } catch (error) {
        setStatus((prevState) => [
          ...prevState,
          {
            code: MIGRATE_STATUS.FAILED,
          },
        ]);
      }
    } else {
      alert('pls connect wallets');
    }
  };

  return {
    handleEthereumAccounts,
    handleMigration,
    contractAndWalletData,
    status,
    ethereumError,
    ethereumLoading,
    ethereumApiPromise,
    percent,
    setPercent,
  };
}
