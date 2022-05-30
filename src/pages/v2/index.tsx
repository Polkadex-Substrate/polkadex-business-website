import { Footer } from 'components/v2/Footer';
import { Header } from 'components/v2/Header';
import { Hero } from 'components/v2/Hero';
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
          {/* <OrderbookProduct {...orderbook} />
          <Partners {...partners} />
          <OthersProducts otherProducts={otherProducts} />
          <Features {...features} />
          <Investors {...investors} />
          <Team {...team} />
          <Roadmap {...roadmap} />
          <TokenEconomics {...tokenEconomics} />
          <Media {...media} />
          <Newsletter {...newsletter} /> */}
        </main>
        <Footer />
      </S.Wrapper>
    </>
  );
}
