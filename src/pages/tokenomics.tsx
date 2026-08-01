import {
  BackToHome,
  ScrollReveal,
  Seo,
  TokenEconomics as TokenEconomicsComponent,
} from 'components';
import { Footer, HeaderFlat, SocialFollow } from 'components/v2';
import React, { useEffect, useRef } from 'react';
import * as S from 'styles/home';
import { HomeTranslations, IHomeTranslations } from 'translations';

// Renamed from /tokeneconomics (July 2026). The old path 301-redirects here
// via public/_redirects (Cloudflare Pages), so external links keep working.
export default function Tokenomics() {
  const { tokenEconomics }: IHomeTranslations = HomeTranslations['en-US'];
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const path = window.location.hash;
    if (path && path.includes('#')) {
      const id = path.replace('#', '');
      const el = window.document.getElementById(id);
      if (el) {
        const r = el.getBoundingClientRect();
        window.scrollTo({
          top: r.top,
          behavior: 'smooth',
        });
      }
    }
  });

  useEffect(() => {
    ref.current?.scrollTo(0, 0);
  }, []);

  return (
    <>
      <S.Wrapper>
        <Seo
          title="Polkadex - Tokenomics"
          description="PDEX tokenomics at a glance: fully unlocked supply, zero vesting overhang, live supply data, original distribution, staking rewards and utility."
          path="/tokenomics"
        />
        <HeaderFlat />
        <main ref={ref} style={{ overflow: 'hidden' }}>
          <BackToHome />
          <ScrollReveal>
            <TokenEconomicsComponent {...tokenEconomics} />
          </ScrollReveal>
          <ScrollReveal>
            <SocialFollow />
          </ScrollReveal>
        </main>
        <Footer />
      </S.Wrapper>
    </>
  );
}
