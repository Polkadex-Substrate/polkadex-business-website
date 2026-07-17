import { SectionHead, staggerChildProps, staggerGroupProps } from 'components';
import * as Icons from 'components/Icons';
import {
  animate,
  motion,
  useInView,
  useReducedMotion,
} from 'framer-motion';
import { useStakingStats } from 'hooks/useStakingStats';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

import * as S from './styles';

/**
 * Counts up from 0 to the target APY when it scrolls into view.
 * Accepts strings like "14.2%" — non-numeric input renders as-is.
 */
const AnimatedApy = ({ value }: { value: string }) => {
  const target = parseFloat(value);
  const suffix = value.replace(/^[\d.]+/, ''); // e.g. "%"
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const reduced = useReducedMotion();
  const [display, setDisplay] = useState(reduced ? value : `0${suffix}`);

  useEffect(() => {
    if (reduced || !inView || Number.isNaN(target)) return undefined;
    const controls = animate(0, target, {
      duration: 1.4,
      ease: [0.25, 0.4, 0.25, 1],
      onUpdate: (v) => setDisplay(`${v.toFixed(1)}${suffix}`),
      onComplete: () => setDisplay(value),
    });
    return () => controls.stop();
  }, [inView, reduced, target, suffix, value]);

  if (Number.isNaN(target)) return <span ref={ref}>{value}</span>;
  return <span ref={ref}>{display}</span>;
};

const wallets = [
  { title: 'Nova Wallet', img: 'nova', href: 'https://novawallet.io/' },
  { title: 'Talisman', icon: 'TalismanWallet', href: 'https://talisman.xyz/' },
  { title: 'SubWallet', img: 'subwallet', href: 'https://subwallet.app/' },
  { title: 'Fearless', img: 'fearless', href: 'https://fearlesswallet.io/' },
  {
    title: 'Polkadot.js',
    icon: 'PolkadotJsWallet',
    href: 'https://polkadot.js.org/extension/',
  },
];

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
        <S.ApyNumber>
          {live.loading ? (
            <S.Skeleton aria-label="Loading APY" />
          ) : (
            <AnimatedApy value={displayedApy} />
          )}
        </S.ApyNumber>
        <S.ApyCaption>
          Trailing 30-day nominator return. Live from the Polkadex Explorer.
        </S.ApyCaption>
      </S.ApyBanner>

      <S.Benefits as={motion.div} {...staggerGroupProps}>
        {benefits.map((b) => (
          <S.Benefit as={motion.div} {...staggerChildProps} key={b.title}>
            <h3>{b.title}</h3>
            <p>{b.description}</p>
          </S.Benefit>
        ))}
      </S.Benefits>

      <S.WalletsBlock>
        <h4>Compatible wallets</h4>
        <S.WalletsGrid>
          {wallets.map((w) => {
            const IconComponent = w.icon
              ? (Icons as Record<string, React.FC>)[w.icon]
              : null;
            return (
              <S.WalletCard
                key={w.title}
                href={w.href}
                target="_blank"
                rel="noreferrer noopener"
              >
                {IconComponent ? (
                  <IconComponent />
                ) : (
                  <img src={`/img/wallets/${w.img}.png`} alt={`${w.title} logo`} />
                )}
                <span>{w.title}</span>
              </S.WalletCard>
            );
          })}
        </S.WalletsGrid>
      </S.WalletsBlock>

      <S.Footer>
        <Link href="/staking#howtostake">Start staking →</Link>
      </S.Footer>
    </S.Wrapper>
  );
};
