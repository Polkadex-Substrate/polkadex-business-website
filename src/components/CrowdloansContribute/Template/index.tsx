/* eslint-disable react/no-danger */
import {
  About,
  Cta,
  Hero,
  Participate,
  Rewards,
} from 'components/CrowdloansContribute';
import { Stats, StatsCard } from 'components/Stats';
import { Footer, Header } from 'components/v2';
import Head from 'next/head';
import Script from 'next/script';
import { GoogleAnalytics } from 'nextjs-google-analytics';

import * as S from './styles';

export const Template = () => {
  return (
    <>
      <GoogleAnalytics />
      <Script
        dangerouslySetInnerHTML={{
          __html: `
            !function(e,i){if(!e.pixie){var n=e.pixie=function(e,i,a){n.actionQueue.push({action:e,actionValue:i,params:a})};n.actionQueue=[];var a=i.createElement("script");a.async=!0,a.src="//acdn.adnxs.com/dmp/up/pixie.js";var t=i.getElementsByTagName("head")[0];t.insertBefore(a,t.firstChild)}}(window,document);
pixie('init', '7a7062db-796b-4937-9aad-8d980417f3ff');
            `,
        }}
      />
      <Script
        dangerouslySetInnerHTML={{
          __html: `pixie('event', 'PageView');`,
        }}
      />
      <Script
        src="https://secure.adnxs.com/px?id=1577865&t=1"
        type="text/javascript"
        strategy="afterInteractive"
      />
      <S.Wrapper>
        <Head>
          <title>Polkadex Crowdloan for the Polkadot parachain is live.</title>
          <noscript>
            <img
              src="https://ib.adnxs.com/pixie?pi=7a7062db-796b-4937-9aad-8d980417f3ff&e=PageView&script=0"
              alt="Pixel by Adnxs"
              width="1"
              height="1"
              style={{ display: 'none' }}
            />
          </noscript>
        </Head>
        <Header
          links={['Products', 'Resources', 'About', 'Community']}
          cta={{
            title: 'Contribute Now',
            href: '#contribute',
          }}
          target="_self"
        />

        <main>
          <Hero />
          <Stats>
            <>
              <StatsCard title="62 - 66" description="Target auctions" />
              <StatsCard title="50k DOT" description="Rewarded Auction Cap" />
              <StatsCard title="96 weeks" description="Lease Duration" />
              <StatsCard title="3 PDEX" description="per DOT rewards" />
            </>
          </Stats>
          <Rewards />
          <Participate />
          <About />
          <Cta />
        </main>
        <Footer />
      </S.Wrapper>
    </>
  );
};
