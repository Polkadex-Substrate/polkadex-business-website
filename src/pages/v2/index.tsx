import { ContractAnnouncement, Features, Footer, Hero } from 'components';
import { Announcement } from 'components/v1/Announcement';
import { Header } from 'components/v2/Header';
import Head from 'next/head';
import Script from 'next/script';
import { useEffect } from 'react';
import * as S from 'styles/home';
import { HomeTranslations, IHomeTranslations } from 'translations';

export default function Home() {
  const { header, hero, footer }: IHomeTranslations = HomeTranslations['en-US'];
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
        <Header />
        <main>
          {/* <Hero {...hero} /> */}
          {/* <OrderbookProduct {...orderbook} />
          <Partners {...partners} />
          <OthersProducts otherProducts={otherProducts} />
          <Features {...features} />
          <Investors {...investors} />
          <Team {...team} />
          <Roadmap {...roadmap} />
          <TokenEconomics {...tokenEconomics} />
          <Media {...media} />
          <Newsletter {...newsletter} /> */}
        </main>
        {/* <Footer {...footer} /> */}
      </S.Wrapper>
    </>
  );
}
