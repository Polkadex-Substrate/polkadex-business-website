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
    top: ${`${distance}rem`};
  `,
  bottom: (distance: number) => css`
    bottom: ${`${distance}rem`};
  `,
};

export const Wrapper = styled.div<Partial<Props>>`
  ${({ position }) => css`
    ${wrapperModifier[position.horizontal.side](position.horizontal.distance)};
    ${wrapperModifier[position.vertical.side](position.vertical.distance)};
  `}

  display: flex;
  align-items: flex-start;

  @media screen and (min-width: 1000px) {
    position: absolute;
  }
  @media screen and (max-width: 1000px) {
    :not(:last-child) {
      margin-bottom: 3rem;
    }
  }
`;

export const Line = styled.div`
  margin-right: 1.5rem;
  margin-top: 0.5rem;
  display: flex;
  justify-content: center;
  position: relative;
  transform: rotate(90deg);
  display: none;

  @media screen and (min-width: 1000px) {
    display: block;
  }
  ::before {
    position: absolute;
    margin-top: -0.5rem;
    content: '';
    width: 2rem;
    height: 2rem;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 4rem;
  }
  ::after {
    position: absolute;
    margin-top: 0.8rem;
    content: '';
    width: 1px;
    background: white;
    height: 9em;
  }

  & div {
    width: 1rem;
    height: 1rem;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 2rem;
  }
`;

export const ContentContainer = styled.div`
  margin-bottom: 1.2rem;
  display: flex;
  align-items: flex-start;

  @media screen and (min-width: 1000px) {
    max-width: 30rem;
  }

  @media screen and (max-width: 1000px) {
    flex-direction: column;
  }

  & div:first-child {
    margin-right: 1rem;

    span {
      font-size: 1.9rem;
      font-weight: 700;
    }
  }
  & div:last-child {
    & h6 {
      font-size: 1.9rem;
      font-weight: 700;
      margin-bottom: 1rem;
    }
    & p {
      line-height: 1.5;
    }

    & span {
      display: block;
      font-size: 1;
      margin-top: 1.5rem;
      opacity: 0.6;
    }
  }
`;
