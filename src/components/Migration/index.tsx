import { useState } from 'react';
import { Icon } from 'components/Icon';
import useSignIn from 'hooks/useSignIn';
import { tokenAddress } from 'utils/ercWallet';
import ERC20Contract from 'utils/contracts/ERC20Contract.json';
import PdexMigrateContract from 'utils/contracts/PdexMigrateContract.json';
import PdexContract from 'utils/contracts/PdexContract.json';


import { ethers, constants as EthersConstants, BigNumber } from "ethers";

import * as S from './styles';
import { Props } from './types';
import { connectWeb3, createContractInstance } from 'utils/etherjs';
import { formatAmount } from 'utils/helpers';

export const MigrationHero = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Box>
          <span>Mainnet</span>
          <h1>
            Convert ERC-20 PDEX to <strong>native PDEX</strong>
          </h1>
        </S.Box>
        <S.Box>
          <img src="/img/migrationHero.svg" alt="Migration Illustraiton" />
        </S.Box>
      </S.Container>
    </S.Wrapper>
  );
};

const MIGRATE_STATUS = {
  INITIAL: 0,
  APPROVING: 1,
  AUTHORIZING: 2,
  PROCESSING_ON_ETHEREUM: 3,
  PROCESSING_ON_RELAYER: 4,
  FAILED: 5,
}


