import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  ${({ theme }) => css`
    max-width: 82rem;
    margin: 0 auto;
    padding: 4rem 2rem 2rem 2rem;
    color: ${theme.colors.text};

    h1 {
      font-size: 3.6rem;
      line-height: 1.2;
      margin-bottom: 1.5rem;
    }
    h2 {
      font-size: 2.4rem;
      font-weight: 500;
      margin: 4rem 0 1.5rem 0;
      padding-top: 2rem;
      border-top: 1px solid ${theme.colors.secondaryBackground};
    }
    h3 {
      font-size: 1.8rem;
      font-weight: 500;
      color: ${theme.colors.primary};
      margin: 2.5rem 0 1rem 0;
    }
    p {
      line-height: 1.7;
      margin-bottom: 1.4rem;
      opacity: 0.9;
    }
    a {
      color: ${theme.colors.blue};
      text-decoration: underline;
      text-underline-offset: 2px;
    }
    ul,
    ol {
      margin: 0 0 1.6rem 1.8rem;
      display: flex;
      flex-direction: column;
      gap: 0.8rem;
    }
    li {
      line-height: 1.7;
      opacity: 0.9;
    }
    strong {
      font-weight: 600;
    }
    code {
      font-family: 'Courier New', monospace;
      font-size: 1.3rem;
      background: ${theme.colors.secondaryBackgroundOpacity};
      padding: 0.2rem 0.5rem;
      border-radius: 0.4rem;
      word-break: break-all;
    }
  `}
`;

export const Lead = styled.p`
  ${({ theme }) => css`
    font-size: 1.8rem;
    opacity: 0.95;
    margin-bottom: 2rem;
  `}
`;

export const Cta = styled.a`
  ${({ theme }) => css`
    display: inline-block;
    margin-bottom: 1rem;
    padding: 1.1rem 2.8rem;
    border-radius: 0.6rem;
    background: ${theme.colors.primary};
    color: ${theme.colors.white} !important;
    font-weight: 500;
    text-decoration: none !important;
    transition: opacity 0.2s ease-in-out;
    :hover {
      opacity: 0.9;
    }
  `}
`;

export const Note = styled.blockquote`
  ${({ theme }) => css`
    margin: 0 0 1.6rem 0;
    padding: 1.2rem 1.6rem;
    border-left: 3px solid ${theme.colors.primary};
    border-radius: 0 0.6rem 0.6rem 0;
    background: ${theme.colors.tertiaryBackgroundOpacity};
    p {
      margin: 0;
      font-size: 1.4rem;
      opacity: 0.9;
    }
  `}
`;

export const Pitch = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.6rem;
    margin: 3rem 0 2rem;
    @media screen and (max-width: 760px) {
      grid-template-columns: 1fr;
    }
  `}
`;

export const PitchCard = styled.div`
  ${({ theme }) => css`
    padding: 2rem;
    border-radius: 1rem;
    border: 1px solid ${theme.colors.secondaryBackground};
    background: ${theme.colors.secondaryBackgroundOpacity};
    h4 {
      font-size: 1.4rem;
      font-weight: 600;
      color: ${theme.colors.primary};
      text-transform: uppercase;
      letter-spacing: 0.08em;
      margin-bottom: 0.8rem;
    }
    p {
      font-size: 1.4rem;
      line-height: 1.55;
      margin: 0;
      opacity: 0.85;
    }
  `}
`;

export const FeedbackBlock = styled.div`
  ${({ theme }) => css`
    margin: 4rem 0 2rem;
    padding: 2.4rem 2.4rem;
    border-radius: 1rem;
    background: ${theme.colors.primary}12;
    border: 1px solid ${theme.colors.primary}55;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 1.6rem;
    justify-content: space-between;

    h3 {
      font-size: 1.8rem;
      font-weight: 600;
      margin: 0 0 0.5rem;
      color: ${theme.colors.text};
    }
    p {
      margin: 0;
      font-size: 1.4rem;
      line-height: 1.5;
      opacity: 0.9;
      max-width: 52rem;
    }
    a {
      display: inline-block;
      padding: 1rem 2rem;
      border-radius: 0.6rem;
      background: ${theme.colors.primary};
      color: ${theme.colors.white} !important;
      font-weight: 500;
      text-decoration: none !important;
      white-space: nowrap;
      transition: opacity 0.2s ease-in-out;
      :hover {
        opacity: 0.9;
      }
    }
  `}
`;

export const TableWrapper = styled.div`
  ${({ theme }) => css`
    overflow-x: auto;
    margin-bottom: 2rem;
    border: 1px solid ${theme.colors.secondaryBackground};
    border-radius: 0.8rem;
    table {
      width: 100%;
      border-collapse: collapse;
      font-size: 1.4rem;
    }
    th,
    td {
      text-align: left;
      padding: 1rem 1.4rem;
      border-bottom: 1px solid ${theme.colors.secondaryBackgroundOpacity};
      white-space: nowrap;
    }
    th {
      font-weight: 500;
      background: ${theme.colors.secondaryBackgroundOpacity};
    }
    tr:last-child td {
      border-bottom: none;
    }
    code {
      background: none;
      padding: 0;
    }
  `}
`;
