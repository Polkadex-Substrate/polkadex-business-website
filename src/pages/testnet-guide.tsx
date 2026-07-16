import { BackToHome, Seo, TestnetGuide } from 'components';
import { Footer, HeaderFlat, SocialFollow } from 'components/v2';
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
          title="Polkadex Orderbook Testnet is Live"
          description="A live, non-custodial, cross-chain orderbook on Polkadex you can trade on today. Claim free testnet tokens, place orders, and move assets cross-chain via Hyperbridge."
          path="/testnet-guide"
          image="https://polkadex.ee/testnetCardImage.jpg"
        />
        <HeaderFlat />
        <main>
          <BackToHome />
          <TestnetGuide />
          <SocialFollow />
        </main>
        <Footer />
      </S.Wrapper>
    </>
  );
}
