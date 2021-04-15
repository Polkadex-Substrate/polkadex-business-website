import styled, { css } from 'styled-components';

import Props from './types';

export const Wrapper = styled.div<Partial<Props>>`
  position: fixed;
  bottom: 2%;
  left: 0;
  right: 0;
  max-width: 1200px;
  margin: 0 auto;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-backdrop-filter: saturate(180%) blur(20px);
  ${({ theme, visible }) => css`
    display: ${visible ? 'flex' : 'none'};

    & a {
      transition: ${theme.transition.default};
      color: ${theme.colors.primary};
    }
  `}

  padding: 2rem;
  border-radius: 2rem 2rem 2rem 0;
  align-items: center;
  & p {
    line-height: 1.4;
  }
  & a {
    margin-left: 1rem;
    font-weight: 600;

    & :hover {
      opacity: 0.6;
    }
  }
`;
