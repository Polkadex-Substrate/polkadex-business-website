import {
  FeetDifference,
  NewOrderbookProduct,
  PolkadexBlock,
  Promo,
  TradeAnywhere,
  TradingStrategy,
} from 'components';
import { CrossChain } from 'components/CrossChain';
import { Question } from 'components/Question';
import { SpeedLimit } from 'components/SpeedLimits';
import { StatisticBlock } from 'components/StatisticBlock';
import { Footer, Header, Newsletter } from 'components/v2';
import { YourKeys } from 'components/YourKeys';
import Head from 'next/head';
import Script from 'next/script';
import React, { useEffect, useRef } from 'react';
import * as S from 'styles/home';
import { IOrderbookTranslations, OrderbookTranslations } from 'translations';

export default function Orderbook() {
  const {
    orderbook,
    statistic,
    question,
    promo,
    keys,
    speedlimits,
    tradeAnywhere,
    tradeStrategy,
    feetDifference,
    polkadex,
    crossChain,
  }: IOrderbookTranslations = OrderbookTranslations['en-US'];
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const path = window.location.hash;
    if (path && path.includes('#')) {
      const id = path.replace('#', '');
      const el = window.document.getElementById(id);
      const r = el.getBoundingClientRect();
      window.scrollTo({
        top: r.top,
        behavior: 'smooth',
      });
    }
  });

  useEffect(() => {
    ref.current.scrollTo(0, 0);
  }, []);

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
          <title>Polkadex Orderbook Crypto Currency Exchange</title>
          <meta
            name="description"
            content="Trade crypto with the Polkadex Orderbook decentralized exchange. The CEXiest DEX in DeFi."
          />
          <meta
            property="og:title"
            content=" Polkadex Orderbook Crypto Currency Exchange
"
          />
        </Head>
        <Header
          links={['Products', 'Resources', 'About', 'Community']}
          cta={{
            title: 'Start Trading',
            href: 'https://orderbook-beta.polkadex.trade/',
          }}
        />
        <main ref={ref} style={{ overflow: 'hidden' }}>
          <Promo {...promo} />
          <StatisticBlock {...statistic} />
          <YourKeys {...keys} />
          <SpeedLimit {...speedlimits} />
          <CrossChain {...crossChain} />
          <Question {...question} />
          <TradingStrategy {...tradeStrategy} />
          <FeetDifference {...feetDifference} />
          <TradeAnywhere {...tradeAnywhere} />
          <NewOrderbookProduct {...orderbook} />
          <PolkadexBlock {...polkadex} />
          <Newsletter />
        </main>
        <Footer />
      </S.Wrapper>
    </>
  );
}
