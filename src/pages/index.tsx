import {
  ContractAnnouncement,
  Features,
  Footer,
  Header,
  Hero,
  Investors,
  Media,
  Newsletter,
  OrderbookProduct,
  OthersProducts,
  Partners,
  Roadmap,
  Team,
  TokenEconomics,
} from 'components';
import { Announcement } from 'components/v1/Announcement';
import Head from 'next/head';
import Script from 'next/script';
import { useEffect } from 'react';
import * as S from 'styles/home';
import { HomeTranslations, IHomeTranslations } from 'translations';

export default function Home() {
  const {
    header,
    announcement,
    hero,
    orderbook,
    partners,
    features,
    investors,
    team,
    roadmap,
    tokenEconomics,
    media,
    newsletter,
    footer,
  }: IHomeTranslations = HomeTranslations['en-US'];
  useEffect(() => {
    const path = window.location.hash;
    if (path && path.includes('#')) {
      const id = path.replace('#', '');
      const el = window.document.getElementById(id);
      const r = el.getBoundingClientRect();
      window.scrollTo({
        top: r.top,
        behavior: 'smooth',
      });
    }
  });
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
          <title>Polkadex - The trading engine for Web3 and DeFi</title>
        </Head>
        <Announcement
          content={
            <ContractAnnouncement
              contract="0xF59ae934f6fe444afC309586cC60a84a0F89Aaea"
              href="https://etherscan.io/token/0xF59ae934f6fe444afC309586cC60a84a0F89Aaea"
              {...announcement}
            />
          }
        />
        <Header {...header} />
        <main>
          <Hero {...hero} />
          <OrderbookProduct {...orderbook} />
          <Partners {...partners} />
          <Features {...features} />
          <Investors {...investors} />
          <Team {...team} />
          <Roadmap {...roadmap} />
          <TokenEconomics {...tokenEconomics} />
          <Media {...media} />
          <Newsletter {...newsletter} />
        </main>
        <Footer {...footer} />
      </S.Wrapper>
    </>
  );
}
