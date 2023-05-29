import { useRewards } from 'hooks/useRewards';
import { useState } from 'react';

import * as S from './styles';

export const Staking = ({ apy }) => {
  const [state, setState] = useState(false);
  const { walletReward } = useRewards();

  const formatNumber = (num: number) =>
    Number.isInteger(num) ? num : num.toFixed(3);

  const amountStaking = Number(walletReward?.totalPdex ?? 1000);

  const formaterStaking = formatNumber(amountStaking);
  const amountRewards =
    (Number(formaterStaking) * apy) / 100 + Number(formaterStaking);

  const formaterRewards = formatNumber(amountRewards);

  return (
    <S.Wrapper>
      <S.Box>
        <S.Container className="latestRewards">
          <S.Top>
            <h2>Stake your claimed rewards and watch them grow! 🚀</h2>
            <div>
              <span>{apy}%</span>
              <p>Annual Percentage Yield</p>
            </div>
          </S.Top>
          <S.Bottom>
            <h4>Staking {formaterStaking} PDEX</h4>
            <S.Bar>
              <div />
              <div>
                <span>{formaterRewards} PDEX</span>
                <span>365 days</span>
              </div>
            </S.Bar>
            <button type="button" onClick={() => setState(!state)}>
              How to stake
            </button>
          </S.Bottom>
        </S.Container>
      </S.Box>
      {state && (
        <S.HowToStake>
          <h2>How to Stake PDEX</h2>
          <S.HowToStakeWrapper>
            <S.HowToStakeBox>
              <S.HowToStakeCard>
                <div>
                  <h3>1. Create a nominator stash</h3>
                  <p>
                    Visit the staking page on the Polkadot.js apps explorer and
                    click on &rsquo;Accounts&rsquo; to create a
                    &rsquo;Nominator&rsquo; stash and select the amount of PDEX
                    you want to stake.
                  </p>
                </div>
                <img src="/img/stake1.png" alt="" />
              </S.HowToStakeCard>
              <Arrow />
              <S.HowToStakeCard>
                <div>
                  <h3>2. Choose your rewards destination</h3>
                  <p>
                    Automatically compound your returns by selecting
                    `&quot;Stash account (increase the amount at stake)`&quot;.
                  </p>
                </div>
                <img src="/img/stake2.png" alt="" />
              </S.HowToStakeCard>
            </S.HowToStakeBox>
            <S.HowToStakeBox>
              <S.HowToStakeCard>
                <div>
                  <h3>3. Nominate validators</h3>
                  <p>
                    Select up to 16 trusted validators you want to nominate with
                    your PDEX stake.
                  </p>
                </div>
                <img src="/img/stake1.png" alt="" />
              </S.HowToStakeCard>
              <Arrow />
              <S.HowToStakeCard>
                <span>
                  <img src="/img/stake4.svg" alt="" />
                </span>
                <div>
                  <h3>
                    4. Congrats! Your crowdloan rewards are now earning you
                    daily PDEX rewards!
                  </h3>
                  <p>
                    For more detailed staking guides and other staking methods
                    (including becoming a validator), check out:
                  </p>
                  <a target="_blank" href="/staking">
                    Polkadex staking page
                  </a>
                </div>
              </S.HowToStakeCard>
            </S.HowToStakeBox>
          </S.HowToStakeWrapper>
        </S.HowToStake>
      )}
    </S.Wrapper>
  );
};

const Arrow = () => (
  <S.Arrow>
    <svg
      width="26"
      height="28"
      viewBox="0 0 26 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.5059 1.16797L24.1382 13.8004L11.5059 26.4327"
        stroke="#8BA1BE"
        strokeOpacity="0.2"
        strokeWidth="2.1054"
      />
      <path
        d="M1.36328 1.16797L13.9957 13.8004L1.36328 26.4327"
        stroke="#8BA1BE"
        strokeOpacity="0.2"
        strokeWidth="2.1054"
      />
    </svg>
  </S.Arrow>
);
