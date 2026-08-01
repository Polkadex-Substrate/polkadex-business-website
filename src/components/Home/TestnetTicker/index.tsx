import Link from 'next/link';
import { track } from 'utils/analytics';

import * as S from './styles';

/**
 * Thin status strip at the top of the homepage — visible "pulse" that the
 * project is alive. Items are qualitative statuses (all true today) rather
 * than fabricated metrics.
 *
 * TODO(api): when the testnet app exposes counters (wallets connected,
 * transfers completed), replace the static items with live numbers via a
 * hook like useStakingStats. Ping the app team for the endpoint.
 */
const items = [
  { label: 'Testnet', value: 'Live until Sep 30', live: true },
  { label: 'Cross-chain via Hyperbridge', value: 'Active' },
  { label: 'Faucet', value: 'Open' },
  { label: 'Mainnet relaunch', value: 'November 2026' },
];

export const TestnetTicker = () => (
  <S.Wrapper>
    <S.Items>
      {items.map((item) => (
        <S.Item key={item.label}>
          {item.live && <S.LiveDot aria-hidden="true" />}
          <span className="label">{item.label}</span>
          <span className="value">{item.value}</span>
        </S.Item>
      ))}
      <S.Item
        as={Link}
        href="/testnet-guide"
        className="link"
        onClick={() => track('CTA: Try Testnet', { placement: 'ticker' })}
      >
        <span className="value">Join in →</span>
      </S.Item>
    </S.Items>
  </S.Wrapper>
);
