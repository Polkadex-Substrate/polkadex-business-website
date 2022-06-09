/* eslint-disable react/no-danger */
import { PreviewHero } from 'components/Careers';
import { Footer, Header, Newsletter } from 'components/v2';
import Head from 'next/head';
import Script from 'next/script';
import { GoogleAnalytics } from 'nextjs-google-analytics';

import * as S from './styles';

export const Preview = ({ data, error }) => {
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
        <Header
          logo="Careers"
          links={[
            {
              title: 'Overview',
              href: '/v2/careers/#overview',
            },
            {
              title: 'Vision',
              href: '/v2/careers/#vision',
            },
          ]}
          cta={{
            title: 'Open Jobs',
            href: 'https://beta.tokenmanager.polkadex.trade/ido',
          }}
        />
        <main>
          <PreviewHero data={data} error={error} />
          <Newsletter />
        </main>
        <Footer isDark />
      </S.Wrapper>
    </>
  );
};
