import styled, { css, keyframes } from 'styled-components';

/**
 * Lightweight animated orderbook — bid/ask depth bars breathe, rows pulse
 * as if orders are flowing. Pure CSS (no JS timers), pauses for
 * reduced-motion users. Gives the section a "live product" feel without
 * shipping a video or Lottie asset.
 */

const rows = [
  { side: 'ask', price: '4.219', amount: '1,204', depth: 72, delay: 0.0 },
  { side: 'ask', price: '4.214', amount: '863', depth: 48, delay: 1.1 },
  { side: 'ask', price: '4.208', amount: '2,410', depth: 90, delay: 0.4 },
  { side: 'ask', price: '4.203', amount: '512', depth: 30, delay: 1.6 },
  { side: 'spread', price: '4.201', amount: '', depth: 0, delay: 0 },
  { side: 'bid', price: '4.198', amount: '1,876', depth: 84, delay: 0.8 },
  { side: 'bid', price: '4.192', amount: '946', depth: 52, delay: 0.2 },
  { side: 'bid', price: '4.187', amount: '3,020', depth: 96, delay: 1.3 },
  { side: 'bid', price: '4.181', amount: '624', depth: 38, delay: 0.6 },
] as const;

export const AnimatedOrderbookMock = () => (
  <Board aria-hidden="true">
    <Header>
      <span>Price (USDT)</span>
      <span>Amount (PDEX)</span>
    </Header>
    {rows.map((r, i) =>
      r.side === 'spread' ? (
        <Spread key={i}>
          <strong>{r.price}</strong>
          <small>Spread 0.05%</small>
        </Spread>
      ) : (
        <Row key={i} side={r.side} depth={r.depth} delay={r.delay}>
          <span className="price">{r.price}</span>
          <span className="amount">{r.amount}</span>
        </Row>
      ),
    )}
  </Board>
);

const breathe = keyframes`
  0%, 100% { transform: scaleX(1); opacity: 0.85; }
  50% { transform: scaleX(0.82); opacity: 1; }
`;

const flash = keyframes`
  0%, 92%, 100% { background-color: transparent; }
  94% { background-color: rgba(255, 255, 255, 0.05); }
`;

const Board = styled.div`
  ${({ theme }) => css`
    max-width: 46rem;
    margin: 0 auto 5rem;
    padding: 2rem;
    background: ${theme.colors.secondaryBackgroundOpacity};
    border: 1px solid ${theme.colors.secondaryBackground};
    border-radius: 1.6rem;
    backdrop-filter: blur(20px);
    font-variant-numeric: tabular-nums;
  `}
`;

const Header = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    font-size: 1.15rem;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    opacity: 0.55;
    padding: 0 0.6rem 1rem;
  `}
`;

const Row = styled.div<{ side: 'ask' | 'bid'; depth: number; delay: number }>`
  ${({ theme, side, depth, delay }) => css`
    position: relative;
    display: flex;
    justify-content: space-between;
    padding: 0.55rem 0.6rem;
    font-size: 1.35rem;
    border-radius: 0.4rem;
    overflow: hidden;

    @media (prefers-reduced-motion: no-preference) {
      animation: ${flash} 6s linear infinite;
      animation-delay: ${delay}s;
    }

    ::before {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      width: ${depth}%;
      background: ${side === 'ask' ? '#FF6B6B22' : `${theme.colors.green}22`};
      transform-origin: right center;
      @media (prefers-reduced-motion: no-preference) {
        animation: ${breathe} ${4 + delay}s ease-in-out infinite;
        animation-delay: ${delay}s;
      }
    }

    .price {
      position: relative;
      color: ${side === 'ask' ? '#FF6B6B' : theme.colors.green};
      font-weight: 600;
    }
    .amount {
      position: relative;
      opacity: 0.8;
    }
  `}
`;

const Spread = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    padding: 0.9rem 0.6rem;
    margin: 0.3rem 0;
    border-top: 1px solid ${theme.colors.secondaryBackground};
    border-bottom: 1px solid ${theme.colors.secondaryBackground};
    strong {
      font-size: 1.8rem;
      font-weight: 700;
      color: ${theme.colors.text};
    }
    small {
      font-size: 1.1rem;
      opacity: 0.55;
    }
  `}
`;
