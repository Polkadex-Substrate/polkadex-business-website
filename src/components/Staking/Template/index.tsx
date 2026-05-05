import { StakingFaq } from 'components/Crowdloans';
import { Hero, Overview, Rewards } from 'components/Staking';
import { Stats, StatsCard } from 'components/Stats';
import { Footer, Header, Newsletter } from 'components/v2';
import dynamic from 'next/dynamic';
import Head from 'next/head';
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
        <Head>
          <title>Stake your PDEX</title>
          <meta
            name="description"
            content=" Staking is an easy way to earn passive income from cryptocurrencies. It’s like investing in real estate but without the hassle. Stake PDEX token and earn high APY return!"
          />
          <meta
            property="og:title"
            content="Stake PDEX crypto token & start earning passive income"
          />
          <meta
            name="keywords"
            content="Staking, stake, investing, passive income, crypto, cryptocurrencies, earn, high APY"
          />
        </Head>
        <Header
          links={['Products', 'Resources', 'About', 'Community']}
          cta={{
            title: 'Start Trading',
            href: 'https://orderbook.polkadex.trade/',
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
