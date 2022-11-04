import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  margin-bottom: 8rem;
`;

export const Container = styled.div`
  max-width: 100rem;
  margin: 0 auto;
  @media screen and (max-width: 1000px) {
    padding: 2rem;
  }
  h2 {
    text-align: center;
    font-size: 1.8rem;
    font-weight: normal;
    max-width: 55rem;
    margin: 0 auto;
    line-height: 1.4;
  }
`;

export const Social = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 3rem 0 4rem 0;
  align-items: center;
`;
export const SocialWrapper = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
`;

export const SocialCard = styled.a`
  ${({ theme }) => css`
    display: block;
    background: ${theme.colors.secondaryBackgroundOpacity};
    padding: 1.4rem;
    border-radius: 0.8rem;
    width: 4.5rem;
    height: 4.5rem;
  `}
`;
export const DropdownHeader = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 1rem;
    background: ${theme.colors.secondaryBackgroundOpacity};
    padding: 0 1rem;
    border-radius: 0.8rem;
    height: 4.5rem;
    div {
      :first-child {
        width: 1.5rem;
        height: 1.5rem;
      }
      :last-child {
        width: 1rem;
        height: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        svg {
          width: 100%;
          height: 100%;
        }
      }
    }
  `}
`;
export const DropdownContent = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    background: ${theme.colors.secondaryBackgroundSolid};
    border-radius: 1rem;
    padding: 1rem;
    min-width: 18rem;
    a {
      white-space: nowrap;
      padding: 1rem;
      transition: background-color 0.5s ease;
      border-radius: 1rem;
      cursor: pointer;
      :hover {
        background: ${theme.colors.secondaryBackgroundOpacity};
      }
    }
  `}
`;

export const Info = styled.div`
  display: grid;
  gap: 3rem;
  @media screen and (min-width: 700px) {
    grid-template-columns: 1fr 1.8fr;
  }
`;
export const InfoVertical = styled.div`
  ${({ theme }) => css`
    h3 {
      margin-bottom: 1.5rem;
      font-size: 2.2rem;
      font-weight: 550;
    }
    p {
      line-height: 1.5;
    }
    :first-child {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      background: ${theme.colors.text};
      border-radius: 1.5rem;
      div {
        margin-bottom: 4rem;
        padding: 2rem;
        @media screen and (min-width: 500px) {
          padding: 4rem;
        }
      }
      h3,
      p {
        color: ${theme.colors.inverse};
      }

      img {
        max-width: 30rem;
        width: 100%;
      }
    }
    :last-child {
      display: flex;
      flex-direction: column;
      gap: 3rem;
      div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        flex: 1;
        :first-child {
          background: ${theme.colors.primary};
        }
        :last-child {
          background: ${theme.colors.white};
          h3,
          p {
            color: ${theme.colors.inverse};
          }
        }
        padding: 2rem;
        @media screen and (min-width: 500px) {
          padding: 4rem;
        }
        border-radius: 1.5rem;
      }
    }
  `}
`;
