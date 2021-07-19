import { Wrapper as IconWrapper } from 'components/Icon/styles';
import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    transition: 0.3s ease-in;
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 0.6rem;
    background: ${theme.colors.secondaryBackground};
    border-radius: 1rem;
    & span {
      font-size: ${theme.font.sizes.xsmall};
    }
    ${IconWrapper}:active {
      background: ${theme.colors.primary};
    }
    & button {
      cursor: pointer;
      :nth-child(2) {
        margin-left: 0.5rem;
      }
    }
  `}
`;
