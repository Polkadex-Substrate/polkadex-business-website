import * as Icons from 'components/Icons';

import * as S from './styles';

export const Rewards = () => {
  return (
    <S.Wrapper id="rewards">
      <S.Title>
        <h2>Ready to get started?</h2>
        <p>Join our community to help secure the network and earn rewards.</p>
        <div>
          <Icons.ArrowRight />
        </div>
      </S.Title>
      <Card
        title="Nominate"
        description="42.31% average APY"
        benefits={[
          'The easiest way to get daily PDEX rewards',
          'Choose a set of validators you trust',
          'Get daily rewards paid out by your validator',
        ]}
      />
      <Card
        title="Validate"
        description="44.62% average APY"
        benefits={[
          'Maximize your rewards',
          'Run a validator node',
          'Get nominations',
          'Charge a commission from your nominators',
        ]}
      />
    </S.Wrapper>
  );
};
const Card = ({ title = 'Validate', description = '', benefits = [] }) => {
  const IconComponent = Icons[title];

  return (
    <S.Card>
      <S.CardTitle>
        <S.IconWrapper>
          <IconComponent />
        </S.IconWrapper>
        <h3>{title}</h3>
        <p>{description}</p>
      </S.CardTitle>
      <S.CardContent>
        <span>Benefits</span>
        <div>
          {benefits.map((value, index) => (
            <Box key={index}>{value}</Box>
          ))}
        </div>
      </S.CardContent>
    </S.Card>
  );
};

const Box = ({ children }) => (
  <S.Box>
    <S.BoxWrapper>
      <Icons.Checked />
    </S.BoxWrapper>
    <p>{children}</p>
  </S.Box>
);
