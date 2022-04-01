import { Footer, Newsletter } from 'components';
import {
  About,
  HeaderCustom,
  Hero,
  Timeline,
  TokenEconomics,
  TokenUtility,
} from 'components/Crowdloans';
import Head from 'next/head';
import { HomeTranslations, IHomeTranslations } from 'translations';

import { Calculator } from '../Calculator';
import { ChainModel } from '../ChainModel';
import { Faq } from '../Faq';
import { Participate } from '../Participate';
import { Rewards } from '../Rewards';
import * as S from './styles';

export const Template = () => {
  const { footer, newsletter, header }: IHomeTranslations =
    HomeTranslations['en-US'];

  return (
    <S.Wrapper>
      <Head>
        <title>
          Help Polkadex secure a Parachain slot. Join the Crowdloan now!
        </title>
      </Head>
      <HeaderCustom {...header} />
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
        <Newsletter {...newsletter} />
      </main>
      <Footer {...footer} />;
    </S.Wrapper>
  );
};
