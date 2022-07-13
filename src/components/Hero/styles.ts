import { Wrapper as Icon } from 'components/Icon/styles';
import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  margin-top: 10rem;
`;
export const Tag = styled.a`
  ${({ theme }) => css`
    background: ${theme.colors.gradient};
    color: ${theme.colors.white} !important;
    font-weight: 500;
    padding: 1rem;
    border-radius: 20rem;
    margin: 1rem auto 0 auto;
    transition: transform 0.3s ease-in-out;
    transform: translateY(0);
    :hover {
      transform: translateY(-0.2rem);
    }
  `}
`;

export const Container = styled.div`
  :first-child {
    display: flex;
    text-align: center;
    flex-direction: column;
    align-items: center;
    max-width: 85rem;
    margin: 0 auto;
    & h1 {
      font-size: 5rem;
      font-weight: 700;
      margin-bottom: 1.5rem;
    }
    & h2 {
      font-size: 2rem;
      font-weight: 400;
      line-height: 1.5;
      margin-bottom: 2.5rem;
    }

    @media screen and (max-width: 650px) {
      padding: 2rem;
      & h1 {
        font-size: 3.2rem;
      }
      & h2 {
        font-size: 1.6rem;
      }
    }
  }
  :last-child {
    perspective-origin: 50% 50%;
    overflow: hidden;
    text-align: center;
    transform-style: preserve-3d;
    transform: rotateX(-50%) rotateZ(-50%);
    & img {
      width: 100%;
      max-width: 130rem;
      margin-left: 8rem;
      transition: transform 1.2s cubic-bezier(0.215, 0.61, 0.355, 1);
      transform: rotateX(50deg) rotateZ(-30deg) translate3d(-0px, 0px, -8rem);

      &.active {
        transform: rotateX(0) rotateZ(0);
      }
    }
  }
`;
export const RowBanner = styled.div`
  margin-top: 4rem;
  margin-bottom: 2rem;
`;

export const CtaContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  @media screen and (max-width: 375px) {
    flex-direction: column;
  }
`;
export const SecondaryButton = styled.a`
  transition: opacity 0.2s;
  :hover {
    opacity: 0.7;
  }
  @media screen and (max-width: 375px) {
    margin-top: 1.5rem;
  }
  @media screen and (min-width: 375px) {
    margin-left: 1.5rem;
  }
`;
export const Row = styled.div`
  margin-top: 4rem;
  & span {
    display: block;
    opacity: 0.7;
    margin-bottom: 1rem;
  }
`;

export const Col = styled.div`
  display: grid;
  grid-gap: 2rem;
  align-items: center;
  @media screen and (min-width: 420px) {
    grid-template-columns: repeat(3, auto);
  }
`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  & ${Icon} {
    margin-right: 1rem;
  }
  :not(:first-child) {
    opacity: 0.4;
  }
`;

export const PlannedIcon = styled.div`
  border-radius: 0.9rem;
  width: 3.5rem;
  height: 3.5rem;
  padding: 0.8rem;
  margin-right: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ theme }) => css`
    background: ${theme.colors.secondaryBackground};
    color: ${theme.colors.text};
    transition: ${theme.transition.default};

    :hover {
      background: ${theme.colors.primary};
      transform: translateY(-0.2rem);
    }
    & img {
      width: 100%;
    }
  `}
`;
