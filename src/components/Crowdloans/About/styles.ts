import { Wrapper as Icon } from 'components/Icon/styles';
import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  padding: 5rem 0;
  max-width: 95rem;
  margin: 0 auto;
  @media screen and (max-width: 950px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  p,
  a {
    font-size: 1.5rem;
    line-height: 1.5;
  }
`;

export const Title = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-gap: 1rem;
    margin-bottom: 5rem;

    @media screen and (min-width: 720px) {
      grid-template-columns: 1fr 1fr;
    }
    h2 {
      font-size: 3.5rem;
    }
    a {
      display: block;
      margin-top: 1rem;
      color: ${theme.colors.primary};
    }
  `}
`;

export const Content = styled.div`
  /* display: flex; */
`;

export const Card = styled.div`
  ${({ theme }) => css`
    padding: 6rem 2.5rem;
    border-radius: 0.5rem;
    background: ${theme.colors.secondaryBackgroundOpacity};

    a {
      font-weight: 500;
      font-size: 1.3rem;
      display: block;
      margin-top: 1.5rem;
      color: ${theme.colors.primary};
    }

    h3 {
      font-size: 2.5rem;
      margin-bottom: 1rem;
      margin-top: 3rem;
    }
    svg {
      width: auto;
      height: 10rem;
    }
    @media screena and (min-width: 800px) {
      max-width: 50rem;
    }
  `}
`;
export const Actions = styled.div<{ isRight?: boolean }>`
  ${({ isRight }) => css`
    display: grid;

    grid-gap: 2rem;
    margin-top: 2rem;

    > div:first-child {
      justify-self: flex-end;
      opacity: 0.5;
    }
    div:first-child {
      justify-self: flex-end;
    }
    span {
      margin: 0 ${isRight ? '1rem' : 0} 0 ${isRight ? 0 : '1rem'};
    }
    ${Icon} {
      display: inline-block;
    }
  `}
`;
