import { BackToHome, ScrollReveal, Seo } from 'components';
import { Roadmap as RoadmapComponent } from 'components/';
import { Footer, HeaderFlat, SocialFollow } from 'components/v2';
import React, { useEffect, useRef } from 'react';
import * as S from 'styles/home';
import { HomeTranslations, IHomeTranslations } from 'translations';

export default function Roadmap() {
  const { roadmap, releases }: IHomeTranslations = HomeTranslations['en-US'];
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
          title="Polkadex - Roadmap"
          description="Follow the Polkadex roadmap — milestones and upcoming releases for the decentralized orderbook exchange."
          path="/roadmap"
        />
        <HeaderFlat />
        <main ref={ref} style={{ overflow: 'hidden' }}>
          <BackToHome />
          <ScrollReveal>
            <RoadmapComponent roadmap={roadmap} releases={releases} />
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
