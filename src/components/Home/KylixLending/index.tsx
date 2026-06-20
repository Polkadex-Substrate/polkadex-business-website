import * as S from './styles';

const features = [
  {
    title: 'Lend',
    description:
      'Supply your assets to Kylix lending pools and earn yield natively on the Polkadex L1 chain.',
  },
  {
    title: 'Borrow',
    description:
      'Open over-collateralized loans against your holdings without ever leaving Polkadex.',
  },
  {
    title: 'Earn',
    description:
      'Put idle capital to work with lending rewards and collateral-liquidation opportunities, fully on-chain.',
  },
];

export const KylixLending = () => {
  return (
    <S.Wrapper id="lending">
      <S.Hero>
        <S.Mark>
          <img src="/img/partners/kylix.png" alt="Kylix Finance" />
        </S.Mark>
        <span>Exclusive lending partner</span>
        <h2>Native lending on Polkadex L1</h2>
        <p>
          Kylix is the exclusive DeFi lending layer on the Polkadex L1 chain.
          Lend, borrow and earn on your assets natively — no bridging, no
          leaving Polkadex.
        </p>
        <a href="https://www.kylix.finance" target="_blank" rel="noreferrer">
          Explore Kylix
        </a>
      </S.Hero>
      <S.Cards>
        {features.map((feature) => (
          <S.Card key={feature.title}>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </S.Card>
        ))}
      </S.Cards>
    </S.Wrapper>
  );
};
