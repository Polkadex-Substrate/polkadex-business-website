/* eslint-disable jsx-a11y/anchor-is-valid */
import * as Icons from 'components/Icons';

import { data } from './data';
import * as S from './styles';

export const Orderbook = () => {
  return (
    <S.Wrapper>
      <S.Hero>
        <S.AsideRight>
          <S.AsideRightIcon>
            <Icons.ExchangeCircle />
          </S.AsideRightIcon>
          <h2>
            Polkadex <Icons.Orderbook />
          </h2>
          <h4>
            Non-custodial high frequency trading + advanced trading tools.
          </h4>
          <p>
            Polkadex Orderbook is a cutting-edge Layer 2 trusted execution
            environment built on the Polkadex Network.
          </p>
          <S.Actions>
            <a
              href={process.env.ORDERBOOK_LINK}
              target="_blank"
              rel="noreferrer noopener"
            >
              Start trading
            </a>
            <a
              href="https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fpolkadex.public.curie.radiumblock.co%2Fws#/explorer"
              target="_blank"
              rel="noreferrer noopener"
            >
              Mainnet explorer <Icons.ArrowSingleRight />
            </a>
          </S.Actions>
        </S.AsideRight>
        <S.AsideLeft>
          <Icons.OrderbookPreview />
          <div />
        </S.AsideLeft>
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

const Listing = () => {
  return (
    <S.Listing>
      <S.ListingWrapper>
        <h2>
          List your token on <strong>Polkadex Orderbook</strong>
        </h2>
        <a
          href="https://polkadex.notion.site/Listing-on-Polkadex-Orderbook-3e49fcf22d52474da86dfa65135615e9#6bdba3b962ec4040a8557a95507c223e"
          target="_blank"
          rel="noreferrer"
        >
          Listing Guide
        </a>
      </S.ListingWrapper>
      <div />
    </S.Listing>
  );
};
const Card = ({ title, description = null, i, icon }) => {
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
