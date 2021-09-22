import { BigNumber, constants as EthersConstants, ethers } from 'ethers';
import { useEffect, useState } from 'react';
import ERC20Contract from 'utils/contracts/ERC20Contract.json';
// will be used on the main net
import PdexContract from 'utils/contracts/PdexContract.json';
import PdexMigratateTestTokenContract from 'utils/contracts/PdexMigratateTestTokenContract.json';
import { tokenAddress } from 'utils/ercWallet';
import { connectWeb3, createContractInstance } from 'utils/etherjs';
import { formatAmount } from 'utils/helpers';

type Props = {
  tokenBalance: string;
  totalBalance: BigNumber;
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

export function useEthereumSign() {
  const [contractAndWalletData, setContractAndWalletData] = useState<
    Partial<Props>
  >({});
  const [ethereumApiPromise, setEthereumApiPromise] = useState(null);
  const [status, setStatus] = useState<number>(MIGRATE_STATUS.INITIAL);
  const [txs, setTxs] = useState<string[]>([]);
  const [ethereumLoading, setEthereumLoading] = useState(false);
  const [ethereumError, setEthereumError] = useState({
    status: false,
    code: 0,
    message: '',
  });

  useEffect(() => {
    extensionChecker();
  }, []);

  useEffect(() => {
    ethereumtApiInstance();
  }, []);

  // Create a Ethereum Instance connection
  const ethereumtApiInstance = async () => {
    try {
      const connect = await connectWeb3();
      // pdex token contract
      const tokenContract = createContractInstance(
        tokenAddress,
        ERC20Contract.abi,
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
    if (!extension.provider)
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
      const allAccounts = await ethereumApiPromise.tokenContract.provider.listAccounts();
      if (allAccounts?.length) {
        result = await Promise.all(
          allAccounts.map(async (item) => {
            const tokenBalanceInWei = await ethereumApiPromise.tokenContract.balanceOf(
              item,
            );
            const tokenBalance = ethers.utils.formatUnits(tokenBalanceInWei);

            return {
              tokenBalance: formatAmount(tokenBalance),
              // one for now to test
              totalBalance: ethers.utils.parseEther('1'),
              account: item,
              provider: await ethereumApiPromise.connect.provider,
              signer: await ethereumApiPromise.connect.signer,
            };
          }),
        );
        setContractAndWalletData(result[0]);
        setEthereumLoading(false);
      }
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
          tokenAddress,
          ERC20Contract.abi,
          contractAndWalletData.signer,
        );

        // this will be pdex token contract
        // const pdexContractInstance = createContractInstance(PdexContract.contractAddress, PdexContract.abi, contractAndWalletData.signer)

        // migrate
        const pdexMigrateTestTokenContractInstance = createContractInstance(
          PdexMigratateTestTokenContract.contractAddress,
          PdexMigratateTestTokenContract.abi,
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
          setStatus(MIGRATE_STATUS.APPROVING);
          const apporovePdexMigrateContract = await tokenContract.approve(
            PdexMigratateTestTokenContract.contractAddress,
            EthersConstants.MaxUint256,
          );
          setTxs([...txs, apporovePdexMigrateContract.hash]);
          await apporovePdexMigrateContract.wait();

          // migrate
          setStatus(MIGRATE_STATUS.PROCESSING_ON_ETHEREUM);
          const migrate = await pdexMigrateTestTokenContractInstance.migrate(
            contractAndWalletData.account,
            selectedAddress.hexPublicKey,
            contractAndWalletData.totalBalance,
          );
          setTxs([...txs, migrate.hash]);
          await migrate.wait();

          // approve on relayer
          setStatus(MIGRATE_STATUS.PROCESSING_ON_RELAYER);
        }
      } catch (error) {
        setStatus(MIGRATE_STATUS.FAILED);
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
    txs,
    ethereumError,
    ethereumLoading,
    ethereumApiPromise,
  };
}
