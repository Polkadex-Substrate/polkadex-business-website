import { staggerChildProps, staggerGroupProps } from 'components';
import { motion } from 'framer-motion';
import Link from 'next/link';

import * as S from './styles';

const metrics = [
  {
    value: '100%',
    label: 'Supply Unlocked',
    detail: 'Every PDEX in existence is already circulating today.',
  },
  {
    value: '0%',
    label: 'Future Token Unlocks',
    detail:
      'No unlock schedule, no cliff releases, no dilution events ahead.',
  },
  {
    value: 'None',
    label: 'VC Vesting Overhang',
    detail:
      'No private-round bags waiting to hit the market.',
  },
];

export const Tokenomics = () => (
  <S.Wrapper id="tokenomics">
    <S.Header>
      <span>Tokenomics</span>
      <h2>
        <strong>Fully circulating.</strong> No unlocks ahead.
      </h2>
      <p>
        Most projects still have years of token unlocks and VC vesting
        overhang. Polkadex doesn&apos;t. What you see on-chain is what exists,
        and the only new PDEX comes from staking rewards.
      </p>
    </S.Header>

    <S.Metrics as={motion.div} {...staggerGroupProps}>
      {metrics.map((m) => (
        <S.Metric as={motion.div} {...staggerChildProps} key={m.label}>
          <S.MetricValue>{m.value}</S.MetricValue>
          <S.MetricLabel>{m.label}</S.MetricLabel>
          <S.MetricDetail>{m.detail}</S.MetricDetail>
        </S.Metric>
      ))}
    </S.Metrics>

    <S.Footer>
      <Link href="/tokenomics">See full tokenomics</Link>
      <span>PDEX · 20M genesis supply · Native to Polkadex mainnet</span>
    </S.Footer>
  </S.Wrapper>
);
