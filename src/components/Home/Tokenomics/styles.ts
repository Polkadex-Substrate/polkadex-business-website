import styled, { css, keyframes } from 'styled-components';

const shimmer = keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;

export const Wrapper = styled.section`
  ${({ theme }) => css`
    position: relative;
    padding: 8rem 2rem;
    max-width: 130rem;
    margin: 4rem auto;
    overflow: hidden;
    isolation: isolate;

    /* Decorative brand-color blobs behind content */
    ::before,
    ::after {
      content: '';
      position: absolute;
      border-radius: 50%;
      filter: blur(120px);
      opacity: 0.28;
      z-index: -1;
    }
    ::before {
      background: ${theme.colors.primary};
      width: 45rem;
      height: 45rem;
      top: -15rem;
      left: -10rem;
    }
    ::after {
      background: ${theme.colors.secondary};
      width: 50rem;
      height: 50rem;
      bottom: -20rem;
      right: -12rem;
    }

    @media screen and (max-width: 960px) {
      padding: 6rem 2rem;
      margin: 2rem auto;
    }
  `}
`;

export const Header = styled.div`
  ${({ theme }) => css`
    text-align: center;
    max-width: 80rem;
    margin: 0 auto 6rem;

    span {
      display: inline-block;
      padding: 0.5rem 1.2rem;
      background: ${theme.colors.primary}22;
      color: ${theme.colors.primary};
      border: 1px solid ${theme.colors.primary}55;
      border-radius: 100px;
      font-size: 1.3rem;
      font-weight: 600;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      margin-bottom: 2rem;
    }

    h2 {
      font-size: 4rem;
      font-weight: 500;
      line-height: 1.15;
      letter-spacing: -0.02em;
      margin-bottom: 1.5rem;
      strong {
        color: ${theme.colors.primary};
        font-weight: 600;
      }
    }

    p {
      font-size: 1.6rem;
      line-height: 1.6;
      opacity: 0.7;
      max-width: 62rem;
      margin: 0 auto;
    }

    @media screen and (max-width: 700px) {
      h2 {
        font-size: 3rem;
      }
    }
  `}
`;

export const Metrics = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    max-width: 110rem;
    margin: 0 auto;

    @media screen and (max-width: 900px) {
      grid-template-columns: 1fr;
    }
  `}
`;

export const Metric = styled.div`
  ${({ theme }) => css`
    position: relative;
    padding: 3.5rem 3rem;
    background: ${theme.colors.secondaryBackgroundOpacity};
    border: 1px solid ${theme.colors.secondaryBackground};
    border-radius: 2rem;
    text-align: center;
    backdrop-filter: blur(20px);
    transition: transform 0.3s ease-in-out, border-color 0.3s ease-in-out;

    :hover {
      transform: translateY(-0.4rem);
      border-color: ${theme.colors.primary}66;
    }
  `}
`;

export const MetricValue = styled.div`
  ${({ theme }) => css`
    font-size: 6.5rem;
    font-weight: 700;
    line-height: 1;
    background: ${theme.colors.gradient};
    background-size: 200% 100%;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: ${shimmer} 8s ease-in-out infinite;
    margin-bottom: 1.2rem;
    letter-spacing: -0.03em;

    @media screen and (max-width: 700px) {
      font-size: 5rem;
    }
  `}
`;

export const MetricLabel = styled.div`
  ${({ theme }) => css`
    font-size: 1.6rem;
    font-weight: 600;
    color: ${theme.colors.text};
    margin-bottom: 0.8rem;
    letter-spacing: 0.02em;
  `}
`;

export const MetricDetail = styled.div`
  ${({ theme }) => css`
    font-size: 1.35rem;
    line-height: 1.5;
    opacity: 0.65;
  `}
`;

export const Footer = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    margin-top: 5rem;
    flex-wrap: wrap;

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

    span {
      font-size: 1.4rem;
      opacity: 0.65;
    }
  `}
`;
