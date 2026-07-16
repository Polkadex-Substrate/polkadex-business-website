import styled, { css } from 'styled-components';

export const Main = styled.header`
  ${({ theme }) => css`
    position: sticky;
    top: 0;
    z-index: 5;
    background: ${theme.colors.primaryBackground};
    padding: 1rem 0;
    border-bottom: 1px solid transparent;
    transition: border-color 0.3s ease-in-out;
  `}
`;

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
    max-width: 120rem;
    margin: 0 auto;
    padding: 1rem 2rem;
    @media screen and (min-width: 1200px) {
      padding: 1rem 3rem;
    }
  `}
`;

export const AsideLeft = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: 3.5rem;
    align-items: center;
    svg {
      fill: ${theme.colors.text};
    }
    nav {
      display: flex;
      align-items: center;
      gap: 3rem;
      @media screen and (max-width: 900px) {
        display: none;
      }
      a {
        font-size: 1.4rem;
        font-weight: 500;
        color: ${theme.colors.text};
        opacity: 0.85;
        transition: opacity 0.2s ease-in-out, color 0.2s ease-in-out;
        :hover {
          opacity: 1;
          color: ${theme.colors.primary};
        }
      }
    }
  `}
`;

export const AsideRight = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 1.6rem;
    /* Primary CTA */
    a {
      display: inline-flex;
      align-items: center;
      gap: 0.6rem;
      background: ${theme.colors.primary};
      color: ${theme.colors.white} !important;
      padding: 1.1rem 2.4rem;
      border-radius: 0.6rem;
      font-size: 1.4rem;
      font-weight: 600;
      white-space: nowrap;
      transition: opacity 0.2s ease-in-out, transform 0.2s ease-in-out;
      :hover {
        opacity: 0.92;
        transform: translateY(-0.1rem);
      }
    }
    /* Mobile menu toggle */
    button {
      display: none;
      background: transparent;
      border: none;
      color: ${theme.colors.text};
      font-size: 1.4rem;
      cursor: pointer;
      @media screen and (max-width: 900px) {
        display: inline-flex;
        align-items: center;
        gap: 0.4rem;
      }
    }
  `}
`;

export const MobileMenu = styled.div`
  ${({ theme }) => css`
    display: none;
    @media screen and (max-width: 900px) {
      display: flex;
      flex-direction: column;
      gap: 1.6rem;
      padding: 2rem 2rem 3rem;
      border-top: 1px solid ${theme.colors.secondaryBackground};
      background: ${theme.colors.primaryBackground};
      a {
        font-size: 1.6rem;
        font-weight: 500;
        color: ${theme.colors.text};
        :hover {
          color: ${theme.colors.primary};
        }
      }
    }
  `}
`;
