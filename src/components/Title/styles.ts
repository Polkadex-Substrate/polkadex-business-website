import styled, { css } from 'styled-components';

import Props from './types';

const wrapperModifier = {
  left: () => css`
    align-items: flex-start;
  `,
  center: () => css`
    align-items: center;
    text-align: center;
  `,
  right: () => css`
    align-items: flex-end;
    text-align: right;
  `,
};
export const Wrapper = styled.div<Partial<Props>>`
  ${({ theme, position }) => css`
    display: flex;
    flex-direction: column;
    ${wrapperModifier[position]()}

    & strong {
      background: ${theme.colors.gradient};
    }
  `}

  & h2 {
    font-size: 4rem;
    margin-bottom: 1rem;
  }
  @media screen and (max-width: 650px) {
    & h2 {
      font-size: 3.2rem;
    }
  }
  & p {
    font-size: 1.6rem;
    line-height: 1.5;
  }

  & strong {
    display: inline-block;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  & span {
    ${({ theme }) => css`
      background: ${`${theme.colors.secondary}4D`};
      border: ${`1px solid ${theme.colors.secondary}`};
    `}

    display: block;
    font-weight: bold;
    border-radius: 0.8rem;
    padding: 0.5rem 1rem;
    width: fit-content;
    margin-bottom: 0.5rem;
  }
`;
