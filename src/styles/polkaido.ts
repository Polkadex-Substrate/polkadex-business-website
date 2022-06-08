import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    min-height: 100vh;
    background: ${theme.colors.primaryBackground};
    position: relative;
  `}
`;
export const Container = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.primaryBackground};
    border-radius: 0 0 5rem 5rem;
    padding-bottom: 4rem;
  `}
`;
export const Content = styled.div`
  padding: 5rem 2rem;
  max-width: 90rem;
  margin: 0 auto;
  h1 {
    margin-bottom: 2rem;
  }
  p {
    margin-bottom: 1rem;
    line-height: 1.4;
  }
`;
