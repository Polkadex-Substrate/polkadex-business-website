import * as Icons from 'components/Icons';
import Link from 'next/link';
import { useState } from 'react';

import * as S from './styles';
import * as T from './types';

const sliders = [
  {
    isMobile: false,
    image: 'orderbookWeb',
    title: 'Polkadex Orderbook',
    description:
      'Non-custodial high frequency trading + advanced trading tools Polkadex Orderbook is a cutting-edge Layer 2 trusted execution environment built on the Polkadex Network.',
  },
  {
    isMobile: true,
    image: 'orderbookMobile',
    title: 'Polkadex Mobile App',
    description:
      'Trade on the go. Place, modify, and cancel trades from your mobile app whe rever you may be while your funds remain in your air-gapped cold wallet.',
  },
];
export const Orderbook = () => {
  const [state, setState] = useState({ ...sliders[0] });

  return (
    <S.Wrapper>
      <S.Slider>
        <S.SliderImage>
          <S.Controls>
            <S.Button
              onClick={
                state.isMobile ? () => setState({ ...sliders[0] }) : undefined
              }
              isActive={!state.isMobile}
              type="button"
            >
              Web
            </S.Button>
            <S.Button
              onClick={
                !state.isMobile ? () => setState({ ...sliders[1] }) : undefined
              }
              isActive={state.isMobile}
              type="button"
            >
              Mobile
            </S.Button>
          </S.Controls>
          <img src={`/img/${state.image}.png`} alt="Orderbook" />
        </S.SliderImage>
        <S.Title>
          <h2>{state.title}</h2>
          <p>{state.description}</p>
          <S.Actions>
            <Link href="/">Start Trading</Link>
            <a href="/">Learn about Orderbook</a>
          </S.Actions>
        </S.Title>
      </S.Slider>
      <S.Features>
        <Card
          title="Faster"
          description="A DEX that’s as fast as (if not faster than) CEXs. High frequency
            trading 500k transactions per second Sub-milisecond latency."
          image="faster"
          alt="Rocket"
        />
        <Card
          title="Cheaper"
          description="No crazy gas fees. No order placement/cancellation fees. Super low trading fees of XXX"
          image="cheaper"
          alt="Coins"
        />
        <Card
          title="Better Looking"
          description="All the functionality of a CEX combined with the sleek, minimalist user interface design of a DEX."
          image="betterLooking"
          alt="Mobile and desktop devices"
        />
        <Card
          title="Your keys, your crypto"
          description="Non-custodial means there’s no centralized honeypot for hackers to go after. In other words, your funds stay safe and secure in your wallet at all times."
          image="keys"
          alt="Key"
        />
        <Card title="Delegate" image="delegate" alt="Shield">
          <>
            <p>Sit back and watch your profits roll in.</p>
            <p>
              Whether it’s an algorithm or a fund manager, delegate your asset
              trading to a third party while keeping control of your funds.
            </p>
          </>
        </Card>
        <Card
          title="Register multiple hot wallets"
          description="Connect hot wallets based on browser extensions, mobile phones or other devices to trade whenever, wherever."
          image="wallets"
          alt="Wallet"
        />
        <Card
          title="Bots"
          description="Add on-chain trading bots or integrate your favorite trading bot provider to automate trading!"
          image="bots"
          alt="Robot"
        />
        <S.FlexCard>
          <img src="/img/crosschain.png" alt="Isometric polkadex connection" />
          <S.FlexTitle>
            <span>Cross-chain for real</span>
            <p>
              Polkadex parachain + THEA bridge Cutting edge meets cutting edge.
              <br />
              <br />
              The Polkadex parachain connects Polkadex to the Polkadot ecosystem
              and its parachains. THEA, Polkadex’s cutting-edge decentralized
              token bridge, will connect to Ethereum and more blockchains and
              ecosystems down the line.
            </p>
            <S.PairsContainer>
              <S.Pair>
                <div>
                  <Icons.Ethereum />
                </div>
                <small>ETH/DOT</small>
              </S.Pair>
              <S.Pair>
                <div>
                  <Icons.Polkadot />
                </div>
                <small>aUSD/USDT</small>
              </S.Pair>
              <S.Pair>
                <div>
                  <Icons.Polkadex />
                </div>
                <small>PDEX/USDC</small>
              </S.Pair>
            </S.PairsContainer>
          </S.FlexTitle>
        </S.FlexCard>
      </S.Features>
    </S.Wrapper>
  );
};

const Card = ({ image, alt, title, description = '', children }: T.Props) => (
  <S.Card>
    <img src={`/img/${image}.png`} alt={alt} />
    <span>{title}</span>
    {description.length ? <p>{description}</p> : children}
  </S.Card>
);
