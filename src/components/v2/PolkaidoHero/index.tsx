import * as Icons from 'components/Icons';

import * as S from './styles';

export const PolkaidoHero = () => {
  return (
    <S.Wrapper id="hero">
      <S.Title>
        <h1>On-chain fundraising has never been easier</h1>
        <p>
          Create a round | Distribute tokens on Polkadex or other chains | List
          on Polkadex Orderbook
        </p>
        <S.Actions>
          <a href="/">Fund your idea</a>
          <a href="/">
            Open rounds <Icons.ArrowRight />
          </a>
        </S.Actions>
      </S.Title>
      <S.Slider>
        <S.Controls>
          <Icons.ArrowLeft />
        </S.Controls>
        <S.Controls>
          <Icons.ArrowLeft />
        </S.Controls>
        <S.SliderContainer>
          <img src="/img/slider1.png" alt="Polkadex Polkaido preview" />
          <img src="/img/slider2.png" alt="Polkadex Polkaido preview" />
          <img src="/img/slider3.png" alt="Polkadex Polkaido preview" />
        </S.SliderContainer>
      </S.Slider>
    </S.Wrapper>
  );
};
