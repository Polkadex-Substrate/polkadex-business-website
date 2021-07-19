import styled, { css } from 'styled-components';

export const Wrapper = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.text};
    background: ${theme.colors.gradientBackground};
    transition: ${theme.transition.default};
  `}
  border-radius: 2rem;
  :hover {
    transform: translateY(-0.5rem);
  }
`;

export const Col = styled.div`
  :first-child {
    & img {
      width: 100%;
      border-radius: 2rem;
      box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
    }
  }

  :last-child {
    padding: 2rem;

    & h6 {
      font-size: 1.6rem;
      font-weight: bold;
      margin-bottom: 1.2rem;
    }

    & p {
      font-size: 1.4rem;
      font-weight: 400;
      line-height: 1.4;
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    & div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 3rem;

      & span {
        opacity: 0.5;
        text-transform: capitalize;
      }

      & img {
        max-width: 3rem;
      }
    }
  }
`;

export const Tag = styled.span`
  ${({ theme }) => css`
    background: ${`${theme.colors.primary}4D`};
    border: ${`1px solid ${theme.colors.primary}`};
  `}

  display: block;
  font-weight: bold;
  border-radius: 0.8rem;
  padding: 0.5rem 1rem;
  width: fit-content;
  margin-bottom: 1rem;
`;
