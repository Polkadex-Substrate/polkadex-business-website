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
      transition: transform 3s, filter 3s ease-in-out;
      filter: brightness(150%);
      :hover {
        filter: brightness(100%);
        transform: scale(1.15);
      }
    }
  }

  & div a {
    ${({ theme }) => css`
      transition: ${theme.transition.default};
    `}
    opacity: 0.6;
    &:hover {
      opacity: 1;
    }
    :not(:last-child) {
      margin-right: 1rem;
    }
  }
  & div img {
    max-width: 3rem;
  }
`;
