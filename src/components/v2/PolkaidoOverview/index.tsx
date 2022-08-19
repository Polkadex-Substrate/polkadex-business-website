import * as Icons from 'components/Icons';

import * as S from './styles';

export const PolkaidoOverview = () => {
  return (
    <S.Wrapper id="about">
      <S.Container>
        <S.Title>
          <h2>PolkaIDO</h2>
          <p>IDOs are currently broken. PolkaIDO is the answer.</p>
        </S.Title>
        <S.Comparison>
          <S.ComparisonCard>
            <S.ComparisonContainer>
              <div>
                <span>
                  <img src="/img/expense.png" alt="expense icon" />
                </span>
                <span>
                  <img src="/img/difficult.png" alt="difficult icon" />
                </span>
                <span>
                  <img src="/img/manual.png" alt="manual icon" />
                </span>
              </div>
            </S.ComparisonContainer>
            <S.ComparisonWrapper>
              <span>IDOs Now</span>
              <p>
                Exclusive, expensive, and over-reliant on manual processes and a
                need for intermediaries.
              </p>
            </S.ComparisonWrapper>
          </S.ComparisonCard>
          <S.ComparisonCard>
            <Icons.Vs />
          </S.ComparisonCard>
          <S.ComparisonCard>
            <S.ComparisonContainer>
              <div>
                <span>
                  <img src="/img/network.png" alt="expense icon" />
                </span>
                <span>
                  <img src="/img/easy.png" alt="difficult icon" />
                </span>
                <span>
                  <img src="/img/explore.png" alt="manual icon" />
                </span>
              </div>
            </S.ComparisonContainer>
            <S.ComparisonWrapper>
              <span>IDOs on PolkaIDO</span>
              <p>
                Truly decentralised, fair, inclusive, transparent, affordable
                and easy to use.
              </p>
            </S.ComparisonWrapper>
          </S.ComparisonCard>
        </S.Comparison>
      </S.Container>

      <S.Overview>
        <S.OverviewContainer>
          <S.OverviewWrapper>
            <Card title="300+" description="Funded Projects" />
            <Card title="100k" description="Global Investors" />
            <Card title="+100" description="Live Tokens" />
            <Card title="$10mi" description="Raised Capital" />
          </S.OverviewWrapper>
        </S.OverviewContainer>
      </S.Overview>
    </S.Wrapper>
  );
};

const Card = ({ title, description }) => (
  <S.OverviewCard>
    <span>{title}</span>
    <p>{description}</p>
  </S.OverviewCard>
);
