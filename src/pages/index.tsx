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
  Tokenomics,
  HowToBuy,
  Hyperbridge,
  KylixLending,
  TestnetBanner,
  Wallets,
} from 'components/Home';
import { Seo } from 'components';
import { Footer, HeaderFlat, Newsletter } from 'components/v2';
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
        <HeaderFlat />
        <main>
          <TestnetBanner />
          <S.Container>
            <Hero />
            <Wallets />
            {/* <Exchanges /> — replaced by richer <HowToBuy /> further down,
                which pairs with <Tokenomics /> as the investor-facing story. */}
          </S.Container>
          <Orderbook />
          <Tokenomics />
          <HowToBuy />
          {/* apy prop omitted intentionally — Staking pulls it live from
              useStakingStats() with a fallback to the current on-chain
              snapshot. Pass e.g. apy="14.2%" to force a specific value. */}
          <Staking />
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
