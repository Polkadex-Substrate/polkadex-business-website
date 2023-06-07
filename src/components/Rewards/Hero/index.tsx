import { SingleArrowBottom } from 'components/Icons';
import { Dropdown } from 'components/v2/Dropdown';
import React, { useMemo } from 'react';

import { useRewards } from '../../../hooks/useRewards';
import { useWallet } from '../../../hooks/useWallet';
import * as S from './styles';

export const Hero = () => {
  const { account, allAccounts, setAccount, isInjected } = useWallet();
  const {
    claimed,
    claimable,
    isUnlocked,
    claimRewards,
    initiateClaim,
    isClaimDisabled,
    hasRewards,
    walletReward,
    isTransactionLoading,
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
        <S.Container className="initiateButton">
          <img src="/img/rewardsHero.svg" alt="Reward box illustration" />
          <S.Content>
            {isInjected && account && (
              <S.Information className="noRewards">
                {hasRewards ? (
                  <h3>
                    🎁 This wallet has pending rewards, Unlock your rewards!
                  </h3>
                ) : (
                  <span style={{ textAlign: 'center', fontSize: '1.8rem' }}>
                    Oops, This wallet doesn&apos;t have any rewards to receive
                    🤷‍♂️
                    <small style={{ display: 'block', opacity: 0.7 }}>
                      Please try with another wallet
                    </small>
                  </span>
                )}
                {hasRewards && !isUnlocked && (
                  <div>
                    <S.InformationContainer>
                      <div>
                        <span>{walletReward?.totalPdex ?? 0.0} PDEX</span>
                        <p>Total rewards</p>
                      </div>
                      <div>
                        <span>{walletReward?.initialClaim ?? 0.0} PDEX</span>
                        <p>Initial claimable rewards</p>
                      </div>
                      <div>
                        <span>{walletReward?.dotContributed} DOT</span>
                        <p>DOT contributed</p>
                      </div>
                    </S.InformationContainer>
                  </div>
                )}
                {isUnlocked && (
                  <S.InformationContainer>
                    <div>
                      <span>{walletReward?.totalPdex ?? 0.0} PDEX</span>
                      <p>Total rewards</p>
                    </div>
                    <div>
                      <span>{claimable ?? 0.0} PDEX</span>
                      <p>Claimable rewards</p>
                    </div>
                    <div>
                      <span>{claimed ?? 0.0} PDEX</span>
                      <p>Claimed rewards</p>
                    </div>
                  </S.InformationContainer>
                )}
              </S.Information>
            )}
          </S.Content>
          <S.Wallet>
            {isInjected ? (
              <>
                <S.WalletContent className="selectWallet">
                  <Dropdown>
                    <Dropdown.Trigger>
                      <S.DropdownHeader isSelected={!!account}>
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
                      {allAccounts?.length >= 1 ? (
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
                {hasRewards && (
                  <button
                    type="button"
                    aria-label="select account"
                    disabled={isUnlocked ? isClaimDisabled : !hasRewards}
                    onClick={isUnlocked ? claimRewards : initiateClaim}
                  >
                    {/* eslint-disable-next-line no-nested-ternary */}
                    {isTransactionLoading
                      ? 'Submitting...'
                      : isUnlocked
                      ? 'Claim'
                      : 'Unlock Reward'}
                  </button>
                )}
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
          {!account && (
            <>
              <h1>Time to Claim your TEST PDEX rewards💰</h1>
              <h2>
                If you participated in the Polkadot Crowdloan and helped us
                secure a parachain slot, you may have pending rewards.
              </h2>
            </>
          )}
          <S.Arrow
            style={{ display: !account || hasRewards ? 'block' : 'none' }}
          >
            <svg
              width="193"
              height="166"
              viewBox="0 0 193 166"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.86586 164.259C3.18022 165.16 4.27867 165.745 5.18704 165.18C12.4449 160.651 19.7063 156.122 26.9623 151.588C28.4227 150.676 27.518 148.284 25.7506 148.785C19.8745 150.451 14.7313 153.029 10.0688 156.612C16.4402 133.544 39.9957 121.195 62.1329 114.39C83.6249 107.782 105.214 103.314 124.922 92.1868C158.97 72.9621 186.355 40.0617 192.149 1.41776C192.289 0.481323 190.851 0.0514526 190.661 1.01643C182.114 44.7457 149.709 79.9934 108.211 97.3952C73.1028 112.12 13.9948 113.852 6.07349 160.312C6.03511 160.538 6.05521 160.751 6.10091 160.954C5.82857 161.125 5.55441 161.295 5.28207 161.466C4.04106 157.194 3.72672 153.166 4.40114 148.529C4.69174 146.542 1.56818 145.696 1.29221 147.692C0.467911 153.626 0.879135 158.573 2.86586 164.259Z"
                fill="url(#paint0_linear_2125_9683)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_2125_9683"
                  x1="36"
                  y1="188.337"
                  x2="197.801"
                  y2="-39.6785"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#E6007A" />
                  <stop offset="1" stopColor="#6745D2" />
                </linearGradient>
              </defs>
            </svg>
          </S.Arrow>
        </S.Container>
      </S.Box>
    </S.Wrapper>
  );
};
