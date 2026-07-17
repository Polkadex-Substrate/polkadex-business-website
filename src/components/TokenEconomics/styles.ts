import { blobDriftAltCss, blobDriftCss } from 'styles/animations';
import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  ${({ theme }) => css`
    position: relative;
    padding: 8rem 2rem;
    max-width: 130rem;
    margin: 0 auto;
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
    }
  `}
`;

export const Highlights = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  max-width: 100rem;
  margin: 0 auto 2rem;

  @media screen and (max-width: 780px) {
    grid-template-columns: 1fr;
  }
`;

export const Highlight = styled.div`
  ${({ theme }) => css`
    text-align: center;
    padding: 3.2rem 2.4rem;
    background: ${theme.colors.secondaryBackgroundOpacity};
    border: 1px solid ${theme.colors.secondaryBackground};
    border-radius: 1.6rem;
    backdrop-filter: blur(20px);
    transition: transform 0.3s ease-in-out, border-color 0.3s ease-in-out;
    :hover {
      transform: translateY(-0.4rem);
      border-color: ${theme.colors.primary}55;
    }
    .value {
      display: block;
      font-size: 5.2rem;
      font-weight: 700;
      line-height: 1.1;
      letter-spacing: -0.02em;
      background: ${theme.colors.gradient};
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .label {
      display: block;
      font-size: 1.5rem;
      font-weight: 600;
      margin-top: 1rem;
      color: ${theme.colors.text};
    }
  `}
`;

export const SupplyRow = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem 4rem;
    max-width: 100rem;
    margin: 0 auto 6rem;
    padding: 1.6rem 2.4rem;
    border: 1px solid ${theme.colors.secondaryBackground};
    border-radius: 100px;
    background: ${theme.colors.secondaryBackgroundOpacity};

    div {
      display: inline-flex;
      align-items: baseline;
      gap: 0.8rem;
    }
    .label {
      font-size: 1.25rem;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      opacity: 0.6;
    }
    .value {
      font-size: 1.5rem;
      font-weight: 600;
      color: ${theme.colors.text};
    }

    @media screen and (max-width: 780px) {
      border-radius: 1.2rem;
      flex-direction: column;
      gap: 1rem;
    }
  `}
`;

export const AllocationsHead = styled.div`
  ${({ theme }) => css`
    text-align: center;
    max-width: 72rem;
    margin: 0 auto 4rem;
    h2 {
      font-size: 3rem;
      font-weight: 500;
      letter-spacing: -0.01em;
      margin-bottom: 1.2rem;
    }
    p {
      font-size: 1.5rem;
      line-height: 1.6;
      opacity: 0.75;
      strong {
        color: ${theme.colors.green};
        font-weight: 600;
      }
    }
  `}
`;

export const Allocations = styled.div`
  max-width: 100rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

export const Allocation = styled.div``;

export const AllocationHeader = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 2rem;
    margin-bottom: 0.8rem;
    .title {
      font-size: 1.6rem;
      font-weight: 600;
      color: ${theme.colors.text};
    }
    .numbers {
      font-size: 1.35rem;
      opacity: 0.75;
      white-space: nowrap;
      strong {
        color: ${theme.colors.primary};
        font-weight: 700;
        font-size: 1.5rem;
      }
    }
  `}
`;

export const BarTrack = styled.div`
  ${({ theme }) => css`
    height: 1.2rem;
    border-radius: 100px;
    background: ${theme.colors.secondaryBackgroundOpacity};
    border: 1px solid ${theme.colors.secondaryBackground};
    overflow: hidden;
  `}
`;

export const BarFill = styled.div`
  ${({ theme }) => css`
    height: 100%;
    border-radius: 100px;
    background: ${theme.colors.gradient};
  `}
`;

export const AllocationNote = styled.p`
  ${({ theme }) => css`
    font-size: 1.25rem;
    margin-top: 0.7rem;
    opacity: 0.55;
  `}
`;
