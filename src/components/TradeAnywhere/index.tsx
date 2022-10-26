import {ComingSoon} from 'components/ComingSoon';
import {Container} from 'components/Container';
import React from 'react';
import {useInView} from 'react-intersection-observer';
import {IHomeTranslations} from 'translations';

import * as S from './styles';

type Props = Pick<IHomeTranslations, 'tradeAnywhere'>;
export const TradeAnywhere = ({
  title,
  description,
  mobile,
  advice,
  subtitle,
}: Props['tradeAnywhere']) => {
  const {ref, inView} = useInView({delay: 1000, triggerOnce: true});

  return (
    <S.Container>
      <S.Wrapper>
        <div ref={ref} />

        <S.ContentWrapper>
          <S.Title isViewed={inView}>{title}</S.Title>

          <S.Subtitle isViewed={inView}>{description}</S.Subtitle>
          <S.Advice isViewed={inView}>{advice}</S.Advice>
          <S.Soon>
            <S.Available>{subtitle}</S.Available>
            <ComingSoon />
          </S.Soon>
        </S.ContentWrapper>
      </S.Wrapper>
    </S.Container>
  );
};
