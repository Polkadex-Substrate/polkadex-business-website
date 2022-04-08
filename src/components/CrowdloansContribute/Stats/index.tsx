import * as S from './styles';

export const Stats = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <Card title="LP15-LP8" description="Auction Starts" />
        <Card title="1M DOT" description="Auction Cap" />
        <Card title="96 weeks" description="Lease Duration" />
        <Card title="2M PDEX" description="Rewards" />
      </S.Container>
    </S.Wrapper>
  );
};

const Card = ({ title = '', description = '' }) => (
  <S.Card>
    <span>{title}</span>
    <p>{description}</p>
  </S.Card>
);
