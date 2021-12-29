import styled, { css } from 'styled-components';

import Props from './types';

const wrapperModifier = {
  left: (distance: number) => css`
    left: ${`${distance}%`};
  `,
  right: (distance: number) => css`
    right: ${`${distance}%`};
  `,
  top: (distance: number) => css`
    top: ${`${distance}%`};
  `,
  bottom: (distance: number) => css`
    bottom: ${`${distance}%`};
  `,
};

export const Line = styled.div<Partial<Props>>`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    position: relative;
    margin-top: 2.8rem;

    ::before {
      position: absolute;
      margin-top: -0.5rem;
      content: '';
      width: 2rem;
      height: 2rem;
      background: ${theme.colors.text}33;
      border-radius: 4rem;
    }
    ::after {
      position: absolute;
      margin-top: 0.8rem;
      content: '';
      width: 1px;
      background: ${theme.colors.text};
      height: 120%;
    }

    & div {
      width: 1rem;
      height: 1rem;
      background: ${theme.colors.text}72;
      border-radius: 2rem;
    }
  `}
`;

export const SubItem = styled.div`
  :not(:last-child) {
    margin-bottom: 1rem;
  }
`;

export const Item = styled.div<{ isHighligh?: boolean }>`
  ${({ theme, isHighligh }) => css`
    display: flex;
    align-items: center;

    :not(:last-child) {
      margin-bottom: 1rem;
    }

    & svg {
      width: 2rem;
      height: 2rem;
      margin-right: 0.5rem;
    }

    & span {
      background: ${`${theme.colors.primary}4D`};
      border: ${`1px solid ${theme.colors.primary}`};
      &.checked {
        background: ${`${theme.colors.secondaryBackgroundSolid}4D`};
        border: ${`1px solid ${theme.colors.secondaryBackgroundSolid}`};
      }

      font-size: 1.1rem;
      text-transform: uppercase;
      font-weight: 600;
      border-radius: 0.6rem;
      margin-right: 0.5rem;
      padding: 0.5rem 1rem;
    }
    ${isHighligh &&
    css`
      font-size: 1.8rem;
      font-weight: 600;
    `}
  `}
`;

export const Content = styled.div``;

export const Wrapper = styled.div<Partial<Props>>`
  ${({ position, invert, alignRight }) => css`
    @media screen and (min-width: 1080px) {
      position: absolute;
      ${wrapperModifier[position.horizontal.side](position.horizontal.distance)}
      ${wrapperModifier[position.vertical.side](position.vertical.distance)};
      flex-direction: ${alignRight ? 'row-reverse' : 'row'};
      text-align: ${alignRight ? 'right' : 'initial'};

      & ${Line} {
        margin-right: ${alignRight ? 0 : '2rem'};
        margin-left: ${alignRight ? '2rem' : 0};
        transform: ${invert ? 'rotate(180deg) translateY(10rem)' : 'initial'};
      }

      & ${Item} {
        justify-content: ${alignRight ? 'flex-end' : 'flex-start'};
      }
    }
  `}
  display: flex;
  @media screen and (max-width: 1080px) {
    max-width: 25rem;
    width: 100%;
    :not(:last-child) {
      margin-bottom: 5rem;
      & ${Line} {
        ::after {
          height: 160%;
        }
      }
    }
    & ${Line} {
      margin-right: 1.5rem;
    }
  }
`;

export const Title = styled.div`
  margin-bottom: 1.2rem;
  & p {
    font-size: 2.8rem;
    font-weight: 600;
  }

  & span {
    display: block;
    font-size: 1.4rem;
    text-transform: uppercase;
    opacity: 0.7;
  }
`;
