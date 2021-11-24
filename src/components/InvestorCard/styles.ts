import styled, { css } from 'styled-components';

export const Wrapper = styled.a<{ isLight?: boolean }>`
  ${({ theme, isLight }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 25rem;
    max-height: 18rem;
    padding: 1.5rem;

    ${isLight &&
    css`
      background: rgba(0, 0, 0, 0.9);
      border-radius: 0.5rem;
    `}
    & img {
      width: 100%;
      object-fit: contain;
    }
  `}
`;
