import { useRewards } from 'hooks/useRewards';
import { useMemo } from 'react';

import * as S from './styles';

export const Staking = ({ apy }) => {
  const { total } = useRewards();
  const amountStaking = useMemo(() => Number(total ?? 1000), [total]);

  const result = useMemo(
    () => (amountStaking * apy) / 100 + amountStaking,
    [amountStaking, apy],
  );

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
          <h4>Staking {amountStaking} PDEX</h4>
          <S.Bar>
            <div />
            <div>
              <span>{result} PDEX</span>
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
