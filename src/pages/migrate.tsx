import {
  Footer,
  MigrationConvert,
  MigrationHero,
  Newsletter,
  Return,
} from 'components';
import React from 'react';
import * as S from 'styles/home';
import { HomeTranslations, IHomeTranslations } from 'translations';

export default function Migrate() {
  const { footer, newsletter }: IHomeTranslations = HomeTranslations['en-US'];

  return (
    <S.Wrapper>
      <Return />
      <main>
        <MigrationHero />
        <MigrationConvert />
        <Newsletter {...newsletter} />;
      </main>
      <Footer {...footer} />;
    </S.Wrapper>
  );
}
