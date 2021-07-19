import { Wrapper as Icon } from 'components/Icon/styles';
import { Wrapper as Language } from 'components/LanguageSelector/styles';
import styled, { css } from 'styled-components';

export const Wrapper = styled.footer`
  ${({ theme }) => css`
    max-width: ${theme.grid.container};
  `}

  margin: 2rem auto 0 auto;
  padding: 3rem 0;

  @media screen and (max-width: 1200px) {
    padding: 2rem;
  }
`;

export const Col = styled.div`
  & ul li {
    list-style: none;
  }
`;

export const SocialWrapper = styled.div`
  display: flex;
  ${Icon} {
    margin-right: 1rem;
  }
`;
export const Row = styled.div`
  display: grid;
  column-gap: 1rem;
  row-gap: 2rem;
  & h5 {
    font-size: 1.8rem;
    margin-bottom: 2.2rem;
  }
  ${Language} {
    margin-top: 1rem;
  }
  :first-child {
    padding-bottom: 4rem;
    grid-template-columns: 1fr;

    @media screen and (min-width: 680px) {
      grid-template-columns: repeat(3, 1fr);
    }

    & ${Col} {
      & ul li {
        :not(:last-child) {
          margin-bottom: 2rem;
        }
        & a {
          ${({ theme }) => css`
            transition: ${theme.transition.default};
          `}
          & :hover {
            opacity: 0.6;
          }
        }
      }

      & div :first-child {
        margin-bottom: 4rem;
      }
    }
  }

  :last-child {
    justify-content: space-between;
    padding-top: 4rem;

    ${({ theme }) => css`
      border-top: ${` 1px solid ${theme.colors.text}1D`};
    `}

    & ${Col} {
      display: flex;
      align-items: center;

      & span {
        display: block;
        margin-right: 2.2rem;
      }

      & ul li {
        display: inline-block;
        :not(:last-child) {
          margin-right: 1.8rem;
        }
        & a {
          ${({ theme }) => css`
            transition: ${theme.transition.default};
          `}
          & :hover {
            opacity: 0.6;
          }
        }
      }
    }
    @media screen and (min-width: 850px) {
      grid-template-columns: repeat(2, auto);
    }

    @media screen and (max-width: 850px) {
      & ${Col} {
        :last-child {
          margin-top: 2rem;
        }
      }
    }
  }
`;
