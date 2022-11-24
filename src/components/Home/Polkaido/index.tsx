import * as Icons from 'components/Icons';

import * as S from './styles';

export const Polkaido = () => {
  return (
    <S.Wrapper>
      <S.Hero>
        <S.AsideLeft>
          <img src="/img/polkaidoPreview1.png" alt="Polkaido platform mockup" />
        </S.AsideLeft>
        <S.AsideRight>
          <S.AsideRightIcon>
            <Icons.InitialOfferCircle />
          </S.AsideRightIcon>
          <h2>
            <Icons.PolkaidoLogo /> Platform
          </h2>
          <p>
            Currently, IDOs are exclusive, expensive (for project teams and
            investors alike), and over-reliant on manual processes.
            <br />
            <br />
            PolkaIDO is a truly decentralized IDO platform which makes IDOs
            fair, inclusive, and affordable.
          </p>
          <S.Actions>
            <a href="/">Lean more</a>
          </S.Actions>
        </S.AsideRight>
      </S.Hero>
      <S.Features>
        <S.FeaturesCards>
          <S.FeaturesCard>
            <Icons.CreateRound />
            <h3>Create a round</h3>
            <p>
              PolkaIDO helps anyone create their own tokens and token sales in
              few seconds.
            </p>
          </S.FeaturesCard>
          <S.FeaturesCard>
            <Icons.DistributeTokens />
            <h3>Distribute tokens</h3>
            <p>
              Tokens are automatically distributed to all investors according to
              your release schedule
            </p>
          </S.FeaturesCard>
          <S.FeaturesCard>
            <Icons.ListOrderbook />
            <h3>List on Orderbook</h3>
            <p>
              The tokens will be tradeable in Polkadex Orderbook. Hello
              non-custodial CEX-like trading!
            </p>
          </S.FeaturesCard>
          <S.FeaturesCard>
            <Icons.ProductImprovements />
            <h3>Product improvements</h3>
            <p>
              The tokens will allow users to participate and vote for
              suggestions or feedback to improve your product.
            </p>
          </S.FeaturesCard>
        </S.FeaturesCards>
      </S.Features>
    </S.Wrapper>
  );
};
