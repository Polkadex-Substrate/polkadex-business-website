import * as Icons from 'components/Icons';
import { useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';

import * as S from './styles';

export const Hero = () => {
  const { scrollY } = useScroll();
  const heroParallax = useTransform(scrollY, [0, 380], [0, -300]);

  return (
    <S.Wrapper id="hero">
      <S.Main>
        <S.Content>
          <S.Container>
            {/* Static headline — typewriter animation removed per community
                feedback (read as distracting / non-professional). */}
            <h1>
              <strong>Decentralized Trading,</strong> Without Compromise
            </h1>
            <h2>
              Polkadex is a fully non-custodial, orderbook-based exchange on a
              sovereign Layer 1 built with Substrate. CEX-grade speed,
              self-custody always.
            </h2>
            <S.Actions>
              {/* Single CTA during testnet phase — routes to the guide first
                  so users complete onboarding (wallet, faucet, cross-chain)
                  before reaching the app. */}
              <Link href="/testnet-guide">Try the Testnet</Link>
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
