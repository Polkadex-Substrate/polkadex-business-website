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
      opacity: 0.24;
      z-index: -1;
    }
    ::before {
      background: ${theme.colors.primary};
      width: 46rem;
      height: 46rem;
      top: -14rem;
      right: -12rem;
    }
    ::after {
      background: ${theme.colors.secondary};
      width: 48rem;
      height: 48rem;
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
  max-width: 110rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const Row = styled.div`
  /* Locked to 7 columns on desktop so the 14 partners land in exactly two
     equal rows. Falls back to 4 / 2 on smaller viewports. */
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 1.2rem;

  @media screen and (max-width: 900px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media screen and (max-width: 520px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const Card = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 7.2rem;
    padding: 1.2rem;
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
      max-width: 78%;
      max-height: 65%;
      object-fit: contain;
      opacity: 0.85;
      transition: opacity 0.3s ease-in-out;
    }
    :hover svg,
    :hover img {
      opacity: 1;
    }
  `}
`;
