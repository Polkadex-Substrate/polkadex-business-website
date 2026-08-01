import {
  SectionHead,
  staggerChildProps,
  staggerGroupProps,
} from 'components';
import { motion } from 'framer-motion';

import * as S from './styles';

type Mark = 'good' | 'bad' | 'warn' | 'none';
type Row = {
  feature: string;
  orderbook: { mark: Mark; text: string };
  amm: { mark: Mark; text: string };
  bestFor?: boolean;
};

// Most DEX users only know AMMs (Uniswap/PancakeSwap). These tables answer
// "why does an orderbook matter?" — e.g. many swap users don't realize they
// can't place limit orders or stop-losses, so they ride drawdowns with no
// automated exit.
const traderRows: Row[] = [
  {
    feature: 'Price discovery',
    orderbook: { mark: 'good', text: 'Real bids & asks' },
    amm: { mark: 'bad', text: 'Mathematical pricing curve' },
  },
  {
    feature: 'Limit orders',
    orderbook: { mark: 'good', text: 'Yes' },
    amm: { mark: 'bad', text: 'No' },
  },
  {
    feature: 'Market orders',
    orderbook: { mark: 'good', text: 'Yes' },
    amm: { mark: 'good', text: 'Yes' },
  },
  {
    feature: 'Stop-loss / Take-profit',
    orderbook: { mark: 'good', text: 'Yes' },
    amm: { mark: 'bad', text: 'No' },
  },
  {
    feature: 'Slippage on large trades',
    orderbook: { mark: 'good', text: 'Lower (with liquidity)' },
    amm: { mark: 'bad', text: 'Higher' },
  },
  {
    feature: 'Trading experience',
    orderbook: { mark: 'good', text: 'Similar to a CEX' },
    amm: { mark: 'warn', text: 'Simple swaps only' },
  },
  {
    feature: 'Best for',
    orderbook: { mark: 'none', text: 'Active traders' },
    amm: { mark: 'none', text: 'Casual users' },
    bestFor: true,
  },
];

const lpRows: Row[] = [
  {
    feature: 'Impermanent loss',
    orderbook: { mark: 'good', text: 'None' },
    amm: { mark: 'bad', text: 'Possible' },
  },
  {
    feature: 'Control over pricing',
    orderbook: { mark: 'good', text: 'Full control' },
    amm: { mark: 'bad', text: 'Determined by the AMM' },
  },
  {
    feature: 'Capital allocation',
    orderbook: { mark: 'good', text: 'Place orders where needed' },
    amm: { mark: 'bad', text: 'Entire range or predefined ranges' },
  },
  {
    feature: 'Market making strategies',
    orderbook: { mark: 'good', text: 'Advanced' },
    amm: { mark: 'warn', text: 'Limited' },
  },
  {
    feature: 'Rewards',
    orderbook: { mark: 'none', text: 'Spread + incentives' },
    amm: { mark: 'none', text: 'Trading fees + incentives' },
  },
  {
    feature: 'Best for',
    orderbook: { mark: 'none', text: 'Professional market makers' },
    amm: { mark: 'none', text: 'Passive liquidity providers' },
    bestFor: true,
  },
];

const MARK_GLYPH: Record<Exclude<Mark, 'none'>, string> = {
  good: '✓',
  bad: '✕',
  warn: '⚠',
};

const Cell = ({ mark, text }: { mark: Mark; text: string }) => (
  <span className="cell">
    {mark !== 'none' && (
      <span className={`mark ${mark}`} aria-hidden="true">
        {MARK_GLYPH[mark]}
      </span>
    )}
    <span className="text">{text}</span>
  </span>
);

const Table = ({
  title,
  colA,
  colB,
  rows,
}: {
  title: string;
  colA: string;
  colB: string;
  rows: Row[];
}) => (
  <S.TableCard as={motion.div} {...staggerChildProps}>
    <h3>{title}</h3>
    <table>
      <thead>
        <tr>
          <th>Feature</th>
          <th>{colA}</th>
          <th>{colB}</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((r) => (
          <tr key={r.feature} className={r.bestFor ? 'bestFor' : undefined}>
            <td className="feature">{r.feature}</td>
            <td>
              <Cell {...r.orderbook} />
            </td>
            <td>
              <Cell {...r.amm} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </S.TableCard>
);

export const OrderbookVsAmm = () => (
  <S.Wrapper id="orderbookVsAmm">
    <SectionHead
      eyebrow="Orderbook vs AMM"
      title={
        <>
          Why an <strong>orderbook</strong> beats a swap
        </>
      }
      description="If you've only used Uniswap or PancakeSwap, you've been trading without limit orders, stop-losses, or real price discovery. Here's what changes with a real orderbook that settles on-chain."
    />

    <S.Tables as={motion.div} {...staggerGroupProps}>
      <Table
        title="For Traders"
        colA="Orderbook"
        colB="AMM"
        rows={traderRows}
      />
      <Table
        title="For Liquidity Providers"
        colA="Orderbook (Market Maker)"
        colB="AMM (Liquidity Provider)"
        rows={lpRows}
      />
    </S.Tables>
  </S.Wrapper>
);
