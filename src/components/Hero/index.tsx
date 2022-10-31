import { Banner } from 'components/Banner';
import { PrimaryButton } from 'components/Button';
import { Ethereum, Polkadex, Polkadot } from 'components/Icons';
import { Tooltip, TooltipContent, TooltipHeader } from 'components/Tooltip';
import { ThemingContext } from 'context';
import React, { useContext, useEffect, useRef } from 'react';
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
  const { theme } = useContext(ThemingContext);

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
          <S.SecondaryButton href={secondaryCtaLink}>
            {secondaryCtaButton}
          </S.SecondaryButton>
          <PrimaryButton target="_blank" href={ctaLink} content={ctaButton} />
        </S.CtaContainer>
        <S.RowBanner>
          <Banner
            title="Polkadex has won a Polkadot Parachain slot!"
            description="Polkadex secured a parachain slot on Polkadot with 973k DOT ($13.8M) contributed to the Polkadex Crowdloan!"
            buttonTitle="Learn more"
            href="https://polkadex.medium.com/the-polkadex-crowdloan-returns-for-batch-3-of-the-polkadot-parachain-auctions-edc4f38665f8"
          />
        </S.RowBanner>
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
          src={`/img/${
            theme.value.title === 'dark'
              ? 'polkadexExchangeDark'
              : 'polkadexExchangeLight'
          }.svg`}
          alt="Polkadex Interface"
        />
      </S.Container>
    </S.Wrapper>
  );
};

export default Hero;
