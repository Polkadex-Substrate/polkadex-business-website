import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  max-width: 100rem;
  margin: 8rem auto 5rem auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  h2 {
    font-weight: 500;
    font-size: 2.3rem;
  }
  @media screen and (max-width: 1200px) {
    margin: 6rem auto 8rem auto;
  }
`;

export const TableWrapper = styled.div`
  overflow-x: auto;
  display: flex;
  flex-direction: column;
`;

export const Table = styled.div`
  display: table;
  border-spacing: 0 1rem;
`;

export const Heading = styled.div`
  display: table-header-group;

  div {
    display: table-row;
    span {
      padding: 1.5rem;
      display: table-cell;
      font-weight: 400;
      opacity: 0.5;
      cursor: pointer;
      svg {
        margin-left: 0.5rem;
        width: 0.8rem;
      }
    }
  }
`;

export const Body = styled.td`
  ${({ theme }) => css`
    display: table-row-group;
    background: ${theme.colors.tertiaryBackgroundOpacity};

    div {
      display: table-row;
      span {
        padding: 1.5rem;
        display: table-cell;
        :first-child,
        :last-child {
          border-radius: 0.5rem;
        }
        a {
          text-decoration: underline;
        }
      }
    }
  `}
`;
export const Actions = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 1rem;
    align-self: center;
    div {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.5rem;
      background: ${theme.colors.secondaryBackgroundOpacity};
      border-radius: 0.5rem;
      svg {
        width: 1rem;
      }
    }
  `}
`;
