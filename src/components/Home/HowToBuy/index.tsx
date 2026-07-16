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
      'Head to BuyPDEX.com and swap USDC, ETH, or USDT directly into native PDEX. No sign-up, no KYC, no CEX account required.',
    links: [{ label: 'BuyPDEX.com', href: 'https://buypdex.com' }],
  },
  {
    number: '3',
    title: 'Put it to work',
    description:
      'Stake PDEX and earn passive rewards paid every era (~24 hours), or trade on the Polkadex Orderbook once mainnet trading launches.',
    links: [
      { label: 'Stake PDEX', href: '/staking' },
      { label: 'Try the Orderbook', href: 'https://explorer.polkadex.ee' },
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
        Native PDEX is no longer listed on centralized exchanges. Swap into it
        directly on-chain — no exchange account, no waiting periods.
      </p>
    </S.Header>

    <S.Steps>
      {steps.map((s) => (
        <S.Step key={s.number}>
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
      <strong>Why direct swap?</strong> PDEX has been delisted from centralized
      exchanges. Native PDEX on Polkadex mainnet is the only version that
      qualifies for staking rewards and governance. BuyPDEX.com is the fastest
      path in.
    </S.Note>
  </S.Wrapper>
);
