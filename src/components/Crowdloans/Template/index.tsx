import {
  About,
  Hero,
  Timeline,
  TokenEconomics,
  TokenUtility,
} from 'components/Crowdloans';
import { Footer, Header, Newsletter } from 'components/v2';
import Head from 'next/head';
import Script from 'next/script';

import { Calculator } from '../Calculator';
import { ChainModel } from '../ChainModel';
import { Faq } from '../Faq';
import { Participate } from '../Participate';
import { Rewards } from '../Rewards';
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
          <title>
            Help Polkadex secure a Parachain slot. Join the Crowdloan now!
          </title>
        </Head>
        <Header
          links={['Products', 'Resources', 'About', 'Community']}
          cta={{
            title: 'Start Trading',
            href: 'https://orderbook.polkadex.trade/',
          }}
        />
        <main>
          <Hero />
          <About />
          <Rewards />
          <Calculator />
          <TokenUtility />
          <ChainModel />
          <Timeline />
          <Participate />
          <TokenEconomics />
          <Faq />
          <Newsletter />
        </main>
        <Footer />;
      </S.Wrapper>
    </>
  );
};
