import { PrimaryButton } from 'components/Button';
import React, { useEffect, useRef, useState } from 'react';

import * as S from './styles';

const Hero = () => {
  const ImageHeroRef = useRef<HTMLImageElement>();

  const handleScroll = () => {
    const scrollY = window.innerHeight * 0.05;
    const scrollTop = ImageHeroRef.current.getBoundingClientRect().top;

    if (scrollTop - scrollY < 0) ImageHeroRef.current.classList.add('active');
    else ImageHeroRef.current.classList.remove('active');
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <S.Wrapper id="hero">
      <S.Container>
        <h1>The trading engine for Web3 and DeFi</h1>
        <h2>
          Polkadex is a fully decentralized peer-to-peer orderbook-based
          cryptocurrency exchange for the DeFi ecosystem built on Substrate.
        </h2>
        <PrimaryButton
          content="Testnet Coming Soon"
          href="#newsletter"
          icon="doubleArrowRight"
        />
        <S.Row>
          <span>Support Chains</span>
          <S.Col>
            <S.Card>
              <S.PlannedIcon>
                <img src="/img/icons/ethereum.svg" alt="Ethereum Logo" />
              </S.PlannedIcon>
              Ethereum
            </S.Card>
            <S.Card>
              <S.PlannedIcon>
                <img src="/img/icons/polkadot.svg" alt="Polkadot Logo" />
              </S.PlannedIcon>
              Polkadot
            </S.Card>
          </S.Col>
        </S.Row>
      </S.Container>
      <S.Container>
        <img
          ref={ImageHeroRef}
          src="/img/polkadexExchange.svg"
          alt="Polkadex Interface"
        />
      </S.Container>
    </S.Wrapper>
  );
};

export default Hero;
