import * as Icons from 'components/Icons';

import * as S from './styles';

export const Hero = () => {
  return (
    <S.Wrapper id="hero">
      <S.Main>
        <S.Container>
          <h1>
            <strong>Better </strong> Decentralized Trading
          </h1>
          <p>
            Polkadex is a fully decentralized peer-to-peer orderbook-based
            cryptocurrency exchange for the DeFi ecosystem built on Substrate.
          </p>
          <S.Actions>
            <a href="/">Start Trading</a>
            <a href="/">Mainnet Explorer</a>
          </S.Actions>
          <S.DownloadLinks>
            <a href="/">
              <Icons.Apple />
              App Store
            </a>
            <a href="/">
              <Icons.Android />
              Google Play
            </a>
          </S.DownloadLinks>
          <S.ScanQrCode>
            <img src="/img/qrCode.png" alt="QrCode " />
            <span>
              <Icons.ArrowLeft />
              Scan to download
            </span>
          </S.ScanQrCode>
        </S.Container>
        <S.HeroImage>
          <img src="/img/hero.png" alt="Orderbook mockup" />
        </S.HeroImage>
      </S.Main>
    </S.Wrapper>
  );
};