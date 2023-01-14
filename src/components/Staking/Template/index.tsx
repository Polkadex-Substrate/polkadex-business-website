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
export const Template = ({ data, error }) => {
  const stakedValue = (
    Math.round(data?.tokenInfo?.bonded_locked_balance || 0 * 1000) / 1000
  ).toLocaleString();

  const totalNominator = (
    Math.round(data?.metadata?.count_account || 0 * 1000) / 1000
  ).toLocaleString('de-DE');

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
          <Hero apy={data?.apy || '26.39%'} />
          <Stats>
            <>
              <StatsCard
                title={totalNominator}
                description="Total Nominators"
              />
              <StatsCard
                title={`${String(stakedValue).slice(0, 4)} million`}
                description="PDEX Staked"
              />
              <StatsCard
                title={data?.metadata?.validator_count || 0}
                description="Active Validators"
              />
            </>
          </Stats>
          <Rewards
            apy={data?.apy || '28.91%'}
            apyValidator={data?.apyValidator || '30.78%'}
          />
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
