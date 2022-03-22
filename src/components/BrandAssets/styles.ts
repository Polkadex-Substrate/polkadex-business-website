import { Wrapper as Icon } from 'components/Icon/styles';
import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  background-image: url('/img/BrandAssetsBgDark.svg');
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100rem;
  position: relative;
  max-width: 140rem;
  margin: -10rem auto 0 auto;
`;

export const Container = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-gap: 1rem;
    align-items: center;
    padding-top: 10rem;
    max-width: ${theme.grid.container};
  `}
  margin: 0 auto;

  @media screen and (min-width: 600px) and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (min-width: 1000px) {
    grid-template-columns: 1fr 2fr;
  }

  @media screen and (min-width: 1000px) {
    grid-template-columns: 1fr 2.2fr;
  }
`;

export const Box = styled.div`
  ${({ theme }) => css`
    :first-child {
      span {
        padding: 0.2rem 0.5rem;
        border-radius: 0.5rem;
        background-color: ${theme.colors.primary};
        font-weight: bold;
        font-size: 1.6rem;
        display: block;
        margin-bottom: 0.5rem;
        width: fit-content;
      }
      h1 {
        font-size: 5.5rem;
        line-height: 1.1;
        margin-bottom: 0.6rem;
      }
      p {
        line-height: 1.4;
        margin-bottom: 1rem;
      }
      strong {
        color: ${theme.colors.primary};
      }
      a ${Icon} {
        display: inline-block;
      }
      @media screen and (max-width: 1200px) {
        padding: 2rem;
      }
    }
    :last-child {
      display: flex;
      align-items: center;
      & img {
        width: 100%;
      }
    }
  `}
`;

export const Title = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  h2 {
    font-size: 2.3rem;
    font-weight: 500;
  }
  ${Icon} {
    margin: 0 auto;
  }
`;
export const Template = styled.div`
  margin: -5rem auto 0 auto;

  @media screen and (min-width: 600px) and (max-width: 1000px) {
    margin-top: -38rem;
  }
  @media screen and (min-width: 770px) {
    margin-bottom: 5rem;
  }
  //responsive
  @media screen and (max-width: 600px) {
    margin-top: -15rem;
  }
`;

export const BrandAssetsCards = styled(Template)`
  position: relative;
  max-width: 70rem;
  margin: 0 auto;
  @media screen and (min-width: 784px) {
    margin-bottom: 4rem;
  }
`;

export const BrandAssetsCardsWrapper = styled.div``;

export const Card = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 2fr 1fr;
    background: ${theme.colors.secondaryBackground};
    border-radius: 1.5rem;
    padding: 1rem;
    :not(:last-child) {
      margin-bottom: 2rem;
    }
    @media screen and (min-width: 400px) {
      padding: 2.5rem;
    }
  `}
`;
export const CardAside = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    a {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      background-color: ${theme.colors.secondaryBackground};
      padding: 0.4rem 0.4rem 0.4rem 0.8rem;
      border-radius: 0.5rem;
      width: fit-content;
      opacity: 1;
      transition: opacity 0.5s;
      ${Icon} {
        display: inline-block;
      }
      :hover {
        opacity: 0.7;
      }
    }
    @media screen and (min-width: 400px) {
      :first-child {
        padding: 1rem;
      }
    }
  `}
`;
export const CardAsideTitle = styled.div`
  ${({ theme }) => css`
    span {
      font-size: ${theme.font.sizes.small};
      opacity: 0.7;
    }
    h4 {
      font-size: ${theme.font.sizes.large};
      font-weight: 500;
      line-height: 1.4;
    }
  `}
`;
export const IconWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.6rem;
    background: ${theme.colors.secondaryBackground};
    color: ${theme.colors.text};
    transition: ${theme.transition.default};
    max-width: 2.5rem;
    max-height: 2.5rem;
    padding: 0.6rem;
    & svg {
      fill: ${theme.colors.text};
    }
  `}
`;
