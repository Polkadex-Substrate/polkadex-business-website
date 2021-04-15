import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  margin: 6rem auto;

  & h4 {
    font-size: 4rem;
    font-weight: 600;
    margin-bottom: 2rem;
  }
`;

export const TitleContainer = styled.div`
  max-width: 50rem;
  margin: 0 auto;

  @media screen and (max-width: 780px) {
    padding: 2rem;
  }
`;

export const BridgeContainer = styled.div`
  background-image: url('/img/gradientBg.svg');
  background-repeat: no-repeat;
  background-size: contain;
  position: relative;
  max-width: 140rem;
  margin: 0 auto;
  min-height: 110rem;
  padding-top: 15rem;
`;

export const Box = styled.div`
  ${({ theme }) => css`
    max-width: ${theme.grid.container};
  `}
  margin: 0 auto;
`;

export const BridgeImage = styled.div`
  & img {
    width: 100%;
  }

  @media screen and (min-width: 1000px) and (max-width: 1160px) {
    & img {
      margin-top: 12rem;
    }
  }

  @media screen and (min-width: 1000px) {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
  }
`;

export const BridgeWrapper = styled.div`
  position: relative;
  z-index: 1;
  & p {
    margin-bottom: 2rem;
  }

  @media screen and (min-width: 1000px) {
    max-width: 47rem;
  }

  @media screen and (max-width: 1200px) {
    padding: 2rem;
  }
`;

export const BridgePlanned = styled.div`
  margin-top: 4rem;

  & h6 {
    display: block;
    font-size: 1.8rem;
    font-weight: 500;
  }
`;

export const BridgePlannedWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 2rem;

  & div :first-child {
    padding: 1rem;
    max-width: 4rem;
    width: 100%;

    & img {
      width: 100%;
    }
  }

  & div:last-child {
    margin-left: 1rem;

    & span {
      display: block;
      font-size: 1.7rem;
      font-weight: bold;
      margin-bottom: 1.5rem;
    }

    & p {
      opacity: 0.7;
      line-height: 1.5;
    }
  }
`;

export const FeaturedParagraph = styled.p`
  font-size: 1.5rem;
  line-height: 1.5;
`;

export const BotsContainer = styled.div`
  max-width: 140rem;
  margin: 0 auto;
  position: relative;

  & ${Box} {
    display: grid;
    @media screen and (min-width: 1120px) {
      grid-template-columns: 2fr 1fr;
    }
    @media screen and (min-width: 930px) and (max-width: 1120px) {
      grid-template-columns: 1.2fr 1fr;
    }
  }
`;

export const BotsImage = styled.div`
  img {
    width: 100%;
    max-height: 120rem;
  }
  @media screen and (min-width: 930px) {
    position: absolute;
    top: 0;
    left: 0;
  }
  @media screen and (min-width: 930px) and (max-width: 1120px) {
    img {
      width: 70%;
    }
  }
`;

export const BotsWrapper = styled.div`
  & p {
    margin-bottom: 2rem;
  }

  @media screen and (max-width: 1200px) {
    padding: 2rem;
  }
`;

export const FluidContainer = styled.div`
  background-image: url('/img/gradientBg.svg');
  background-repeat: no-repeat;
  background-size: auto 100%;
  max-width: 140rem;
  margin: 0 auto;
  @media screen and (min-width: 800px) {
    min-height: 120rem;
  }
  & ${Box} {
    text-align: center;

    & div :first-child {
      max-width: 90rem;
      margin: 0 auto;
      padding-top: 25rem;
      @media screen and (max-width: 900px) {
        padding-left: 2rem;
        padding-right: 2rem;
      }
      & h2 {
        font-size: 4rem;
        margin-bottom: 1rem;

        & span {
          ${({ theme }) => css`
            background: ${`${theme.colors.primary}4D`};
            border: ${`1px solid ${theme.colors.primary}`};
          `}
          font-size: 1rem;
          text-transform: uppercase;
          display: inline-block;
          border-radius: 0.8rem;
          padding: 1rem;
          vertical-align: middle;
        }
      }

      & p {
        font-size: 1.6rem;
        line-height: 1.5;
      }
    }

    & img {
      width: 100%;
      max-width: 120rem;
    }
  }
`;

export const MoreFeaturesContainer = styled.div`
  max-width: 120rem;
  margin: 0 auto;

  & h6 {
    font-size: 1.8rem;
    font-weight: 500;
  }

  & p {
    margin-bottom: 2.5rem;
  }

  @media screen and (max-width: 1200px) {
    padding: 2rem;
  }
`;

export const MoreFeaturesWrapper = styled.div`
  margin-top: 8rem;

  & h6 {
    margin-bottom: 5rem;
    font-weight: bold;
  }
`;

export const MoreFeaturesTitle = styled.div`
  display: grid;

  @media screen and (min-width: 930px) {
    align-items: center;
    column-gap: 2rem;
    grid-template-columns: 1fr 1fr;
  }

  & img {
    width: 100%;
    max-width: 50rem;
  }
`;

export const MoreFeaturesInfo = styled.div`
  @media screen and (min-width: 930px) {
    max-width: 48rem;
  }
  @media screen and (max-width: 930px) {
    margin-bottom: 2rem;
  }
`;
export const MoreFeaturesCard = styled.div`
  display: grid;

  row-gap: 6rem;

  @media screen and (min-width: 1045px) {
    grid-template-columns: repeat(4, 1fr);
    column-gap: 4rem;
  }

  @media screen and (max-width: 1045px) {
    grid-template-columns: repeat(3, 1fr);
    column-gap: 3rem;
  }

  @media screen and (max-width: 760px) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }
  & img {
    max-height: 3rem;
    height: 100%;
  }
  & span {
    display: block;
    font-size: 1.6rem;
    font-weight: 600;
    margin: 2rem 0;
    line-height: 1;
  }

  & p {
    line-height: 1.5;
    opacity: 0.7;
  }
`;
