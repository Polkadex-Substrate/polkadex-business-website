import { BackToHome, Seo } from 'components';
import { Footer, HeaderFlat, Newsletter } from 'components/v2';
import { About, Hero, Information } from 'components/Listing';
import Script from 'next/script';
import { useEffect } from 'react';
import * as S from 'styles/home';
import { HomeTranslations, IHomeTranslations } from 'translations';

export function Template() {
  const { header, footer, newsletter }: IHomeTranslations =
    HomeTranslations['en-US'];
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
        <Seo
          title="List your token on Polkadex Orderbook"
          description="List your crypto asset on the Polkadex Orderbook, the decentralized cryptocurrency exchange (DEX) built for high-frequency trading."
          path="/listing"
        />
        <HeaderFlat />
        <main>
          <BackToHome />
          <Hero />
          <About />
          <Information />
          <Newsletter />
        </main>
        <Footer />
      </S.Wrapper>
      <style global jsx>{`
        body {
          overflow-x: hidden;
        }
      `}</style>
    </>
  );
}
