import { useState } from 'react';
import { Icon } from 'components/Icon';
import useSignIn from 'hooks/useSignIn';
import { ercWallet, getWeb3WalletBalance } from 'utils/ercWallet';
import ERC20AppContract from 'utils/contracts/ERC20AppContract.json'

import * as S from './styles';
import { Props } from './types';

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
  const { fetchAccount, loading, error, account } = useSignIn();
  const [contractAndWalletData, setContractAndWalletData] = useState<Partial<{ web3: any, accounts: Array<string>, instance: any, walletBalance: string }>>({});


  const handleErcWalletConnect = async () => {
    const contractDetails = await ercWallet(ERC20AppContract.contractAddress, ERC20AppContract.abi);
    if (contractDetails) {
      const walletBalance = await getWeb3WalletBalance(contractDetails.web3, contractDetails.accounts[0]);
      setContractAndWalletData({
        ...contractDetails,
        walletBalance
      });

      // const res = await contractDetails.instance.methods.balances('0x0c7f69f66ab81bb257198baa7f42fd1469e002a6').call();
      // console.log(res);
    }
  }

  const handleMigration = async () => {
    if (contractAndWalletData.instance) {
      const res = await contractAndWalletData.instance.methods.lock(
        contractAndWalletData.accounts[0],
        account.address,
        10,
        0
      )
      .send({
        // not sure what the from address should be here; 
        from: contractAndWalletData.accounts[0]
      })
    }
    else {
      alert("Please connect wallets")
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
        {account.address ? (
          <S.Input>
            <label htmlFor="myPolkadotjs">
              {`My Polkadot{.js} address`}
              <S.InputBox>
                <S.ImageContainer>
                  <img src="/img/avatar.svg" alt="Polkadojs Avatar" />
                </S.ImageContainer>
                <S.Card>
                  <S.Flex>
                    <span>{account.account.meta.name}</span>
                    <span>Balance: 0</span>
                  </S.Flex>
                  <input
                    disabled
                    name="myPolkadotjs"
                    type="text"
                    value={account.address}
                  />
                </S.Card>
              </S.InputBox>
            </label>
          </S.Input>
        ) : (
          <button type="button" disabled={loading} onClick={fetchAccount}>
            Connect to a Wallet
          </button>
        )}
      </MigrationCard>

      <MigrationCard
        title="Step 2"
        description="Connect the ERC20 wallet where you have your PDEX stored."
      >
        {
          contractAndWalletData.accounts ? <S.Input>
            <label htmlFor="myEth">
              My ERC-20 address
              <S.InputBox>
                <S.ImageContainer>
                  <img src="/img/eth.svg" alt="Polkadojs Avatar" />
                </S.ImageContainer>
                <S.Card>
                  <S.Flex>
                    <span>PDEX ERC-20</span>
                    <span>Balance: {contractAndWalletData.walletBalance} </span>
                  </S.Flex>
                  <input
                    disabled
                    name="myEth"
                    type="text"
                    value={contractAndWalletData.accounts[0]}
                  />
                </S.Card>
              </S.InputBox>
            </label>
          </S.Input> : (
            <button type="button" disabled={loading} onClick={handleErcWalletConnect}>
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
