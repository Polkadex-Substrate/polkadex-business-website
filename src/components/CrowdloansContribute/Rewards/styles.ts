import { PrimaryWrapper } from 'components/Button/styles';
import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    margin: 6rem 0;
    background: ${theme.colors.secondaryBackgroundOpacity};
  `}
`;

export const Container = styled.div`
  max-width: 90rem;
  margin: 0 auto;
  display: grid;
  align-items: center;
  gap: 2rem;
  padding: 5rem 0;
  grid-template-areas: 'title' 'reward' 'nft';

  @media screen and (min-width: 790px) {
    grid-template-areas:
      'title title title'
      'reward nft nft';
  }

  @media screen and (max-width: 950px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

export const Title = styled.div`
  grid-area: title;
  h2 {
    font-size: 3.5rem;
  }
  p {
    margin-top: 1rem;
    margin-bottom: 1.5rem;
    line-height: 1.5;
  }
  ${PrimaryWrapper} {
    width: fit-content;
  }
`;

export const Card = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 1rem;
    @media screen and (max-width: 550px) {
      img {
        max-width: 30rem;
      }
    }
    :nth-child(2) {
      grid-area: reward;
      height: 100%;
      background: ${theme.colors.secondaryBackgroundOpacity};
      padding: 2rem 2rem 0 2rem;

      @media screen and (min-width: 930px) {
        div {
          padding: 4rem 4rem 0 4rem;
        }
      }
    }
    :last-child {
      grid-area: nft;
      color: ${theme.colors.black};
      background: ${theme.colors.white};
      img {
        padding: 1rem;
        max-width: 25rem;
      }
      div {
        padding: 0 2rem 2rem 2rem;
      }
      small {
        display: block;
        margin-top: 1rem;
        line-height: 1.5;
      }
      @media screen and (min-width: 930px) {
        div {
          padding: 0 4rem 4rem 4rem;
        }
      }
    }
    div {
      span {
        font-size: 3rem;
        font-weight: bold;
      }
      p {
        margin-top: 0.5rem;
        line-height: 1.5;
      }
    }
    img {
      width: 100%;
    }
  `}
`;
