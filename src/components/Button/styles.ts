import styled, { css } from 'styled-components';

import { ButtonProps } from './types';

export const Wrapper = styled.a<Partial<ButtonProps>>`
  ${({ theme, background }) => css`
    color: ${theme.colors.text};
    transition: ${theme.transition.default};
    padding: ${background !== 'none' ? '0.5rem 0.8rem 0.5rem 0.5rem' : 0};
    border-radius: 1rem;
    display: flex;
    align-items: center;
    line-height: 0;
    white-space: pre;
    font-weight: 500;

    & div {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 3rem;
      height: 3rem;
      & img {
        max-width: 1.8rem;
      }
    }
  `}
`;

export const PrimaryWrapper = styled(Wrapper)<Partial<ButtonProps>>`
  ${({ theme, withOpacity, background, hasIcon, disabled, color }) => css`
    ${disabled
      ? css`
          background: gray;
        `
      : css`
          background: ${withOpacity
            ? `${theme.colors[background]}4D`
            : theme.colors[background]};
        `}
    border: ${withOpacity ? `1px solid ${theme.colors[background]}` : 'none'};
    color: ${background === 'primary'
      ? theme.colors.white
      : theme.colors[color]} !important;

    ${!hasIcon &&
    css`
      padding: 2rem;
    `}
    :hover {
      ${disabled
        ? css`
            background: gray;
          `
        : css`
            background: ${withOpacity
              ? theme.colors[background]
              : `${theme.colors[background]}90`};
          `}
    }

    & div {
      transition: ${theme.transition.default};
      padding: 0.6rem;
      border-radius: 0.9rem;
      margin-right: 0.5rem;
      background: ${background !== 'none'
        ? theme.colors.primaryBackground
        : theme.colors.primary};
    }
  `}
`;

export const FormWrapper = styled.button`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-weight: 600;
    background: ${theme.colors.primary};
    transition: ${theme.transition.default};
    border-radius: 1rem;
    display: flex;
    align-items: center;
    line-height: 0;
    white-space: pre;
    cursor: pointer;
    & :hover {
      background: ${`${theme.colors.primary}99`};
    }
    & div {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 3rem;
      height: 3rem;
      border-radius: 0.9rem;
      margin-right: 0.5rem;
      padding: 0.6rem;
      background: ${theme.colors.primaryBackground};
      svg {
        fill: ${theme.colors.text};
      }
    }
  `}

  padding: 0.5rem 0.8rem 0.5rem 0.5rem;
  border-radius: 1.2rem;
  display: flex;
  align-items: center;
  line-height: 1;
  width: fit-content;
`;
export const SecondaryWrpaper = styled(Wrapper)`
  :hover {
    opacity: 0.5;
  }
  & > div {
    width: 16px;
    height: auto;
    margin-left: 10px;
  }
`;
