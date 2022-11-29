/* eslint-disable jsx-a11y/anchor-is-valid */
import * as Icons from 'components/Icons';
import { useAnimation } from 'hooks';

import { data } from './data';
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
          {data[0].map((value, i) => (
            <Card
              key={i}
              title={value.title}
              description={value.description}
              icon={value.icon}
              i={0.5 * (i + 1)}
            />
          ))}
        </S.FeaturesFlex>
        <S.FeaturesGrid>
          {data[1].map((value, i) => (
            <Card
              key={i}
              title={value.title}
              description={value.description}
              icon={value.icon}
              i={0.5 * (i + 2)}
            />
          ))}
        </S.FeaturesGrid>
        <S.FeaturesBox>
          {data[2].map((value, i) => (
            <Card
              key={i}
              title={value.title}
              description={value.description}
              icon={value.icon}
              i={0.5 * (i + 3)}
            />
          ))}
        </S.FeaturesBox>
      </S.Features>
      <Listing />
    </S.Wrapper>
  );
};

const AsideLeft = () => {
  const animationProps = useAnimation({ duration: 0.5 });

  return (
    <S.AsideLeft {...animationProps}>
      <Icons.OrderbookPreview />
    </S.AsideLeft>
  );
};

const AsideRight = () => {
  const animationProps = useAnimation({ duration: 1.5 });

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
        <a
          href="https://orderbook-beta.polkadex.trade/"
          target="_blank"
          rel="noreferrer"
        >
          Start trading
        </a>
        <a
          href="https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fmainnet.polkadex.trade#/explorer"
          target="_blank"
          rel="noreferrer"
        >
          Mainnet explorer <Icons.ArrowSingleRight />
        </a>
      </S.Actions>
    </S.AsideRight>
  );
};

const Listing = () => {
  const animationProps = useAnimation({ duration: 0.5 });

  return (
    <S.Listing {...animationProps}>
      <S.ListingWrapper>
        <h2>
          List your token on <strong>Polkadex Orderbook</strong>
        </h2>
        <a href="#">Coming soon!</a>
      </S.ListingWrapper>
      <S.ListingHero>
        <Icons.ListingHero />
      </S.ListingHero>
    </S.Listing>
  );
};
const Card = ({ title, description = null, i, icon }) => {
  const animationProps = useAnimation({ duration: 0.3 * i });
  const IconComponent = Icons[icon];
  return (
    <S.Card {...animationProps}>
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
