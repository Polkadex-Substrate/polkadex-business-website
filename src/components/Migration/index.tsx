import { useState } from 'react';
import { Icon } from 'components/Icon';
import useSignIn from 'hooks/useSignIn';
import { initiateContract, getWeb3WalletBalance, tokenAddress, erc20TokenBalance } from 'utils/ercWallet';
import ERC20AppContract from 'utils/contracts/ERC20AppContract.json';
import ERC20Contract from 'utils/contracts/ERC20Contract.json';
import BasicOutboundChannelContract from 'utils/contracts/BasicOutboundChannelContract.json';

import { Contract, ContractInterface, ethers, constants as EthersConstants } from "ethers";

import * as S from './styles';
import { Props } from './types';
import { connectWeb3, createContractInstance, tokenContractAllowance } from 'utils/etherjs';

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
  FAILED: 5
}

export const MigrationConvert = () => {
  const { fetchAccount, loading, error, account: subAddress } = useSignIn();
  const [contractAndWalletData, setContractAndWalletData] = useState<any>({});
  const [status, setStatus] = useState<number>(MIGRATE_STATUS.INITIAL);
  const [txs, setTxs] = useState<string[]>([]);

  const handleErcWalletConnect = async () => {
    try {
      const connect = await connectWeb3();
      // // erc20App contract
      // const contract = createContractInstance(ERC20AppContract.contractAddress, ERC20AppContract.abi, connect.provider);
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
      const tokenBalance = ethers.utils.formatEther(tokenBalanceInWei);

      setContractAndWalletData({
        tokenBalance,
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
        // test amount
        const amount = 1;
        const tokenContract = createContractInstance(tokenAddress, ERC20Contract.abi, contractAndWalletData.signer);
        const contract = createContractInstance(ERC20AppContract.contractAddress, ERC20AppContract.abi, contractAndWalletData.signer);
        const basicOutboundChannelContract = createContractInstance(BasicOutboundChannelContract.contractAddress, BasicOutboundChannelContract.abi, contractAndWalletData.signer);

        const allowance = await tokenContractAllowance(tokenContract, contractAndWalletData.account, ERC20AppContract.contractAddress);
        if (allowance < amount) {
          // approve
          setStatus(MIGRATE_STATUS.APPROVING);
          const tokenApproval = await tokenContract.approve(ERC20AppContract.contractAddress, EthersConstants.MaxUint256);
          setTxs([...txs, tokenApproval.hash]);
          await tokenApproval.wait();
        }
        console.log('approved');

        const isAuthorized = await basicOutboundChannelContract.isOperatorFor(ERC20AppContract.contractAddress, contractAndWalletData.account)
        if (!isAuthorized) {
          setStatus(MIGRATE_STATUS.AUTHORIZING);
          const authorizeOperator = await basicOutboundChannelContract.authorizeOperator(ERC20AppContract.contractAddress);
          setTxs([...txs, authorizeOperator.hash]);
          await authorizeOperator.wait();
        }

        setStatus(MIGRATE_STATUS.PROCESSING_ON_ETHEREUM);

        console.log('authorized');

        // lock 
        const tokenLock = await contract.lock(
          tokenAddress,
          subAddress.hexPublicKey,
          ethers.utils.parseEther(amount.toString()),
          0
        );
        setTxs([...txs, tokenLock.hash]);
        await tokenLock.wait();
        setStatus(MIGRATE_STATUS.PROCESSING_ON_RELAYER)
        console.log('locked')

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
        <button type="button" disabled={!subAddress.address || !contractAndWalletData.account || status === MIGRATE_STATUS.APPROVING || status === MIGRATE_STATUS.AUTHORIZING || status === MIGRATE_STATUS.PROCESSING_ON_ETHEREUM || status === MIGRATE_STATUS.PROCESSING_ON_RELAYER} onClick={handleMigration}>
          {status === MIGRATE_STATUS.APPROVING ? 'Approving' :
            status === MIGRATE_STATUS.AUTHORIZING ? 'Authorizing' :
              status === MIGRATE_STATUS.PROCESSING_ON_ETHEREUM ? 'Processing on Ethereum' :
                status === MIGRATE_STATUS.PROCESSING_ON_RELAYER ? 'Processing on Relayer' :
                  status === MIGRATE_STATUS.FAILED ? 'Failed' : 'Migrate Now'}
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
