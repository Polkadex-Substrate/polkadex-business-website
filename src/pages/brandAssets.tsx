import { AlertDiscord, BrandAssetsCards, BrandAssetsHero } from 'components';
import { Footer, Header, Newsletter } from 'components/v2';
import Head from 'next/head';
import Script from 'next/script';
import React from 'react';
import * as S from 'styles/home';

export default function BrandAssets() {
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
          <title>Polkadex - Brand Assets</title>
        </Head>
        <AlertDiscord />
        <Header
          links={['Products', 'Resources', 'About', 'Community']}
          cta={{
            title: 'Start Trading',
            href: 'https://orderbook.polkadex.trade/',
          }}
        />
        <main>
          <BrandAssetsHero />
          <BrandAssetsCards />
          <Newsletter />
        </main>
        <Footer />;
      </S.Wrapper>
    </>
  );
}
