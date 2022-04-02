import styled, { css } from 'styled-components';

import { TooltipContentProps } from '.';

const wrapperModifiers = {
  top: () => css`
    bottom: calc(100% + 0.4em);
    left: 0;
    //Not Responsive
    //left: 50%;
    //transform: translateX(-50%);
  `,
  bottom: () => css`
    top: calc(100% + 18px);
    left: 50%;
    transform: translateX(-50%);
  `,
  right: () => css`
    top: 50%;
    transform: translateY(-50%);
    left: calc(100% + 18px);
  `,
  left: () => css`
    top: 50%;
    transform: translateY(-50%);
    right: calc(100% + 18px);
  `,
};

export const Wrapper = styled.div`
  position: relative;
  user-select: none;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
`;

export const Content = styled.div<Pick<TooltipContentProps, 'position'>>`
  ${({ theme, position }) => css`
    position: absolute;
    background: ${theme.colors.white};
    color: ${theme.colors.black};
    padding: 0.5rem;
    border-radius: 0.5rem;
    min-width: 35rem;
    /* white-space: nowrap; */
    animation: fadeIn ease-in-out 0.4s;
    ${wrapperModifiers[position]()}
    @keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  `}
`;
