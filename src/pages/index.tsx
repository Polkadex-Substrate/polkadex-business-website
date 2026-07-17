import {
  About,
  BetaProgram,
  Ecosystem,
  Exchanges,
  Hero,
  Orderbook,
  OrderbookVsAmm,
  Partners,
  Polkaido,
  RoadmapTeaser,
  SeenOn,
  Staking,
  Tokenomics,
  HowToBuy,
  Hyperbridge,
  KylixLending,
  TestnetBanner,
  TestnetTicker,
  Wallets,
} from 'components/Home';
import { ScrollReveal, Seo } from 'components';
import { Footer, HeaderFlat, SocialFollow } from 'components/v2';
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
          {/* Thin status strip — visible pulse that the project is alive.
              Swap items for live counters once the app exposes an API. */}
          <TestnetTicker />
          {/* <TestnetBanner /> — removed: header carries the single
              "Try the Testnet" CTA (community feedback). */}
          {/* <Hero /> — removed: About below is the lead section, opening
              with the h1 and the Orderbook product screenshot. */}
          {/* <Wallets /> — removed: duplicated the "Compatible wallets"
              grid inside the Staking section. Pink-band styling preserved
              in Wallets/styles.ts for reuse elsewhere. */}
          {/* <Exchanges /> — replaced by richer <HowToBuy /> further down. */}
          {/* Every below-fold section is wrapped in <ScrollReveal /> so it
              fades + slides in as it enters view — matches the polish of
              the Hero parallax the whole way down. Reduced-motion is
              respected inside the component. */}
          {/* Section order matches the HeaderFlat anchor nav so anchor
              clicks flow: About → Tokenomics → Orderbook → Roadmap → Staking.
              Tokenomics comes before Orderbook (community feedback): About
              carries a product screenshot so the "it's real" proof lands
              immediately, freeing Tokenomics — the 100%-unlocked story — to
              sit higher. */}
          <ScrollReveal>
            <About />
          </ScrollReveal>
          <ScrollReveal>
            <Tokenomics />
          </ScrollReveal>
          <ScrollReveal>
            <Orderbook />
          </ScrollReveal>
          {/* Educational comparison right below the Orderbook — converts
              AMM-native users by showing what they've been missing. */}
          <ScrollReveal>
            <OrderbookVsAmm />
          </ScrollReveal>
          <ScrollReveal>
            <RoadmapTeaser />
          </ScrollReveal>
          {/* apy prop omitted intentionally — Staking pulls it live from
              useStakingStats() with a fallback to the current on-chain
              snapshot. Pass e.g. apy="14.2%" to force a specific value. */}
          <ScrollReveal>
            <Staking />
          </ScrollReveal>
          <ScrollReveal>
            <HowToBuy />
          </ScrollReveal>
          <ScrollReveal>
            <Partners />
          </ScrollReveal>
          {/* <BetaProgram /> — temporarily hidden (Join Polkadex open beta program) */}
          <ScrollReveal>
            <Hyperbridge />
          </ScrollReveal>
          {/* <KylixLending /> — temporarily hidden */}
          <ScrollReveal>
            <Ecosystem />
          </ScrollReveal>
          {/* <Polkaido /> — temporarily hidden (PolkaIDO platform) */}
          <ScrollReveal>
            <SeenOn />
          </ScrollReveal>
          <ScrollReveal>
            <SocialFollow />
          </ScrollReveal>
        </main>
        <Footer />
      </S.Wrapper>
    </>
  );
}
