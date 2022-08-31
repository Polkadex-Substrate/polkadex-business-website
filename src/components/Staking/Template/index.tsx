import { Footer, Header, Newsletter } from 'components';
import { StakingFaq } from 'components/Crowdloans';
import { Hero, HowToStake, Overview, Rewards } from 'components/Staking';
import { Stats, StatsCard } from 'components/Stats';
import Head from 'next/head';
import Script from 'next/script';
import { HomeTranslations, IHomeTranslations } from 'translations';

import * as S from './styles';

export const Template = ({ data, error }) => {
  const { header, newsletter, footer }: IHomeTranslations =
    HomeTranslations['en-US'];
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
        <Header {...header} disableBottomMenu={false} />
        <main>
          <Hero apy={data?.apy || '28.91%'} />
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
          <Rewards apy={data?.apy || '28.91%'} />
          <HowToStake />
          <Overview />
          <StakingFaq />
          <Newsletter {...newsletter} />
        </main>
        <Footer {...footer} />
      </S.Wrapper>
    </>
  );
};
