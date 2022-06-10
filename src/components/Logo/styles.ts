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
export const Polkaido = styled.div`
  display: flex;
  align-items: center;
  width: 12rem;
  :before {
    padding-right: 1px;
    margin-right: 2rem;
    content: '';
    right: 0;
    height: 2rem;
    max-width: 1px;
    background-color: white;
    opacity: 0.2;
  }
  @media screen and (max-width: 500px) {
    display: none;
  }
`;

export const Careers = styled.div`
  display: flex;
  align-items: center;
  max-width: 10rem;
  :before {
    padding-right: 1px;
    margin-right: 2rem;
    content: '';
    right: 0;
    height: 2rem;
    max-width: 1px;
    background-color: white;
    opacity: 0.2;
  }
`;

export const Staking = styled.div`
  display: flex;
  align-items: center;
  max-width: 10rem;
  :before {
    padding-right: 1px;
    margin-right: 2rem;
    content: '';
    right: 0;
    height: 2rem;
    max-width: 1px;
    background-color: white;
    opacity: 0.2;
  }
`;
