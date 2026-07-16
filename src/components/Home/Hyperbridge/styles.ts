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

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  max-width: 110rem;
  margin: 0 auto;

  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  ${({ theme }) => css`
    padding: 3rem;
    background: ${theme.colors.secondaryBackgroundOpacity};
    border: 1px solid ${theme.colors.secondaryBackground};
    border-radius: 1.6rem;
    transition: transform 0.3s ease-in-out, border-color 0.3s ease-in-out;
    :hover {
      transform: translateY(-0.4rem);
      border-color: ${theme.colors.primary}55;
    }
    h3 {
      font-size: 1.8rem;
      font-weight: 600;
      color: ${theme.colors.text};
      margin-bottom: 1rem;
    }
    p {
      font-size: 1.45rem;
      line-height: 1.55;
      opacity: 0.75;
      margin: 0;
    }
  `}
`;

export const IconWrap = styled.div`
  ${({ theme }) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 4.4rem;
    height: 4.4rem;
    border-radius: 1rem;
    background: ${theme.colors.primary}22;
    color: ${theme.colors.primary};
    margin-bottom: 1.6rem;
    svg {
      width: 2.4rem;
      height: 2.4rem;
      fill: currentColor;
    }
  `}
`;

export const Footer = styled.div`
  ${({ theme }) => css`
    text-align: center;
    margin-top: 5rem;
    a {
      display: inline-flex;
      align-items: center;
      gap: 0.6rem;
      padding: 1.2rem 2.4rem;
      background: ${theme.colors.primary};
      color: ${theme.colors.white};
      border-radius: 0.6rem;
      font-weight: 500;
      transition: opacity 0.2s ease-in-out;
      :hover {
        opacity: 0.9;
      }
    }
  `}
`;
