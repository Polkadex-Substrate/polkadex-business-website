import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  ${({ theme }) => css`
    max-width: ${theme.grid.container};
    margin: 2rem auto 15rem auto;
    @media screen and (max-width: 1200px) {
      margin: 4rem 2rem;
    }
  `}
`;
export const Header = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 2rem;
`;

export const HeaderCard = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.tertiaryBackgroundOpacity};
    padding: 2rem;
    border-radius: 1rem;
    height: 10rem;
    img {
      max-width: 3rem;
      margin-bottom: 1rem;
    }
    :nth-child(1) {
      margin-top: 8rem;
    }
    :nth-child(2) {
      margin-top: 4rem;
    }

    :nth-child(6) {
      margin-top: 4rem;
    }
    :nth-child(7) {
      margin-top: 8rem;
    }
  `}
`;
export const Title = styled.div`
  ${({ theme }) => css`
    text-align: center;
    h2 {
      line-height: 1.2;
      font-size: 4rem;
      margin-bottom: 1rem;
    }
    p {
      line-height: 1.5;
      max-width: 38rem;
      margin: 0 auto;
    }
    a {
      display: block;
      color: ${theme.colors.primary} !important;
      margin-top: 2rem;
      font-weight: 550;
      transition: opacity 0.2s ease-in-out;
      svg {
        fill: ${theme.colors.primary};
        max-width: 1rem;
        margin-left: 0.5rem;
      }
      :hover {
        opacity: 0.7;
      }
    }
  `}
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 5rem;
  margin-top: 10rem;
`;
export const Card = styled.div`
  ${({ theme }) => css`
    img {
      max-height: 8rem;
      max-width: 8rem;

      height: 100%;
      object-fit: contain;
    }
    span {
      font-size: 2rem;
      display: block;
      font-weight: 550;
      font-size: 1.8rem;
      margin-bottom: 1rem;
      margin-top: 3rem;
    }
    p {
      line-height: 1.5;
    }
    a {
      display: block;
      color: ${theme.colors.primary} !important;
      margin-top: 2rem;
      font-weight: 550;
      transition: opacity 0.2s ease-in-out;

      :hover {
        opacity: 0.7;
      }
    }
  `}
`;
