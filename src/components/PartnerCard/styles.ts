import styled, { css } from 'styled-components';

import Props from './types';

export const Wrapper = styled.div<Partial<Props>>`
  ${({ width, opacity, height }) => css`
    background: rgba(139, 161, 190, 0.2);
    padding: 2rem;
    border-radius: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    max-height: ${height};
    opacity: ${opacity};
    @media screen and (max-width: 1330px) {
      display: ${width && width !== '8rem' ? 'none' : 'flex'};
    }
  `}
`;
