import styled, { css } from 'styled-components';

export const Controls = styled.div`
  ${({ theme }) => css`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 4rem;
    height: 4rem;
    background: ${theme.colors.secondaryBackgroundOpacity};
    top: 50%;
    transform: translateY(-50%);
    border-radius: 2rem;
    z-index: 10;
    transition: background 0.5s ease-in-out;
    cursor: pointer;
    svg {
      max-width: 1.5rem;
    }
    :nth-child(1) {
      left: 0;
    }
    :nth-child(2) {
      right: 0;
      svg {
        transform: rotate(180deg);
      }
    }
    :hover {
      background: ${theme.colors.primary};
    }
  `}
`;
