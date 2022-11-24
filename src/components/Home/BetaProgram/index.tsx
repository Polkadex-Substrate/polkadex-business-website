import * as Icons from 'components/Icons';

import * as S from './styles';

export const BetaProgram = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <h2>Join Polkadex open beta program</h2>
        <p>
          Test Polkadex solutions on Kaizen (the public Polkadex testnet), share
          your feedback to help us build better products, and earn generous
          rewards !
        </p>
        <a href="/">Learn more</a>
      </S.Container>
      <S.Hero>
        <Icons.BetaProgramHero />
      </S.Hero>
    </S.Wrapper>
  );
};
