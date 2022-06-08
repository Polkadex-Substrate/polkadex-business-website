import * as Icons from 'components/Icons';

import * as S from './styles';

export const PolkaidoOverview = () => {
  return (
    <S.Wrapper id="about">
      <S.Title>
        <h2>PolkaIDO</h2>
        <p>IDOs are currently broken. PolkaIDO is the answer.</p>
      </S.Title>
      <S.Comparison>
        <S.ComparisonCard>
          <S.ComparisonContainer>
            <div>
              <Icons.Airplane />
            </div>
            <div>
              <Icons.Airplane />
            </div>
            <div>
              <Icons.Airplane />
            </div>
          </S.ComparisonContainer>
          <span>IDOs Now</span>
          <p>
            Exclusive, expensive, and over-reliant on manual processes and a
            need for intermediaries
          </p>
        </S.ComparisonCard>
        <S.ComparisonCard>
          <S.ComparisonContainer>
            <div>
              <Icons.Airplane />
            </div>
            <div>
              <Icons.Airplane />
            </div>
            <div>
              <Icons.Airplane />
            </div>
          </S.ComparisonContainer>
          <span>IDOs Now</span>
          <p>
            Exclusive, expensive, and over-reliant on manual processes and a
            need for intermediaries
          </p>
        </S.ComparisonCard>
      </S.Comparison>
      <S.Overview>
        <Card title="300+" description="Funded Projects" />
        <Card title="100k" description="Global Investors" />
        <Card title="+100" description="Live Tokens" />
        <Card title="$10mi" description="Raised Capital" />
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
