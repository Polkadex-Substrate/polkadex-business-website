/* eslint-disable react/no-danger */
import { Footer } from 'components';
import {
  About,
  Cta,
  Header,
  Hero,
  Participate,
  Rewards,
} from 'components/CrowdloansContribute';
import { Stats, StatsCard } from 'components/Stats';
import Head from 'next/head';
import Script from 'next/script';
import { GoogleAnalytics } from 'nextjs-google-analytics';
import { HomeTranslations, IHomeTranslations } from 'translations';

import * as S from './styles';

export const Template = () => {
  const { footer }: IHomeTranslations = HomeTranslations['en-US'];
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
          <title>
            Polkadex Crowdloan for the Polkadot parachain is live with 2M $PEDEX
            rewards pool for contributors.
          </title>

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
        <Header />

        <main>
          <Hero />
          <Stats>
            <>
              <StatsCard title="LP15-LP8" description="Auction Starts" />
              <StatsCard title="1M DOT" description="Auction Cap" />
              <StatsCard title="96 weeks" description="Lease Duration" />
              <StatsCard title="2M PDEX" description="Rewards" />
            </>
          </Stats>
          <Rewards />
          <Participate />
          <About />
          <Cta />
        </main>
        <Footer {...footer} full={false} />
      </S.Wrapper>
    </>
  );
};
