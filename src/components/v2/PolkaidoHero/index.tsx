/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */

import * as Icons from 'components/Icons';

import * as S from './styles';

const slides = [
  {
    src: '/img/slider1.png',
    alt: 'Polkadex Polkaido preview',
  },
  {
    src: '/img/slider2.png',
    alt: 'Polkadex Polkaido preview',
  },
  {
    src: '/img/slider3.png',
    alt: 'Polkadex Polkaido preview',
  },
];

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
          {slides.map((slide, i) => (
            <Slide key={i} img={slide.src} alt={slide.alt} />
          ))}
        </S.SliderContainer>
      </S.Slider>
    </S.Wrapper>
  );
};

const Slide = ({ img, alt }) => {
  return (
    <S.Slide>
      <div>
        <img src={img} alt={alt} />
      </div>
    </S.Slide>
  );
};
