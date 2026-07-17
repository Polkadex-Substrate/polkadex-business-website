import { blobDriftAltCss, blobDriftCss } from 'styles/animations';
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
      left: -12rem;
      ${blobDriftCss}
    }
    ::after {
      background: ${theme.colors.secondary};
      width: 48rem;
      height: 48rem;
      bottom: -16rem;
      right: -10rem;
      ${blobDriftAltCss}
    }

    @media screen and (max-width: 960px) {
      padding: 6rem 2rem;
      margin: 2rem auto;
    }
  `}
`;

/* ── Hero head ─────────────────────────────────────────────────────────── */

export const HeroHead = styled.div`
  text-align: center;
  max-width: 88rem;
  margin: 0 auto 4rem;
`;

export const LivePill = styled.span`
  ${({ theme }) => css`
    display: inline-flex;
    align-items: center;
    gap: 0.8rem;
    padding: 0.6rem 1.4rem;
    background: ${theme.colors.primary}18;
    color: ${theme.colors.primary};
    border: 1px solid ${theme.colors.primary}55;
    border-radius: 100px;
    font-size: 1.3rem;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    margin-bottom: 2.4rem;
  `}
`;

export const LiveDot = styled.span`
  ${({ theme }) => css`
    width: 0.8rem;
    height: 0.8rem;
    border-radius: 50%;
    background: ${theme.colors.green};
    @media (prefers-reduced-motion: no-preference) {
      animation: livePulse 2s ease-in-out infinite;
    }
    @keyframes livePulse {
      0%,
      100% {
        box-shadow: 0 0 0 0 rgba(27, 194, 154, 0.55);
      }
      50% {
        box-shadow: 0 0 0 7px rgba(27, 194, 154, 0);
      }
    }
  `}
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: 5.6rem;
    font-weight: 700;
    line-height: 1.08;
    letter-spacing: -0.025em;
    margin-bottom: 2rem;
    color: ${theme.colors.text};
    strong {
      font-weight: 700;
      background: ${theme.colors.gradient};
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    @media screen and (max-width: 700px) {
      font-size: 3.6rem;
    }
  `}
`;

export const Sub = styled.p`
  ${({ theme }) => css`
    font-size: 1.9rem;
    line-height: 1.55;
    opacity: 0.8;
    max-width: 64rem;
    margin: 0 auto 3.2rem;
  `}
`;

export const CtaRow = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.8rem;
    flex-wrap: wrap;

    a.primary {
      display: inline-flex;
      align-items: center;
      padding: 1.4rem 3.4rem;
      background: ${theme.colors.primary};
      color: ${theme.colors.white};
      border-radius: 0.8rem;
      font-size: 1.6rem;
      font-weight: 600;
      transition: opacity 0.2s ease-in-out, transform 0.15s ease-in-out,
        box-shadow 0.2s ease-in-out;
      box-shadow: 0 8px 30px ${theme.colors.primary}44;
      :hover {
        opacity: 0.94;
        transform: translateY(-0.2rem);
        box-shadow: 0 12px 36px ${theme.colors.primary}55;
      }
    }
    a.ghost {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 1.5rem;
      font-weight: 500;
      color: ${theme.colors.text};
      opacity: 0.8;
      text-decoration: underline;
      text-underline-offset: 4px;
      :hover {
        opacity: 1;
        color: ${theme.colors.primary};
      }
    }
  `}
`;

export const Intro = styled.p`
  ${({ theme }) => css`
    max-width: 80rem;
    margin: 0 auto 5rem;
    text-align: center;
    font-size: 1.75rem;
    line-height: 1.6;
    color: ${theme.colors.text};
    opacity: 0.9;

    strong {
      color: ${theme.colors.primary};
      font-weight: 600;
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

export const Pillars = styled.div`
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
`;

export const Pillar = styled.div`
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
      display: flex;
      align-items: center;
      gap: 0.8rem;
    }
    p {
      font-size: 1.45rem;
      line-height: 1.55;
      opacity: 0.75;
      margin: 0;
    }
  `}
`;

export const Emoji = styled.span`
  font-size: 2.2rem;
  line-height: 1;
`;

export const Footer = styled.div`
  ${({ theme }) => css`
    text-align: center;
    margin-top: 5rem;
    a {
      display: inline-flex;
      align-items: center;
      gap: 0.6rem;
      padding: 1.3rem 3rem;
      background: ${theme.colors.primary};
      color: ${theme.colors.white};
      border-radius: 0.6rem;
      font-weight: 600;
      font-size: 1.5rem;
      transition: opacity 0.2s ease-in-out, transform 0.15s ease-in-out;
      :hover {
        opacity: 0.92;
        transform: translateY(-0.1rem);
      }
    }
  `}
`;
