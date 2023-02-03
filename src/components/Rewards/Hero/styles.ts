import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  max-width: 110rem;
  margin: 0 auto 10rem auto;
`;

export const Box = styled.div`
  ${({ theme }) => css`
    flex: 1;
    display: flex;
    align-items: center;
    border-radius: 3rem;
    @media screen and (max-width: 1000px) {
      padding: 1rem;
    }
    img {
      max-width: 15rem;
      margin-bottom: 2rem;
      border-radius: 100rem;
    }
    @media screen and (min-width: 940px) {
      img {
        display: none;
      }
      background-image: url('/img/rewardsHero.svg');
      background-repeat: no-repeat;
      background-size: contain;
      background-position: right center;
      background-color: ${theme.colors.tertiaryBackgroundOpacity};
    }
  `}
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1rem;
  @media screen and (min-width: 940px) {
    max-width: 50rem;
    padding: 14rem 6rem 16rem 6rem;
  }
  h1 {
    font-size: 4rem;
    font-weight: normal;
    line-height: 1.3;
    margin-bottom: 1rem;
  }
  h2 {
    line-height: 1.5;
    font-size: 1.4rem;
    font-weight: normal;
    margin-bottom: 1rem;
  }
`;
export const Logo = styled.div`
  max-width: 20rem; ;
`;

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background: ${theme.colors.text};
    border-radius: 0.7rem;
    margin: 1rem;
    @media screen and (min-width: 940px) {
      max-width: 45rem;
      margin-left: 5rem;
      margin-top: -12rem;
    }
  `}
`;
export const Information = styled.div`
  ${({ theme }) => css`
    position: relative;
    padding: 2rem 1.5rem 1.5rem 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    color: ${theme.colors.inverse};
    h3 {
      font-size: 1.6;
      font-weight: 500;
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
    font-weight: 500;
  }
  p {
    opacity: 0.7;
  }
`;

export const Wallet = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    background: ${theme.colors.secondaryBackgroundSolid};
    border-radius: 0.5rem;
    padding: 1rem;
    transition: ease-in 0.2s border-color;
    border: 1px solid ${theme.colors.secondaryBackgroundSolid};
    :hover {
      border-color: ${theme.colors.primary};
    }
  `}
`;

export const DropdownHeader = styled.div`
  ${({ theme }) => css`
    flex: 1;
    display: flex;
    justify-content: space-between;
    gap: 0.5rem;
    align-items: center;
    cursor: pointer;
    svg {
      width: 1rem;
      fill: ${theme.colors.text};
    }
    div {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      p {
        opacity: 0.6;
      }
    }
  `}
`;

export const Span = styled.span`
  opacity: 0.5;
`;
