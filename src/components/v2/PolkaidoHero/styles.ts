import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  ${({ theme }) => css`
    padding-top: 8rem;
    max-width: ${theme.grid.container};
    margin: 0 auto;
    border-radius: 2rem;
    background: linear-gradient(
      179.95deg,
      rgba(139, 161, 190, 0.05) 0.04%,
      rgba(139, 161, 190, 0) 63.37%
    );
  `}
`;

export const Title = styled.div`
  max-width: 90rem;
  margin: 0 auto;
  h1 {
    max-width: 70rem;
    font-size: 5rem;
    line-height: 1.1;
    margin-bottom: 1.5rem;
    @media screen and (max-width: 700px) {
      font-size: 3.5rem;
    }
  }
  p {
    max-width: 55rem;
    font-size: 1.6rem;
    line-height: 1.6;
  }
  @media screen and (max-width: 915px) {
    margin: 0 1rem;
  }
`;

export const Actions = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: 2rem;
    margin-top: 2rem;
    svg {
      max-width: 1rem;
      margin-left: 0.5rem;
    }
    a {
      padding: 1rem;
      border-radius: 0.8rem;
      :first-child {
        color: ${theme.colors.white};
        background: ${theme.colors.primary};
        transition: background 0.2s ease-in-out;
        :hover {
          background: ${theme.colors.white}19;
        }
      }
      :last-child {
        display: flex;
        align-items: center;
        transition: background 0.2s ease-in-out;
        :hover {
          background: ${theme.colors.primary}19;
        }
      }
    }
  `}
`;

export const Slider = styled.div`
  position: relative;
  overflow: hidden;
`;

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
    transform: translateY(50%);
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

export const SliderContainer = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 5rem;
  overflow: hidden;
`;

export const Slide = styled.div`
  display: block;
  min-width: 100vmin;
  max-height: 60rem;
  opacity: 0.25;
  transition: opacity calc(600ms / 2) cubic-bezier(0.25, 0.46, 0.45, 0.84),
    transform calc(600ms / 2) cubic-bezier(0.25, 0.46, 0.45, 0.84);
  /* cursor: pointer; */

  video {
    width: 100%;
  }

  &.slide--previous,
  &.slide--next {
    &:hover {
      opacity: 0.5;
    }
  }

  &.slide--previous {
    cursor: w-resize;

    &:hover {
      transform: translateX(2%);
    }
  }

  &.slide--next {
    cursor: e-resize;

    &:hover {
      transform: translateX(-2%);
    }
  }

  &.slide--current {
    opacity: 1;
    pointer-events: auto;
    user-select: auto;

    @media (hover: hover) {
      &:hover .slide__image-wrapper {
        transform: scale(1.025)
          translate(calc(0 / 50 * 1px), calc(0 / 50 * 1px));
      }
    }
  }
`;
