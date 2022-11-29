import * as Icons from 'components/Icons';
import { useAnimation } from 'hooks';

import * as S from './styles';

export const BetaProgram = () => {
  const animationProps = useAnimation({ duration: 0.5 });

  return (
    <S.Wrapper {...animationProps}>
      <S.Content>
        <S.Container>
          <h2>Join Polkadex open beta program</h2>
          <p>
            Test Polkadex solutions on Kaizen (the public Polkadex testnet),
            share your feedback to help us build better products, and earn
            generous rewards !
          </p>
          <a
            href="https://github.com/Polkadex-Substrate/Polkadex-Open-Beta"
            target="_blank"
            rel="noreferrer"
          >
            Learn more
          </a>
        </S.Container>
        <S.Hero>
          <Icons.BetaProgramHero />
        </S.Hero>
      </S.Content>
    </S.Wrapper>
  );
};
