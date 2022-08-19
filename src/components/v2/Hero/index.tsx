import { AvailableMessage } from 'components/AvailableMessage';
import * as Icons from 'components/Icons';
import { isAndroid, isIOS } from 'react-device-detect';
import Typewriter from 'typewriter-effect';

import * as S from './styles';

export const Hero = () => {
  const isDevice = isAndroid || isIOS;
  return (
    <S.Wrapper id="hero">
      <S.Main>
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
            Polkadex is a fully decentralized peer-to-peer orderbook-based
            cryptocurrency exchange for the DeFi ecosystem built on Substrate.
          </p>
          <S.Actions>
            <a href="/">Start trading</a>
            <a href="/">Mainnet explorer</a>
          </S.Actions>
          <S.DownloadLinksContent>
            <span>Coming soon</span>
            <S.DownloadLinks>
              <a href="#">
                <Icons.Apple />
                App Store
              </a>
              <a href="#">
                <Icons.Android />
                Google Play
              </a>
            </S.DownloadLinks>
          </S.DownloadLinksContent>
        </S.Container>
        <S.HeroImage>
          <img src="/img/hero.png" alt="Orderbook mockup" />
        </S.HeroImage>
      </S.Main>
    </S.Wrapper>
  );
};
