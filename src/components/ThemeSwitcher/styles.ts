import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    transition: 0.3s ease-in;
    cursor: pointer;
    display: flex;
    align-items: center;
    background: ${theme.colors.secondaryBackground};
    border-radius: 0.8rem;
    height: fit-content;
    width: fit-content;
    & span {
      font-size: ${theme.font.sizes.xsmall};
    }
    & button {
      cursor: pointer;
    }
  `}
`;
