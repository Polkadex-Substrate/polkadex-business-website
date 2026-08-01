import { BackToHome, ScrollReveal, Seo, TestnetGuide } from 'components';
import { Footer, HeaderFlat, SocialFollow } from 'components/v2';
import React from 'react';
import * as S from 'styles/home';

export default function TestnetGuidePage() {
  return (
    <>
      <S.Wrapper>
        <Seo
          title="Polkadex Orderbook Testnet is Live"
          description="A live, non-custodial, cross-chain orderbook on Polkadex you can trade on today. Claim free testnet tokens, place orders, and move assets cross-chain via Hyperbridge."
          path="/testnet-guide"
          image="https://polkadex.ee/testnetCardLive.jpg"
        />
        <HeaderFlat />
        <main>
          <BackToHome />
          <ScrollReveal>
            <TestnetGuide />
          </ScrollReveal>
          <ScrollReveal>
            <SocialFollow />
          </ScrollReveal>
        </main>
        <Footer />
      </S.Wrapper>
    </>
  );
}
