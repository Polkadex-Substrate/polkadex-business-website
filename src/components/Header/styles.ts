import { Wrapper as Icon } from 'components/Icon/styles';
import styled, { css } from 'styled-components';

type HeaderProps = {
  active?: boolean;
};

export const Wrapper = styled.header`
  ${({ theme }) => css`
    max-width: ${theme.grid.container};
  `}
  position: relative;
  margin: 0 auto;
`;

export const MenuWrapper = styled.div`
  ${({ theme }) => css`
    transition: ${theme.transition.default};
  `}

  position: absolute;
  top: 0;
  right: 3%;
  cursor: pointer;
  display: none;
  z-index: 4;
  padding: 1.5rem;

  :hover {
    opacity: 0.6;
  }
  .line {
    fill: none;
    stroke: white;
    stroke-width: 6;
    transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
      stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  .line1 {
    stroke-dasharray: 60 207;
    stroke-width: 6;
  }
  .line2 {
    stroke-dasharray: 60 60;
    stroke-width: 6;
  }
  .line3 {
    stroke-dasharray: 60 207;
    stroke-width: 6;
  }
  @media screen and (max-width: 640px) {
    display: block;
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  column-gap: 1rem;
  align-items: center;

  :nth-child(2) {
    @media screen and (max-width: 640px) {
      display: none;
    }
  }
`;

export const Column = styled.div`
  :first-child {
    margin-right: 1rem;
    z-index: 3;

    & ul li {
      list-style: none;
      display: inline-block;

      ${({ theme }) => css`
        color: ${theme.colors.text};
        & a {
          transition: ${theme.transition.default};
          & :hover {
            opacity: 0.5;
          }
        }
      `}

      & :not(:last-child) {
        margin-right: 1rem;
      }
    }
  }

  :last-child {
    display: flex;
    align-items: center;

    ${Icon} {
      margin-right: 1rem;
    }
  }
`;

export const TopContainer = styled.div<HeaderProps>`
  position: relative;

  @media screen and (min-width: 640px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;
  }

  @media screen and (max-width: 1200px) {
    padding: 1rem 2rem;
  }

  @media screen and (max-width: 640px) {
    &.show {
      padding: 1rem 0;

      ${Container} {
        :nth-child(2) {
          position: absolute;
          top: 10%;
          width: 100%;
          display: block;
          border-radius: 1rem;
          padding: 2rem;
          ${({ theme }) => css`
            background: ${theme.colors.secondaryBackgroundSolid};
          `}
        }

        & ${Column} {
          :first-child {
            margin-bottom: 2rem;
          }
          & ul li {
            display: block;
            :not(:last-child) {
              margin-bottom: 1rem;
            }
          }
        }
      }
      ${MenuWrapper} {
        .line1 {
          stroke-dasharray: 90 207;
          stroke-dashoffset: -134;
          stroke-width: 6;
        }
        .line2 {
          stroke-dasharray: 1 60;
          stroke-dashoffset: -30;
          stroke-width: 6;
        }
        .line3 {
          stroke-dasharray: 90 207;
          stroke-dashoffset: -134;
          stroke-width: 6;
        }
      }
    }
  }
  &.onScroll {
    background: yellow;
  }
`;

export const BottomContainer = styled.div`
  ${({ theme }) => css`
    border-top: ${` 1px solid ${theme.colors.text}1D`};
  `}

  display: grid;
  grid-template-columns: auto auto;
  column-gap: 1rem;
  align-items: center;
  padding: 1rem 0;

  @media screen and (max-width: 1200px) {
    padding: 1rem 2rem;
  }

  @media screen and (max-width: 580px) {
    white-space: nowrap;
    overflow-x: scroll;
    -webkit-overflow-scrolling: touch;
  }

  & div :last-child {
    justify-self: flex-end;
  }
  & ::-webkit-scrollbar {
    display: none;
  }
  & ul li {
    list-style: none;
    display: inline-block;

    ${({ theme }) => css`
      color: ${theme.colors.text};

      & a {
        transition: ${theme.transition.default};
        & :hover {
          opacity: 0.5;
        }
      }
    `}
    & :not(:last-child) {
      margin-right: 1rem;
    }
  }
`;

export const ProductLink = styled.div`
  border-radius: 1rem;
  padding: 1rem;

  ${({ theme }) => css`
    background: ${theme.colors.secondaryBackgroundSolid};
  `}
  & a {
    display: block;
    white-space: pre;
    :not(:last-child) {
      margin-bottom: 2rem;
    }
  }
`;
