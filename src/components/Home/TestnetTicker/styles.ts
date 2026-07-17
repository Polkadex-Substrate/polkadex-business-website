import styled, { css, keyframes } from 'styled-components';

const pulse = keyframes`
  0%, 100% { box-shadow: 0 0 0 0 rgba(27, 194, 154, 0.5); }
  50% { box-shadow: 0 0 0 6px rgba(27, 194, 154, 0); }
`;

export const Wrapper = styled.div`
  ${({ theme }) => css`
    max-width: 120rem;
    margin: 1.6rem auto 0;
    padding: 0 2rem;
  `}
`;

export const Items = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 0.8rem 2.8rem;
    padding: 1rem 2rem;
    border: 1px solid ${theme.colors.secondaryBackground};
    border-radius: 100px;
    background: ${theme.colors.secondaryBackgroundOpacity};
    backdrop-filter: blur(10px);
    @media screen and (max-width: 700px) {
      border-radius: 1.2rem;
    }
  `}
`;

export const Item = styled.div`
  ${({ theme }) => css`
    display: inline-flex;
    align-items: center;
    gap: 0.7rem;
    font-size: 1.25rem;
    .label {
      opacity: 0.6;
    }
    .value {
      font-weight: 600;
      color: ${theme.colors.text};
    }
    &.link .value {
      color: ${theme.colors.primary};
    }
  `}
`;

export const LiveDot = styled.span`
  ${({ theme }) => css`
    width: 0.8rem;
    height: 0.8rem;
    border-radius: 50%;
    background: ${theme.colors.green};
    @media (prefers-reduced-motion: no-preference) {
      animation: ${pulse} 2s ease-in-out infinite;
    }
  `}
`;
