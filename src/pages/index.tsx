import {
  ContractAnnouncement,
  Features,
  FeetDifference,
  Footer,
  Header,
  Hero,
  Investors,
  Media,
  Newsletter,
  OrderbookProduct,
  OthersProducts,
  Partners,
  PolkadexBlock,
  Promo,
  Roadmap,
  Team,
  TokenEconomics,
  TradeAnywhere,
  TradingStrategy,
} from 'components';
import {CrossChain} from 'components/CrossChain';
import OldFooter from 'components/OldFooter';
import {OldHeader} from 'components/OldHeader';
import {Question} from 'components/Question';
import {SpeedLimit} from 'components/SpeedLimits';
import {StatisticBlock} from 'components/StatisticBlock';
import {Announcement} from 'components/v1/Announcement';
import {YourKeys} from 'components/YourKeys';
import Head from 'next/head';
import Script from 'next/script';
import React, {useEffect, useLayoutEffect, useRef, useState} from 'react';
import ReactDom from 'react-dom';
import {useInView} from 'react-intersection-observer';
import * as S from 'styles/home';
import {HomeTranslations, IHomeTranslations} from 'translations';

export default function Home() {
  const {
    header,
    announcement,
    hero,
    orderbook,
    partners,
    features,
    investors,
    team,
    roadmap,
    statistic,
    question,
    newsletter,
    oldFooter,
    promo,
    keys,
    speedlimits,
    tradeAnywhere,
    tradeStrategy,
    feetDifference,
    polkadex,
    crossChain,
    oldHeader,
  }: IHomeTranslations = HomeTranslations['en-US'];

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
          <title>Polkadex - The trading engine for Web3 and DeFi</title>
        </Head>
        <main ref={ref} style={{overflow: 'hidden'}}>
          <Promo {...promo} />

          <StatisticBlock {...statistic} />
          <YourKeys {...keys} />
          <SpeedLimit {...speedlimits} />
          <CrossChain {...crossChain} />
          <Question {...question} />
          <TradingStrategy {...tradeStrategy} />
          <FeetDifference {...feetDifference} />
          <TradeAnywhere {...tradeAnywhere} />
          <OrderbookProduct {...orderbook} />
          <PolkadexBlock {...polkadex} />
          <Newsletter {...newsletter} />
        </main>
        <OldFooter {...oldFooter} />
      </S.Wrapper>
    </>
  );
}
