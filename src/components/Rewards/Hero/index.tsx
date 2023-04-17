import { SingleArrowBottom } from 'components/Icons';
import { Dropdown } from 'components/v2/Dropdown';
import { useMemo } from 'react';

import { useRewards } from '../../../hooks/useRewards';
import { useWallet } from '../../../hooks/useWallet';
import * as S from './styles';

export const Hero = () => {
  const { account, allAccounts, setAccount, isInjected } = useWallet();
  const {
    total,
    claimed,
    claimable,
    isInitialized,
    claimRewards,
    initiateClaim,
    doesAccountHaveRewards,
    isClaimDisabled,
  } = useRewards();
  const shortWallet = useMemo(
    () =>
      `${account?.address.slice(0, 12)}...${account?.address.slice(
        account?.address.length - 12,
      )}`,
    [account],
  );

  return (
    <S.Wrapper>
      <S.Box>
        <S.Container>
          <img src="/img/rewardsHero.svg" alt="Reward box illustration" />
          <S.Content>
            {doesAccountHaveRewards && (
              <S.Information className="availableRewards">
                <h3>Your PDEX distribution details</h3>
                <div>
                  <S.InformationContainer>
                    <div>
                      <span>{total} PDEX</span>
                      <p>Total rewards</p>
                    </div>
                    <div>
                      <span>{claimable} PDEX</span>
                      <p>Claimable rewards</p>
                    </div>
                    <div>
                      <span>{claimed} PDEX</span>
                      <p>Claimed rewards</p>
                    </div>
                  </S.InformationContainer>
                </div>
              </S.Information>
            )}
          </S.Content>
          <S.Wallet>
            {isInjected ? (
              <>
                <S.WalletContent>
                  <Dropdown>
                    <Dropdown.Trigger>
                      <S.DropdownHeader
                        isSelected={!!account}
                        className="selectWallet"
                      >
                        <div>
                          {account ? (
                            <strong>{account.name}</strong>
                          ) : (
                            <span>Select your wallet</span>
                          )}
                          {!!account && <p>{shortWallet}</p>}
                        </div>

                        <SingleArrowBottom />
                      </S.DropdownHeader>
                    </Dropdown.Trigger>
                    <Dropdown.Menu fill="secondaryBackgroundSolid">
                      {allAccounts.length >= 1 ? (
                        allAccounts.map((v, i) => {
                          const shortAddress = v?.address
                            ? `${v?.address.slice(0, 4)}..${v?.address.slice(
                                v?.address.length - 4,
                              )}`
                            : '0x000000';
                          return (
                            <Dropdown.Item
                              key={i}
                              onAction={() => setAccount(v.address)}
                            >
                              {v.name} <S.Span> • {shortAddress}</S.Span>
                            </Dropdown.Item>
                          );
                        })
                      ) : (
                        <Dropdown.Item>
                          <S.Span> No accounts available</S.Span>
                        </Dropdown.Item>
                      )}
                    </Dropdown.Menu>
                  </Dropdown>
                </S.WalletContent>

                <button
                  type="button"
                  aria-label="select account"
                  className="initiateButton"
                  disabled={isClaimDisabled}
                  onClick={isInitialized ? claimRewards : initiateClaim}
                >
                  {isInitialized ? 'Find Rewards' : 'Initiate Claim'}
                </button>
              </>
            ) : (
              <>
                <S.Extension className="selectWallet">
                  Polkadot.js extension is not installed
                </S.Extension>
                <a
                  target="_blank"
                  href="https://polkadot.js.org/extension/"
                  rel="noreferrer"
                >
                  Get Polkadot.js extension
                </a>
              </>
            )}
          </S.Wallet>
          {!doesAccountHaveRewards && (
            <>
              <h1>Time to Claim your PDEX rewards💰</h1>
              <h2>
                If you participated in the Polkadot Crowdloan and helped us
                secure a parachain slot, you may have pending rewards.
              </h2>
            </>
          )}
        </S.Container>
      </S.Box>
      <div />
    </S.Wrapper>
  );
};
