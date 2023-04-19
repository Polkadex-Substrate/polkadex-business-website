import { Intro } from 'components/Intro';
import { Hero, Staking } from 'components/Rewards';
import { Footer, Header, Newsletter } from 'components/v2';
import Head from 'next/head';
import Script from 'next/script';

import * as S from './styles';

export const Template = ({ apy }) => {
  return (
    <Intro>
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
          <title>Polkadex Rewards</title>
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
          <Hero />
          <Staking apy={apy} />
          <Newsletter />
        </main>
        <Footer />
      </S.Wrapper>
    </Intro>
  );
};
