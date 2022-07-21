import { Footer, Header, Newsletter } from 'components';
import { Hero, HowToStake, Overview, Rewards } from 'components/Staking';
import { Stats, StatsCard } from 'components/Stats';
import Head from 'next/head';
import Script from 'next/script';
import { HomeTranslations, IHomeTranslations } from 'translations';

import * as S from './styles';

export const Template = () => {
  const { header, newsletter, footer }: IHomeTranslations =
    HomeTranslations['en-US'];
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
          <title>Polkadex Staking</title>
        </Head>
        <Header {...header} disableBottomMenu={false} />
        <main>
          <Hero />
          <Stats>
            <>
              <StatsCard title="3,673" description="Holders" />
              <StatsCard title="2.655 M" description="Staked Value" />
              <StatsCard title="140" description="Validators" />
              <StatsCard title="4.62%" description="Inflation Rate" />
            </>
          </Stats>
          <Overview />
          <Rewards />
          <HowToStake />
          <Newsletter {...newsletter} />
        </main>
        <Footer {...footer} />
      </S.Wrapper>
    </>
  );
};
