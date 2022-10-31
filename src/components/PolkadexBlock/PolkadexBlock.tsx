import { PrimaryButton, SecondaryButton } from 'components/Button';
import { Planet } from 'components/Icons';
import { Slider } from 'components/Slider';
import { useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import SlideLib from 'react-slick';
import { IOrderbookTranslations } from 'translations';

import * as S from './styles';

type Props = Pick<IOrderbookTranslations, 'polkadex'>;

export const PolkadexBlock = ({ cards, tabs, title }: Props['polkadex']) => {
  const [current, setCurrent] = useState(0);

  const { ref: refObserver, inView } = useInView({ triggerOnce: true });

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
            content={cards[i]}
            hasImage={i === 0}
            extraData={i === 1}
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
  hasImage?: boolean;
  extraData?: boolean;
};

const Tab = ({
  isCurrent,
  content,
  isViewed,
  hasImage,
  extraData = false,
}: TProps) => {
  return (
    <S.Tab>
      <S.TabWrapper hasImage={hasImage}>
        {hasImage && (
          <S.TabImage>
            <Planet />
          </S.TabImage>
        )}

        <S.TabContent>
          <S.TabTitle isViewed={isViewed}>{content.title}</S.TabTitle>
          {!!content.subtitle && (
            <S.TabSubtitle isViewed={isViewed}>
              {content.subtitle}
            </S.TabSubtitle>
          )}
          {!!content?.desc && (
            <S.TabDescription isViewed={isViewed}>
              {content.desc}
            </S.TabDescription>
          )}
          <br />
          <S.TabDescription isViewed={isViewed}>
            {content.sec_desc}
            {extraData && (
              <S.ExtraData>
                <p>The TEE takes care of the following:</p>

                <ul>
                  <li>Handles Polkadex Orderbook users’ balance states</li>
                  <li>Prevents theft of funds</li>
                  <li>
                    Verifies the matched trades provided by the Orderbook engine
                  </li>
                  <li>Settles trades</li>
                  <li>
                    Enables traders to reserve and unreserve assets on the
                    native blockchain
                  </li>
                </ul>
              </S.ExtraData>
            )}
          </S.TabDescription>
          <S.Footer>
            <S.LearnMore>
              <PrimaryButton
                href="http://orderbook.polkadex.trade/"
                content={content.button}
                target="_blank"
              />
            </S.LearnMore>
            <S.LearnMore>
              <SecondaryButton
                href="https://docs.polkadex.trade/"
                content={content.learnMore}
                icon="ArrowRight"
                target="_blank"
              />
            </S.LearnMore>
          </S.Footer>
        </S.TabContent>
      </S.TabWrapper>
    </S.Tab>
  );
};
