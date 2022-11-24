import styled, { css } from 'styled-components';

export const Wrapper = styled.section``;
export const Container = styled.div`
  ${({ theme }) => css`
    max-width: ${theme.grid.container};
    margin: 0 auto;
    display: grid;
    gap: 2rem;
    align-items: center;

    @media screen and (min-width: 800px) {
      grid-template-columns: 1.5fr 0.5fr;
    }
  `}
`;

export const Hero = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    max-width: 80rem;
    width: 100%;
  }
`;
export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    div {
      display: flex;
      flex-direction: column;
      gap: 3rem;
    }
    h2 {
      font-size: 3rem;
      font-weight: 500;
      line-height: 1.2;
      strong {
        color: ${theme.colors.primary};
        font-weight: 600;
      }
      @media screen and (max-width: 700px) {
        font-size: 3.5rem;
      }
    }
    p {
      line-height: 1.5;
    }
    a {
      width: fit-content;
      background: ${theme.colors.primary};
      width: fit-content;
      padding: 1rem 3rem;
      border-radius: 0.4rem;
    }
  `}
`;
