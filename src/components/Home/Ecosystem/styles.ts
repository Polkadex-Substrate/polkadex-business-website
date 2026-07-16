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
      background: ${theme.colors.secondary};
      width: 46rem;
      height: 46rem;
      top: -14rem;
      left: -12rem;
    }
    ::after {
      background: ${theme.colors.primary};
      width: 48rem;
      height: 48rem;
      bottom: -16rem;
      right: -10rem;
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
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 1.6rem;

  @media screen and (max-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
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
    height: 10rem;
    padding: 2rem;
    background: ${theme.colors.secondaryBackgroundOpacity};
    border: 1px solid ${theme.colors.secondaryBackground};
    border-radius: 1.2rem;
    transition: transform 0.3s ease-in-out, border-color 0.3s ease-in-out,
      background 0.3s ease-in-out;
    :hover {
      transform: translateY(-0.3rem);
      border-color: ${theme.colors.primary}44;
      background: ${theme.colors.primary}08;
    }
    svg {
      max-width: 60%;
      max-height: 60%;
      opacity: 0.85;
      transition: opacity 0.3s ease-in-out;
    }
    :hover svg {
      opacity: 1;
    }
    img {
      max-width: 60%;
      max-height: 60%;
      object-fit: contain;
      opacity: 0.85;
      transition: opacity 0.3s ease-in-out;
    }
    :hover img {
      opacity: 1;
    }
  `}
`;
