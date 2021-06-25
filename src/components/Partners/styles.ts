import styled, { css } from 'styled-components';

import { Wrapper as InvestorCard } from '../InvestorCard/styles';

export const Wrapper = styled.section`
  max-width: 140rem;
  @media screen and (min-width: 1100px) {
    margin: 3rem auto 8rem auto;
  }

  @media screen and (max-width: 1200px) {
    padding: 2rem;
  }
`;

export const TitleContainer = styled.div`
  ${({ theme }) => css`
    max-width: ${theme.grid.container};
  `}
  margin: 0 auto 3rem auto;
`;

export const Container = styled.div``;
export const CustomCardEmpty = styled.div`
  background: rgba(139, 161, 190, 0.2);
  padding: 2rem;
  border-radius: 2rem;
  margin-left: 2rem;
  & :nth-child(2) {
    opacity: 0.3;
    width: 100%;
  }
  & :nth-child(3) {
    opacity: 0.1;
    width: 100%;
    max-width: 8rem;
  }
  @media screen and (min-width: 630px) {
    display: none;
  }
`;
export const CustomCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(139, 161, 190, 0.2);
  padding: 2rem;
  border-radius: 2rem;

  & img {
    width: 100%;
    object-fit: contain;
  }
`;

export const Box = styled.div`
  display: flex;
  @media screen and (max-width: 630px) {
    flex-direction: column;
  }
`;
export const Card = styled.div`
  width: 100%;
  :first-child {
    display: flex;
    @media screen and (min-width: 630px) {
      margin-right: 2rem;
      max-width: 18rem;
    }

    @media screen and (max-width: 630px) {
      margin-bottom: 2rem;
    }
  }
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;
  ${InvestorCard} {
    margin-bottom: 3rem;
    :not(:last-child) {
      margin-right: 4rem;
    }
  }

  :not(:last-child) {
    margin-bottom: 2rem;
  }
  @media screen and (min-width: 1000px) {
    grid-template-columns: repeat(4, auto);
  }

  @media screen and (min-width: 1330px) {
    grid-template-columns: repeat(7, auto);
  }
`;
