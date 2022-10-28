/* eslint-disable camelcase */
import { PrimaryButton } from 'components/Button';
import { Container } from 'components/Container';
import { Slider } from 'components/Slider';
import { ThemingContext } from 'context';
import React, { FC, memo, useContext, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { IOrderbookTranslations } from 'translations';

import * as S from './styles';

const slides = [
  {
    id: 0,
    src: 'https://dsc.cloud/0ebce1/polkaido-Regiser-Account.mov',
  },
  {
    id: 1,
    src: 'https://dsc.cloud/0ebce1/mintToken.mov',
  },
  {
    id: 2,
    src: 'https://dsc.cloud/0ebce1/polkaido-Regiser-Account.mov',
  },
  {
    id: 3,
    src: 'https://dsc.cloud/0ebce1/mintToken.mov',
  },
];

type Props = Pick<IOrderbookTranslations, 'feetDifference'>;

export const FeetDifference = memo(
  ({ title, open_beta, subtitle }: Props['feetDifference']) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const { ref, inView } = useInView({ triggerOnce: true });

    console.log(
      slides.map((_, i) => ({
        current: i === currentSlide,
        next: i > currentSlide,
        prev: i < currentSlide,
        i: i < currentSlide ? i - currentSlide : currentSlide - i,
      })),
    );

    return (
      <Container>
        <S.Wrapper>
          <S.Title isViewed={inView}>{title}</S.Title>
          <S.Subtitle isViewed={inView}>{subtitle}</S.Subtitle>
          <S.ButtonWrapper>
            <PrimaryButton
              content={open_beta}
              href="http://orderbook.polkadex.trade"
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
                  slide={slide}
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
  slide: {
    src: string;
  };
  i: number;
};

export const Slide: FC<TProps> = ({ current, next, prev, slide, i }) => {
  const { theme } = useContext(ThemingContext);

  return (
    <S.Slide i={i} current={current} next={next} prev={prev}>
      <S.Img
        i={i}
        current={current}
        next={next}
        prev={prev}
        src={`/img/${
          theme.value.title === 'dark'
            ? 'orderbookPreviewLand'
            : 'orderbookPreviewLand'
        }.svg`}
      />
    </S.Slide>
  );
};

// const Slide = ({ src, current, handleClick, i }) => {
//   const { theme } = useContext(ThemingContext);
//   const ref = useRef<HTMLDivElement>();

//   let classNames = 'slide';
//   const wrapperTransform = {
//     transform: `translateX(-${current * ref.current?.clientWidth}px)`,
//   };

//   if (current === i) classNames += ' slide--current';
//   else if (current - 1 === i) classNames += ' slide--previous';
//   else if (current + 1 === i) classNames += ' slide--next';

//   return (
//     <S.Slide
//       onClick={handleClick}
//       className={classNames}
//       style={wrapperTransform}
//       ref={ref}
//     >
//       <div>
//         <img
//           key={src}
//           src={`/img/${
//             theme.value.title === 'dark'
//               ? 'polkadexExchangeDark'
//               : 'polkadexExchangeLight'
//           }.svg`}
//         />
//       </div>
//     </S.Slide>
//   );
// };
