import {AnimatedDarkGradient} from 'components/AnimatedDarkGradient';
import {Container} from 'components/Container';
import {FlyCube} from 'components/FlyCube';
import {Robot, Shield} from 'components/Icons';
import React from 'react';
import {useInView} from 'react-intersection-observer';
import {IHomeTranslations} from 'translations';

import device from './images/device.png';
import * as S from './styles';

type Props = Pick<IHomeTranslations, 'tradeStrategy'>;

export const TradingStrategy = ({
  title,
  boostDesc,
  boost,
  multipleAccDesc,
  multipleAcc,
  delegate,
  delegteDesc,
}: Props['tradeStrategy']) => {
  const {ref, inView} = useInView({triggerOnce: true});

  return (
    <Container>
      <S.Wrapper>
        <S.Title>{title}</S.Title>
        <S.Items>
          <S.AnimatedWrapper>
            <AnimatedDarkGradient>
              <S.DarkContent>
                <S.Item>
                  <S.IconWrap>
                    <Robot />
                  </S.IconWrap>

                  <div>
                    <S.Subtitle isViewed={inView}>{boost}</S.Subtitle>
                    <S.Text isViewed={inView}>{boostDesc}</S.Text>
                  </div>
                </S.Item>
              </S.DarkContent>
            </AnimatedDarkGradient>

            <AnimatedDarkGradient>
              <S.DarkContent>
                <S.Item>
                  <S.IconWrap>
                    <Shield />
                  </S.IconWrap>
                  <div>
                    <S.Subtitle isViewed={inView}>{delegate}</S.Subtitle>
                    <S.Text isViewed={inView}>{delegteDesc}</S.Text>
                  </div>
                </S.Item>
              </S.DarkContent>
            </AnimatedDarkGradient>
          </S.AnimatedWrapper>
          <div ref={ref} />
          <S.LightItem>
            <S.LightItemContent>
              <div>
                <S.Subtitle isViewed={inView} inverse>
                  {multipleAcc}
                </S.Subtitle>
                <S.Text isViewed={inView} inverse>
                  {multipleAccDesc}
                </S.Text>
              </div>
              <S.Img layout="raw" src={device} />
            </S.LightItemContent>
          </S.LightItem>
        </S.Items>
      </S.Wrapper>
    </Container>
  );
};
