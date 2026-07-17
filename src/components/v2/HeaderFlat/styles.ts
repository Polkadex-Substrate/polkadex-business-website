import styled, { css } from 'styled-components';

export const Main = styled.header`
  ${({ theme }) => css`
    position: sticky;
    top: 0;
    z-index: 5;
    background: ${theme.colors.primaryBackground};
    padding: 1rem 0;
    border-bottom: 1px solid transparent;
    transition: transform 0.3s ease-in-out, border-color 0.3s ease-in-out,
      background 0.3s ease-in-out;

    /* Smart header: slides away when scrolling down, returns on scroll-up */
    &[data-hidden='true'] {
      transform: translateY(-100%);
    }

    /* Once scrolled: translucent blur + subtle divider */
    &[data-scrolled='true'] {
      background: ${theme.colors.primaryBackground}dd;
      backdrop-filter: saturate(160%) blur(14px);
      border-bottom-color: ${theme.colors.secondaryBackground};
    }
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
        position: relative;
        /* Sized against the page's body copy (1.5–1.6rem) so the nav no
           longer reads a step smaller than the content beneath it. */
        font-size: 1.6rem;
        font-weight: 500;
        color: ${theme.colors.text};
        opacity: 0.85;
        transition: opacity 0.2s ease-in-out, color 0.2s ease-in-out;
        :hover {
          opacity: 1;
          color: ${theme.colors.primary};
        }
        /* Active section indicator — small brand underline */
        &.active {
          opacity: 1;
          color: ${theme.colors.primary};
          ::after {
            content: '';
            position: absolute;
            left: 0;
            right: 0;
            bottom: -0.6rem;
            height: 2px;
            border-radius: 2px;
            background: ${theme.colors.primary};
          }
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
      padding: 1.2rem 2.6rem;
      border-radius: 0.6rem;
      font-size: 1.6rem;
      font-weight: 600;
      white-space: nowrap;
      transition: opacity 0.2s ease-in-out, transform 0.2s ease-in-out;
      :hover {
        opacity: 0.92;
        transform: translateY(-0.1rem);
      }
    }
    /* Mobile menu toggle — generous 44px tap target */
    button {
      display: none;
      background: transparent;
      border: none;
      color: ${theme.colors.text};
      cursor: pointer;
      padding: 1rem;
      margin: -1rem 0;
      @media screen and (max-width: 900px) {
        display: inline-flex;
        align-items: center;
        justify-content: center;
      }
      svg {
        display: block;
      }
    }
  `}
`;

export const MobileMenu = styled.nav`
  ${({ theme }) => css`
    /* Fixed overlay drawer — independent of the sticky header's transforms,
       so it can never be clipped or fail to appear. Toggled via data-open
       (always in the DOM; no mount/unmount race on hydration). */
    display: none;

    @media screen and (max-width: 900px) {
      display: flex;
      position: fixed;
      top: 7rem;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 40;
      flex-direction: column;
      gap: 0.4rem;
      padding: 2.4rem 2rem 4rem;
      background: ${theme.colors.primaryBackground}f5;
      backdrop-filter: blur(16px);
      overflow-y: auto;

      opacity: 0;
      pointer-events: none;
      transform: translateY(-0.8rem);
      transition: opacity 0.25s ease-in-out, transform 0.25s ease-in-out;

      &[data-open='true'] {
        opacity: 1;
        pointer-events: auto;
        transform: translateY(0);
      }

      a {
        font-size: 2rem;
        font-weight: 500;
        color: ${theme.colors.text};
        padding: 1.4rem 0.6rem;
        border-bottom: 1px solid ${theme.colors.secondaryBackgroundOpacity};
        :hover {
          color: ${theme.colors.primary};
        }
        &.cta {
          margin-top: 2rem;
          border-bottom: none;
          background: ${theme.colors.primary};
          color: ${theme.colors.white};
          text-align: center;
          border-radius: 0.8rem;
          padding: 1.4rem;
          font-weight: 600;
        }
      }
    }
  `}
`;
