import {
  Footer,
  Header,
  Hero,
  Newsletter,
  Orderbook,
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
      <S.Wrapper>
        <Head>
          <title>Polkadex - The trading engine for Web3 and DeFi</title>
        </Head>
        <Header />
        <main>
          <Hero />
          <Wallets />
          <Orderbook />
          <Newsletter />
        </main>
        <Footer />
      </S.Wrapper>
    </>
  );
}
