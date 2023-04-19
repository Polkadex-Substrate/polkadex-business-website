import { useRewards } from 'hooks/useRewards';

import * as S from './styles';

export const Staking = ({ apy }) => {
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
      <S.Container>
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
          <a target="_blank" href="/staking">
            How to stake
          </a>
        </S.Bottom>
      </S.Container>
    </S.Wrapper>
  );
};
