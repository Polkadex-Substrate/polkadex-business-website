import { PrimaryButton } from 'components/Button';
import { motion } from 'framer-motion';
import React from 'react';

import * as S from './styles';

const variants = {
  hidden: {
    transform: 'rotateX(50deg) rotateZ(-30deg)',
    transition: {
      duration: 1,
    },
  },
  visible: {
    transform: 'rotateX(0) rotateZ(0)',
    transition: {
      duration: 1.5,
    },
  },
};

const Hero = () => {
  return (
    <S.Wrapper id="hero">
      <S.Container>
        <h1>The trading engine for Web3 and DeFi</h1>
        <h2>
          Polkadex is a fully decentralized, peer-to-peer orderbook-based
          cryptocurrency exchange for the DeFi ecosystem built with Substrate.
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
        <motion.img
          initial="hidden"
          variants={variants}
          // ref={ref}
          // animate={controls}
          src="/img/polkadexExchange.svg"
          alt="Polkadex Interface"
        />
      </S.Container>
    </S.Wrapper>
  );
};

export default Hero;
