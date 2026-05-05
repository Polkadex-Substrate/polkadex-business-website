import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    margin: 7rem 0;
    background: ${theme.colors.tertiaryBackgroundOpacity};
  `}
`;

export const Container = styled.div`
  max-width: 100rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2em;

  p {
    line-height: 1.6;
  }
  @media screen and (min-width: 990px) {
    flex-direction: row;
    padding: 8rem 0;
    align-items: center;
  }
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 3rem;
  h3 {
    font-weight: 550;
    font-size: 3rem;
  }
  a {
    width: fit-content;
  }
`;

export const Card = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    background: ${theme.colors.tertiaryBackgroundOpacity};
    border-radius: 1rem;
    @media screen and (max-width: 650px) {
      flex-direction: column;

      div {
        padding: 3rem;
      }
    }
    div {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      padding-left: 5rem;
      h4 {
        font-weight: 550;
        font-size: 3rem;
      }

      img {
        width: 100%;
        max-width: 35rem;
      }
    }
  `}
`;
