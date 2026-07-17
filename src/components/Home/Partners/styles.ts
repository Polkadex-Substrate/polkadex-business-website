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
  max-width: 100rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const Row = styled.div`
  /* 4 columns × 2 rows = 8 partners. Fewer, larger, more deliberate. */
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.6rem;

  @media screen and (max-width: 720px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

/** Light chip behind logos that disappear on the dark background. */
export const LightChip = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: #f4f5f7;
  border-radius: 0.8rem;
  padding: 0.8rem 1.4rem;
  img {
    max-height: 3.2rem;
  }
`;

export const Card = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 9rem;
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
