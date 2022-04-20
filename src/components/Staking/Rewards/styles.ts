import { Wrapper as Icon } from 'components/Icon/styles';
import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  max-width: 100rem;
  margin: 5rem auto;
  @media screen and (max-width: 1000px) {
    padding: 1rem;
  }
  display: grid;
  grid-gap: 2rem;
  @media screen and (min-width: 660px) and (max-width: 999px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (min-width: 1000px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const Title = styled.div`
  background: white;
  color: black;
  padding: 5rem 3rem 5rem 3rem;
  border-radius: 2.5rem;

  @media screen and (min-width: 660px) {
    background-image: url('/img/stakingApy.svg');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: bottom center;
    min-height: 50rem;
  }
  h2 {
    font-size: 3.5rem;
    line-height: 1;
    margin-bottom: 2rem;
  }
  p {
    line-height: 1.6;
  }
  div {
    max-width: 2rem;
    margin-top: 2rem;
    svg {
      fill: black;
    }
  }
`;

export const Card = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.secondaryBackgroundOpacity};
    border-radius: 2.5rem;
    padding: 3rem;
  `}
`;

export const CardTitle = styled.div`
  margin-bottom: 2.5rem;
  h3 {
    font-size: 3rem;
    line-height: 1.5;
  }
  p {
    line-height: 1.6;
  }
`;
export const CardContent = styled.div`
  span {
    display: block;
    font-size: 1.4rem;
    font-weight: 500;
    margin-bottom: 1.5rem;
    opacity: 0.7;
  }
`;

export const IconWrapper = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.secondaryBackgroundOpacity};
    padding: 1rem;
    border-radius: 1rem;
    width: 7rem;
    height: 7rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
  `}
`;

export const Box = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 0.8rem;
  :not(:last-child) {
    margin-bottom: 1.8rem;
  }
  ${Icon} {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
  }
`;
export const BoxWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${theme.colors.primary};
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    svg {
      max-width: 1.1rem;
    }
  `}
`;
