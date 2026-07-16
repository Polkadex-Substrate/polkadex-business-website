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
              {/* Primary CTA aligned with the header (Get PDEX). We use
                  "Get" rather than "Buy" as a lighter-touch, utility-first
                  framing that reduces exposure under crypto-marketing regs
                  (SEC/MiCA/UK FCA financial-promotions rules). */}
              <a
                href="https://buypdex.com"
                target="_blank"
                rel="noreferrer noopener"
              >
                Get PDEX
              </a>
              <a
                href="https://explorer.polkadex.ee"
                target="_blank"
                rel="noreferrer noopener"
              >
                Mainnet explorer <Icons.ArrowSingleRight />
              </a>
            </S.Actions>
            <S.Secured>
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
