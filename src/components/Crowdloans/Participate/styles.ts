import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  padding: 5rem 0;
  max-width: 95rem;
  margin: 0 auto;
  p {
    font-size: 1.5rem;
    line-height: 1.5;
  }
`;

export const Title = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
    margin-bottom: 5rem;
    h2 {
      font-size: 3.5rem;
    }
  `}
`;
export const Content = styled.div``;
export const Row = styled.div`
  display: flex;
  width: 100%;
`;

export const Column = styled.div`
  :first-child {
    margin-right: 1.5rem;
  }
`;
export const ColumnBox = styled.div`
  display: flex;
  grid-gap: 1rem;
  margin-top: 1rem;
`;
export const ColumnContent = styled.div``;
export const ColumnCard = styled.div`
  ${({ theme }) => css`
    min-width: 21.3rem;
    width: 100%;
    background: ${theme.colors.secondaryBackgroundOpacity};
    padding: 2rem;
    border-radius: 1rem;
    text-align: center;
    img {
      margin: 4rem 0;
      max-height: 6rem;
    }
    :not(:last-child) {
      margin-right: 0.5rem;
    }
  `}
`;
export const ColumnHeader = styled.div`
  display: flex;
  justify-content: space-between;
  div:last-child {
    display: flex;
    align-items: center;
    span {
      margin-left: 0.5rem;
    }
  }
`;
export const ColumnBody = styled.div``;
export const ColumnFooter = styled.div`
  span {
    font-weight: 500;
  }
  p {
    opacity: 0.5;
  }
`;
export const RowFlat = styled.div`
  margin-top: 1.5rem;
`;
export const RowFlatWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1.5rem;
  margin-top: 1rem;
`;

export const HorizontalCard = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    background: ${theme.colors.secondaryBackgroundOpacity};
    padding: 2rem;
    border-radius: 1rem;
  `}
`;
export const HorizontalCardContent = styled.div`
  display: flex;
  align-items: center;
  img {
    max-width: 4rem;
    margin-right: 1rem;
  }
  span {
    font-weight: bold;
  }
  p {
    opacity: 0.5;
  }
`;

export const HorizontalCardVideo = styled.div`
  display: flex;
  align-items: center;
  span {
    margin-left: 0.5rem;
  }
`;
