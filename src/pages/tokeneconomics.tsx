import {
  AlertDiscord,
  TokenEconomics as TokenEconomicsComponent,
} from 'components';
import { Footer, Header, Newsletter } from 'components/v2';
import Head from 'next/head';
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
          <title>Polkadex - Token Economics</title>
          <meta
            name="description"
            content="Trade crypto with the Polkadex Orderbook decentralized exchange. The CEXiest DEX in DeFi."
          />
          <meta property="og:title" content="Polkadex Token Economics" />
        </Head>
        <AlertDiscord />
        <Header
          links={['Products', 'Resources', 'About', 'Community']}
          cta={{
            title: 'Start Trading',
            href: 'https://orderbook.polkadex.trade/',
          }}
        />
        <main ref={ref} style={{ overflow: 'hidden' }}>
          <TokenEconomicsComponent {...tokenEconomics} />
          <Newsletter />
        </main>
        <Footer />
      </S.Wrapper>
    </>
  );
}
