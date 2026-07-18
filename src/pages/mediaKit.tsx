import { BackToHome, BrandAssetsCards, BrandAssetsHero, Seo } from 'components';
import { Footer, HeaderFlat, SocialFollow } from 'components/v2';
import React from 'react';
import * as S from 'styles/home';

export default function MediaKit() {
  return (
    <>
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
          <SocialFollow />
        </main>
        <Footer />
      </S.Wrapper>
    </>
  );
}
