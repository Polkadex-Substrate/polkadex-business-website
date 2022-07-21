import {
  Footer,
  Header,
  Hero,
  Media,
  Newsletter,
  Orderbook,
  Partners,
  Polkaido,
  SecurityPartners,
  Staking,
  StrategicInvestors,
  Thea,
  Wallets,
} from 'components/v2';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Script from 'next/script';
import { useEffect } from 'react';
import * as S from 'styles/home';

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.push('/');
  });

  return <div />;
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
          links={[
            {
              title: 'Overview',
              href: '/v2/#overview',
            },
            {
              title: 'Orderbook',
              href: '/v2/#orderbook',
            },
            {
              title: 'PolkaIDO',
              href: '/v2/#polkaido',
            },
            {
              title: 'THEA',
              href: '/v2/#thea',
            },
            {
              title: 'Polkapool',
              href: '/v2/#polkapool',
            },
            {
              title: 'Staking',
              href: '/v2/#staking',
            },
          ]}
          cta={{
            title: 'Start Trading',
            href: 'https://orderbook-beta.polkadex.trade/',
          }}
        />
        <main>
          <S.Container>
            <Hero />
            <Wallets />
            <Orderbook />
          </S.Container>
          <Partners />
          <Polkaido />
          <Media />
          <Thea />
          <SecurityPartners />
          <Staking />
          <Newsletter />
          <StrategicInvestors />
        </main>
        <Footer />
      </S.Wrapper>
    </>
  );
}
