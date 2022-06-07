import { Hero, HowToStake, Overview, Rewards } from 'components/Staking';
import { Stats, StatsCard } from 'components/Stats';
import { Footer, Header, Newsletter } from 'components/v2';
import Head from 'next/head';

import * as S from './styles';

export const Template = () => {
  return (
    <S.Wrapper>
      <Head>
        <title>Polkadex Staking</title>
      </Head>
      <Header
        logo="Staking"
        links={[
          {
            title: 'Stats',
            href: '/v2/staking/#stats',
          },
          {
            title: 'Overview',
            href: '/v2/staking/#overview',
          },
          {
            title: 'Rewards',
            href: '/v2/staking/#rewards',
          },
          {
            title: 'How to stake',
            href: '/v2/staking/#howtostake',
          },
        ]}
        cta={{
          title: 'Stake Now',
          href: '#overview',
        }}
      />
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
        <Newsletter />
      </main>
      <Footer isDark />
    </S.Wrapper>
  );
};
