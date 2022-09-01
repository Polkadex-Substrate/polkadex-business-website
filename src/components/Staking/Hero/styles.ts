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
export const HeroImage = styled.div``;

export const Hero = styled.div`
  ${({ theme }) => css`
    display: grid;
    align-items: center;
    gap: 2rem;
    background: ${theme.colors.gradientBackground};
    max-width: 100rem;
    margin: 0 auto;
    width: 100%;
    border-radius: 3rem;
    padding: 1rem;
    svg {
      max-width: 50rem;
    }
    @media screen and (min-width: 860px) {
      grid-template-columns: 1.1fr 1fr;
    }
    @media screen and (min-width: 400px) {
      padding: 3rem;
    }
  `}
`;

export const Container = styled.div``;
export const Aside = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    h1 {
      line-height: 1.1;
      @media screen and (min-width: 660px) {
        font-size: 4.5rem;
      }
      strong {
        display: block;
      }
      span {
        color: ${theme.colors.primary};
      }
    }

    p {
      margin-top: 2rem;
      line-height: 1.5;
    }

    ${PrimaryWrapper} {
      width: fit-content;
    }
  `}
`;
export const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-top: 2rem;
  flex-wrap: wrap;
`;

export const SecondaryLink = styled.a`
  text-decoration: underline;
`;

export const Button = styled.a`
  border-radius: 1rem;
  border: 0.9px solid ${({ theme }) => theme.colors.white};
  padding: 1rem 1.5rem;
`;

export const Decoration = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 15rem;
  margin-top: -0.2rem;
  div {
    svg {
      max-width: 20rem;
    }
  }
`;
