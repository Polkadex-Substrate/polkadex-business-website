import {
  BackToHome,
  Seo,
  TokenEconomics as TokenEconomicsComponent,
} from 'components';
import { Footer, HeaderFlat, Newsletter } from 'components/v2';
import Script from 'next/script';
import React, { useEffect, useRef } from 'react';
import * as S from 'styles/home';
import { HomeTranslations, IHomeTranslations } from 'translations';

export default function Tokeneconomics() {
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
          title="Polkadex - Token Economics"
          description="Understand PDEX token economics — supply, distribution, staking rewards and utility across the Polkadex ecosystem."
          path="/tokeneconomics"
        />
        <HeaderFlat />
        <main ref={ref} style={{ overflow: 'hidden' }}>
          <BackToHome />
          <TokenEconomicsComponent {...tokenEconomics} />
          <Newsletter />
        </main>
        <Footer />
      </S.Wrapper>
    </>
  );
}
