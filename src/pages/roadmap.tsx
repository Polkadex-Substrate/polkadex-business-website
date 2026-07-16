import { BackToHome, Seo } from 'components';
import { Roadmap as RoadmapComponent } from 'components/';
import { Footer, HeaderFlat, Newsletter } from 'components/v2';
import Script from 'next/script';
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
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS}`}
      />
      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config','${process.env.GOOGLE_ANALYTICS}');
          `,
        }}
      />
      <S.Wrapper>
        <Seo
          title="Polkadex - Roadmap"
          description="Follow the Polkadex roadmap — milestones and upcoming releases for the decentralized orderbook exchange."
          path="/roadmap"
        />
        <HeaderFlat />
        <main ref={ref} style={{ overflow: 'hidden' }}>
          <BackToHome />
          <RoadmapComponent roadmap={roadmap} releases={releases} />
          <Newsletter />
        </main>
        <Footer />
      </S.Wrapper>
    </>
  );
}
