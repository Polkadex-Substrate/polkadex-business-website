import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    max-width: 120rem;
    margin: 2rem auto 0 auto;
    padding: 0 2rem;
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
    }
  `}
`;

export const Action = styled.a`
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
