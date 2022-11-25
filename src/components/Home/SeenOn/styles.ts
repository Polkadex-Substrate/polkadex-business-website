import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    max-width: 100rem;
    margin: 7rem auto 0 auto;
    border-top: 1px solid ${theme.colors.secondaryBackgroundOpacity};
    padding-top: 3rem;
    h2 {
      font-weight: 400;
      font-size: 1.8rem;
    }
  `}
`;

export const Content = styled.div`
  display: grid;
  gap: 3rem;
  margin-top: 3rem;
`;
export const ContentFlex = styled.div`
  display: grid;
  grid-template-columns: repeat(6, minmax(100px, 1fr));
  gap: 6rem;
`;

export const Card = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    list-style: none;
    width: 150px;
    height: 60px;
    cursor: pointer;
    padding: 1rem;
    img {
      object-fit: contain;
      max-height: 4rem;
      max-width: 12rem;
    }
    svg {
      width: 100%;
    }
    :not(:last-child) {
      /* border-right: 1px solid ${theme.colors.secondaryBackground}; */
    }
  `}
`;
