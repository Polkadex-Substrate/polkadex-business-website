import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.primaryBackground};
    min-height: 100vh;
  `}
`;
export const TermsWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: 2rem;
    flex-direction: column;
    background: ${theme.colors.secondaryBackgroundSolid};
    border-radius: 2rem;
    max-width: 40rem;
    margin: 0 auto;
    .fade-enter {
      opacity: 0;
      transform: scale(0.9);
    }
    .fade-enter-active {
      opacity: 1;
      transform: translateX(0);
      transition: opacity 300ms, transform 300ms;
    }
    .fade-exit {
      opacity: 1;
    }
    .fade-exit-active {
      opacity: 0;
      transform: scale(0.9);
      transition: opacity 300ms, transform 300ms;
    }
  `}
`;
export const Terms = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 2.5rem;
    img {
      max-width: 15rem;
      width: 100%;
    }
    div {
      display: flex;
      flex-direction: column;
      gap: 1.2rem;
      h5 {
        font-size: 1.8rem;
        font-weight: 500;
      }
      p {
        line-height: 1.6;
      }
      a {
        color: ${theme.colors.primary};
        text-decoration: underline;
      }
    }
  `}
`;

export const Button = styled.button`
  ${({ theme }) => css`
    background: ${theme.colors.primary};
    border-radius: 0.5rem;
    color: ${theme.colors.white};
    padding: 0.8rem 1rem;
    font-size: 1.4rem;
    transition: opacity 0.5s ease;
    cursor: pointer;
    :hover {
      opacity: 0.8;
    }
  `}
`;
