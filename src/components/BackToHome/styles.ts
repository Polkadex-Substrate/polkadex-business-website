import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    max-width: 120rem;
    margin: 3rem auto 0;
    padding: 0 3rem;

    a {
      display: inline-flex;
      align-items: center;
      gap: 0.6rem;
      font-size: 1.4rem;
      font-weight: 500;
      color: ${theme.colors.primary};
      text-decoration: none;
      transition: opacity 0.2s ease-in-out, transform 0.2s ease-in-out;
      :hover {
        opacity: 0.85;
        transform: translateX(-0.3rem);
      }
    }

    @media screen and (max-width: 700px) {
      padding: 0 2rem;
    }
  `}
`;
