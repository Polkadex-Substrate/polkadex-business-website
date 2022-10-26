import {PrimaryButton, SecondaryButton} from 'components/Button';
import {Container} from 'components/Container';
import {ArrowRight} from 'components/Icons';
import Planet from 'components/Icons/Planet';
import {Slider} from 'components/Slider';
import {useInView} from 'react-intersection-observer';
import React, {useEffect, useRef, useState} from 'react';
import SlideLib from 'react-slick';
import {IHomeTranslations} from 'translations';

import * as S from './styles';

type Props = Pick<IHomeTranslations, 'polkadex'>;

export const PolkadexBlock = ({cards, tabs, title}: Props['polkadex']) => {
  const [current, setCurrent] = useState(0);

  const {ref: refObserver, inView} = useInView({triggerOnce: true});

  const ref = useRef<SlideLib>();

  return (
    <S.Wrapper>
      <S.Title isViewed={inView}>{title}</S.Title>
      <S.Buttons isViewed={inView} current={current}>
        {tabs.map((tab, i) => (
          <PrimaryButton
            key={`polkadex-button-${tab}`}
            content={tab}
            background={current === i ? 'white' : 'transparent'}
            onClick={(e) => {
              e.preventDefault();
              ref.current?.slickGoTo(i);

              setCurrent(i);
            }}
            href="#"
            color={current === i ? 'black' : 'disable'}
          />
        ))}
      </S.Buttons>
      <div ref={refObserver} />

      <Slider customRef={ref} infinite={false} swipe={false} arrows={false}>
        {tabs.map((tab, i) => (
          <Tab
            isViewed={inView}
            key={`polkadex-slider-${tab}`}
            isCurrent={i === current}
            content={cards[0]}
          />
        ))}
      </Slider>
    </S.Wrapper>
  );
};

type TProps = {
  isCurrent: boolean;
  content: Props['polkadex']['cards'][0];
  isViewed: boolean;
};

const Tab = ({isCurrent, content, isViewed}: TProps) => {
  return (
    <S.Tab>
      <S.TabWrapper>
        <S.TabImage>
          <Planet />
        </S.TabImage>
        <S.TabContent>
          <S.TabTitle isViewed={isViewed}>{content.title}</S.TabTitle>
          <S.TabSubtitle isViewed={isViewed}>{content.subtitle}</S.TabSubtitle>
          <S.TabDescription isViewed={isViewed}>
            {content.desc}
          </S.TabDescription>
          <br />
          <S.TabDescription isViewed={isViewed}>
            {content.sec_desc}
          </S.TabDescription>
          <S.Footer>
            <S.LearnMore>
              <PrimaryButton
                href="http://orderbook.polkadex.trade/"
                content={content.button}
              />
            </S.LearnMore>
            <S.LearnMore>
              <SecondaryButton
                href="https://docs.polkadex.trade/"
                content={content.learnMore}
                icon="ArrowRight"
              />
              {/* {content.learnMore}
              <ArrowRight /> */}
            </S.LearnMore>
          </S.Footer>
        </S.TabContent>
      </S.TabWrapper>
    </S.Tab>
  );
};
