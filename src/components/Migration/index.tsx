import { Dropdown } from 'components';
import { Icon } from 'components/Icon';
import { MIGRATE_STATUS, useEthereumSign, usePolkadotSign } from 'hooks';

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
  const {
    polkadotLoading,
    polkadotError,
    selectedPolkadotAccount,
    polkadotAccounts,
    handlePolkadotAccounts,
    handleChangePolkadotAccount,
    isMigrated,
    polkadotApiPromise,
  } = usePolkadotSign();

  const {
    handleEthereumAccounts,
    handleMigration,
    contractAndWalletData,
    status,
    txs,
    ethereumError,
    ethereumLoading,
    ethereumApiPromise,
  } = useEthereumSign();

  //! Create Loading
  if (!polkadotApiPromise || !ethereumApiPromise) return <div />;
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
        {polkadotError.code === 1 ? (
          <a
            href="https://polkadot.js.org/extension/"
            target="_blank"
            rel="noreferrer"
          >
            {`Download Polkadot{.js} Extension`}
          </a>
        ) : (
          <div>
            {selectedPolkadotAccount.address ? (
              <S.Input>
                <S.InpuTitle>{`Select your Polkadot{.js} wallet`}</S.InpuTitle>
                <Dropdown
                  title={
                    <PolkadotWallet
                      name={selectedPolkadotAccount.meta.name}
                      balance={selectedPolkadotAccount.balance?.free}
                      address={selectedPolkadotAccount.address}
                      // eslint-disable-next-line @typescript-eslint/no-empty-function
                      changeAccount={() => {}}
                    />
                  }
                >
                  <S.MigrationDropdown>
                    {polkadotAccounts.map((item) => (
                      <PolkadotWallet
                        selected={
                          selectedPolkadotAccount.address === item.address
                        }
                        key={item.address}
                        name={item.meta.name}
                        balance={item.balance?.free}
                        address={item.address}
                        changeAccount={() =>
                          handleChangePolkadotAccount(item.address)
                        }
                      />
                    ))}
                  </S.MigrationDropdown>
                </Dropdown>
              </S.Input>
            ) : (
              <div>
                <button
                  type="button"
                  disabled={polkadotLoading}
                  onClick={() => handlePolkadotAccounts()}
                >
                  {polkadotLoading ? 'Connecting...' : 'Connect to a Wallet'}
                </button>
                {polkadotError.status && (
                  <S.ErrorTag>
                    <span>Error</span>
                    {polkadotError.message}
                  </S.ErrorTag>
                )}
              </div>
            )}
          </div>
        )}
      </MigrationCard>
      <MigrationCard
        title="Step 2"
        description="Connect the ERC20 wallet where you have your PDEX stored."
      >
        {ethereumError.code === 1 ? (
          <a
            href="https://metamask.io/download.html"
            target="_blank"
            rel="noreferrer"
          >
            Download Metamask Extension
          </a>
        ) : (
          <div>
            {contractAndWalletData.account ? (
              <S.Input>
                <S.InpuTitle>My ERC-20 address </S.InpuTitle>
                <Wallet
                  balance={contractAndWalletData.tokenBalance}
                  account={contractAndWalletData.account}
                />
                {ethereumError.status && (
                  <S.ErrorTag>
                    <span>Error</span>
                    {ethereumError.message}
                  </S.ErrorTag>
                )}
              </S.Input>
            ) : (
              <button
                disabled={ethereumLoading}
                type="button"
                onClick={handleEthereumAccounts}
              >
                {ethereumLoading ? 'Connecting...' : 'Connect to a Wallet'}
              </button>
            )}
          </div>
        )}
      </MigrationCard>
      <S.MigrationActions
        isLoading={
          status === MIGRATE_STATUS.APPROVING ||
          status === MIGRATE_STATUS.AUTHORIZING ||
          status === MIGRATE_STATUS.PROCESSING_ON_ETHEREUM ||
          status === MIGRATE_STATUS.PROCESSING_ON_RELAYER
        }
      >
        <button
          type="button"
          disabled={
            isMigrated ||
            !selectedPolkadotAccount.address ||
            !contractAndWalletData.account ||
            status === MIGRATE_STATUS.APPROVING ||
            status === MIGRATE_STATUS.AUTHORIZING ||
            status === MIGRATE_STATUS.PROCESSING_ON_ETHEREUM ||
            status === MIGRATE_STATUS.PROCESSING_ON_RELAYER
          }
          onClick={() => handleMigration(selectedPolkadotAccount)}
        >
          {/*! Refactor it */}
          {isMigrated
            ? 'Migrated!'
            : status === MIGRATE_STATUS.APPROVING
            ? 'Approving'
            : status === MIGRATE_STATUS.AUTHORIZING
            ? 'Authorizing'
            : status === MIGRATE_STATUS.PROCESSING_ON_ETHEREUM
            ? 'Processing on Ethereum'
            : status === MIGRATE_STATUS.PROCESSING_ON_RELAYER
            ? 'Processing on Relayer'
            : status === MIGRATE_STATUS.FAILED
            ? 'Failed'
            : 'Migrate Now'}
        </button>
        <ul>
          {txs.map((tx) => (
            <li key={tx}>
              <a
                target="_blank"
                href={`https://ropsten.etherscan.io/tx/${tx}`}
                rel="noreferrer"
              >
                See at Etherscan
              </a>
            </li>
          ))}
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

const MigrationCard = ({ title, description, children }: Props) => (
  <S.CardWrapper>
    <S.CardContainer>
      <h4>{title}</h4>
      <p>{description}</p>
    </S.CardContainer>
    {children}
  </S.CardWrapper>
);

const Wallet = ({ balance, account, selected = false }) => (
  <S.InputBox selected={selected}>
    <S.ImageContainer>
      <img src="/img/eth.svg" alt="Polkadojs Avatar" />
    </S.ImageContainer>
    <S.Card>
      <S.Flex>
        <span>PDEX ERC-20</span>
        <span>Balance: {balance} </span>
      </S.Flex>
      <p>{account}</p>
    </S.Card>
  </S.InputBox>
);

const PolkadotWallet = ({
  name,
  address,
  balance,
  selected = false,
  changeAccount,
}) => (
  <S.InputBox selected={selected} onClick={changeAccount}>
    <S.ImageContainer>
      <img src="/img/avatar.svg" alt="Polkadojs Avatar" />
    </S.ImageContainer>
    <S.Card>
      <S.Flex>
        <span>{name}</span>
        <span>Balance: {balance}</span>
      </S.Flex>
      <p>{address}</p>
    </S.Card>
  </S.InputBox>
);
