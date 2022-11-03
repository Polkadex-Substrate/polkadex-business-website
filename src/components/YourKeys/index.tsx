import { PrimaryButton } from 'components/Button';
import { Container } from 'components/Container';
import { useInView } from 'react-intersection-observer';
import { IOrderbookTranslations } from 'translations';

import circle from './img/youKeysDetail.png';
import * as S from './styles';

type Props = Pick<IOrderbookTranslations, 'keys'>;

export const YourKeys = ({
  title,
  description,
  highlight,
  firstDescription,
  secondDescription,
  button,
}: Props['keys']) => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <Container>
      <S.ImageContainer>
        <img src="/img/youKeysDetail.svg" alt="details" />
      </S.ImageContainer>
      <S.Wrapper>
        <S.TitleContainer>
          <S.Title isViewed={inView}>{title}</S.Title>
          <S.TitleDescription isViewed={inView}>
            {description}
          </S.TitleDescription>
        </S.TitleContainer>
        <div ref={ref} />

        <S.NoRiskContainer>
          <S.NoRiskImageContainer isViewed={inView}>
            <img src="/img/security.png" alt="Security" />
          </S.NoRiskImageContainer>

          <S.Item isViewed={inView}>
            <S.NoRiscTitle>{highlight}</S.NoRiscTitle>

            <S.NoRiscDescription>{firstDescription}</S.NoRiscDescription>
            <S.NoRiscDescription>{secondDescription}</S.NoRiscDescription>
            <S.ButtonWrapper>
              <PrimaryButton
                href="http://orderbook.polkadex.trade"
                content={button}
                target="_blank"
              />
            </S.ButtonWrapper>
          </S.Item>
        </S.NoRiskContainer>
      </S.Wrapper>
    </Container>
  );
};
