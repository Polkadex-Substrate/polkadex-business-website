import { Exchanges, Hero, Orderbook, Wallets } from 'components/Home';
import { Footer, Header } from 'components/v2';
import Head from 'next/head';
import * as S from 'styles/home';

export default function Home() {
  return (
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
        links={[
          {
            title: 'Overview',
            href: '/v2/#overview',
          },
          {
            title: 'Orderbook',
            href: '/v2/#orderbook',
          },
          {
            title: 'PolkaIDO',
            href: '/v2/#polkaido',
          },
          {
            title: 'THEA',
            href: '/v2/#thea',
          },
          {
            title: 'Polkapool',
            href: '/v2/#polkapool',
          },
          {
            title: 'Staking',
            href: '/v2/#staking',
          },
        ]}
        cta={{
          title: 'Start Trading',
          href: 'https://orderbook-beta.polkadex.trade/',
        }}
      />
      <main>
        <S.Container>
          <Hero />
          <Wallets />
          <Exchanges />
        </S.Container>
        <Orderbook />
        {/* <Partners />
        <Polkaido />
        <Media />
        <Thea />
        <SecurityPartners />
        <Staking />
        <Newsletter />
        <StrategicInvestors /> */}
      </main>
      <Footer isDark />
    </S.Wrapper>
  );
}
