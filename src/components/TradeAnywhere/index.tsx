import { ComingSoon } from 'components/ComingSoon';
import { useInView } from 'react-intersection-observer';
import { IOrderbookTranslations } from 'translations';

import * as S from './styles';

type Props = Pick<IOrderbookTranslations, 'tradeAnywhere'>;
export const TradeAnywhere = ({
  title,
  description,
  mobile,
  advice,
  subtitle,
}: Props['tradeAnywhere']) => {
  const { ref, inView } = useInView({ delay: 1000, triggerOnce: true });

  return (
    <S.Container>
      <S.Wrapper>
        <S.ContentWrapper>
          <S.Title isViewed={inView}>{title}</S.Title>
          <S.Subtitle isViewed={inView}>
            {description}
            <strong>{mobile}</strong>
          </S.Subtitle>
          <S.Advice isViewed={inView}>{advice}</S.Advice>
          <S.Soon>
            <S.Available>{subtitle}</S.Available>
            <ComingSoon />
          </S.Soon>
        </S.ContentWrapper>
        <div ref={ref} />
      </S.Wrapper>
    </S.Container>
  );
};
