import { Wrapper as Icon } from 'components/Icon/styles';
import styled, { css } from 'styled-components';

export const Wrapper = styled.header`
  ${({ theme }) => css`
    max-width: ${theme.grid.container};
  `}
  position: relative;
  z-index: 10;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  @media screen and (min-width: 560px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  &.sticky {
    ${({ theme }) => css`
      max-width: ${theme.grid.container};
    `}
    @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
      backdrop-filter: saturate(180%) blur(20px);
      -webkit-backdrop-filter: saturate(180%) blur(20px);
    }
    background: rgba(0, 0, 0, 0.65);

    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    z-index: 5;
    border-radius: 0 0 2rem 2rem;
  }
`;

export const Container = styled.div`
  display: flex;
  padding: 1rem;
  ${Icon} {
    margin-right: 1rem;
  }
`;
export const Box = styled.div`
  display: flex;
  align-items: center;

  ${Icon} {
    margin-right: 1rem;
  }
`;
