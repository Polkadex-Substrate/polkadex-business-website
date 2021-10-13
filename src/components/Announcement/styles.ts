import styled, { css } from 'styled-components';

import { VisibilityProps } from './types';

export const Wrapper = styled.section<VisibilityProps>`
  ${({ theme, visible }) => css`
    max-width: ${theme.grid.container};
    display: ${visible ? 'block' : 'none'};
  `}
  margin: 1.2rem auto 0 auto;

  @media screen and (max-width: 1200px) {
    padding: 1.5rem;
  }
`;
export const Content = styled.div`
  :last-child {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    & img {
      max-width: 2rem;
    }

    @media screen and (max-width: 790px) {
      position: absolute;
      top: 5%;
      right: 5%;
    }
  }
`;

export const Container = styled.div`
  ${({ theme }) => css`
    background: ${`${theme.colors.secondary}4D`};
    border: ${` 1px solid ${theme.colors.secondary}`};
  `}
  display: flex;
  border-radius: 1.5rem;
  padding: 1rem 2rem;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media screen and (max-width: 790px) {
    flex-direction: column;
  }
`;
