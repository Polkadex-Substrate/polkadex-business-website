import { Popup } from 'components/Popup';
import { Hero } from 'components/Rewards';
import { Footer, Header, Newsletter } from 'components/v2';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Script from 'next/script';
import { useState } from 'react';

import * as S from './styles';

const Staking = dynamic(
  () => import('components/Rewards').then((mod) => mod.Staking),
  {
    ssr: false,
  },
);

export const Template = ({ apy }) => {
  const [terms, setTerms] = useState(true);
  return (
    <>
      <Popup isVisible={terms} onClose={undefined}>
        <S.TermsWrapper>
          <S.Terms>
            <img src="/img/termsHero.svg" alt="Teacher illutration" />
            <div>
              <h5>Terms & Conditions</h5>
              <p>
                Claiming your PDEX rewards is a key part of the Polkadex
                Crowdloan campaign. For your reference, here are the{' '}
                <a
                  target="_blank"
                  href="https://github.com/Polkadex-Substrate/Docs/blob/master/Polkadex_Parachain_CrowdLoans.pdf"
                  rel="noreferrer"
                >
                  Terms & Conditions
                </a>{' '}
                you previously agreed upon when you contributed your DOT to the
                Polkadex Crowdloan.
              </p>
              <S.Button type="button" onClick={() => setTerms(!terms)}>
                Close
              </S.Button>
            </div>
          </S.Terms>
        </S.TermsWrapper>
      </Popup>
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
    </>
  );
};
