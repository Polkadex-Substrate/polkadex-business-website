/* eslint-disable react/no-danger */
import { Footer } from 'components';
import { Header, PreviewHero } from 'components/Careers';
import Newsletter from 'components/Newsletter';
import Head from 'next/head';
import Script from 'next/script';
import { GoogleAnalytics } from 'nextjs-google-analytics';
import { HomeTranslations, IHomeTranslations } from 'translations';

import * as S from './styles';

export const Preview = ({ data, error }) => {
  const { footer, newsletter }: IHomeTranslations = HomeTranslations['en-US'];
  return (
    <>
      <GoogleAnalytics />
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
          <title>Polkadex Careers - {data?.title}</title>
        </Head>
        <Header />
        <main>
          <PreviewHero data={data} error={error} />
          <Newsletter {...newsletter} />
        </main>
        <Footer {...footer} />
      </S.Wrapper>
    </>
  );
};
