import {Container} from 'components/Container';
import {useInView} from 'react-intersection-observer';
import {IHomeTranslations} from 'translations';

import * as S from './styles';

type Props = Pick<IHomeTranslations, 'statistic'>;

export const StatisticBlock = ({
  blockOne,
  blockTwo,
  blockTree,
  BlockFour,
}: Props['statistic']) => {
  const {ref, inView, entry} = useInView({triggerOnce: true});

  return (
    <Container>
      <S.Wrapper viewed={inView}>
        <S.Block>
          <S.Stat>500k</S.Stat>
          <S.Description>{blockOne}</S.Description>
        </S.Block>

        <S.Block>
          <S.Stat>0</S.Stat>
          <S.Description>{blockTwo}</S.Description>
        </S.Block>

        <S.Block>
          <S.Stat>100%</S.Stat>
          <S.Description>{blockTree}</S.Description>
        </S.Block>

        <S.Block>
          <S.Stat>0%</S.Stat>
          <S.Description>{BlockFour}</S.Description>
        </S.Block>
      </S.Wrapper>
      <div ref={ref} />
    </Container>
  );
};
