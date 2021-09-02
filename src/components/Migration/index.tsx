import { Icon } from 'components/Icon';
import useSignIn from 'hooks/useSignIn';

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
        title="Step 1"
        description="Connect the ERC20 wallet where you have your PDEX stored."
      >
        <S.Input>
          <label htmlFor="myEth">
            My ERC-20 address
            <S.InputBox>
              <S.ImageContainer>
                <img src="/img/eth.svg" alt="Polkadojs Avatar" />
              </S.ImageContainer>
              <S.Card>
                <S.Flex>
                  <span>PDEX ERC-20</span>
                  <span>Balance: 0 </span>
                </S.Flex>
                <input
                  disabled
                  name="myEth"
                  type="text"
                  value="0x00000000000000000000000000000000000000000"
                />
              </S.Card>
            </S.InputBox>
          </label>
        </S.Input>
      </MigrationCard>
      <S.MigrationActions>
        <button type="button" onClick={() => console.log('Fetch server')}>
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
