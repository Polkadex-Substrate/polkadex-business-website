import * as Icons from 'components/Icons';
import Link from 'next/link';

import * as S from './styles';

export const Orderbook = () => {
  return (
    <S.Wrapper>
      <S.Slider />
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
          image="betterLoking"
          alt="Mobile and desktop devices"
        />
        <Card
          title="Your keys, your crypto"
          description="Non-custodial means there’s no centralized honeypot for hackers to go after. In other words, your funds stay safe and secure in your wallet at all times. 
Leave your assets on your exchange without worrying about hacks and save on transaction fees for moving your funds in and out every time you want to trade."
          image="keys"
          alt="Key"
        />
        <Card
          title="Delegate"
          description="Whether it’s an algorithm or a fund manager, delegate your asset trading to a third party while keeping control of your funds and sit back and watch your profits roll in."
          image="shield"
          alt="Shield"
        />
        <Card
          title="Register multiple hot wallets"
          description="Connect hot wallets based on browser extensions, mobile phones or other devices to trade whenever, wherever."
          image="wallet"
          alt="Wallet"
        />
        <Card
          title="Bots"
          description="Add on-chain trading bots or integrate your favorite trading bot provider to automate trading!"
          image="bot"
          alt="Robot"
        />
        <S.FlexCard>
          <img
            src="/img/orderbookFeatures/crosschain.png"
            alt="Isometric polkadex connection"
          />
          <S.FlexTitle>
            <span>Cross-chain for real</span>
            <p>
              Polkadex parachain + Thea bridge Cutting edge meets cutting edge.
              <br />
              <br />
              The Polkadex parachain connects Polkadex to the Polkadot ecosystem
              and its parachains. Thea, Polkadex’s cutting-edge decentralized
              token bridge, will connect to Ethereumand more blockchains and
              ecosystems down the line.
            </p>
            <div />
          </S.FlexTitle>
        </S.FlexCard>
      </S.Features>
    </S.Wrapper>
  );
};

const Card = ({ image, alt, title, description }) => (
  <S.Card>
    <img src={`/img/orderbookFeatures/${image}.png`} alt={alt} />
    <span>{title}</span>
    <p>{description}</p>
  </S.Card>
);
