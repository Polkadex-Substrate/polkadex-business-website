import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.text};
  `}
  text-align: center;
  & span {
    display: block;
    font-size: 1.2;
    opacity: 0.7;
    margin-top: 1rem;
  }

  & p {
    font-size: 2rem;
    font-weight: 600;
    margin: 0.5rem 0 1.5rem 0;
  }
  & figure {
    overflow: hidden;

    img {
      width: 100%;
      transform-origin: 50% 65%;
      transition: transform 3s ease-in-out;
      :hover {
        transform: scale(1.15);
      }
    }
  }

  & div {
    text-align: center;
    a {
      ${({ theme }) => css`
        transition: ${theme.transition.default};
      `}
      opacity: 0.6;
      display: inline-block;
      text-align: center;
      svg {
        height: 2rem;
        width: 2rem;
      }
      &:hover {
        opacity: 1;
      }
      :not(:last-child) {
        margin-right: 1rem;
      }
    }
  }
`;
