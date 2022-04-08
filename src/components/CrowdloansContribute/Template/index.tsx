import { Footer } from 'components';
import {
  About,
  Cta,
  Header,
  Hero,
  Participate,
  Rewards,
  Stats,
} from 'components/CrowdloansContribute';
import Head from 'next/head';
import { HomeTranslations, IHomeTranslations } from 'translations';

import * as S from './styles';

export const Template = () => {
  const { footer }: IHomeTranslations = HomeTranslations['en-US'];
  return (
    <S.Wrapper>
      <Head>
        <title>
          Help Polkadex secure a Parachain slot. Join the Crowdloan now!
        </title>
      </Head>
      <Header />
      <main>
        <Hero />
        <Stats />
        <Rewards />
        <Participate hasAccepted />
        <About />
        <Cta />
      </main>
      <Footer {...footer} full={false} />
    </S.Wrapper>
  );
};
