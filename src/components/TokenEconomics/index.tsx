import {
  SectionHead,
  staggerChildProps,
  staggerGroupProps,
} from 'components';
import { motion } from 'framer-motion';
import { IHomeTranslations } from 'translations';

import { TokenomicsCharts } from './Charts';
import * as S from './styles';

type Props = Pick<IHomeTranslations, 'tokenEconomics'>;

// Headline metrics — the strongest tokenomics story Polkadex has.
const highlights = [
  { value: '100%', label: 'Supply Unlocked' },
  { value: '0%', label: 'Future Token Unlocks' },
  { value: 'None', label: 'VC Vesting Overhang' },
];

/**
 * Tokenomics detail page — rebuilt to match the current design language:
 * headline metric cards + an animated allocation-bar breakdown, replacing
 * the old absolutely-positioned bubble chart.
 *
 * The allocation percentages reflect the original TGE distribution; every
 * tranche is fully unlocked today (see the note below the bars).
 */
const TokenEconomics = ({
  totalSupply,
  cards,
}: Props['tokenEconomics']) => {
  // Sort largest allocation first for scannability.
  const allocations = [...cards].sort(
    (a, b) => parseFloat(b.percent) - parseFloat(a.percent),
  );

  return (
    <S.Wrapper id="tokenEconomics">
      <SectionHead
        eyebrow="Tokenomics"
        titleAs="h1"
        title={
          <>
            <strong>Fully circulating.</strong> No unlocks ahead.
          </>
        }
        description="Every PDEX in existence is already circulating. No unlock schedule, no cliff releases, no private-round bags waiting to hit the market. The only new PDEX comes from staking rewards that secure the network."
      />

      <S.Highlights as={motion.div} {...staggerGroupProps}>
        {highlights.map((h) => (
          <S.Highlight as={motion.div} {...staggerChildProps} key={h.label}>
            <span className="value">{h.value}</span>
            <span className="label">{h.label}</span>
          </S.Highlight>
        ))}
      </S.Highlights>

      <S.SupplyRow>
        <div>
          <span className="label">{totalSupply.title}</span>
          <span className="value">{totalSupply.subTitle}</span>
        </div>
        <div>
          <span className="label">Circulating</span>
          <span className="value">100% of supply</span>
        </div>
        <div>
          <span className="label">Network</span>
          <span className="value">Native to Polkadex mainnet</span>
        </div>
      </S.SupplyRow>

      <TokenomicsCharts />

      <S.AllocationsHead>
        <h2>Original distribution</h2>
        <p>
          How the 20,000,000 PDEX were allocated at the token generation
          event. All tranches have completed their vesting —{' '}
          <strong>everything below is fully unlocked today.</strong>
        </p>
      </S.AllocationsHead>

      <S.Allocations as={motion.div} {...staggerGroupProps}>
        {allocations.map((a) => (
          <S.Allocation as={motion.div} {...staggerChildProps} key={a.title}>
            <S.AllocationHeader>
              <span className="title">{a.title}</span>
              <span className="numbers">
                <strong>{a.percent}</strong> · {a.tokens}
              </span>
            </S.AllocationHeader>
            <S.BarTrack>
              <S.BarFill
                as={motion.div}
                initial={{ width: 0 }}
                whileInView={{ width: `${parseFloat(a.percent)}%` }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.9, ease: [0.25, 0.4, 0.25, 1] }}
              />
            </S.BarTrack>
            {a.description ? (
              <S.AllocationNote>
                Original vesting: {a.description}
              </S.AllocationNote>
            ) : null}
          </S.Allocation>
        ))}
      </S.Allocations>
    </S.Wrapper>
  );
};

export default TokenEconomics;
