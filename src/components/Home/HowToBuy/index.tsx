import { staggerChildProps, staggerGroupProps } from 'components';
import { motion } from 'framer-motion';

import * as S from './styles';

const steps = [
  {
    number: '1',
    title: 'Set up a wallet',
    description:
      'PDEX is native to Polkadex mainnet. Install a Polkadot-compatible wallet — Talisman, SubWallet, PolkaGate, or Polkadot.js — and create an account.',
    links: [
      { label: 'Talisman', href: 'https://talisman.xyz' },
      { label: 'SubWallet', href: 'https://subwallet.app' },
      { label: 'PolkaGate', href: 'https://polkagate.xyz' },
    ],
  },
  {
    number: '2',
    title: 'Swap into native PDEX',
    description:
      'Head to BuyPDEX.com and swap USDC, ETH, or USDT directly into native PDEX. Fully on-chain — no sign-up, no KYC, no CEX account required.',
    links: [{ label: 'BuyPDEX.com', href: 'https://buypdex.com' }],
  },
  {
    number: '3',
    title: 'Put it to work',
    description:
      'Stake PDEX and earn passive rewards paid every era (~24 hours), or trade on the Polkadex Orderbook once mainnet trading launches.',
    links: [
      { label: 'Stake PDEX', href: '/staking' },
      { label: 'View Explorer', href: 'https://explorer.polkadex.ee' },
    ],
  },
];

export const HowToBuy = () => (
  <S.Wrapper id="howToBuy">
    <S.Header>
      <span>Get PDEX</span>
      <h2>
        Three steps to <strong>own PDEX</strong>
      </h2>
      <p>
        Get native PDEX directly on-chain — no exchange account, no waiting
        periods, no intermediaries.
      </p>
    </S.Header>

    <S.Steps as={motion.div} {...staggerGroupProps}>
      {steps.map((s) => (
        <S.Step as={motion.div} {...staggerChildProps} key={s.number}>
          <S.StepNumber>{s.number}</S.StepNumber>
          <S.StepTitle>{s.title}</S.StepTitle>
          <S.StepDescription>{s.description}</S.StepDescription>
          <S.StepLinks>
            {s.links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target={l.href.startsWith('http') ? '_blank' : undefined}
                rel={l.href.startsWith('http') ? 'noreferrer' : undefined}
              >
                {l.label}
              </a>
            ))}
          </S.StepLinks>
        </S.Step>
      ))}
    </S.Steps>

    <S.Note>
      <strong>On-chain from day one.</strong> With the Polkadex mainnet live,
      users acquire native PDEX directly on-chain — the fastest path into the
      network, and the only version that qualifies for staking rewards and
      governance participation.
    </S.Note>
  </S.Wrapper>
);
