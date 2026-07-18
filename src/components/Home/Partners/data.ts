// Eight real, active partners — 2 rows of 4. Pruned per community feedback:
// fewer-but-genuine beats noise, and dropping inactive Polkadot-ecosystem
// projects (Acala, Parallel, Bifrost, Equilibrium, Ajuna, Kylix,
// Polkastarter, Cere) supports the independent-L1 positioning.
// `lightBg` renders the logo on a light chip — for marks that vanish
// against the dark background (e.g. Hyperbridge).
export const data = [
  [
    // White wordmark (mark + "Hyperbridge" text) — reads instantly on the
    // dark card, no light chip needed.
    { img: 'hyperbridge', alt: 'Hyperbridge logo' },
    { img: 'tradingView', alt: 'TradingView logo' },
    { icon: 'Hummingbot' },
    { icon: 'Substrate' },
  ],
  [
    { icon: 'Certik' },
    { img: 'subscan', alt: 'Subscan logo' },
    { icon: 'Onfinality' },
    { icon: 'Gsr' },
  ],
];
