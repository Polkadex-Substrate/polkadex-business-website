import { Dropdown, Icon, MigrateStatus, Spinner } from 'components';
import {
  Avatar,
  Ethereum,
  MigrationHero as MigrationHeroIllustration,
} from 'components/Icons';
import { MIGRATE_STATUS, useEthereumSign, usePolkadotSign } from 'hooks';

import * as S from './styles';
import { Props } from './types';

const percents = ['5', '25', '50', '75', '100'];
export const MigrationHero = ({ isMainnet = true }) => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Box>
          <span>{isMainnet ? 'Mainnet' : 'Testnet'}</span>
          <h1>
            Convert ERC-20 PDEX to <strong>native PDEX</strong>
          </h1>
        </S.Box>
        <S.Box>
          <MigrationHeroIllustration />
        </S.Box>
      </S.Container>
    </S.Wrapper>
  );
};

const getStatus = (value: number) => {
  switch (value) {
    case 1:
      return 'Approving';
    case 2:
      return 'Authorizing';
    case 3:
      return 'Processing on Ethereum';
    case 4:
      return 'Processing on Relayer, it will take 15 blocks of confirmation + 1min';
    default:
      return 'Failed';
  }
};
export const MigrationConvert = ({ isMainnet = true }) => {
  const {
    polkadotLoading,
    polkadotError,
    selectedPolkadotAccount,
    polkadotAccounts,
    handlePolkadotAccount,
    handleChangePolkadotAccount,
    isMigrated,
    polkadotApiPromise,
  } = usePolkadotSign({ isMainnet });

  const {
    handleEthereumAccounts,
    handleMigration,
    contractAndWalletData,
    status,
    ethereumError,
    ethereumLoading,
    ethereumApiPromise,
    percent,
    setPercent,
  } = useEthereumSign({ isMainnet });

  const isLoading = status.some(
    (statusInfo) =>
      statusInfo.code === MIGRATE_STATUS.APPROVING ||
      MIGRATE_STATUS.AUTHORIZING ||
      MIGRATE_STATUS.PROCESSING_ON_ETHEREUM ||
      MIGRATE_STATUS.PROCESSING_ON_RELAYER,
  );

  if (!polkadotApiPromise || !ethereumApiPromise)
    return (
      <S.LoadingWrapper>
        <Spinner />
        <span>
          {!polkadotApiPromise
            ? `Checking Polkadex ${
                isMainnet ? 'mainnet' : 'testnet'
              } blockchain status..`
            : `Checking Ethereum ${
                isMainnet ? 'mainnet' : 'testnet'
              } blockchain status..`}
        </span>
      </S.LoadingWrapper>
    );
  return (
    <S.MigrationConvert>
      <S.Title>
        <h2>Convert Now</h2>
        <Icon name="ArrowBottom" background="none" />
      </S.Title>
      <S.MigrationWrapper>
        <S.ErrorTag style={{ marginBottom: 10 }}>
          <span>Attention</span>
          <p>
            Ledger hardware wallets are not supported yet, please don&apos;t
            transfer to Ledger wallets.
          </p>
        </S.ErrorTag>
        <S.MigrationContainer>
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
                      onClick={() => handlePolkadotAccount()}
                    >
                      {polkadotLoading
                        ? 'Connecting...'
                        : 'Connect to a Wallet'}
                    </button>
                    {polkadotError.status && (
                      <S.ErrorTag>
                        <span>Error</span>
                        <p>{polkadotError.message}</p>
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
                {ethereumError.code === 5 ? (
                  <S.ErrorTag>
                    <span>Error</span>
                    <p>{ethereumError.message}</p>
                  </S.ErrorTag>
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
                            <p>{ethereumError.message}</p>
                          </S.ErrorTag>
                        )}
                      </S.Input>
                    ) : (
                      <button
                        disabled={ethereumLoading}
                        type="button"
                        onClick={handleEthereumAccounts}
                      >
                        {ethereumLoading
                          ? 'Connecting...'
                          : 'Connect to a Wallet'}
                      </button>
                    )}
                  </div>
                )}
              </div>
            )}
          </MigrationCard>
          {contractAndWalletData.account && selectedPolkadotAccount.address && (
            <MigrationCard
              title="Step 3(Optional)"
              description="Select the amount you want to migrate."
            >
              <S.PercentWrapper>
                {percents.map((item) => (
                  <S.PercentCard
                    key={item}
                    onClick={() => setPercent(Number(item))}
                    isActive={percent === Number(item)}
                    role="button"
                  >
                    {item}%
                  </S.PercentCard>
                ))}
              </S.PercentWrapper>
            </MigrationCard>
          )}
          <S.MigrationCardLoading isActive={isLoading && !isMigrated}>
            <Spinner />
          </S.MigrationCardLoading>
        </S.MigrationContainer>
        {!!status.length && (
          <MigrationCard
            title="Status"
            description="This process can take between 5 and 15 minutes."
          >
            {status.map((statusInfo, index) => (
              <MigrateStatus
                key={index}
                status={statusInfo.tx}
                title={getStatus(statusInfo.code)}
                tx={statusInfo.tx}
                isMainnet={isMainnet}
              />
            ))}
          </MigrationCard>
        )}
      </S.MigrationWrapper>

      <S.MigrationActions isLoading={isLoading && !isMigrated}>
        <button
          type="button"
          disabled={
            Number(contractAndWalletData?.tokenBalance) === 0 ||
            isMigrated ||
            !selectedPolkadotAccount.address ||
            !contractAndWalletData.account ||
            isLoading
          }
          onClick={() => handleMigration(selectedPolkadotAccount)}
        >
          {isMigrated
            ? 'Migrated'
            : `${isLoading ? 'Migrating' : 'Migrate Now'} ${
                (percent / 100) * Number(contractAndWalletData?.tokenBalance) ||
                0
              } PDEX ERC-20`}
        </button>

        <p>
          <strong>
            The PDEX ERC20 migration for PDEX Mainnet is irreversible
          </strong>
          , be sure to select the correct wallet. If you have any questions or
          issues, please&nbsp;
          <a
            target="_blank"
            href="https://4ja1jqavh8j.typeform.com/to/voALLQK0"
            rel="noreferrer"
          >
            contact us
          </a>
          .
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
      <Ethereum />
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
      <Avatar />
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
