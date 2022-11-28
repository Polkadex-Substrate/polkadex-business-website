import * as Icons from 'components/Icons';
import Typewriter from 'typewriter-effect';

import * as S from './styles';

export const Hero = () => {
  return (
    <S.Wrapper id="hero">
      <S.Main>
        <S.Content>
          <S.Container>
            <h1>
              <strong>
                <Typewriter
                  options={{
                    strings: ['Better', 'Easier', 'Cheaper', 'More Advanced'],
                    autoStart: true,
                    loop: true,
                    cursor: '|',
                  }}
                />
              </strong>
              Decentralized Trading
            </h1>
            <p>
              Polkadex is a fully non-custodial peer-to-peer orderbook-based
              cryptocurrency exchange for the DeFi ecosystem built on Substrate.
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
          </S.Container>
          <S.HeroImage>
            <S.HeroIllustration>
              <Icons.HomeHero />
            </S.HeroIllustration>
            <S.HeroImageAside>
              <span>Coming soon!</span>
              <Icons.BadgeAppStore />
              <Icons.BadgePlayStore />
            </S.HeroImageAside>
          </S.HeroImage>
        </S.Content>
      </S.Main>
    </S.Wrapper>
  );
};
