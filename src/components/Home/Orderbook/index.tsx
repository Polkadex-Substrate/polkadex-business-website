import { SectionHead } from 'components';
import * as Icons from 'components/Icons';

import * as S from './styles';

// Six punchy differentiators. Kept intentionally tight — one sentence each —
// so the grid reads scannably. Ordered from "why it's different" to "what
// you can build with it."
const features = [
  {
    title: 'Fully on-chain matching',
    description:
      'Every order settles on our sovereign Layer 1. No off-chain matching engine, no trusted operator.',
    icon: 'Faster',
  },
  {
    title: 'HFT-grade speed',
    description:
      'Sub-second block times keep the experience close to a centralized exchange without the custody trade-off.',
    icon: 'Cheaper',
  },
  {
    title: 'Your keys, your crypto',
    description:
      'Non-custodial by design — funds stay in your wallet, no honeypot for hackers.',
    icon: 'YourCrypto',
  },
  {
    title: 'Sleek trading UI',
    description:
      'CEX-grade interface, charts, and order flow — with the transparency of a DEX underneath.',
    icon: 'BetterLooking',
  },
  {
    title: 'Bots & HFT API',
    description:
      'Integrate Hummingbot or plug in your own strategy. Programmatic trading is a first-class use case.',
    icon: 'Bots',
  },
  {
    title: 'Cross-chain, for real',
    description:
      'Bridged assets from Ethereum and beyond via Hyperbridge — verified by consensus, not multisigs.',
    icon: 'Crosschain',
  },
];

export const Orderbook = () => {
  const orderbookLink = process.env.ORDERBOOK_LINK;
  return (
    <S.Wrapper id="orderbook">
      <SectionHead
        eyebrow="Orderbook"
        title={
          <>
            A <strong>fully on-chain</strong> exchange, without the compromises
          </>
        }
        description="Polkadex Orderbook is a non-custodial trading application running on our sovereign Layer 1 chain. High-frequency trading, low fees, self-custody — all in one place."
      />

      <S.Features>
        {features.map((f) => {
          const IconComponent = Icons[f.icon];
          return (
            <S.Feature key={f.title}>
              <S.FeatureIcon>
                {IconComponent ? <IconComponent /> : null}
              </S.FeatureIcon>
              <S.FeatureTitle>{f.title}</S.FeatureTitle>
              <S.FeatureDescription>{f.description}</S.FeatureDescription>
            </S.Feature>
          );
        })}
      </S.Features>

      <S.Footer>
        <a
          className="primary"
          href={orderbookLink}
          target="_blank"
          rel="noreferrer noopener"
        >
          Launch app
        </a>
        <a
          className="secondary"
          href="https://explorer.polkadex.ee"
          target="_blank"
          rel="noreferrer noopener"
        >
          View on mainnet explorer →
        </a>
      </S.Footer>
    </S.Wrapper>
  );
};
