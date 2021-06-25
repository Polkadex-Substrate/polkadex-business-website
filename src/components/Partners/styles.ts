import styled, { css } from 'styled-components';

import { Wrapper as InvestorCard } from '../InvestorCard/styles';

export const Wrapper = styled.section`
  max-width: 140rem;
  @media screen and (min-width: 1100px) {
    margin: 3rem auto;
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
