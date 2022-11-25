import styled, { css } from 'styled-components';

export const Wrapper = styled.section``;
export const Container = styled.div`
  max-width: 100rem;
  margin: 0 auto;
  display: grid;
  align-items: center;

  @media screen and (min-width: 970px) {
    grid-template-columns: 1.5fr 0.5fr;
    gap: 2rem;
  }
  @media screen and (max-width: 1000px) {
    padding: 1rem;
  }
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
    @media screen and (max-width: 960px) {
      align-items: center;
      text-align: center;
    }
    gap: 2rem;
    div {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      @media screen and (min-width: 960px) {
        gap: 3rem;
      }
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
