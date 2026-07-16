import { SectionHead } from 'components';
import { useStakingStats } from 'hooks/useStakingStats';
import Link from 'next/link';

import * as S from './styles';

const benefits = [
  {
    title: 'Passive income',
    description:
      'Rewards accrue every era (~24 hours) and compound automatically when you claim them.',
  },
  {
    title: 'Non-custodial',
    description:
      'Your PDEX never leaves your wallet. Nominate a validator without giving up control of your keys.',
  },
  {
    title: 'Secures the network',
    description:
      'Staking helps validate blocks and keeps Polkadex mainnet decentralized and trust-minimized.',
  },
];

export const Staking = ({ apy = '' }: { apy?: string }) => {
  const live = useStakingStats();
  // The `apy` prop remains as a manual override; otherwise pull live from
  // the useStakingStats hook (falls back to on-chain snapshot).
  const displayedApy = apy || live.apy;

  return (
    <S.Wrapper id="staking">
      <SectionHead
        eyebrow="Staking"
        title={
          <>
            Earn <strong>passive rewards</strong> on your PDEX
          </>
        }
        description="Nominate a validator and start earning within 24 hours. Rewards are paid every era, and your PDEX never leaves your wallet."
      />

      <S.ApyBanner>
        <small>Current realized APY</small>
        <S.ApyNumber>{displayedApy}</S.ApyNumber>
        <S.ApyCaption>
          Trailing 30-day nominator return. Live from the Polkadex Explorer.
        </S.ApyCaption>
      </S.ApyBanner>

      <S.Benefits>
        {benefits.map((b) => (
          <S.Benefit key={b.title}>
            <h3>{b.title}</h3>
            <p>{b.description}</p>
          </S.Benefit>
        ))}
      </S.Benefits>

      <S.Footer>
        <Link href="/staking#howtostake">Start staking →</Link>
      </S.Footer>
    </S.Wrapper>
  );
};
