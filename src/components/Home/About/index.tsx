import {
  staggerChildProps,
  staggerGroupProps,
  TiltCard,
} from 'components';
import * as Icons from 'components/Icons';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { track } from 'utils/analytics';

import * as S from './styles';

// Six pillars distilled from the ten proposed. Chosen for the strongest
// investor + trader signal per unit of screen space:
//  - Independent L1 (positioning) · Substrate (credibility)
//  - Purpose-built for trading (differentiation) · Non-custodial (safety)
//  - CEX-like performance (product) · Hyperbridge (interop)
const pillars = [
  {
    emoji: '🌐',
    title: 'Independent Layer 1',
    description:
      'A sovereign blockchain with its own validators, roadmap, and governance — not a parachain.',
  },
  {
    emoji: '⚙️',
    title: 'Built with Substrate',
    description:
      'Battle-tested framework from the team behind Polkadot. Modular, upgradable, secure by design.',
  },
  {
    emoji: '🗳️',
    title: 'Sudo-keys removed',
    description:
      'No entity can control the network or user funds. All upgrades are governed on-chain.',
  },
  {
    emoji: '⚡️',
    title: 'CEX-grade performance',
    description:
      'Sub-millisecond order matching via the OCEX engine, with every trade settled on-chain.',
  },
  {
    emoji: '🔑',
    title: 'Non-custodial',
    description:
      'Users always retain full control of their assets. No centralized honeypot, no operator to trust.',
  },
  {
    emoji: '🌉',
    title: 'Native interoperability',
    description:
      'Hyperbridge integration for trust-minimized cross-chain transfers across Ethereum and beyond.',
  },
];

export const About = () => (
  <S.Wrapper id="about">
    {/* Hero head — pill, h1, one-line subhead, and the CTA row all land
        above the fold. The pill/headline/sub/CTAs cascade in on load. */}
    <S.HeroHead as={motion.div} {...staggerGroupProps}>
      <motion.div {...staggerChildProps}>
        <S.LivePill>
          <S.LiveDot aria-hidden="true" />
          Polkadex 2.0 · Live on Testnet
        </S.LivePill>
      </motion.div>
      <motion.div {...staggerChildProps}>
        {/* The page's single h1 (SEO). */}
        <S.Title>
          The sovereign Layer 1, <strong>purpose-built for trading</strong>
        </S.Title>
      </motion.div>
      <motion.div {...staggerChildProps}>
        <S.Sub>
          CEX-grade speed. Real orderbook. Your keys, always. Built with
          Substrate, connected everywhere via Hyperbridge.
        </S.Sub>
      </motion.div>
      {/* CTA row removed (community feedback): the sticky header carries the
          always-visible "Try the Testnet" button, so the product screenshot
          can rise above the fold instead. Bottom-of-section CTA remains. */}
    </S.HeroHead>

    {/* Product screenshot — the "it's a real product" proof. Subtle
        mouse-follow tilt makes it feel interactive. */}
    <TiltCard>
      <S.Preview>
        <Icons.OrderbookPreview />
      </S.Preview>
    </TiltCard>

    {/* Full positioning paragraph sits below the screenshot, where readers
        who've seen the product are ready for the story. */}
    <S.Intro>
      Polkadex is an <strong>independent Layer 1 blockchain</strong> built with
      Substrate and engineered for high-performance decentralized trading.
      Originally launched within the Polkadot ecosystem, Polkadex has evolved
      into a sovereign network — combining CEX-grade performance with the
      transparency, security, and self-custody of DeFi.
    </S.Intro>

    <S.Pillars as={motion.div} {...staggerGroupProps}>
      {pillars.map((p) => (
        <S.Pillar as={motion.div} {...staggerChildProps} key={p.title}>
          <h3>
            <S.Emoji>{p.emoji}</S.Emoji>
            {p.title}
          </h3>
          <p>{p.description}</p>
        </S.Pillar>
      ))}
    </S.Pillars>

    <S.Footer>
      <Link
        href="/testnet-guide"
        onClick={() => track('CTA: Try Testnet', { placement: 'about' })}
      >
        Try the Testnet
      </Link>
    </S.Footer>
  </S.Wrapper>
);
