import { Footer } from 'components';
import Newsletter from 'components/Newsletter';
import {
  Header,
  Hero,
  HowToStake,
  Overview,
  Rewards,
} from 'components/Staking';
import { Stats, StatsCard } from 'components/Stats';
import Head from 'next/head';
import { HomeTranslations, IHomeTranslations } from 'translations';

import * as S from './styles';

export const Template = () => {
  const { footer, newsletter }: IHomeTranslations = HomeTranslations['en-US'];
  return (
    <S.Wrapper>
      <Head>
        <title>Polkadex Staking</title>
      </Head>
      <Header />
      <main>
        <Hero />
        <Stats>
          <>
            <StatsCard title="1,527" description="Total Stakers" />
            <StatsCard title="1,530,000" description="PDEX staked" />
            <StatsCard title="140" description="Active validators" />
            <StatsCard title="165" description="Waiting validators" />
          </>
        </Stats>
        <Overview />
        <Rewards />
        <HowToStake />
        <Newsletter {...newsletter} />
      </main>
      <Footer {...footer} />
    </S.Wrapper>
  );
};
