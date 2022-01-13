import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.primary};
    padding: 2rem;
    text-align: center;
    color: ${theme.colors.white};
    a {
      font-weight: 600;
      text-decoration-line: underline;
    }
  `}
`;
