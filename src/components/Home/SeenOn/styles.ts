import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  ${({ theme }) => css`
    position: relative;
    padding: 8rem 2rem;
    max-width: 130rem;
    margin: 4rem auto;
    overflow: hidden;
    isolation: isolate;

    ::before,
    ::after {
      content: '';
      position: absolute;
      border-radius: 50%;
      filter: blur(120px);
      opacity: 0.22;
      z-index: -1;
    }
    ::before {
      background: ${theme.colors.secondary};
      width: 44rem;
      height: 44rem;
      top: -14rem;
      right: -10rem;
    }
    ::after {
      background: ${theme.colors.primary};
      width: 46rem;
      height: 46rem;
      bottom: -16rem;
      left: -10rem;
    }

    @media screen and (max-width: 960px) {
      padding: 6rem 2rem;
      margin: 2rem auto;
    }
  `}
`;

export const Content = styled.div`
  /* Narrower container + taller cards so the tiles read closer to square,
     consistent with the other card grids on the page. */
  max-width: 84rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.6rem;

  @media screen and (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.a`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 10rem;
    padding: 1.6rem;
    background: ${theme.colors.secondaryBackgroundOpacity};
    border: 1px solid ${theme.colors.secondaryBackground};
    border-radius: 1rem;
    transition: transform 0.3s ease-in-out, border-color 0.3s ease-in-out,
      background 0.3s ease-in-out;
    :hover {
      transform: translateY(-0.3rem);
      border-color: ${theme.colors.primary}44;
      background: ${theme.colors.primary}08;
    }
    svg,
    img {
      max-width: 75%;
      max-height: 65%;
      object-fit: contain;
      opacity: 0.8;
      filter: grayscale(65%);
      transition: opacity 0.3s ease-in-out, filter 0.3s ease-in-out;
    }
    :hover svg,
    :hover img {
      opacity: 1;
      filter: grayscale(0%);
    }
  `}
`;
