import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  ${({ theme }) => css`
    padding: 1rem;
    max-width: ${theme.grid.container};
    margin: 0 auto;
  `}
`;
export const Main = styled.div`
  padding: 2rem;
  background: linear-gradient(
    179.95deg,
    rgba(139, 161, 190, 0.05) 0.04%,
    rgba(139, 161, 190, 0) 63.37%
  );
  display: grid;
  align-items: center;
  border-radius: 2rem;
  @media screen and (min-width: 890px) {
    grid-template-columns: 1fr 2fr;
    padding: 4rem;
  }
`;

export const HeroImage = styled.div`
  position: relative;
  @media screen and (max-width: 890px) {
    grid-row-start: 1;
  }
  img {
    width: 100%;
  }
`;
export const HeroImageAside = styled.div`
  position: absolute;
  bottom: 2rem;
  right: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  svg {
    max-width: 15rem;
  }
  span {
    display: block;
    font-family: 'Caveat';
    font-size: 2.5rem;
    margin-right: 2rem;
  }
`;

export const Container = styled.div`
  ${({ theme }) => css`
    p {
      line-height: ${theme.font.lineHeight.normal};
    }
    h1 {
      font-size: 5rem;
      font-weight: 500;
      margin-bottom: 2rem;
      line-height: ${theme.font.lineHeight.small};
      @media screen and (max-width: 700px) {
        font-size: 3.5rem;
      }
      strong {
        display: block;
        font-weight: 500;
        color: ${theme.colors.primary};
      }
    }
  `}
`;

export const Actions = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 1rem;
    margin: 2rem 0;
    a {
      padding: 1rem 3rem;
      border-radius: 0.4rem;
      :first-child {
        color: ${theme.colors.white};
        background: ${theme.colors.primary};
        transition: background 0.2s ease-in-out;
        :hover {
          background: ${theme.colors.black};
        }
      }
      :last-child {
        color: ${theme.colors.blue};
        transition: background 0.2s ease-in-out;
        :hover {
          background: ${theme.colors.primary}19;
        }
      }
    }
  `}
`;
