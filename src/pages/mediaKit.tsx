import { BackToHome, BrandAssetsCards, BrandAssetsHero, Seo } from 'components';
import { Footer, HeaderFlat, Newsletter } from 'components/v2';
import Script from 'next/script';
import React from 'react';
import * as S from 'styles/home';

export default function MediaKit() {
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
          title="Polkadex - Media Kit"
          description="Download Polkadex logos, icons, product screenshots and brand guidelines for use in web and print media."
          path="/mediaKit"
        />
        <HeaderFlat />
        <main>
          <BackToHome />
          <BrandAssetsHero />
          <BrandAssetsCards />
          <Newsletter />
        </main>
        <Footer />
      </S.Wrapper>
    </>
  );
}
