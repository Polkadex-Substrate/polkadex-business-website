import { PrimaryWrapper } from 'components/Button/styles';
import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    max-width: ${theme.grid.container};
    margin: 0 auto;
    @media screen and (max-width: 1000px) {
      padding: 1rem;
    }
  `}
`;
export const Hero = styled.div``;
export const Banner = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 2rem;
    max-width: 100rem;
    background-color: white;
    border-radius: 2rem;
    margin: -2rem auto 0 auto;
    @media screen and (min-width: 750px) {
      margin-top: -4rem;
    }
  `}
`;
export const BannerContent = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;

    :first-child {
      gap: 2rem;
      @media screen and (max-width: 520px) {
        flex-direction: column;
      }
      div {
        display: flex;
        flex-direction: column;
        flex: 1;
      }
      img {
        max-width: 15rem;
      }
      h2,
      p {
        color: black;
      }
      h2 {
        margin-bottom: 0.5rem;
      }
      @media screen and (max-width: 730px) {
        padding: 1rem;
      }
    }
    :last-child {
      flex: 1;
      justify-content: center;
      padding: 1rem;
    }
  `}
`;

export const Container = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    padding: 8rem 2rem;

    @media screen and (min-width: 660px) {
      padding: 19rem 2rem 23rem 2rem;
    }
    background-image: url('/img/stakingPageHero.svg');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: right bottom;
    border-radius: 3rem;
    border: 2px solid ${theme.colors.secondaryBackgroundOpacity};
  `}
`;
export const Aside = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 60rem;
    margin: 0 auto;
    text-align: center;
    color: ${theme.colors.black};
    h1 {
      line-height: 1.1;
      @media screen and (min-width: 660px) {
        font-size: 5rem;
      }
      strong {
        display: block;
      }
      span {
        color: ${theme.colors.primary};
      }
    }

    p {
      margin: 2rem 0;
      line-height: 1.5;
    }

    ${PrimaryWrapper} {
      width: fit-content;
    }
  `}
`;

export const Button = styled.a`
  border-radius: 1rem;
  border: 0.9px solid ${({ theme }) => theme.colors.white};
  padding: 1rem 1.5rem;
`;
