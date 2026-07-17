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
      background: ${theme.colors.primary};
      width: 44rem;
      height: 44rem;
      top: -14rem;
      right: -10rem;
    }
    ::after {
      background: ${theme.colors.secondary};
      width: 46rem;
      height: 46rem;
      bottom: -18rem;
      left: -10rem;
    }

    @media screen and (max-width: 960px) {
      padding: 6rem 2rem;
      margin: 2rem auto;
    }
  `}
`;

export const Grid = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 1.6rem;
    max-width: 100rem;
    margin: 0 auto;

    @media screen and (max-width: 900px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 520px) {
      grid-template-columns: 1fr;
    }
  `}
`;

export const Card = styled.a`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.2rem;
    padding: 2.4rem 1.6rem;
    background: ${theme.colors.secondaryBackgroundOpacity};
    border: 1px solid ${theme.colors.secondaryBackground};
    border-radius: 1.2rem;
    color: ${theme.colors.text} !important;
    text-decoration: none;
    transition: transform 0.25s ease-in-out, border-color 0.25s ease-in-out,
      background 0.25s ease-in-out;

    :hover {
      transform: translateY(-0.4rem);
      border-color: ${theme.colors.primary}66;
      background: ${theme.colors.primary}08;
    }

    .platform {
      font-size: 1.5rem;
      font-weight: 600;
      color: ${theme.colors.text};
    }
    .handle {
      font-size: 1.25rem;
      opacity: 0.6;
    }
  `}
`;

export const IconWrap = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 4.4rem;
    height: 4.4rem;
    border-radius: 50%;
    background: ${theme.colors.primary}22;
    color: ${theme.colors.primary};

    svg {
      width: 2rem;
      height: 2rem;
      fill: currentColor;
    }
  `}
`;
