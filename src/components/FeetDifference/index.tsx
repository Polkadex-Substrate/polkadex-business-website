/* eslint-disable camelcase */
import { PrimaryButton } from 'components/Button';
import { Container } from 'components/Container';
import { Slider } from 'components/Slider';
import React, { FC, memo, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { IOrderbookTranslations } from 'translations';

import * as S from './styles';

const slides = [
  {
    id: 0,
    src: '/img/orderbookPreview/orderbookPreview1.svg',
  },
  {
    id: 1,
    src: '/img/orderbookPreview/orderbookPreview2.svg',
  },
  {
    id: 2,
    src: '/img/orderbookPreview/orderbookPreview3.svg',
  },
  {
    id: 3,
    src: '/img/orderbookPreview/orderbookPreview4.svg',
  },
  {
    id: 4,
    src: '/img/orderbookPreview/orderbookPreview5.svg',
  },
  {
    id: 5,
    src: '/img/orderbookPreview/orderbookPreview6.svg',
  },
  {
    id: 6,
    src: '/img/orderbookPreview/orderbookPreview7.svg',
  },
];

type Props = Pick<IOrderbookTranslations, 'feetDifference'>;

export const FeetDifference = memo(
  ({ title, open_beta, subtitle }: Props['feetDifference']) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const { ref, inView } = useInView({ triggerOnce: true });

    return (
      <Container>
        <S.Wrapper>
          <S.Title isViewed={inView}>{title}</S.Title>
          <S.Subtitle isViewed={inView}>{subtitle}</S.Subtitle>
          <S.ButtonWrapper>
            <PrimaryButton
              content={open_beta}
              href="http://orderbook.polkadex.trade"
              target="_blank"
            />
          </S.ButtonWrapper>

          <div ref={ref} />

          <S.Sliders>
            <Slider
              slide="div"
              centerMode
              centerPadding="15%"
              infinite={false}
              arrows
              beforeChange={(cur, next) => setCurrentSlide(next)}
            >
              {slides.map((slide, i) => (
                <Slide
                  key={`slide-${slide.id}`}
                  current={i === currentSlide}
                  next={i > currentSlide}
                  prev={i < currentSlide}
                  slide={slide.src}
                  i={i < currentSlide ? i - currentSlide : currentSlide - i}
                />
              ))}
            </Slider>
          </S.Sliders>
        </S.Wrapper>
      </Container>
    );
  },
);

type TProps = {
  current: boolean;
  next: boolean;
  prev: boolean;
  slide: string;
  i: number;
};

export const Slide: FC<TProps> = ({ current, next, prev, slide, i }) => {
  return (
    <S.Slide i={i} current={current} next={next} prev={prev}>
      <S.Img i={i} current={current} next={next} prev={prev} src={slide} />
    </S.Slide>
  );
};
