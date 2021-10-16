import { Wrapper as WrapperIcon } from 'components/Icon/styles';
import styled, { css } from 'styled-components';

export const Wrapper = styled.div<{ isActive?: boolean; background: string }>`
  ${({ theme, isActive, background }) => css`
    display: flex;
    align-items: center;
    ${WrapperIcon} {
      opacity: 1;
      background: ${theme.colors[background]}33;
      border: 1px solid ${theme.colors[background]};
      padding: 0.2rem;
      border-radius: 0.4rem;
    }
    p {
      margin-left: 0.5rem;
      opacity: ${isActive ? 1 : 0.6};
      a {
        margin-left: 0.5rem;
      }
    }
    :not(:last-child) {
      margin-bottom: 1rem;
    }
  `}
`;
