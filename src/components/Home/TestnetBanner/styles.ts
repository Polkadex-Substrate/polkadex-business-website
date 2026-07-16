import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    max-width: 100rem;
    margin: 2rem auto 0 auto;
    /* Match the homepage content inset: no side padding on desktop,
       1rem on mobile (same as Hero/Wallets) so it lines up. */
    padding: 0;
    @media screen and (max-width: 1000px) {
      padding: 0 1rem;
    }
  `}
`;

export const Banner = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 1.5rem;
    padding: 1.6rem 2.4rem;
    border-radius: 1.2rem;
    border: 1px solid ${theme.colors.secondaryBackground};
    background: ${theme.colors.secondaryBackgroundOpacity};
  `}
`;

export const Text = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
    max-width: 62rem;
    span {
      font-size: ${theme.font.sizes.small};
      font-weight: 600;
      color: ${theme.colors.primary};
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    p {
      font-size: ${theme.font.sizes.large};
      line-height: 1.4;
      strong {
        color: ${theme.colors.primary};
        font-weight: 600;
      }
    }
  `}
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  flex-wrap: wrap;
`;

export const PrimaryAction = styled.a`
  ${({ theme }) => css`
    flex-shrink: 0;
    padding: 1rem 2.4rem;
    border-radius: 0.6rem;
    background: ${theme.colors.primary};
    color: ${theme.colors.white};
    font-weight: 500;
    white-space: nowrap;
    transition: opacity 0.2s ease-in-out;
    :hover {
      opacity: 0.9;
    }
  `}
`;

export const SecondaryAction = styled.a`
  ${({ theme }) => css`
    flex-shrink: 0;
    padding: 1rem 2rem;
    border-radius: 0.6rem;
    color: ${theme.colors.text};
    font-weight: 500;
    white-space: nowrap;
    text-decoration: underline;
    text-underline-offset: 3px;
    transition: opacity 0.2s ease-in-out;
    :hover {
      opacity: 0.8;
    }
  `}
`;

/** @deprecated Kept for any legacy imports; use PrimaryAction / SecondaryAction. */
export const Action = PrimaryAction;
