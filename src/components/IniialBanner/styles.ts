import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  ${({ theme }) => css`
    max-width: 120rem;
    margin: 5rem auto 0 auto;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    align-items: center;
    justify-content: space-between;
    @media screen and (max-width: 1200px) {
      padding: 2rem;
    }
    a {
      background: ${theme.colors.primary}22;
      color: ${theme.colors.primary};

      border-radius: 0.2rem;
      font-weight: 500;
      padding: 0.4rem 1rem;
    }
  `}
`;
