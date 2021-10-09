import { Wrapper as Icon } from 'components/Icon/styles';
import { Wrapper as LanguageSelector } from 'components/LanguageSelector/styles';
import styled, { css } from 'styled-components';

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
    position: absolute;
    top: 0;
    right: 1%;
    cursor: pointer;
    display: none;
    z-index: 10;
    padding: 1rem;

    :hover {
      opacity: 0.6;
    }
    .line {
      fill: none;
      stroke: ${theme.colors.text};
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
    @media screen and (max-width: 915px) {
      display: block;
    }
  `}
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  column-gap: 1rem;
  align-items: center;
  ${LanguageSelector} {
    margin-left: 1rem;
  }
  @media screen and (max-width: 915px) {
    grid-template-columns: min-content auto;
  }
  :nth-child(2) {
    @media screen and (max-width: 915px) {
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

export const TopContainer = styled.div`
  ${({ theme }) => css`
    position: relative;

    @media screen and (min-width: 915px) {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 0;
    }

    &.sticky {
      max-width: ${theme.grid.container};
      @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
        -webkit-backdrop-filter: saturate(180%) blur(20px);
      }
      background: ${theme.colors.inverse}F2;
      box-shadow: ${theme.shadow.primary};
      position: fixed;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 100%;
      padding: 1rem 2rem;
      z-index: 5;
      border-radius: 0 0 2rem 2rem;
    }

    @media screen and (max-width: 1200px) {
      padding: 1rem 2rem;
    }

    @media screen and (max-width: 915px) {
      &.show {
        padding: 1rem 0;

        ${Container} {
          :nth-child(1) {
            padding: 0 2rem;
          }
          :nth-child(2) {
            position: fixed;
            top: 0;
            width: 100%;
            display: block;
            border-radius: 1rem;
            padding: 2rem;
            background: ${theme.colors.secondaryBackgroundSolid};
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
  `}
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