export const MigrationConvert = () => {
  const { fetchAccount, loading, error, account: subAddress, isMigrated } = useSignIn();
  const [contractAndWalletData, setContractAndWalletData] = useState<Partial<{
    tokenBalance: string;
    totalBalance: BigNumber;
    accounts: Array<string>;
    account: string;
    provider: ethers.providers.Provider;
    signer: ethers.Signer
  }>>({});
  const [status, setStatus] = useState<number>(MIGRATE_STATUS.INITIAL);
  const [txs, setTxs] = useState<string[]>([]);

  const handleErcWalletConnect = async () => {
    try {
      const connect = await connectWeb3();
      // pdex token contract
      const tokenContract = createContractInstance(tokenAddress, ERC20Contract.abi, connect.provider);
      // get account signed 
      const accounts = await connect.provider.listAccounts();
      if (!accounts?.length) {
        setContractAndWalletData({
          accounts: [],
          account: null,
          provider: connect.provider,
          signer: connect.signer
        });
        return;
      }
      // get balance 
      const tokenBalanceInWei = await tokenContract.balanceOf(accounts[0]);
      const tokenBalance = ethers.utils.formatUnits(tokenBalanceInWei);

      setContractAndWalletData({
        tokenBalance: formatAmount(tokenBalance),
        // one for now to test
        totalBalance: ethers.utils.parseEther("1"),
        accounts,
        account: accounts[0],
        provider: connect.provider,
        signer: connect.signer
      });

    } catch (error) {
      console.log({ error });
      setContractAndWalletData({
        accounts: [],
        account: null,
        provider: null,
        signer: null
      });
    }
  }

  // use this for now will clean the code up when its ready
  const handleMigration = async () => {
    if (contractAndWalletData.signer) {
      try {
        const tokenContract = createContractInstance(tokenAddress, ERC20Contract.abi, contractAndWalletData.signer);
        // migrate 
        const pdexMigrateContractInstance = createContractInstance(PdexMigrateContract.contractAddress, PdexMigrateContract.abi, contractAndWalletData.signer);
        // listen to PdexMigratedEvent
        pdexMigrateContractInstance.on("PdexMigratedEvent", async () => {
          const tokenBalanceInWei = await tokenContract.balanceOf(contractAndWalletData.account);
          const tokenBalance = ethers.utils.formatUnits(tokenBalanceInWei);
          contractAndWalletData.tokenBalance = formatAmount(tokenBalance);
          console.log({ tokenBalanceInWei, tokenBalance, x: contractAndWalletData.tokenBalance });

          setContractAndWalletData({ ...contractAndWalletData });
        });
        // this will be pdex token contract
        const pdexContractInstance = createContractInstance(PdexContract.contractAddress, PdexContract.abi, contractAndWalletData.signer);

        if (+contractAndWalletData.tokenBalance > 0) {
          setStatus(MIGRATE_STATUS.APPROVING);
          const apporovePdexMigrateContract = await tokenContract.approve(PdexMigrateContract.contractAddress, EthersConstants.MaxUint256);
          setTxs([...txs, apporovePdexMigrateContract.hash]);
          await apporovePdexMigrateContract.wait();

          // migrate
          setStatus(MIGRATE_STATUS.PROCESSING_ON_ETHEREUM);
          const migrate = await pdexMigrateContractInstance.migrate(tokenAddress, contractAndWalletData.account, subAddress.hexPublicKey, contractAndWalletData.totalBalance);
          setTxs([...txs, migrate.hash]);
          await migrate.wait();

          // approve on relayer
          setStatus(MIGRATE_STATUS.PROCESSING_ON_RELAYER);
        }

      } catch (error) {
        console.log({ error })
        setStatus(MIGRATE_STATUS.FAILED)
      }
    }
    else {
      alert("pls connect wallets")
    }
  }

  return (
    <S.MigrationConvert>
      <S.Title>
        <h2>Convert Now</h2>
        <Icon name="ArrowBottom" background="none" />
      </S.Title>

      <MigrationCard
        title="Step 1"
        description="Select the wallet in which you want to receive your PDEX. You need to install Polkadot{.js}"
      >
        {subAddress.address ? (
          <S.Input>
            <label htmlFor="myPolkadotjs">
              {`My Polkadot{.js} address`}
              <S.InputBox>
                <S.ImageContainer>
                  <img src="/img/avatar.svg" alt="Polkadojs Avatar" />
                </S.ImageContainer>
                <S.Card>
                  <S.Flex>
                    <span>{subAddress.account.meta.name}</span>
                    <span>Balance: {subAddress.balance?.toHuman()}</span>
                  </S.Flex>
                  <input
                    disabled
                    name="myPolkadotjs"
                    type="text"
                    value={subAddress.address}
                  />
                </S.Card>
              </S.InputBox>
            </label>
          </S.Input>
        ) : (
          <button type="button" disabled={loading} onClick={fetchAccount}>
            {loading ? 'Connecting...' : 'Connect to a Wallet'}
          </button>
        )}
      </MigrationCard>

      <MigrationCard
        title="Step 2"
        description="Connect the ERC20 wallet where you have your PDEX stored."
      >
        {
          contractAndWalletData.account ? <S.Input>
            <label htmlFor="myEth">
              My ERC-20 address
              <S.InputBox>
                <S.ImageContainer>
                  <img src="/img/eth.svg" alt="Polkadojs Avatar" />
                </S.ImageContainer>
                <S.Card>
                  <S.Flex>
                    <span>PDEX ERC-20</span>
                    <span>Balance: {contractAndWalletData.tokenBalance} </span>
                  </S.Flex>
                  <input
                    disabled
                    name="myEth"
                    type="text"
                    value={contractAndWalletData.account}
                  />
                </S.Card>
              </S.InputBox>
            </label>
          </S.Input> : (
            <button type="button" onClick={handleErcWalletConnect}>
              Connect to a Wallet
            </button>
          )
        }
      </MigrationCard>
      <S.MigrationActions>
        <button type="button" disabled={isMigrated || !subAddress.address || !contractAndWalletData.account || status === MIGRATE_STATUS.APPROVING || status === MIGRATE_STATUS.AUTHORIZING || status === MIGRATE_STATUS.PROCESSING_ON_ETHEREUM || status === MIGRATE_STATUS.PROCESSING_ON_RELAYER} onClick={handleMigration}>
          {
            isMigrated ? "Migrated!" : (status === MIGRATE_STATUS.APPROVING ? 'Approving' :
              status === MIGRATE_STATUS.AUTHORIZING ? 'Authorizing' :
                status === MIGRATE_STATUS.PROCESSING_ON_ETHEREUM ? 'Processing on Ethereum' :
                  status === MIGRATE_STATUS.PROCESSING_ON_RELAYER ? 'Processing on Relayer' :
                    status === MIGRATE_STATUS.FAILED ? 'Failed' : 'Migrate Now')
          }
        </button>
        <ul>
          {txs.map(tx => <li key={tx}><a href={`https://ropsten.etherscan.io/tx/${tx}`}>https://ropsten.etherscan.io/tx/{tx}</a></li>)}
        </ul>
        <p>
          <strong>
            The PDEX ERC20 migration for PDEX Mainnet is irreversible
          </strong>
          , be sure to select the correct wallet.
        </p>
      </S.MigrationActions>
    </S.MigrationConvert>
  );
};

const MigrationCard = ({ title, description, children }: Props) => {
  return (
    <S.CardWrapper>
      <S.CardContainer>
        <h4>{title}</h4>
        <p>{description}</p>
      </S.CardContainer>
      {children}
    </S.CardWrapper>
  );
};
