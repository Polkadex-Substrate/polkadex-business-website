import {
  Footer,
  MigrationConvert,
  MigrationHero,
  Newsletter,
  Return,
} from 'components';
import Head from 'next/head';
import React from 'react';
import * as S from 'styles/home';
import { HomeTranslations, IHomeTranslations } from 'translations';

export default function Migrate() {
  const { footer, newsletter }: IHomeTranslations = HomeTranslations['en-US'];

  return (
    <S.Wrapper>
      <Head>
        <title>Polkadex - Token Migration</title>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS}`}
        />
        <script
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config','${process.env.GOOGLE_ANALYTICS}');
          `,
          }}
        />
      </Head>
      <Return />
      <main>
        <MigrationHero />
        <MigrationConvert />
        <Newsletter {...newsletter} />
      </main>
      <Footer {...footer} />;
    </S.Wrapper>
  );
}
