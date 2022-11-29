import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    transition: 0.3s ease-in;
    cursor: pointer;

    & span {
      font-size: ${theme.font.sizes.xsmall};
    }
    & button {
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      background: ${theme.colors.secondaryBackground};
      border-radius: 0.5rem;
      height: 2.5rem;
      width: 2.5rem;
      padding: 0.3rem;
      svg {
        fill: ${theme.colors.text};
        stroke: ${theme.colors.text};
      }
    }
  `}
`;
