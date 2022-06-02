import {
  Footer,
  Header,
  Hero,
  Newsletter,
  Orderbook,
  Partners,
  Polkaido,
  Staking,
  Wallets,
} from 'components/v2';
import Head from 'next/head';
import Script from 'next/script';
import * as S from 'styles/home';

export default function Home() {
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
        <Header />
        <main>
          <S.Container>
            <Hero />
            <Wallets />
            <Orderbook />
          </S.Container>
          <Partners />
          <Polkaido />
          <Staking />
          <Newsletter />
        </main>
        <Footer />
      </S.Wrapper>
    </>
  );
}
