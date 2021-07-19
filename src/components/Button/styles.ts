import styled, { css } from 'styled-components';

import { ButtonProps } from './types';

export const Wrapper = styled.a<Partial<ButtonProps>>`
  ${({ theme, background }) => css`
    color: ${theme.colors.text};
    transition: ${theme.transition.default};
    padding: ${background !== 'none' ? '0.8rem 1rem' : 0};

    border-radius: 1.2rem;
    display: flex;
    align-items: center;
    line-height: 0;
    white-space: pre;

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
  ${({ theme, withOpacity, background }) => css`
    background: ${withOpacity
      ? `${theme.colors[background]}4D`
      : theme.colors[background]};
    border: ${withOpacity ? `1px solid ${theme.colors[background]}` : 'none'};
    color: ${background === 'primary' || 'secondary'
      ? theme.colors.white
      : theme.colors.text} !important;
    :hover {
      background: ${withOpacity
        ? theme.colors[background]
        : `${theme.colors[background]}4D`};
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
    color: ${theme.colors.text};
    background: ${theme.colors.primary};
    transition: ${theme.transition.default};
    border-radius: 1.2rem;
    display: flex;
    align-items: center;
    line-height: 0;
    white-space: pre;
    cursor: pointer;
    & :hover {
      background: ${`${theme.colors.primary}4D`};
    }
    & div {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 3rem;
      height: 3rem;
      border-radius: 0.9rem;
      margin-right: 0.5rem;
      background: ${theme.colors.primaryBackground};
      & img {
        max-width: 1.8rem;
      }
    }
  `}

  padding: 0.8rem 1rem;
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
`;
