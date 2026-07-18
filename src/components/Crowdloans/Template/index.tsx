import {
  About,
  Hero,
  Timeline,
  TokenEconomics,
  TokenUtility,
} from 'components/Crowdloans';
import { Footer, Header, Newsletter } from 'components/v2';
import Head from 'next/head';

import { Calculator } from '../Calculator';
import { ChainModel } from '../ChainModel';
import { Faq } from '../Faq';
import { Participate } from '../Participate';
import { Rewards } from '../Rewards';
import * as S from './styles';

export const Template = () => {
  return (
    <>
      <S.Wrapper>
        <Head>
          <title>
            Help Polkadex secure a Parachain slot. Join the Crowdloan now!
          </title>
        </Head>
        <Header
          links={['Products', 'Resources', 'About', 'Community']}
          cta={{
            title: 'Try the Testnet',
            href: process.env.ORDERBOOK_LINK,
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
