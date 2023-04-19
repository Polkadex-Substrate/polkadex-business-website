import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    margin: 0 auto 0 auto;
    background: radial-gradient(
        52.43% 52.43% at 95.17% 115.81%,
        rgba(103, 69, 210, 0.2) 0%,
        rgba(103, 69, 210, 0) 100%
      ),
      radial-gradient(
        61.35% 61.35% at 16.35% 119.95%,
        rgba(230, 0, 122, 0.2) 0%,
        rgba(230, 0, 122, 0) 100%
      );
    border-color: ${theme.colors.secondaryBackgroundOpacity};
    border-style: solid;
    border-width: 1px 0;
    min-height: 65vh;
    padding: 2rem;
  `}
`;

export const Box = styled.div`
  max-width: 100rem;
  width: 100%;
  margin: 0 auto;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 1000px) {
    padding: 1rem;
  }
  img {
    max-height: 23rem;
    margin-bottom: 2rem;
    border-radius: 100rem;
  }
`;

export const Container = styled.div`
  position: relative;
  max-width: 65rem;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  text-align: center;
  h1 {
    font-size: 3.6rem;
    font-weight: normal;
    line-height: 1.3;
    margin-top: 2rem;
  }
  h2 {
    line-height: 1.5;
    font-size: 1.6rem;
    font-weight: normal;
    margin-bottom: 1rem;
    opacity: 0.7;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Information = styled.div`
  ${({ theme }) => css`
    position: relative;
    padding: 2rem 1.5rem 1.5rem 1.5rem;
    display: flex;
    flex-direction: column;
    text-align: left;
    gap: 2rem;
    color: ${theme.colors.text};
    h3 {
      font-size: 1.8rem;
      font-weight: 400;
    }
  `}
`;

export const InformationContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  flex-wrap: nowrap;
  justify-content: space-between;
  span {
    font-weight: 400;
    font-size: 1.6rem;
  }
  p {
    opacity: 0.7;
  }
  @media screen and (max-width: 550px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
  }
`;

export const Extension = styled.div`
  padding: 2rem 0;
`;

export const Wallet = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    border-radius: 0.5rem;
    padding: 0.3rem 1rem 0.3rem 2rem;
    transition: ease-in 0.2s border-color;
    background: linear-gradient(#0d0d10, #0d0d10) padding-box,
      linear-gradient(269.03deg, #e6007a 50%, #4a00e6 103.79%) border-box;
    border-radius: 1rem;
    border: 1.8px solid transparent;
    filter: drop-shadow(0px 4px 51px #e6007a22);
    :hover {
      animation: gradient 6s ease infinite;
      background-size: 400% 400%;
    }

    a,
    button {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      font-size: 1.4rem;
      cursor: pointer;
      color: ${theme.colors.text};
      padding: 1rem 2rem;
      border-radius: 0.5rem;
      transition: background-color ease 0.5s;
      margin: 0.8rem 0;
    }
    button {
      background: ${theme.colors.primary};
    }
    a,
    button:disabled {
      background: ${theme.colors.secondaryBackgroundOpacity};
      :hover {
        background: ${theme.colors.secondaryBackground};
      }
    }
    @keyframes gradient {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }
    @media screen and (max-width: 550px) {
      flex-direction: column;
      gap: 0.5rem;
    }
  `}
`;
export const WalletContent = styled.div`
  flex: 4;
`;

export const Arrow = styled.div`
  position: absolute;
  bottom: -5rem;
  left: -18rem;
  width: 18rem;
  svg {
    width: 100%;
    height: 100%;
  }
  @media screen and (max-width: 1000px) {
    display: none;
  }
  @media screen and (max-height: 740px) {
    display: none;
  }
`;

export const DropdownHeader = styled.div<{ isSelected?: boolean }>`
  ${({ theme, isSelected }) => css`
    flex: 1;
    display: flex;
    justify-content: space-between;
    gap: 0.5rem;
    align-items: center;
    cursor: pointer;
    padding: ${isSelected ? '1rem' : '2rem'} 0;
    svg {
      width: 1rem;
      fill: ${theme.colors.text};
    }
    div {
      display: flex;
      flex-direction: column;
      gap: 0.2rem;
      text-align: left;
      p {
        opacity: 0.6;
      }
      strong {
        font-size: 1.5rem;
        font-weight: 500;
      }
    }
  `}
`;

export const Span = styled.span`
  opacity: 0.5;
`;
