import {
  Footer,
  ForInvestors,
  ForTeams,
  Header,
  Newsletter,
  PolkaidoHero,
  PolkaidoOverview,
  StrategicInvestors,
  UpcomingProjects,
} from 'components/v2';
import Head from 'next/head';
import * as S from 'styles/polkaido';

export default function Polkaido() {
  return <div />;
  return (
    <>
      <S.Wrapper>
        <Head>
          <title>Polkadex - The trading engine for Web3 and DeFi</title>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Caveat&display=swap"
            rel="stylesheet"
          />
        </Head>
        <Header
          logo="Polkaido"
          links={[
            {
              title: 'Overview',
              href: '/v2/polkaido/#overview',
            },
            {
              title: 'For teams',
              href: '/v2/polkaido/#forteams',
            },
            {
              title: 'For investors',
              href: '/v2/polkaido/#forinvestors',
            },
            {
              title: 'Upcoming projects',
              href: '/v2/polkaido/#upcomingprojects',
            },
          ]}
          cta={{
            title: 'Open App',
            href: 'https://beta.tokenmanager.polkadex.ee/ido',
          }}
        />
        <main>
          <PolkaidoHero />
          <PolkaidoOverview />
          <ForTeams />
          <ForInvestors />
          <UpcomingProjects />
          <Newsletter
            title="Sign-up for the PolkaIDO news!"
            description="Hear about the best IDOs to invest in and stay on top of latest updates."
          />
          {/* <StrategicInvestors /> */}
        </main>
        <Footer isDark />
      </S.Wrapper>
    </>
  );
}
