import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  ${({ theme }) => css`
    position: relative;
    padding: 6rem 2rem 8rem;
    max-width: 130rem;
    margin: 0 auto 4rem;
    overflow: hidden;
    isolation: isolate;

    /* Subtle brand-color blobs — mirror the Tokenomics section, but flipped
       so the two sections read as a pair when stacked. */
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
      background: ${theme.colors.secondary};
      width: 45rem;
      height: 45rem;
      top: -15rem;
      right: -10rem;
    }
    ::after {
      background: ${theme.colors.primary};
      width: 50rem;
      height: 50rem;
      bottom: -20rem;
      left: -12rem;
    }

    @media screen and (max-width: 960px) {
      padding: 4rem 2rem 6rem;
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

export const Steps = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    max-width: 100rem;
    margin: 0 auto;

    @media screen and (max-width: 900px) {
      grid-template-columns: 1fr;
    }
  `}
`;

export const Step = styled.div`
  ${({ theme }) => css`
    position: relative;
    padding: 3rem;
    background: ${theme.colors.secondaryBackgroundOpacity};
    border: 1px solid ${theme.colors.secondaryBackground};
    border-radius: 2rem;
    backdrop-filter: blur(20px);
    transition: transform 0.3s ease-in-out, border-color 0.3s ease-in-out;
    display: flex;
    flex-direction: column;

    :hover {
      transform: translateY(-0.4rem);
      border-color: ${theme.colors.primary}66;
    }
  `}
`;

export const StepNumber = styled.div`
  ${({ theme }) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 4.4rem;
    height: 4.4rem;
    border-radius: 50%;
    background: ${theme.colors.primary};
    color: ${theme.colors.white};
    font-size: 1.8rem;
    font-weight: 700;
    margin-bottom: 2rem;
  `}
`;

export const StepTitle = styled.h3`
  ${({ theme }) => css`
    font-size: 2rem;
    font-weight: 600;
    color: ${theme.colors.text};
    margin-bottom: 1rem;
    letter-spacing: -0.01em;
  `}
`;

export const StepDescription = styled.p`
  ${({ theme }) => css`
    font-size: 1.45rem;
    line-height: 1.6;
    opacity: 0.75;
    margin-bottom: 2rem;
    flex-grow: 1;
  `}
`;

export const StepLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;

  a {
    ${({ theme }) => css`
      display: inline-flex;
      align-items: center;
      gap: 0.6rem;
      font-size: 1.4rem;
      font-weight: 500;
      color: ${theme.colors.primary};
      transition: opacity 0.2s ease-in-out;
      :hover {
        opacity: 0.85;
      }
      ::after {
        content: '↗';
        font-size: 1.2rem;
        opacity: 0.7;
      }
    `}
  }
`;

export const Note = styled.div`
  ${({ theme }) => css`
    max-width: 88rem;
    margin: 4rem auto 0;
    padding: 1.6rem 2rem;
    background: ${theme.colors.secondaryBackgroundOpacity};
    border-left: 3px solid ${theme.colors.primary};
    border-radius: 0 0.6rem 0.6rem 0;
    font-size: 1.35rem;
    line-height: 1.6;
    opacity: 0.85;
    strong {
      color: ${theme.colors.primary};
      font-weight: 600;
    }
  `}
`;
