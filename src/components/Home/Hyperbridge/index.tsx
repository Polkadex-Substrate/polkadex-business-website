import { SectionHead, staggerChildProps, staggerGroupProps } from 'components';
import * as Icons from 'components/Icons';
import { motion } from 'framer-motion';

import * as S from './styles';

const cards = [
  {
    title: 'Verified by consensus',
    description:
      'Every transfer is verified by cryptographic consensus and state proofs — not trusted relayers or multisig committees.',
    icon: 'SwapCircle',
  },
  {
    title: 'Security equal to the chains',
    description:
      'Transfers between Polkadex and Ethereum inherit the security of both chains. No middleman to trust or hack.',
    icon: 'ExchangeCircle',
  },
  {
    title: 'Real cross-chain, not wrapped',
    description:
      'Native cross-chain messaging via ISMP. Bridged assets act like the real thing on Polkadex, not synthetic IOUs.',
    icon: 'Crosschain',
  },
];

export const Hyperbridge = () => (
  <S.Wrapper id="hyperbridge">
    <SectionHead
      eyebrow="Cross-chain"
      title={
        <>
          <strong>Trust-minimized</strong> transfers, verified end-to-end
        </>
      }
      description="Deposits and withdrawals between Polkadex and other chains are powered by Hyperbridge — a cryptographic interoperability protocol. No relayers, no multisigs, no honeypots."
    />

    <S.Grid as={motion.div} {...staggerGroupProps}>
      {cards.map((c) => {
        const IconComponent = Icons[c.icon];
        return (
          <S.Card as={motion.div} {...staggerChildProps} key={c.title}>
            <S.IconWrap>{IconComponent ? <IconComponent /> : null}</S.IconWrap>
            <h3>{c.title}</h3>
            <p>{c.description}</p>
          </S.Card>
        );
      })}
    </S.Grid>

    <S.Footer>
      <a
        href="https://hyperbridge.network"
        target="_blank"
        rel="noreferrer noopener"
      >
        Learn more about Hyperbridge →
      </a>
    </S.Footer>
  </S.Wrapper>
);
