import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  ${({ theme }) => css`
    max-width: ${theme.grid.container};
    margin: 4rem auto 0 auto;
    @media screen and (max-width: 1200px) {
      margin: 4rem 2rem;
    }
  `}
`;

export const Slider = styled.div`
  display: grid;
  align-items: center;
  gap: 1rem;
  @media screen and (min-width: 1050px) {
    grid-template-columns: 2fr 1fr;
  }
  @media screen and (min-width: 805px) and (max-width: 1050px) {
    grid-template-columns: 1.3fr 1fr;
  }
`;

export const Features = styled.div`
  display: flex;
  column-gap: 3rem;
  row-gap: 6rem;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 8rem;
  span {
    display: block;
    font-weight: 550;
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }
  p {
    line-height: 1.5;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 30rem;

  img {
    align-self: flex-start;
    max-height: 14rem;
    object-fit: contain;
  }
  p {
    line-height: 1.5;
  }
`;

export const FlexCard = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  img {
    width: 100%;
    max-width: 35rem;
    min-width: 35rem;
  }
  @media screen and (min-width: 1100px) {
    max-width: 70rem;
  }
  @media screen and (max-width: 720px) {
    flex-direction: column;
  }
`;
export const FlexTitle = styled.div``;

export const SliderImage = styled.div`
  position: relative;
  img {
    object-fit: contain;
    width: 100%;
    max-height: 60rem;
  }
`;

export const Controls = styled.div`
  ${({ theme }) => css`
    position: absolute;
    bottom: 1rem;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    gap: 0.3rem;
    background: ${theme.colors.white};
    border-radius: 10rem;
    padding: 0.5rem;
  `}
`;

export const Button = styled.button<{ isActive?: boolean }>`
  ${({ theme, isActive }) => css`
    background: ${isActive ? theme.colors.primary : 'none'};
    color: ${isActive ? theme.colors.white : theme.colors.black};
    border-radius: 10rem;
    padding: 1rem 2rem;
    font-weight: bold;
    font-size: 1.4rem;
    transition: background 0.2s ease-in-out;
    cursor: pointer;
    :hover {
      background: ${isActive
        ? theme.colors.primary
        : theme.colors.secondaryBackground};
    }
  `}
`;

export const Title = styled.div`
  h2 {
    line-height: 1.2;
    font-size: 5rem;
    margin-bottom: 1.5rem;
  }
  p {
    line-height: 1.5;
  }
`;

export const Actions = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 2rem;
    a {
      transition: background 0.2s ease-in-out, color 0.2s ease-in-out;
      border-radius: 0.8rem;
      padding: 1rem 2rem;
      :first-child {
        background: ${theme.colors.white};
        color: ${theme.colors.black};

        :hover {
          background: ${theme.colors.primary};
          color: ${theme.colors.white};
        }
      }
      :last-child :hover {
        background: ${theme.colors.secondaryBackgroundOpacity};
      }
      svg {
        width: 1rem;
        height: 1rem;
      }
    }
  `}
`;

export const PairsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-top: 2rem;
`;
export const Pair = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    small {
      font-size: 1.3rem;
    }
    div {
      background: ${theme.colors.secondaryBackground};
      border-radius: 0.6rem;
      padding: 0.5rem;
      width: 2.5rem;
      height: 2.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      svg {
        width: 100%;
      }
    }
  `}
`;
