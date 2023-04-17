import * as S from './styles';

export const Staking = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Top>
          <h2>Stake your claimed rewards and watch them grow! 🚀</h2>
          <div>
            <span>24.9%</span>
            <p>Annual Percentage Yield</p>
          </div>
        </S.Top>
        <S.Bottom>
          <h4>Staking 1000 PDEX</h4>
          <S.Bar>
            <div />
            <div>
              <span>1249 PDEX</span>
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
