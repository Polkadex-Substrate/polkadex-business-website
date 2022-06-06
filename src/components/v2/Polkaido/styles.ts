import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  ${({ theme }) => css`
    max-width: ${theme.grid.container};
    margin: 10rem auto;
    color: ${theme.colors.black};
    @media screen and (max-width: 1200px) {
      padding: 4rem 1rem 2rem 1rem;
    }
  `}
`;

export const Title = styled.div`
  h2 {
    font-size: 5rem;
  }
  p {
    max-width: 60rem;
    line-height: 1.5;
    margin-top: 1rem;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  div {
    display: flex;
    align-items: center;
    gap: 1rem;
    flex: 1;
    svg {
      width: 6rem;
    }
    span {
      font-family: Caveat;
      font-size: 2.5rem;
      white-space: nowrap;
    }
    @media screen and (max-width: 760px) {
      display: none;
    }
  }
`;

export const Container = styled.div`
  display: grid;
  margin-top: 6rem;
  align-items: center;
  @media screen and (min-width: 900px) {
    grid-template-columns: 2fr 1fr;
  }
`;

export const Video = styled.div`
  display: flex;
  align-items: center;
  video {
    width: 100%;
    @media screen and (min-width: 900px) {
      transform: scale(1.1);
      margin-left: -10rem;
    }
  }
`;

export const Content = styled.div`
  padding: 2rem;
`;

export const Text = styled.div`
  margin-bottom: 2rem;
  padding: 0 2rem;
`;

export const Card = styled.div<{ isActive?: boolean }>`
  ${({ theme, isActive }) => css`
    background: ${isActive ? theme.colors.secondaryBackgroundOpacity : 'none'};
    border-radius: 1rem;
    padding: ${isActive ? '2rem' : '1rem 2rem'};
    cursor: pointer;
    p {
      display: ${isActive ? 'block' : 'none'};
      line-height: 1.6;
      margin-top: 1rem;
    }
    div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      span {
        font-size: 1.8rem;
        font-weight: 550;
      }
      svg {
        max-width: 1rem;
        fill: black;
        transition: transform 0.3s ease-in-out;
        transform: ${isActive ? 'rotate(180deg)' : 'rotate(0)'};
      }
    }
    :not(:last-child) {
      margin-bottom: 0.5rem;
    }
  `}
`;

export const Actions = styled.div`
  ${({ theme }) => css`
    margin-top: 3rem;
    padding: 0 2rem;
    a {
      border-radius: 0.8rem;
      padding: 1rem;
      :first-child {
        color: ${theme.colors.white};
        background: ${theme.colors.primary};
      }
      :last-child {
        color: ${theme.colors.primary};
        svg {
          margin-left: 1rem;
          width: 1rem;
          fill: ${theme.colors.primary};
        }
      }
    }
  `}
`;
