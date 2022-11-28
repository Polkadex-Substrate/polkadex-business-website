import * as Icons from 'components/Icons';
import { Variants } from 'framer-motion';
import useAnimation from 'hooks/useAnimation';

import * as S from './styles';

export const Orderbook = () => {
  return (
    <S.Wrapper>
      <S.Hero>
        <AsideLeft />
        <AsideRight />
      </S.Hero>
      <S.Features>
        <S.FeaturesFlex>
          <Card
            title="Faster"
            description="A DEX that’s as fast as (if not faster than) CEXs."
            icon="Faster"
            i={0.3}
          />
          <Card title="Cheaper" icon="Cheaper" i={0.7} />
        </S.FeaturesFlex>
        <S.FeaturesGrid>
          <Card
            title="Better looking"
            description="All the functionality of a CEX combined with the sleek,
                minimalist user interface design of a DEX."
            icon="BetterLooking"
            i={1.1}
          />
          <Card
            title="Your keys, your crypto"
            description="Non-custodial means there’s no centralized honeypot for hackers
                to go after. In other words, your funds stay secure and remain
                in your control at all times."
            icon="YourCrypto"
            i={1.5}
          />
          <Card
            title="Bots"
            description="Add on-chain trading bots or integrate your favorite trading bot
                provider to automate trading!"
            icon="Bots"
            i={1.9}
          />
        </S.FeaturesGrid>
        <S.FeaturesBox>
          <Card
            title="Delegate"
            description="Algorithm or fund manager? Delegate your asset trading to a
                third party while keeping control of your funds. Sit back and
                watch your profits roll in."
            icon="Delegate"
            i={2.3}
          />
          <Card
            title="Cross-chain for real"
            description="Polkadex parachain + Thea bridge."
            icon="Crosschain"
            i={2.7}
          />
        </S.FeaturesBox>
      </S.Features>
      <S.Listing>
        <S.ListingWrapper>
          <h2>
            List your token on <strong>Polkadex Orderbook</strong>
          </h2>
          <a href="/">Coming soon!</a>
        </S.ListingWrapper>
        <S.ListingHero>
          <Icons.ListingHero />
        </S.ListingHero>
      </S.Listing>
    </S.Wrapper>
  );
};

const variants: Variants = {
  initial: { opacity: 0, translateY: '8rem' },
  final: { opacity: 1, translateY: 0 },
};

const AsideLeft = () => {
  const animationProps = useAnimation({ variants, duration: 0.5 });

  return (
    <S.AsideLeft {...animationProps}>
      <Icons.OrderbookPreview />
    </S.AsideLeft>
  );
};

const AsideRight = () => {
  const animationProps = useAnimation({ variants, duration: 1.5 });

  return (
    <S.AsideRight {...animationProps}>
      <S.AsideRightIcon>
        <Icons.ExchangeCircle />
      </S.AsideRightIcon>
      <h2>
        Polkadex <Icons.Orderbook />
      </h2>
      <p>
        Non-custodial high frequency trading + advanced trading tools.
        <br />
        <br />
        Polkadex Orderbook is a cutting-edge Layer 2 trusted execution
        environment built on the Polkadex Network.
      </p>
      <S.Actions>
        <a href="/">Start trading</a>
        <a href="/">
          Mainnet explorer <Icons.ArrowSingleRight />
        </a>
      </S.Actions>
    </S.AsideRight>
  );
};

const Card = ({ title, description = null, i, icon }) => {
  // const animationProps = useAnimation({ variants, duration: 0.5 * i });

  const IconComponent = Icons[icon];
  return (
    <S.Card>
      <div>
        <h3>{title}</h3>
        {description && <p>{description}</p>}
      </div>
      <div>
        <IconComponent />
      </div>
    </S.Card>
  );
};
