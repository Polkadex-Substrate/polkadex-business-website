import {
  Footer,
  MigrationConvert,
  MigrationHero,
  Newsletter,
  Return,
} from 'components';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import * as S from 'styles/home';
import { HomeTranslations, IHomeTranslations } from 'translations';

export default function Migrate() {
  const { footer, newsletter }: IHomeTranslations = HomeTranslations['en-US'];
  const router = useRouter();
  const { id } = router.query;

  const availableRoutes = 'mainnet' || 'testnet';
  if (id !== availableRoutes) router.push('/migrate');

  return (
    <S.Wrapper>
      <Return />
      <main>
        <MigrationHero isMainnet={id === 'mainnet'} />
        <MigrationConvert isMainnet={id === 'mainnet'} />
        <Newsletter {...newsletter} />
      </main>
      <Footer {...footer} />;
    </S.Wrapper>
  );
}
