import * as Icons from 'components/Icons';

import * as S from './styles';

export const Orderbook = () => {
  return (
    <S.Wrapper>
      <S.Hero>
        <S.AsideLeft>
          <Icons.OrderbookPreview />
        </S.AsideLeft>
        <S.AsideRight>
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
            <a href="/">Mainnet explorer</a>
          </S.Actions>
        </S.AsideRight>
      </S.Hero>
      <S.Features>
        <S.FeaturesFlex>
          <S.Card>
            <div>
              <h3>Faster</h3>
              <p>A DEX that’s as fast as (if not faster than) CEXs.</p>
            </div>
            <div>
              <Icons.Faster />
            </div>
          </S.Card>
          <S.Card>
            <div>
              <h3>Cheaper</h3>
            </div>
            <div>
              <Icons.Cheaper />
            </div>
          </S.Card>
        </S.FeaturesFlex>
        <S.FeaturesGrid>
          <S.Card>
            <div>
              <h3>Better looking</h3>
              <p>
                All the functionality of a CEX combined with the sleek,
                minimalist user interface design of a DEX.
              </p>
            </div>
            <div>
              <Icons.BetterLooking />
            </div>
          </S.Card>
          <S.Card>
            <div>
              <h3>Your keys, your crypto</h3>
              <p>
                Non-custodial means there’s no centralized honeypot for hackers
                to go after. In other words, your funds stay secure and remain
                in your control at all times.
              </p>
            </div>
            <div>
              <Icons.YourCrypto />
            </div>
          </S.Card>
          <S.Card>
            <div>
              <h3>Bots</h3>
              <p>
                Add on-chain trading bots or integrate your favorite trading bot
                provider to automate trading!
              </p>
            </div>
            <div>
              <Icons.Bots />
            </div>
          </S.Card>
        </S.FeaturesGrid>
        <S.FeaturesBox>
          <S.Card>
            <div>
              <h3>Delegate</h3>
              <p>
                Algorithm or fund manager? Delegate your asset trading to a
                third party while keeping control of your funds. Sit back and
                watch your profits roll in.
              </p>
            </div>
            <div>
              <Icons.Delegate />
            </div>
          </S.Card>
          <S.Card>
            <div>
              <h3>Cross-chain for real</h3>
              <p>Polkadex parachain + Thea bridge .</p>
            </div>
            <div>
              <Icons.Crosschain />
            </div>
          </S.Card>
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
