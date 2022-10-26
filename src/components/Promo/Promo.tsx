import {PrimaryButton, SecondaryButton} from 'components/Button';
import {ComingSoon} from 'components/ComingSoon';
import {Container} from 'components/Container';
import {Header} from 'components/Header';
import {OldHeader} from 'components/OldHeader';
import React, {
  FC,
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import {useInView} from 'react-intersection-observer';
import {HomeTranslations, IHomeTranslations} from 'translations';

import * as S from './styles';

type Props = Pick<IHomeTranslations, 'promo'>;

const {oldHeader}: IHomeTranslations = HomeTranslations['en-US'];

export const Promo = ({
  title,
  subtitle,
  advantage,
  disadvantage,
  button,
  learn,
  polkadex,
  available,
}: Props['promo']) => {
  const [enableFixed, setEnableFixed] = useState(0);

  const [step, setStep] = useState(window.innerWidth > 878 ? 1 : 4);

  if (step === 4) {
    setTimeout(() => {
      setEnableFixed(4);
      document.body.style.overflowY = 'auto';
    }, 800);
  }
  const onScroll = useCallback(() => {
    window.removeEventListener('wheel', onScroll, false);
    setStep((step) => (step > 2 ? step : step + 1));
    setTimeout(() => {
      window.addEventListener('wheel', onScroll, false);
    }, 800);
  }, []);
  useEffect(() => {
    if (step === 1) {
      document.body.style.overflowY = 'hidden';

      window.addEventListener('wheel', onScroll, false);
    } else {
      if (step === 2) {
        const timer = setInterval(() => {
          setStep((step) => {
            console.log(step);

            if (step + 1 === 4) {
              clearInterval(timer);
            }

            return step + 1;
          });
        }, 800);
        window.removeEventListener('wheel', onScroll, false);
      }
    }
  }, [step]);

  return (
    <S.Overlay step={step === 4 ? enableFixed : step}>
      <S.Wrapper step={step === 4 ? enableFixed : step}>
        <OldHeader {...oldHeader} canSticky={step === 4} />
        <S.Container step={step === 4 ? enableFixed : step}>
          <Container hasNotRelative>
            <S.Main step={step}>
              <S.Content step={step}>
                <S.Title step={step}>{title}</S.Title>
                <S.List step={step}>
                  <span>{subtitle}</span>
                  <span>
                    <span>+</span> {advantage}
                  </span>
                  <span>
                    <span>-</span> {disadvantage}
                  </span>
                  <span>
                    <span>=</span> <b>{polkadex}</b>
                  </span>
                </S.List>
                <S.Buttons step={step}>
                  <PrimaryButton
                    content={button}
                    href="http://orderbook.polkadex.trade"
                  />
                  <SecondaryButton
                    content={learn}
                    icon="ArrowRight"
                    href="https://docs.polkadex.trade"
                  />
                </S.Buttons>

                <S.AvailableList step={step}>{available}</S.AvailableList>
                <ComingSoon />
              </S.Content>
              <div />
            </S.Main>

            <S.AnimationWrapper step={step}>
              <S.MainChart step={step}>
                <S.Chart>
                  <S.MenuImg src="/img/landing/promo/Menu.png" step={step} />
                  <S.ChartImg src="/img/landing/promo/Chart.png" step={step} />
                </S.Chart>
                <S.FooterImg step={step} src="/img/landing/promo/Footer.png" />
              </S.MainChart>
              <S.AsideWrapper step={step}>
                <S.OrderImg src="/img/landing/promo/Order.png" step={step} />
                <S.MarketTradeImg
                  src="/img/landing/promo/MarketTrade.png"
                  step={step}
                />
              </S.AsideWrapper>
            </S.AnimationWrapper>
            <S.NoteBook step={step} />
            <S.Img step={step} src="/img/landing/promo/Phone.png" />
          </Container>
        </S.Container>
      </S.Wrapper>
    </S.Overlay>
  );
};
