import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    min-height: 100vh;
    /* background: ${theme.colors.white}; */
    position: relative;
  `}
`;
export const Container = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.primaryBackground};
    border-radius: 0 0 3rem 3rem;
    padding-bottom: 1rem;
    @media screen and (min-width: 1200px) {
      border-radius: 0 0 5rem 5rem;
      padding-bottom: 3rem;
    }
  `}
`;
