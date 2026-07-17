import { SectionHead, staggerChildProps, staggerGroupProps } from 'components';
import * as Icons from 'components/Icons';
import { motion } from 'framer-motion';

import { AnimatedOrderbookMock } from './AnimatedMock';
import * as S from './styles';

// Six differentiators, tightened per feedback. Blends concrete on-chain
// claims (200+ validators, sub-ms latency) with trader-specific features
// (limit/market orders, HFT API) so the grid reads for both investors and
// active traders.
const features = [
  {
    title: 'Fully on-chain matching',
    description:
      'Every order settles on our sovereign Layer 1. No off-chain matching engine, no trusted operator.',
    icon: 'Faster',
  },
  {
    title: 'Sub-millisecond latency',
    description:
      'Order-matching engine tuned for professional traders. CEX-grade speed without the custody trade-off.',
    icon: 'Cheaper',
  },
  {
    title: 'Blockchain security',
    description:
      'Secured by a validator set of 200+ network nodes — decentralized consensus, not a trusted operator.',
    icon: 'YourCrypto',
  },
  {
    title: 'Limit & market orders',
    description:
      'Full price control with limit orders and instant execution with market orders. Real orderbook, not an AMM.',
    icon: 'BetterLooking',
  },
  {
    title: 'Bots & HFT API',
    description:
      'Integrate Hummingbot or plug in your own strategy. Programmatic trading is a first-class use case.',
    icon: 'Bots',
  },
  {
    title: 'Cross-chain, for real',
    description:
      'Bridged assets from Ethereum and beyond via Hyperbridge — verified by consensus, not multisigs.',
    icon: 'Crosschain',
  },
];

export const Orderbook = () => {
  const orderbookLink = process.env.ORDERBOOK_LINK;
  return (
    <S.Wrapper id="orderbook">
      <SectionHead
        eyebrow="Orderbook"
        title={
          <>
            A <strong>fully on-chain</strong> exchange, without the compromises
          </>
        }
        description="Polkadex Orderbook is a non-custodial trading application running on our sovereign Layer 1 chain. High-frequency trading, low fees, self-custody — all in one place."
      />

      {/* Animated bid/ask mock instead of a second static screenshot —
          the About section already shows the full product UI. */}
      <AnimatedOrderbookMock />

      <S.Features as={motion.div} {...staggerGroupProps}>
        {features.map((f) => {
          const IconComponent = Icons[f.icon];
          return (
            <S.Feature as={motion.div} {...staggerChildProps} key={f.title}>
              <S.FeatureIcon>
                {IconComponent ? <IconComponent /> : null}
              </S.FeatureIcon>
              <S.FeatureTitle>{f.title}</S.FeatureTitle>
              <S.FeatureDescription>{f.description}</S.FeatureDescription>
            </S.Feature>
          );
        })}
      </S.Features>

      <S.Footer>
        <a
          className="primary"
          href={orderbookLink}
          target="_blank"
          rel="noreferrer noopener"
        >
          Launch app
        </a>
        <a
          className="secondary"
          href="https://explorer.polkadex.ee"
          target="_blank"
          rel="noreferrer noopener"
        >
          View on mainnet explorer →
        </a>
      </S.Footer>
    </S.Wrapper>
  );
};
