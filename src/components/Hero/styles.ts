import { Wrapper as Icon } from 'components/Icon/styles';
import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  margin-top: 10rem;
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

    & img {
      width: 100%;
      max-width: 130rem;
      transform-style: preserve-3d;
      margin-left: 8rem;
    }
  }
`;

export const Row = styled.div`
  margin-top: 8rem;
  & span {
    display: block;
    opacity: 0.7;
    margin-bottom: 1rem;
  }
`;

export const Col = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  column-gap: 3rem;
  align-items: center;
`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  & ${Icon} {
    margin-right: 1rem;
  }
  :last-child {
    opacity: 0.4;
  }
`;

export const PlannedIcon = styled.div`
  padding: 0.6rem;
  border-radius: 0.9rem;
  max-width: 3rem;
  height: 3rem;
  margin-right: 0.5rem;
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
