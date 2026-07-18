import { BackToHome, Seo } from 'components';
import { Footer, HeaderFlat, SocialFollow } from 'components/v2';
import { About, Hero, Information } from 'components/Listing';
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
          <SocialFollow />
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
