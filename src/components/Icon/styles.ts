import styled, { css } from 'styled-components';

import { Props } from './types';

const modifier = {
  xsmall: () => css`
    max-width: 2rem;
    max-height: 2rem;
    padding: 0.4rem;
  `,
  small: () => css`
    max-width: 2.5rem;
    max-height: 2.5rem;
    padding: 0.5rem;
  `,
  normal: () => css`
    max-width: 3rem;
    max-height: 3rem;
    padding: 0.6rem;
  `,
  medium: () => css`
    max-width: 3.5rem;
    max-height: 3.5rem;
    padding: 0.5rem;
  `,
  large: () => css`
    max-width: 4rem;
    max-height: 4rem;
    padding: 0.1rem;
  `,
  xlarge: () => css`
    max-width: 4.5rem;
    max-height: 4.5rem;
    padding: 0.9rem;
  `,
};

export const Wrapper = styled.a<Partial<Props>>`
  ${({ theme, size, background, isActive, hoverable }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.9rem;
    background: ${isActive ? theme.colors.primary : theme.colors[background]};
    color: ${theme.colors.text};
    transition: ${theme.transition.default};
    & svg {
      fill: ${isActive ? theme.colors.white : theme.colors.text};
    }

    ${modifier[size]};
    ${hoverable &&
    css`
      & :hover {
        transform: translateY(-0.2rem);
        background: ${isActive
          ? theme.colors.primary
          : background === 'none'
          ? 'none'
          : theme.colors.secondaryBackground};
      }
    `}
  `}
`;
