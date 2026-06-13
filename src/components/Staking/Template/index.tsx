import { Seo } from 'components';
import { StakingFaq } from 'components/Crowdloans';
import { Hero, Overview, Rewards } from 'components/Staking';
import { Stats, StatsCard } from 'components/Stats';
import { Footer, Header, Newsletter } from 'components/v2';
import dynamic from 'next/dynamic';
import Script from 'next/script';

import * as S from './styles';

const HowToStake = dynamic(
  () => import('components/Staking').then((mod) => mod.HowToStake),
  {
    ssr: false,
  },
);
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
        <Seo
          title="Stake PDEX & Earn Passive Income"
          description="Staking is an easy way to earn passive income from cryptocurrencies. Stake your PDEX token to secure the Polkadex network and earn a high APY return."
          path="/staking"
        />
        <Header
          links={['Products', 'Resources', 'About', 'Community']}
          cta={{
            title: 'Try the Testnet',
            href: process.env.ORDERBOOK_LINK,
          }}
        />
        <main>
          <Hero apy="24.54%" />
          <Stats>
            <>
              <StatsCard title="5.46" description="Total Nominators" />
              <StatsCard title="7.002 million" description="PDEX Staked" />
              <StatsCard title="200" description="Active Validators" />
            </>
          </Stats>
          <Rewards apy="24.54%" apyValidator="26.62%" />
          <HowToStake />
          <Overview />
          <StakingFaq />
          <Newsletter />
        </main>
        <Footer />
      </S.Wrapper>
    </>
  );
};
