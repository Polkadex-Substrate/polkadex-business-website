import { PrimaryButton } from 'components/Button';
import { Ethereum, Polkadex, Polkadot } from 'components/Icons';
import React, { useEffect, useRef } from 'react';
import { IHomeTranslations } from 'translations';

import * as S from './styles';

type Props = Pick<IHomeTranslations, 'hero'>;

const Hero = ({
  title,
  description,
  ctaButton,
  ctaLink,
  secondaryCtaButton,
  secondaryCtaLink,
  chainsTitle,
}: Props['hero']) => {
  const ImageHeroRef = useRef<HTMLImageElement>();

  const handleScroll = () => {
    const scrollY = window.innerHeight * 0.05;
    const scrollTop = ImageHeroRef.current.getBoundingClientRect().top;

    if (scrollTop - scrollY < 0) ImageHeroRef.current.classList.add('active');
    else ImageHeroRef.current.classList.remove('active');
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <S.Wrapper id="hero">
      <S.Container>
        <h1>{title}</h1>
        <h2>{description}.</h2>
        <S.CtaContainer>
          <PrimaryButton content={ctaButton} href={ctaLink} />
          <S.SecondaryButton href={secondaryCtaLink}>
            {secondaryCtaButton}
          </S.SecondaryButton>
        </S.CtaContainer>

        <S.Row>
          <span>{chainsTitle}</span>
          <S.Col>
            <S.Card>
              <S.PlannedIcon>
                <Polkadex />
              </S.PlannedIcon>
              Polkadex
            </S.Card>
            <S.Card>
              <S.PlannedIcon>
                <Ethereum />
              </S.PlannedIcon>
              Ethereum
            </S.Card>
            <S.Card>
              <S.PlannedIcon>
                <Polkadot />
              </S.PlannedIcon>
              Polkadot
            </S.Card>
          </S.Col>
        </S.Row>
      </S.Container>
      <S.Container>
        <img
          ref={ImageHeroRef}
          src="/img/polkadexExchange.svg"
          alt="Polkadex Interface"
        />
      </S.Container>
    </S.Wrapper>
  );
};

export default Hero;
