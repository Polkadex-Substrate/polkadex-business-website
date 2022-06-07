import { Footer, Header } from 'components/v2';
import Head from 'next/head';
import Script from 'next/script';
import * as S from 'styles/polkaido';

export default function Polkaido() {
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
      <S.Wrapper style={{ backgroundColor: 'white' }}>
        <Head>
          <title>Polkadex - The trading engine for Web3 and DeFi</title>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Caveat&display=swap"
            rel="stylesheet"
          />
        </Head>
        <Header
          logo="Polkaido"
          links={[
            {
              title: 'Overview',
              href: '/v2/polkaido/#overview',
            },
            {
              title: 'For teams',
              href: '/v2/polkaido/#forteams',
            },
            {
              title: 'For investors',
              href: '/v2/polkaido/#forinvestors',
            },
            {
              title: 'Upcoming projects',
              href: '/v2/polkaido/#upcomingprojects',
            },
          ]}
          cta={{
            title: 'Open App',
            href: 'https://beta.tokenmanager.polkadex.trade/ido',
          }}
        />
        <main />
        <Footer />
      </S.Wrapper>
    </>
  );
}
