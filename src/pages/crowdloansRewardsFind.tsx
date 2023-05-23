import CrowdloansRewardsPage from 'components/CrowdloansRewardsPage';
import { Footer, Header, Newsletter } from 'components/v2';
import Head from 'next/head';
import Script from 'next/script';
import React, { useEffect, useRef } from 'react';
import * as S from 'styles/home';
import { IOrderbookTranslations, OrderbookTranslations } from 'translations';

export default function CrowdloansRewardsFind() {
  const ref = useRef<HTMLDivElement>(null);
  const { navHeader }: IOrderbookTranslations = OrderbookTranslations['en-US'];
  useEffect(() => {
    const path = window.location.hash;
    if (path && path.includes('#')) {
      const id = path.replace('#', '');
      const el = window.document.getElementById(id);
      const r = el.getBoundingClientRect();
      window.scrollTo({
        top: r.top,
        behavior: 'smooth',
      });
    }
  });

  useEffect(() => {
    ref.current.scrollTo(0, 0);
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
        <Head>
          <title>Polkadex - Crowdloan Contributions</title>
          <meta
            name="description"
            content="Find out if your wallet has rewards waiting for you"
          />
          <meta
            property="og:title"
            content="Polkadex Crowdloan Contributions"
          />
        </Head>
        <Header links={navHeader.links} cta={navHeader.cta} />
        <main ref={ref} style={{ overflow: 'hidden' }}>
          <CrowdloansRewardsPage />
          <Newsletter />
        </main>
        <Footer />
      </S.Wrapper>
    </>
  );
}
