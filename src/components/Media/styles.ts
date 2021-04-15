import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  margin: 8rem auto;
  ${({ theme }) => css`
    max-width: ${theme.grid.container};
  `}
  @media screen and (max-width: 1200px) {
    padding: 2rem;
  }
`;
export const TitleContainer = styled.div`
  margin: 0 auto 4rem auto;
`;
export const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 2rem;
  @media screen and (min-width: 1000px) {
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 2rem;
  }
  @media screen and (min-width: 700px) and (max-width: 1100px) {
    grid-template-columns: 1fr 1fr;
    column-gap: 2rem;
  }
`;
