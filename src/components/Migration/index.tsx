import { useState } from 'react';
import { Icon } from 'components/Icon';
import useSignIn from 'hooks/useSignIn';
import { initiateContract, getWeb3WalletBalance, tokenAddress, erc20TokenBalance } from 'utils/ercWallet';
import ERC20AppContract from 'utils/contracts/ERC20AppContract.json';
import ERC20Contract from 'utils/contracts/ERC20Contract.json';
import BasicOutboundChannelContract from 'utils/contracts/BasicOutboundChannelContract.json';

import { Contract, ContractInterface, ethers } from "ethers";

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

export const MigrationConvert = () => {
  const { fetchAccount, loading, error, account: subAddress } = useSignIn();
  const [contractAndWalletData, setContractAndWalletData] = useState<any>({});

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
        const amount = 10;
        const tokenContract = createContractInstance(tokenAddress, ERC20Contract.abi, contractAndWalletData.signer);
        const contract = createContractInstance(ERC20AppContract.contractAddress, ERC20AppContract.abi, contractAndWalletData.signer);
        const basicOutboundChannelContract = createContractInstance(BasicOutboundChannelContract.contractAddress, BasicOutboundChannelContract.abi, contractAndWalletData.signer);

        // token approval 
        const tokenApproval = await tokenContract.approve(ERC20AppContract.contractAddress, 20);
        await tokenApproval.wait();

        // token authorized
        const authorizeOperator = await basicOutboundChannelContract.authorizeOperator(ERC20AppContract.contractAddress);
        await authorizeOperator.wait();

        // const allowance = await tokenContractAllowance(tokenContract, contractAndWalletData.accounts[0], ERC20AppContract.contractAddress);
        // if (parseInt(allowance) >= amount) {
        //   // call lock
        // }
        // else {
        //   // approve
        // }
        // console.log({ allowance });

        // lock 
        const tokenLock = await contract.lock(
          tokenAddress,
          subAddress.hexPublicKey,
          amount,
          0
        );
        await tokenLock.wait();

      } catch (error) {
        console.log({ error })
      }
    }
    else {
      alert("pls connect wallets")
    }
  }

  console.log(subAddress)

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
        <button type="button" onClick={handleMigration}>
          Migrate Now
        </button>
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
