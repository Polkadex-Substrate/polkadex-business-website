import {
  BrandAssetsCards,
  BrandAssetsHero,
  Footer,
  Newsletter,
  Return,
} from 'components';
import React from 'react';
import * as S from 'styles/home';
import { HomeTranslations, IHomeTranslations } from 'translations';

export default function BrandAssets() {
  const { footer, newsletter }: IHomeTranslations = HomeTranslations['en-US'];

  return (
    <S.Wrapper>
      <Return />
      <main>
        <BrandAssetsHero />
        <BrandAssetsCards />
        <Newsletter {...newsletter} />
      </main>
      <Footer {...footer} />;
    </S.Wrapper>
  );
}
