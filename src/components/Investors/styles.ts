import styled, { css } from 'styled-components';

import { Wrapper as InvestorCard } from '../InvestorCard/styles';

export const Wrapper = styled.section`
  max-width: 140rem;
  @media screen and (min-width: 1100px) {
    margin: 12rem auto;
  }

  @media screen and (max-width: 1200px) {
    padding: 2rem;
  }
`;

export const TitleContainer = styled.div`
  ${({ theme }) => css`
    max-width: ${theme.grid.container};
  `}
  margin: 0 auto 6rem auto;
`;

export const Container = styled.div``;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  ${InvestorCard} {
    margin-bottom: 2rem;
    :not(:last-child) {
      margin-right: 2rem;
    }
  }

  :not(:last-child) {
    margin-bottom: 2rem;
  }
`;
