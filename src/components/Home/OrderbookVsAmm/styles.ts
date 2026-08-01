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
      left: -10rem;
    }
    ::after {
      background: ${theme.colors.secondary};
      width: 46rem;
      height: 46rem;
      bottom: -16rem;
      right: -10rem;
    }

    @media screen and (max-width: 960px) {
      padding: 6rem 2rem;
      margin: 2rem auto;
    }
  `}
`;

export const Tables = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  max-width: 100rem;
  margin: 0 auto;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr;
  }
`;

export const TableCard = styled.div`
  ${({ theme }) => css`
    padding: 2.8rem;
    background: ${theme.colors.secondaryBackgroundOpacity};
    border: 1px solid ${theme.colors.secondaryBackground};
    border-radius: 1.6rem;
    backdrop-filter: blur(20px);

    h3 {
      font-size: 2rem;
      font-weight: 600;
      color: ${theme.colors.text};
      margin-bottom: 2rem;
    }

    table {
      width: 100%;
      border-collapse: collapse;
      font-size: 1.4rem;
    }
    th {
      text-align: left;
      font-size: 1.3rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      /* Brand violet, full opacity — the muted gray was hard to read. */
      color: #9b7bff;
      padding: 0 0.6rem 1.2rem;
    }
    th:first-child {
      width: 34%;
    }
    td {
      padding: 1.1rem 0.6rem;
      border-top: 1px solid ${theme.colors.secondaryBackgroundOpacity};
      line-height: 1.45;
      vertical-align: top;
    }
    td.feature {
      font-weight: 500;
      color: ${theme.colors.text};
      opacity: 0.9;
    }
    td .cell {
      display: inline-flex;
      align-items: flex-start;
      gap: 0.7rem;
    }
    td .mark {
      flex-shrink: 0;
      font-size: 1.3rem;
      line-height: 1.5;
    }
    td .mark.good {
      color: ${theme.colors.green};
    }
    td .mark.bad {
      color: #ff6b6b;
    }
    td .mark.warn {
      color: ${theme.colors.orange};
    }
    td span.text {
      opacity: 0.8;
    }
    tr.bestFor td {
      font-weight: 600;
      color: ${theme.colors.text};
    }
  `}
`;
