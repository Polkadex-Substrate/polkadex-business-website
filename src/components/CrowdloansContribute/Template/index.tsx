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

import * as S from './styles';

export const Template = () => {
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
