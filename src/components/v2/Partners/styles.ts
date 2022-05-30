import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    max-width: ${theme.grid.container};
    margin: 4rem auto 0 auto;
    @media screen and (max-width: 1200px) {
      padding: 4rem 1rem 2rem 1rem;
    }
  `}
`;
