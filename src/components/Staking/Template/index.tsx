import { BackToHome, CountUp, ScrollReveal, Seo } from 'components';
import { StakingFaq } from 'components/Crowdloans';
import { Hero, Overview, Rewards } from 'components/Staking';
import { Stats, StatsCard } from 'components/Stats';
import { Footer, HeaderFlat, SocialFollow } from 'components/v2';
import { useStakingStats } from 'hooks/useStakingStats';
import dynamic from 'next/dynamic';

import * as S from './styles';

const HowToStake = dynamic(
  () => import('components/Staking').then((mod) => mod.HowToStake),
  {
    ssr: false,
  },
);
export const Template = () => {
  const stats = useStakingStats();
  return (
    <>
      <S.Wrapper>
        <Seo
          title="Stake PDEX & Earn Passive Income"
          description="Staking is an easy way to earn passive income from cryptocurrencies. Stake your PDEX token to secure the Polkadex network and earn a high APY return."
          path="/staking"
        />
        <HeaderFlat />
        <main>
          <BackToHome />
          <ScrollReveal>
            <Hero apy={stats.apy} />
          </ScrollReveal>
          <ScrollReveal>
            <Stats>
              <>
                <StatsCard
                  title={<CountUp value={stats.nominators} />}
                  description="Total Nominators"
                />
                <StatsCard
                  title={<CountUp value={stats.pdexStaked} />}
                  description="PDEX Staked"
                />
                <StatsCard
                  title={<CountUp value={stats.activeValidators} />}
                  description="Active Validators"
                />
              </>
            </Stats>
          </ScrollReveal>
          <ScrollReveal>
            <Rewards apy={stats.apy} apyValidator={stats.apyValidator} />
          </ScrollReveal>
          <ScrollReveal>
            <HowToStake />
          </ScrollReveal>
          <ScrollReveal>
            <Overview />
          </ScrollReveal>
          <ScrollReveal>
            <StakingFaq />
          </ScrollReveal>
          <ScrollReveal>
            <SocialFollow />
          </ScrollReveal>
        </main>
        <Footer />
      </S.Wrapper>
    </>
  );
};
