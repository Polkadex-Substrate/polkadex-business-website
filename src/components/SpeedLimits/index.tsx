import { AnimatedDarkGradient } from 'components/AnimatedDarkGradient';
import { PrimaryButton } from 'components/Button';
import { Container } from 'components/Container';
import CheaperIcon from 'components/Icons/CheaperIcon';
import LimitIcon from 'components/Icons/LimitIcon';
import RocketIcon from 'components/Icons/RocketIcon';
import { useInView } from 'react-intersection-observer';
import { IOrderbookTranslations } from 'translations';

import * as S from './styles';

type Props = Pick<IOrderbookTranslations, 'speedlimits'>;

const ICONS = [<CheaperIcon />, <LimitIcon />];

export const SpeedLimit = ({
  title,
  descriptionFirst,
  descriptionSecond,
  sections,
  buttonText,
}: Props['speedlimits']) => {
  const { ref, inView } = useInView({ delay: 200, triggerOnce: true });

  return (
    <Container>
      <S.Wrapper>
        <div ref={ref} />
        <S.SpeedLimitsContainer isViewed={inView}>
          <S.Title>{title}</S.Title>
          <S.Description>{descriptionFirst}</S.Description>
          <S.Description>{descriptionSecond}</S.Description>
          <S.RocketWrapper>
            <RocketIcon />
          </S.RocketWrapper>
        </S.SpeedLimitsContainer>

        <S.BlockContainer>
          {sections.map((item, i) => (
            <S.Item key={item.title} isViewed={inView}>
              <AnimatedDarkGradient>
                <S.BlockWrapper>
                  <S.BlockIcon>{ICONS[i]}</S.BlockIcon>
                  <S.BlockList>
                    <S.BlockTitle>{item.title}</S.BlockTitle>
                    <S.TextAndIconWrapper>
                      <S.ImageWrapper>
                        <S.DoneIconWrapper src="/img/doneIcon.svg" />
                      </S.ImageWrapper>
                      <S.BlockText>{item.firstDescription}</S.BlockText>
                    </S.TextAndIconWrapper>

                    <S.TextAndIconWrapper>
                      <S.ImageWrapper>
                        <S.DoneIconWrapper
                          src="/img/doneIcon.svg"
                          height="12px"
                          width="12px"
                        />
                      </S.ImageWrapper>
                      <S.BlockText>{item.secondDescription}</S.BlockText>
                    </S.TextAndIconWrapper>

                    {item?.thirdDescription && (
                      <S.TextAndIconWrapper>
                        <S.ImageWrapper>
                          <S.DoneIconWrapper
                            src="/img/doneIcon.svg"
                            height="12px"
                            width="12px"
                          />
                        </S.ImageWrapper>
                        <S.BlockText>{item.thirdDescription}</S.BlockText>
                      </S.TextAndIconWrapper>
                    )}
                  </S.BlockList>
                </S.BlockWrapper>
              </AnimatedDarkGradient>
            </S.Item>
          ))}
        </S.BlockContainer>
      </S.Wrapper>

      <S.ButtonWrapper isViewed={inView}>
        <PrimaryButton
          href="http://orderbook.polkadex.trade"
          content={buttonText}
          target="_blank"
        />
      </S.ButtonWrapper>
    </Container>
  );
};
