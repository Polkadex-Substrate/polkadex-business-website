import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  max-width: 80rem;
  margin: 3rem auto 6rem auto;
  @media screen and (max-width: 1000px) {
    padding: 1rem;
  }
`;
export const GoBack = styled.div`
  a {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    transition: opacity 0.3s ease-in-out;
    opacity: 0.8;
    svg {
      max-width: 1rem;
      margin-top: 0.1rem;
    }
    :hover {
      opacity: 1;
    }
  }
`;

export const Title = styled.div`
  display: grid;
  place-items: center;
  margin: 5rem auto 8rem auto;
  h1 {
    font-size: 4rem;
  }
`;

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 0.5rem;
    ${Category} ,span ~ :not(:last-child) {
      position: relative;
      ::after {
        position: absolute;
        top: 50%;
        right: -0.5rem;
        content: '';
        width: 2px;
        height: 2px;
        border-radius: 50%;
        background: ${theme.colors.text};
        opacity: 0.5;
      }
    }
  `}
`;

export const Category = styled.span`
  ${({ theme }) => css`
    background: ${theme.colors.secondaryBackground};
    padding: 0.2rem;
    border-radius: 0.5rem;
    font-size: 1.2rem;
  `}
`;

export const Share = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.secondaryBackgroundOpacity};
    display: flex;
    place-items: center;
    gap: 0.8rem;
    padding: 0.5rem 0.8rem;
    border-radius: 0.8rem;
    margin-top: 1rem;
  `}
`;

export const Social = styled.div`
  display: flex;
  place-items: center;
  gap: 0.5rem;
`;

export const Overview = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.quaternaryBackground};
    border-radius: 1rem;
    padding: 3rem;
    a {
      text-align: center;
      font-weight: 500;
      display: block;
      background: ${theme.colors.primary};
      color: ${theme.colors.white};
      padding: 1.5rem;
      border-radius: 0.8rem;
      width: 100%;
      cursor: pointer;
      transition: transform 0.2s ease-in-out;
      :hover {
        transform: scale(1.01);
      }
      :active {
        transform: scale(0.99);
      }
    }
    p :not(:last-child) {
      margin-bottom: 1rem;
    }
  `}
`;
export const OverviewContainer = styled.div`
  strong,
  h2 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }
  p,
  li {
    line-height: 1.6;
  }
  :not(:last-child) {
    margin-bottom: 3rem;
  }
  ul {
    margin-left: 1.5rem;
    li:not(:last-child) {
      margin-bottom: 1.5rem;
    }
  }
`;
