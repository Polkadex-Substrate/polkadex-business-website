import {
  BetaProgram,
  Ecosystem,
  Exchanges,
  Hero,
  Orderbook,
  Partners,
  Polkaido,
  SeenOn,
  Staking,
  TheaBridge,
  Wallets,
} from 'components/Home';
import { Footer, Header, Newsletter } from 'components/v2';
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
        links={['Products', 'Resources', 'About', 'Community']}
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
        <Staking />
        <Partners />
        <BetaProgram />
        <TheaBridge />
        <Ecosystem />
        <Polkaido />
        <SeenOn />
        <Newsletter />
      </main>
      <Footer isDark />
    </S.Wrapper>
  );
}
