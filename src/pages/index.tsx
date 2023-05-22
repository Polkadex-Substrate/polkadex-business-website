import axios from 'axios';
import CrowdloansRewardsPage from 'components/CrowdloansRewardsPage';
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
import Script from 'next/script';
import * as S from 'styles/home';

export default function Home({ data, error = '' }) {
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
          <title>
            Polkadex Orderbook - Decentralized Crypto Currency Exchange
          </title>
          <meta
            name="title"
            content="Polkadex Orderbook - Decentralized Crypto Currency Exchange"
          />
          <meta
            name="description"
            content="Trade crypto with fully decentralized peer-to-peer orderbook based trading engine for Web3. Polkadex Orderbook - the CEXiest DEX in DeFi."
          />
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
            href: 'https://orderbook.polkadex.trade/',
          }}
        />
        <main>
          <S.Container>
            <Hero />
            <Wallets />
            <Exchanges />
          </S.Container>
          <Orderbook />
          <Staking apy={data?.apy || '26.40%'} />
          <Partners />
          <BetaProgram />
          <TheaBridge />
          <Ecosystem />
          <Polkaido />
          <SeenOn />
          <CrowdloansRewardsPage />
          <Newsletter />
        </main>
        <Footer />
      </S.Wrapper>
    </>
  );
}

Home.getInitialProps = async (ctx) => {
  try {
    const apy: any = await axios.get(
      `${process.env.STAKING_SCRAP}/api/infos/1`,
      {
        headers: { Authorization: `Bearer ${process.env.STAKING_SCRAP_TOKEN}` },
      },
    );
    return {
      data: {
        apy: apy?.data?.data?.attributes?.value,
      },
    };
  } catch (error) {
    return { error: error.message };
  }
};
