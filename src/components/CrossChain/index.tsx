import { AnimatedDarkGradient } from 'components/AnimatedDarkGradient';
import { SecondaryButton } from 'components/Button';
import { Container } from 'components/Container';
import {
  CrossChainBridge,
  CrossChainCircle,
  CrossChainLaptop,
  Ethereum,
} from 'components/Icons';
import { memo } from 'react';
import { useInView } from 'react-intersection-observer';
import { IOrderbookTranslations } from 'translations';

import * as S from './styles';

type Props = Pick<IOrderbookTranslations, 'crossChain'>;

export const CrossChain = memo(
  ({
    title,
    description,
    subDesc,
    dubDescTwo,
    readMore,
    comeSoon,
    subtitle,
    subtitleDesc,
  }: Props['crossChain']) => {
    const { ref, inView, entry } = useInView({ triggerOnce: true });

    return (
      <Container>
        <S.Content isViewed={inView}>
          <AnimatedDarkGradient>
            <S.Wrapper>
              <S.UpperComponentWrapper>
                <S.UpperTextComponent>
                  <S.Title isViewed={inView}>{title}</S.Title>
                  <S.Description isViewed={inView}>{description}</S.Description>
                  <S.IconTextWrapper isViewed={inView}>
                    <S.IconContainer>
                      <CrossChainCircle />
                    </S.IconContainer>

                    <S.InfoContainer>
                      <S.SubDescription>{subDesc}</S.SubDescription>
                      <span>Polkadot and Polkadot parachains</span>
                      <S.ButtonWrapper isViewed={inView}>
                        <SecondaryButton
                          content={readMore}
                          href=" https://polkadex.trade/crowdloancontribute"
                          icon="ArrowRight"
                          target="_blank"
                        />
                      </S.ButtonWrapper>
                    </S.InfoContainer>
                  </S.IconTextWrapper>

                  <S.IconTextWrapper isViewed={inView}>
                    <S.IconContainer>
                      <Ethereum />
                    </S.IconContainer>

                    <S.InfoContainer>
                      <S.SoonComponent>{comeSoon}</S.SoonComponent>

                      <S.SubDescription>{dubDescTwo}</S.SubDescription>
                      <span>Ethereum</span>
                      <S.ButtonWrapper isViewed={inView}>
                        <SecondaryButton
                          content={readMore}
                          href="https://github.com/Polkadex-Substrate/polkadex-docs/blob/master/docs/doc3-theaBridge.md"
                          icon="ArrowRight"
                          target="_blank"
                        />
                      </S.ButtonWrapper>
                    </S.InfoContainer>
                  </S.IconTextWrapper>
                </S.UpperTextComponent>
                <div ref={ref} />

                <S.ImageWrapper>
                  <CrossChainBridge />
                </S.ImageWrapper>
              </S.UpperComponentWrapper>

              <S.LowerComponentWrapper>
                <S.LaptopWrapper>
                  <CrossChainLaptop />
                </S.LaptopWrapper>

                <S.LowerTextComponent>
                  <S.Title isViewed={inView}>{subtitle}</S.Title>
                  <S.Description isViewed={inView}>
                    {subtitleDesc}
                  </S.Description>
                </S.LowerTextComponent>
              </S.LowerComponentWrapper>
            </S.Wrapper>
          </AnimatedDarkGradient>
        </S.Content>
      </Container>
    );
  },
);
