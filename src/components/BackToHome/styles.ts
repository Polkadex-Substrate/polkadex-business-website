import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    /* Aligned to the site-wide 100rem content column, with breathing room
       below the sticky header and above the page content. */
    max-width: 100rem;
    margin: 4rem auto 2rem;
    padding: 0 2rem;
    @media screen and (min-width: 1040px) {
      padding: 0;
    }

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
  `}
`;
