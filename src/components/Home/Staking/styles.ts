import { skeletonCss } from 'styles/animations';
import styled, { css, keyframes } from 'styled-components';

const shimmer = keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;

/** Placeholder shown while live staking stats are being fetched. */
export const Skeleton = styled.span<{ width?: string; height?: string }>`
  ${({ width = '18rem', height = '7rem' }) => css`
    ${skeletonCss}
    width: ${width};
    height: ${height};
  `}
`;

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
      left: -12rem;
    }
    ::after {
      background: ${theme.colors.secondary};
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

export const ApyBanner = styled.div`
  ${({ theme }) => css`
    max-width: 100rem;
    margin: 0 auto 4rem;
    padding: 4rem;
    text-align: center;
    background: ${theme.colors.secondaryBackgroundOpacity};
    border: 1px solid ${theme.colors.primary}55;
    border-radius: 2rem;
    backdrop-filter: blur(20px);

    small {
      display: block;
      font-size: 1.3rem;
      font-weight: 600;
      color: ${theme.colors.primary};
      letter-spacing: 0.15em;
      text-transform: uppercase;
      margin-bottom: 1.2rem;
    }
  `}
`;

export const ApyNumber = styled.div`
  ${({ theme }) => css`
    font-size: 9rem;
    font-weight: 700;
    line-height: 1;
    letter-spacing: -0.03em;
    background: ${theme.colors.gradient};
    background-size: 200% 100%;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    @media (prefers-reduced-motion: no-preference) {
      animation: ${shimmer} 8s ease-in-out infinite;
    }

    @media screen and (max-width: 700px) {
      font-size: 6.5rem;
    }
  `}
`;

export const ApyCaption = styled.p`
  ${({ theme }) => css`
    font-size: 1.5rem;
    line-height: 1.55;
    opacity: 0.75;
    margin: 1.6rem 0 0;
  `}
`;

export const Benefits = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  max-width: 100rem;
  margin: 0 auto;

  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const Benefit = styled.div`
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

export const WalletsBlock = styled.div`
  ${({ theme }) => css`
    max-width: 100rem;
    margin: 5rem auto 0;
    text-align: center;
    h4 {
      font-size: 1.3rem;
      font-weight: 600;
      color: ${theme.colors.primary};
      letter-spacing: 0.12em;
      text-transform: uppercase;
      margin-bottom: 2rem;
    }
  `}
`;

export const WalletsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1.4rem;
  max-width: 82rem;
  margin: 0 auto;

  @media screen and (max-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 520px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const WalletCard = styled.a`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;
    padding: 1.6rem 1rem;
    background: ${theme.colors.secondaryBackgroundOpacity};
    border: 1px solid ${theme.colors.secondaryBackground};
    border-radius: 1rem;
    color: ${theme.colors.text} !important;
    text-decoration: none;
    transition: transform 0.25s ease-in-out, border-color 0.25s ease-in-out;
    :hover {
      transform: translateY(-0.3rem);
      border-color: ${theme.colors.primary}55;
    }
    img,
    svg {
      max-width: 3.4rem;
      max-height: 3.4rem;
      object-fit: contain;
    }
    span {
      font-size: 1.25rem;
      font-weight: 500;
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
