import styled, { css } from 'styled-components';

export const ContentMain = styled.div`
  ${({ theme }) => css`
    &.enter ${ContentWrapper} {
      opacity: 0;
      transform: scale(0.95);
      transition: opacity 200ms ease-in-out, transform 200ms ease-in-out;
    }
    &.enter-active ${ContentWrapper} {
      opacity: 0.75;
      transform: scale(1.05);
    }
    &.enter-done ${ContentWrapper} {
      opacity: 1;
      transform: scale(1);
      transition: opacity 200ms ease-in-out, transform 200ms ease-in-out;
    }

    &.exit ${ContentWrapper} {
      opacity: 1;
      transform: scale(1);
    }
    &.exit-active ${ContentWrapper} {
      opacity: 0;
      transform: scale(0.5);
      transition: opacity 100ms ease-in-out, transform 100ms ease-in-out;
    }
  `}
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 2rem;
  max-width: calc(100% - 2rem);
  min-height: 2rem;
  max-height: calc(100% - 2rem);
  overflow: hidden auto;
`;
