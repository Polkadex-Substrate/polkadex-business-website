import * as Icons from 'components/Icons';

import * as S from './styles';

export const TheaBridge = () => {
  return (
    <S.Wrapper>
      <S.Hero>
        <S.HeroWrapper>
          <S.HeroIcon>
            <Icons.SwapCircle />
          </S.HeroIcon>
          <h2>
            <Icons.TheaLogo /> Bridge
          </h2>
          <p>
            Polkadex’s interoperability layer | A decentralized connection to
            other blockchains and assets.
          </p>
        </S.HeroWrapper>
        <S.HeroVideo>
          <S.HeroVideoPreview>
            <Icons.TheaPreview />
          </S.HeroVideoPreview>
          <S.HeroVideoFloat>
            <span>Coming soon!</span>
            <Icons.TheaArrow />
          </S.HeroVideoFloat>
        </S.HeroVideo>
      </S.Hero>
      <S.Features>
        <S.FeaturesHero>
          <p>
            The underlying decentralized technology that makes ‘deposits’ and
            ‘withdrawals’ to and from Polkadex look and feel like they do in a
            CEX. A unique combination of Threshold Signature Scheme (TSS) and
            light client technologies at an unprecedented scale, THEA will first
            connect Polkadex and Ethereum and will continue to add support for
            more blockchains in the future.
          </p>
          <a href="/">Read more</a>
        </S.FeaturesHero>
        <S.FeaturesCards>
          <S.FeaturesCard>
            <Icons.Interoperability />
            <h3>Interoperability</h3>
            <p>
              THEA connects Polkadex to Ethereum and will continue to add
              support for more blockchains in the future.
            </p>
          </S.FeaturesCard>
          <S.FeaturesCard>
            <Icons.DecentralizedBridge />
            <h3>Decentralized bridge</h3>
            <p>
              Thanks to multi-party ECDSA and network validators, THEA is as
              decentralized as the Polkadex network.
            </p>
          </S.FeaturesCard>
          <S.FeaturesCard>
            <Icons.TokenManager />
            <h3>Token manager</h3>
            <p>
              One simple interface to view your assets, use THEA bridge, and see
              your transaction history.
            </p>
          </S.FeaturesCard>
          <S.FeaturesCard>
            <Icons.LowFees />
            <h3>Low fees</h3>
            <p>
              While Ethereum gas fees vary wildly, THEA’s light design means
              lower-than-average gas fees.
            </p>
          </S.FeaturesCard>
        </S.FeaturesCards>
      </S.Features>
    </S.Wrapper>
  );
};
