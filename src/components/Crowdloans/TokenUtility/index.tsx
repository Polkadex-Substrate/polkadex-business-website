import * as S from './styles';

export const TokenUtility = () => {
  return (
    <S.Wrapper id="tokenUtility">
      <S.Title>
        <div>
          <h2>Token Utility</h2>
        </div>
        <div />
      </S.Title>
      <S.Container>
        <Card
          name="payFees"
          alt="coins bag"
          description="Pay transaction and trading fees to get discounts on them"
        />
        <Card
          name="payFees"
          alt="participate"
          description="Participate in Polkadex IDOs"
        />
        <Card
          name="governance"
          alt="documents"
          description="Participate in on-chain governance of the network"
        />
        <Card
          name="validator"
          alt="abstract validator"
          description="Become a validator of the network by staking"
        />
        <Card
          name="nominator"
          alt="abstract nominator"
          description="Nominate validators and collators of the network"
        />
        <Card
          name="stake"
          alt="isometric coins"
          description="Stake PDEX to participate in Thea protocol and earn rewards for enabling deposits and withdrawals to and from Polkadex Orderbook"
        />
      </S.Container>
    </S.Wrapper>
  );
};

const Card = ({ name, alt, description }) => (
  <S.Card>
    <img src={`/img/icons/${name}.svg`} alt={alt} />
    <p>{description}</p>
  </S.Card>
);
