import * as S from './styles';

export const Staking = ({ apy, stakingAmount = 1000 }) => {
  const result = (stakingAmount * apy) / 100 + stakingAmount;
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
          <h4>Staking {stakingAmount} PDEX</h4>
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
