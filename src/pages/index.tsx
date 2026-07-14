import {
  BetaProgram,
  Ecosystem,
  Exchanges,
  Hero,
  Orderbook,
  Partners,
  Polkaido,
  SeenOn,
  Staking,
  Hyperbridge,
  KylixLending,
  TestnetBanner,
  Wallets,
} from 'components/Home';
import { Seo } from 'components';
import { Footer, Header, Newsletter } from 'components/v2';
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
        <Seo path="/" />
        <Header
          links={['Products', 'Resources', 'About', 'Community']}
          cta={{
            title: 'Try the Testnet',
            href: process.env.ORDERBOOK_LINK,
          }}
        />
        <main>
          <TestnetBanner />
          <S.Container>
            <Hero />
            <Wallets />
            <Exchanges />
          </S.Container>
          <Orderbook />
          <Staking apy="26.40%" />
          <Partners />
          {/* <BetaProgram /> — temporarily hidden (Join Polkadex open beta program) */}
          <Hyperbridge />
          {/* <KylixLending /> — temporarily hidden */}
          <Ecosystem />
          {/* <Polkaido /> — temporarily hidden (PolkaIDO platform) */}
          <SeenOn />
          <Newsletter />
        </main>
        <Footer />
      </S.Wrapper>
    </>
  );
}
