import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.gradientBackground};
  `}
  min-height: 100vh;
`;
