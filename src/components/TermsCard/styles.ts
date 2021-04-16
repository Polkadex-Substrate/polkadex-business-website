import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.text};
    background: ${theme.colors.secondaryBackground};
    border-radius: 3rem 3rem 3rem 0;
  `}
  margin: 3rem 0;

  @media screen and (min-width: 640px) {
    padding: 4rem;
  }
  @media screen and (max-width: 640px) {
    padding: 1.5rem;
  }

  & h3 {
    font-size: 3rem;
    margin-bottom: 2rem;
  }
`;
