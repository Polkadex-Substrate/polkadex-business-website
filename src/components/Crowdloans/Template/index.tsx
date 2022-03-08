import { AnnouncementSecondary, Footer, Newsletter } from 'components';
import {
  About,
  Calculator,
  Faq,
  HeaderCustom,
  Hero,
  Participate,
  Rewards,
  Timeline,
  TokenEconomics,
} from 'components/Crowdloans';
import Head from 'next/head';
import { HomeTranslations, IHomeTranslations } from 'translations';

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
      <AnnouncementSecondary />
      <HeaderCustom {...header} />
      <main>
        <Hero />
        <About />
        <Rewards />
        <Calculator />
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
