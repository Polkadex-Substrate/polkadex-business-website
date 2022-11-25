import * as Icons from 'components/Icons';
import Typewriter from 'typewriter-effect';

import * as S from './styles';

export const Hero = () => {
  return (
    <S.Wrapper id="hero">
      <S.Main>
        <S.Container>
          <h1>
            <strong>
              <Typewriter
                options={{
                  strings: ['Better', 'Easier', 'Cheaper', 'More Advanced'],
                  autoStart: true,
                  loop: true,
                  cursor: '|',
                }}
              />
            </strong>
            Decentralized Trading
          </h1>
          <p>
            Polkadex is a fully non-custodial peer-to-peer orderbook-based
            cryptocurrency exchange for the DeFi ecosystem built on Substrate.
          </p>
          <S.Actions>
            <a href="/">Start trading</a>
            <a href="/">
              Mainnet explorer <Icons.ArrowSingleRight />
            </a>
          </S.Actions>
        </S.Container>
        <S.HeroImage>
          <Icons.HomeHero />
          <S.HeroImageAside>
            <span>Coming soon!</span>
            <Icons.BadgeAppStore />
            <Icons.BadgePlayStore />
          </S.HeroImageAside>
        </S.HeroImage>
      </S.Main>
    </S.Wrapper>
  );
};
