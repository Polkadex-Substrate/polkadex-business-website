import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  padding: 5rem 0;
  max-width: 95rem;
  margin: 0 auto;

  @media screen and (max-width: 950px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  p {
    font-size: 1.5rem;
    line-height: 1.5;
  }
`;

export const Title = styled.div`
  display: grid;
  grid-gap: 1rem;
  margin-bottom: 5rem;
  @media screen and (min-width: 720px) {
    grid-template-columns: 1fr 1fr;
  }

  h2 {
    font-size: 3.5rem;
  }
`;
export const Content = styled.div`
  h4 {
    font-size: 1.6rem;
  }
`;

export const Row = styled.div`
  small {
    display: block;
    margin-top: 1.5rem;
    font-size: 1.3rem;
  }
`;

export const Column = styled.div``;

export const ColumnBox = styled.div`
  display: grid;
  grid-gap: 2rem;
  margin-top: 1rem;

  @media screen and (min-width: 450px) and (max-width: 680px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (min-width: 680px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const ColumnContent = styled.div``;

export const Rewards = styled.div`
  span {
    font-size: 1.8rem;
    display: block;
    font-weight: bold;
  }

  ul {
    list-style: none;
  }

  li {
    :not(:last-child) {
      margin-bottom: 1rem;
    }
  }
`;

export const FlipFront = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.secondaryBackgroundOpacity};
    padding: 2rem;
    border-radius: 1rem;
    border: 1px solid ${theme.colors.secondaryBackground};
    transition: all 0.3s ease-in-out;
  `}
`;

export const FlipBack = styled.div`
  ${({ theme }) => css`
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    text-align: left;
    transform: rotateY(180deg);
    background: ${theme.colors.text};
    color: ${theme.colors.inverse};
    border-radius: 1rem;
    padding: 2rem;
    border: 1px solid ${theme.colors.secondaryBackground};
    transition: all 0.3s ease-in-out;
    ul {
      margin: 2rem 0;
    }
  `}
`;

export const FlipCardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.8s;
  transform-style: preserve-3d;
`;

export const ColumnCard = styled.div<{ isFlip?: boolean }>`
  ${({ isFlip }) => css`
    width: 100%;
    perspective: 1000px;
    cursor: pointer;
    text-align: center;

    img {
      margin: 7rem 0;
      max-height: 6rem;
    }

    ${isFlip &&
    css`
      :hover ${FlipCardInner} {
        transform: rotateY(180deg);
      }
    `}

    ${FlipBack}, ${FlipFront} {
      -webkit-backface-visibility: hidden; /* Safari */
      backface-visibility: hidden;
    }

    @media screen and (min-width: 960px) {
      min-width: 22.5rem;
      :not(:last-child) {
        margin-right: 1.5rem;
      }
    }

    @media screen and (max-width: 960px) {
      :not(:last-child) {
        margin-right: 2rem;
      }
    }

    @media screen and (max-width: 740px) {
      :not(:last-child) {
        margin-bottom: 2rem;
      }
    }
  `}
`;
export const ColumnHeader = styled.div`
  display: flex;
  justify-content: space-between;

  div:last-child {
    display: flex;
    align-items: center;
    span {
      margin-left: 0.5rem;
    }
  }
`;
export const ColumnBody = styled.div``;

export const ColumnFooter = styled.div`
  span {
    font-weight: 500;
  }
  p {
    opacity: 0.5;
  }
`;

export const RowFlat = styled.div`
  margin-top: 1.5rem;
`;

export const RowFlatWrapper = styled.div`
  display: grid;
  grid-gap: 1.5rem;
  margin-top: 1rem;
  @media screen and (min-width: 720px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const HorizontalCard = styled.a<{
  isActive?: boolean;
  hasAccepted?: boolean;
}>`
  ${({ theme, isActive }) => css`
    display: flex;
    justify-content: space-between;
    background: ${theme.colors.secondaryBackgroundOpacity};
    border: 1px solid ${theme.colors.secondaryBackground};
    padding: 2rem;
    border-radius: 1rem;
    opacity: ${isActive ? 1 : 0.3};
    transition: transform 0.3s ease-in-out;
    transform: translateY(0);
    cursor: pointer;
    :hover {
      transform: translateY(-0.2rem);
      box-shadow: ${theme.shadow.secondary};
    }
  `}
`;
export const HorizontalCardContent = styled.div`
  display: flex;
  align-items: center;

  img {
    max-width: 4rem;
    max-height: 4rem;
    margin-right: 1rem;
  }

  span {
    font-weight: bold;
  }

  p {
    opacity: 0.5;
  }
`;

export const HorizontalCardVideo = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  span {
    margin-left: 0.5rem;
  }
`;
