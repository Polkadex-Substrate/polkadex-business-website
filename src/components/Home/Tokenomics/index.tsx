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
      'No scheduled emissions, no cliff releases, no dilution ahead.',
  },
  {
    value: 'None',
    label: 'VC Vesting Overhang',
    detail:
      'No private-round bags waiting to hit the market.',
  },
];

export const Tokenomics = () => (
  <S.Wrapper id="tokenomicsHighlight">
    <S.Header>
      <span>Tokenomics</span>
      <h2>
        <strong>Fully circulating.</strong> No unlocks ahead.
      </h2>
      <p>
        Most projects still have years of token emissions and VC vesting
        overhang. Polkadex doesn&apos;t. What you see on-chain is what exists —
        no future dilution planned.
      </p>
    </S.Header>

    <S.Metrics>
      {metrics.map((m) => (
        <S.Metric key={m.label}>
          <S.MetricValue>{m.value}</S.MetricValue>
          <S.MetricLabel>{m.label}</S.MetricLabel>
          <S.MetricDetail>{m.detail}</S.MetricDetail>
        </S.Metric>
      ))}
    </S.Metrics>

    <S.Footer>
      <Link href="/tokeneconomics">See full tokenomics</Link>
      <span>PDEX · 20M total supply · Native to Polkadex mainnet</span>
    </S.Footer>
  </S.Wrapper>
);
