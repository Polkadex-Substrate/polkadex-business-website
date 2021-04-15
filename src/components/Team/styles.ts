import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  ${({ theme }) => css`
    max-width: ${theme.grid.container};
  `}
  margin: 6rem auto;
  @media screen and (max-width: 1200px) {
    padding: 2rem;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-bottom: 6rem;
`;

export const TitleWrapper = styled.div`
  max-width: 45rem;
`;

export const Row = styled.div`
  display: grid;
  row-gap: 4rem;

  @media screen and (min-width: 1020px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media screen and (max-width: 1020px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const Col = styled.div``;
