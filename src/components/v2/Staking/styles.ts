import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  ${({ theme }) => css`
    margin: 4rem 0 8rem 0;
    background: ${theme.colors.tertiaryBackgroundOpacity};
  `}
`;
export const Container = styled.div`
  ${({ theme }) => css`
    max-width: ${theme.grid.container};
    margin: 0 auto;
    display: grid;
    gap: 2rem;
    align-items: center;
    @media screen and (max-width: 1200px) {
      padding: 4rem 1rem 2rem 1rem;
    }
    @media screen and (min-width: 800px) {
      grid-template-columns: 1.5fr 1fr;
    }
  `}
`;

export const Hero = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    max-width: 55rem;
    width: 100%;
  }
`;
export const Content = styled.div`
  ${({ theme }) => css`
    span {
      display: block;
      background: ${theme.colors.primaryBackground};
      color: ${theme.colors.text};
      border-radius: 0.5rem;
      padding: 0.5rem;
      font-weight: 500;
      width: fit-content;
      margin-bottom: 1rem;
    }
    h2,
    p {
      color: ${theme.colors.black};
    }
    h2 {
      font-size: 5rem;
      line-height: 1.2;
      margin-bottom: 1rem;
      strong {
        color: ${theme.colors.primary};
      }
    }
    p {
      line-height: 1.5;
    }
    a {
      display: block;
      color: ${theme.colors.white};
      background: ${theme.colors.primary};
      border-radius: 0.8rem;
      padding: 1rem;
      margin-top: 1rem;
      width: fit-content;
      transition: background 0.2s ease-in-out;
      :hover {
        background: ${theme.colors.black};
      }
    }
  `}
`;
