import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  ${({ theme }) => css`
    max-width: ${theme.grid.container};

    @media screen and (max-width: ${theme.grid.container}) {
      padding: 2rem;
    }
  `}
  margin: 0 auto;
`;

export const Col = styled.div``;

export const ColContainer = styled.div``;

export const ProductsContainer = styled.div`
  display: grid;
  row-gap: 3rem;
  column-gap: 2rem;
  margin-top: 3rem;

  @media screen and (min-width: 980px) {
    grid-template-columns: 1fr 0.8fr;
  }

  @media screen and (min-width: 860px) and (max-width: 980px) {
    grid-template-columns: 1fr 1fr;
  }

  & ${Col} {
    ${({ theme }) => css`
      background: ${theme.colors.gradientBackground};
      transition: ${theme.transition.default};
      :hover {
        transform: translateY(-0.5rem);
      }
      & ${ColContainer} {
        position: relative;
        padding: 3rem 2rem;
        background: ${theme.colors.linearBackground};
        height: 100%;
        & img {
          max-height: 20rem;
          height: 100%;
          width: 100%;
        }
      }

      border-radius: 2rem;

      & span {
        border-radius: 0.6rem;
        padding: 0.5rem 1rem;
        width: auto;
      }
    `}
  }
`;

export const Card = styled.div`
  ${({ theme }) => css`
    & div {
      display: flex;
      align-items: center;
      margin: 1.5rem 0;
    }

    & div span {
      background: ${`${theme.colors.primary}4D`};
      border: 1px solid ${theme.colors.primary};
      display: block;
      margin-right: 1rem;
    }

    & h5 {
      font-size: 2rem;
    }

    @media screen and (max-width: 450px) {
      & div {
        flex-direction: column;
        align-items: flex-start;
      }
      & div span {
        margin: 0 0 1rem 0;
        width: fit-content;
      }
    }
  `};
`;

export const Tag = styled.span`
  ${({ theme }) => css`
    background: ${`${theme.colors.secondary}4D`};
    border: 1px solid ${theme.colors.secondary};
  `};
  position: absolute;
  display: block;
  top: 5%;
  right: 5%;
`;
