import styled, { css } from 'styled-components';

import Props from './types';

const imageModifier = {
  Small: () => css`
    width: 8rem;
  `,
  Medium: () => css`
    width: 14rem;
  `,
  Large: () => css`
    width: 18rem;
  `,
};

export const LogoText = styled.g`
  transition-duration: 3s;
  transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
  transition-delay: 0.1s;
  transition-property: initial;
  opacity: 1;
`;
export const LogoIcon = styled.g``;

export const Link = styled.a<Partial<Props>>`
  ${({ size, theme }) => css`
    transition: ${theme.transition.default};
    color: ${theme.colors.text};
    & svg {
      ${!!size && imageModifier[size]}
    }
  `}

  & :hover ${LogoText} {
    opacity: 0.5;
  }
`;
