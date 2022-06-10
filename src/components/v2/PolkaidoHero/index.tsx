/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */

import * as Icons from 'components/Icons';
import { useRef, useState } from 'react';

import * as S from './styles';

const slides = [
  {
    id: 0,
    src: 'https://cdn.sketch.com/assets/pages/collaborate/real-time-collab-visual.mp4',
  },
  {
    id: 1,
    src: 'https://cdn.sketch.com/assets/pages/collaborate/handoff-visual-2.mp4',
  },
  {
    id: 2,
    src: 'https://cdn.sketch.com/assets/pages/design/design-system-visual.mp4',
  },
  {
    id: 3,
    src: 'https://cdn.sketch.com/assets/pages/design/collaborate-visual.mp4',
  },
];

export const PolkaidoHero = () => {
  const [state, setState] = useState({ current: 0 });

  const handlePreviousClick = () => {
    const previous = state.current - 1;
    setState({
      current: previous < 0 ? slides.length - 1 : previous,
    });
  };

  const handleNextClick = () => {
    const next = state.current + 1;
    setState({
      current: next === slides.length ? 0 : next,
    });
  };

  const handleSlideClick = (index) =>
    state.current !== index &&
    setState({
      current: index,
    });

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
        <S.Controls onClick={handlePreviousClick}>
          <Icons.ArrowLeft />
        </S.Controls>
        <S.Controls onClick={handleNextClick}>
          <Icons.ArrowLeft />
        </S.Controls>
        <S.SliderContainer>
          {slides.map((slide, i) => (
            <Slide
              key={i}
              i={i}
              src={slide.src}
              current={state.current}
              handleClick={() => handleSlideClick(i)}
            />
          ))}
        </S.SliderContainer>
      </S.Slider>
    </S.Wrapper>
  );
};

const Slide = ({ src, current, handleClick, i }) => {
  let classNames = 'slide';
  const wrapperTransform = {
    transform: `translateX(-${current * (410 / slides.length)}%)`,
  };

  if (current === i) classNames += ' slide--current';
  else if (current - 1 === i) classNames += ' slide--previous';
  else if (current + 1 === i) classNames += ' slide--next';

  return (
    <S.Slide
      onClick={handleClick}
      className={classNames}
      style={wrapperTransform}
    >
      <video
        key={src}
        poster="https://sketch-cdn.imgix.net/assets/pages/collaborate/real-time-collab-visual@2x.png?ixlib=rb-4.0.1&amp;q=95&amp;fm=png&amp;auto=format&amp;s=345ffba50881bab34acc2e05c1f6c265"
        data-autoplay-in-viewport="true"
        loop
        muted
        autoPlay
        data-controller="entrance"
        data-hs-allowed="true"
        data-entrance-is-intersecting-value="true"
      >
        <source src={src} />
      </video>
    </S.Slide>
  );
};
