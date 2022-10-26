import {PrimaryButton} from 'components/Button';
import {Container} from 'components/Container';
import QuestionIcon, {SecondQaIcon} from 'components/Icons/QuestionIcon';
import {useInView} from 'react-intersection-observer';
import {IHomeTranslations} from 'translations';

import * as S from './styles';

type Props = Pick<IHomeTranslations, 'question'>;

export const Question = ({question, boldtext, button}: Props['question']) => {
  const {ref, inView} = useInView({triggerOnce: true});

  return (
    <Container>
      <div ref={ref} />

      <S.Wrapper>
        <S.ContentWrapper>
          <S.Question isViewed={inView}>
            {question} <b>{boldtext}</b>
          </S.Question>

          <S.ButtonWrapper isViewed={inView}>
            <PrimaryButton
              content={button}
              color="primary"
              background="white"
            />
          </S.ButtonWrapper>
        </S.ContentWrapper>
        <S.IconWrapper>
          <SecondQaIcon />
          <div>
            <QuestionIcon />
          </div>
        </S.IconWrapper>
      </S.Wrapper>
    </Container>
  );
};
