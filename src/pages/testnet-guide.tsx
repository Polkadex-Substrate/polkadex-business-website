import { Seo, TestnetGuide } from 'components';
import { Footer, Header, Newsletter } from 'components/v2';
import Script from 'next/script';
import React from 'react';
import * as S from 'styles/home';

export default function TestnetGuidePage() {
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
          title="Polkadex - Testnet Cross-Chain Transfer Guide"
          description="How to get testnet tokens and transfer them between Polkadex and Sepolia (Ethereum testnet) ahead of the Orderbook testnet launch."
          path="/testnet-guide"
        />
        <Header
          links={['Products', 'Resources', 'About', 'Community']}
          cta={{
            title: 'Try the Testnet',
            href: process.env.ORDERBOOK_LINK,
          }}
        />
        <main>
          <TestnetGuide />
          <Newsletter />
        </main>
        <Footer />
      </S.Wrapper>
    </>
  );
}
