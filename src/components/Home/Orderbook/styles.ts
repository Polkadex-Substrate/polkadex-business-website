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
      width: 48rem;
      height: 48rem;
      top: -16rem;
      right: -12rem;
    }
    ::after {
      background: ${theme.colors.primary};
      width: 44rem;
      height: 44rem;
      bottom: -14rem;
      left: -10rem;
    }

    @media screen and (max-width: 960px) {
      padding: 6rem 2rem;
      margin: 2rem auto;
    }
  `}
`;

export const Preview = styled.div`
  ${({ theme }) => css`
    max-width: 100rem;
    margin: 0 auto 5rem;
    padding: 1rem;
    background: ${theme.colors.secondaryBackgroundOpacity};
    border: 1px solid ${theme.colors.secondaryBackground};
    border-radius: 1.6rem;
    overflow: hidden;
    box-shadow: 0 30px 80px rgba(0, 0, 0, 0.35);

    /* Fade the bottom of the screenshot so it blends into the page bg */
    position: relative;
    ::after {
      content: '';
      position: absolute;
      inset: auto 0 0 0;
      height: 8rem;
      background: linear-gradient(
        to bottom,
        rgba(13, 13, 16, 0),
        ${theme.colors.primaryBackground}
      );
      pointer-events: none;
    }
    svg {
      display: block;
      width: 100%;
      height: auto;
    }
  `}
`;

export const Features = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    max-width: 100rem;
    margin: 0 auto;

    @media screen and (max-width: 900px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 620px) {
      grid-template-columns: 1fr;
    }
  `}
`;

export const Feature = styled.div`
  ${({ theme }) => css`
    padding: 3rem;
    background: ${theme.colors.secondaryBackgroundOpacity};
    border: 1px solid ${theme.colors.secondaryBackground};
    border-radius: 1.6rem;
    backdrop-filter: blur(20px);
    transition: transform 0.3s ease-in-out, border-color 0.3s ease-in-out;
    display: flex;
    flex-direction: column;
    gap: 1.4rem;
    :hover {
      transform: translateY(-0.4rem);
      border-color: ${theme.colors.primary}55;
    }
  `}
`;

export const FeatureIcon = styled.div`
  ${({ theme }) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 4.4rem;
    height: 4.4rem;
    border-radius: 1rem;
    background: ${theme.colors.primary}22;
    color: ${theme.colors.primary};
    svg {
      width: 2.4rem;
      height: 2.4rem;
      fill: currentColor;
    }
  `}
`;

export const FeatureTitle = styled.h3`
  ${({ theme }) => css`
    font-size: 1.8rem;
    font-weight: 600;
    letter-spacing: -0.01em;
    color: ${theme.colors.text};
  `}
`;

export const FeatureDescription = styled.p`
  ${({ theme }) => css`
    font-size: 1.45rem;
    line-height: 1.55;
    opacity: 0.75;
    margin: 0;
  `}
`;

export const Footer = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.6rem;
    margin-top: 5rem;
    flex-wrap: wrap;

    a {
      display: inline-flex;
      align-items: center;
      gap: 0.6rem;
      padding: 1.2rem 2.4rem;
      border-radius: 0.6rem;
      font-weight: 500;
      transition: opacity 0.2s ease-in-out;
    }
    a.primary {
      background: ${theme.colors.primary};
      color: ${theme.colors.white};
      :hover {
        opacity: 0.9;
      }
    }
    a.secondary {
      color: ${theme.colors.text};
      opacity: 0.85;
      text-decoration: underline;
      text-underline-offset: 3px;
      :hover {
        opacity: 1;
      }
    }
  `}
`;
