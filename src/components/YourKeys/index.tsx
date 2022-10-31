import { PrimaryButton } from 'components/Button';
import { Container } from 'components/Container';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import { IOrderbookTranslations } from 'translations';

import security from './img/security.png';
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
        <Image src={circle} />
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
            <Image src={security} layout="raw" />
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
