import {
  BackToHome,
  FeetDifference,
  InitialBanner,
  NewOrderbookProduct,
  Promo,
  Seo,
  TradeAnywhere,
  TradingStrategy,
} from 'components';
import { CrossChain } from 'components/CrossChain';
import { Question } from 'components/Question';
import { SpeedLimit } from 'components/SpeedLimits';
import { StatisticBlock } from 'components/StatisticBlock';
import { Footer, HeaderFlat, SocialFollow } from 'components/v2';
import { YourKeys } from 'components/YourKeys';
import dynamic from 'next/dynamic';
import React, { useEffect, useRef } from 'react';
import * as S from 'styles/home';
import { IOrderbookTranslations, OrderbookTranslations } from 'translations';

const PolkadexBlock = dynamic(
  () => import('components/PolkadexBlock').then((mod) => mod.PolkadexBlock),
  {
    ssr: false,
  },
);

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
      if (el) {
        const r = el.getBoundingClientRect();
        window.scrollTo({
          top: r.top,
          behavior: 'smooth',
        });
      }
    }
  });

  useEffect(() => {
    ref.current?.scrollTo(0, 0);
  }, []);

  return (
    <>
      <S.Wrapper>
        <Seo
          title="Polkadex Orderbook Crypto Currency Exchange"
          description="Trade crypto with the Polkadex Orderbook decentralized exchange. The CEXiest DEX in DeFi."
          path="/orderbook"
        />
        <HeaderFlat />
        <main ref={ref} style={{ overflow: 'hidden' }}>
          <BackToHome />
          <InitialBanner />
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
          <SocialFollow />
        </main>
        <Footer />
      </S.Wrapper>
    </>
  );
}
