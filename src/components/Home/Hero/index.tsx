import * as Icons from 'components/Icons';
import { useScroll, useTransform } from 'framer-motion';
import Typewriter from 'typewriter-effect';

import * as S from './styles';

export const Hero = () => {
  const { scrollY } = useScroll();
  const heroParallax = useTransform(scrollY, [0, 380], [0, -300]);

  return (
    <S.Wrapper id="hero">
      <S.Main>
        <S.Content>
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
            <h2>
              Polkadex is a fully non-custodial peer-to-peer orderbook-based
              cryptocurrency exchange for the DeFi ecosystem built on Substrate.
            </h2>
            <S.Actions>
              <a
                href="https://orderbook.polkadex.trade/"
                target="_blank"
                rel="noreferrer"
              >
                Start trading
              </a>
              <a
                href="https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fmainnet.polkadex.trade#/explorer"
                target="_blank"
                rel="noreferrer"
              >
                Mainnet explorer <Icons.ArrowSingleRight />
              </a>
            </S.Actions>
            <S.Secured>
              <Icons.SecuredBy />
            </S.Secured>
          </S.Container>
          <S.HeroImage style={{ y: heroParallax }}>
            <S.HeroIllustration>
              <Icons.HomeHero />
            </S.HeroIllustration>
            <S.HeroImageAside>
              <span>Coming soon!</span>
              <Icons.BadgeAppStore />
              <Icons.BadgePlayStore />
            </S.HeroImageAside>
          </S.HeroImage>
        </S.Content>
      </S.Main>
    </S.Wrapper>
  );
};
