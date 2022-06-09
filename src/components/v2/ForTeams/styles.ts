import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  ${({ theme }) => css`
    max-width: 140rem;
    margin: 0 auto 10rem auto;
  `}
`;
export const Container = styled.div`
  display: grid;
  align-items: center;
  gap: 5rem;

  img {
    width: 100%;
  }
  @media screen and (min-width: 1000px) {
    grid-template-columns: 1.8fr 1fr;
  }
  @media screen and (max-width: 1000px) {
    margin-bottom: 4rem;
  }
`;
export const Content = styled.div`
  @media screen and (min-width: 1000px) {
    max-width: 35rem;
  }
`;

export const Title = styled.div`
  h2 {
    line-height: 1.2;
    font-size: 4rem;
    margin-bottom: 1rem;
  }
  p {
    line-height: 1.5;
  }
`;
export const ContentCard = styled.div`
  ${({ theme }) => css`
    margin-top: 3rem;
    background: ${theme.colors.tertiaryBackgroundOpacity};
    border-radius: 2rem;
    p {
      padding: 2rem;
      line-height: 1.5;
    }

    ul {
      padding: 0 2rem;
    }
    li {
      list-style: none;
      padding: 1.5rem;
      transition: background 0.3s ease-in-out;
      cursor: pointer;
      border-radius: 1rem;

      :first-child,
      :hover {
        background: ${theme.colors.tertiaryBackground};
      }
      :not(:last-child) {
        margin-bottom: 0.2rem;
      }
    }
    a {
      margin-top: 1.5rem;
      font-weight: 500;
      text-align: center;
      background: ${theme.colors.primary};
      display: block;
      padding: 1.5rem;
      border-radius: 1rem;
    }
  `}
`;
export const Benefits = styled.div`
  ${({ theme }) => css`
    max-width: ${theme.grid.container};
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    gap: 2rem;
  `}
`;
export const Card = styled.div`
  display: flex;
  gap: 1rem;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 2rem;
    max-width: 2rem;
    height: 2rem;
    img {
      width: 100%;
    }
  }
  p {
    line-height: 1.5;
  }
`;
