import { Footer, Header, Newsletter } from 'components/v2';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Script from 'next/script';
import React, { useEffect, useRef } from 'react';
import * as S from 'styles/home';
import { HomeTranslations, IHomeTranslations } from 'translations';

const RoadmapComponent = dynamic(
  () => import('components/Roadmap').then((mod) => mod.default),
  {
    ssr: false,
  },
);

export default function Roadmap() {
  const { roadmap, releases }: IHomeTranslations = HomeTranslations['en-US'];
  const ref = useRef<HTMLDivElement>(null);

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
          <title>Polkadex - Roadmap</title>
          <meta
            name="description"
            content="Trade crypto with the Polkadex Orderbook decentralized exchange. The CEXiest DEX in DeFi."
          />
          <meta property="og:title" content="Polkadex Roadmap" />
        </Head>
        <Header
          links={['Products', 'Resources', 'About', 'Community']}
          cta={{
            title: 'Start Trading',
            href: 'https://orderbook.polkadex.trade/',
          }}
        />
        <main ref={ref} style={{ overflow: 'hidden' }}>
          <RoadmapComponent roadmap={roadmap} releases={releases} />
          <Newsletter />
        </main>
        <Footer />
      </S.Wrapper>
    </>
  );
}
