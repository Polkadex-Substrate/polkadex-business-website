import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
`;

export const Container = styled.div<{
  color: string;
  isVisible: boolean;
  isPriority?: boolean;
}>`
  ${({ theme, color, isVisible, isPriority }) => css`
    position: absolute;
    top: 0;
    background-color: ${theme.colors[color]};
    padding: 1rem;
    color: ${theme.colors.text};
    width: 100%;
    height: 100%;
    opacity: ${isVisible ? 1 : 0};
    cursor: pointer;
    transition: opacity 0.6s;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: ${isPriority ? 99 : 0};
    border-radius: 0.2rem;
    :hover {
      opacity: 1;
    }
    p {
      font-size: 1.1rem;
      font-weight: 600;
      display: inline-block;
    }
  `}
`;
