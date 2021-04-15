import styled, { css } from 'styled-components';

import Props, { StyleProps } from './types';

const wrapperModifiers = {
  open: () => css`
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0);
  `,
  close: () => css`
    opacity: 0;
    pointer-events: none;
    transform: translateY(-2rem);
  `,
  left: () => css`
    left: 0;
  `,
  right: () => css`
    right: 0;
  `,
};

export const Header = styled.div`
  ${({ theme }) => css`
    cursor: pointer;
    position: relative;
    display: flex;
    align-items: center;
    z-index: ${theme.layers.alwaysOnTop};
    transition: ${theme.transition.default};
    & :hover {
      opacity: 0.5;
    }
  `}
`;

export const Content = styled.div<Partial<Props>>`
  ${({ theme, direction }) => css`
    display: flex;
    flex-direction: column;
    margin-top: ${theme.spacings.xsmall};
    position: absolute;
    z-index: ${theme.layers.alwaysOnTop};
    ${wrapperModifiers[direction]};
  `}
`;

export const Overlay = styled.div`
  ${({ theme }) => css`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: ${theme.layers.overlay};
  `}
`;

export const Wrapper = styled.div<StyleProps>`
  ${({ theme, isOpen }) => css`
    position: relative;
    width: max-content;
    ${Content},
    ${Overlay} {
      transition: transform 0.2s ease-in, opacity ${theme.transition.default};
      ${isOpen && wrapperModifiers.open()}
      ${!isOpen && wrapperModifiers.close()}
    }
  `}
`;
