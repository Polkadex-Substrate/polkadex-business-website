import styled, { css } from 'styled-components';

export const Wrapper = styled.div``;

export const Box = styled.div`
  ${({ theme }) => css`
    border-bottom: 1px solid ${theme.colors.secondaryBackgroundOpacity};
    padding: 3.5rem 0;
    margin-bottom: 4rem;
    @media screen and (max-width: 1125px) {
      padding-left: 1rem;
      padding-right: 1rem;
    }
  `}
`;

export const Container = styled.div`
  max-width: 100rem;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  @media screen and (max-width: 550px) {
    flex-direction: column;
    text-align: center;
  }
  h2 {
    font-size: 3rem;
    font-weight: 400;
    max-width: 28rem;
  }
  div {
    text-align: right;
  }
  span {
    font-size: 3.8rem;
    font-weight: 400;
  }
`;

export const Bottom = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: 2rem;
    flex-direction: column;

    h4 {
      font-size: 1.8rem;
      font-weight: 500;
    }
    button {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      font-size: 1.4rem;
      cursor: pointer;
      color: ${theme.colors.text};
      background: ${theme.colors.primary};
      padding: 1.4rem 2rem;
      border-radius: 1rem;
      transition: border ease 0.5s, background-color ease 0.5s;
      border: 1px solid transparent;

      :hover {
        border-color: ${theme.colors.primary};
        background: transparent;
      }
    }
    @media screen and (min-width: 700px) {
      flex-direction: row;
      align-items: center;
    }
  `}
`;
export const Bar = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex: 1;
    border: 1px solid ${theme.colors.secondaryBackgroundOpacity};
    border-radius: 1rem;
    div {
      :first-child {
        height: 4rem;
        width: 25%;
        margin: 0.6rem;
        background: linear-gradient(47.94deg, #e6007a 0%, #6745d2 98.88%);
        box-shadow: 0px 4px 34px rgba(230, 0, 122, 0.5);
        border-radius: 0.8rem;
      }
      :last-child {
        padding-right: 2rem;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 1rem;
        flex: 1;
        span {
          :first-child {
            font-weight: 500;
            font-size: 1.8rem;
          }
          :last-child {
            opacity: 0.5;
          }
        }
      }
    }
  `}
`;

export const HowToStake = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 100rem;
  width: 100%;
  margin: 0 auto;
  h2 {
    font-size: 3rem;
    font-weight: 400;
  }
  @media screen and (max-width: 870px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

export const HowToStakeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
`;

export const HowToStakeBox = styled.div`
  display: grid;
  gap: 6rem;

  @media screen and (min-width: 870px) {
    grid-template-columns: 1fr auto 1fr;
    gap: 8rem;
  }
`;
export const HowToStakeCard = styled.div`
  ${({ theme }) => css`
    background: linear-gradient(
      180deg,
      rgba(139, 161, 190, 0.05) 0%,
      rgba(139, 161, 190, 0) 100%
    );
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 2rem;
    div {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      padding: 3rem;
    }
    h3 {
      font-size: 1.8rem;
      font-weight: 500;
    }
    p {
      line-height: 1.5;
      opacity: 0.7;
    }
    img {
      max-width: 35rem;
    }
    a {
      margin-top: 2rem;
      width: fit-content;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      font-size: 1.4rem;
      cursor: pointer;
      color: ${theme.colors.text};
      background: ${theme.colors.primary};
      padding: 1.4rem 2rem;
      border-radius: 1rem;
      transition: border ease 0.5s, background-color ease 0.5s;
      border: 1px solid transparent;

      :hover {
        border-color: ${theme.colors.primary};
        background: transparent;
      }
    }
    span {
      display: block;
      padding-top: 2rem;
      img {
        max-width: 14rem;
      }
    }
  `}
`;
export const Arrow = styled.div`
  max-width: 2rem;
  @media screen and (max-width: 870px) {
    display: none;
  }
`;
