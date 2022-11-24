import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    max-width: ${theme.grid.container};
    margin: 4rem auto 0 auto;
    z-index: 1;
    overflow: hidden;
    @media screen and (max-width: 1200px) {
      margin: 4rem 1rem;
    }
    h2 {
      font-weight: 400;
      font-size: 1.8rem;
    }
    :before {
      content: '';
      position: absolute;
      top: 6rem;
      right: -10%;
      background: ${theme.colors.primary};
      width: 35rem;
      height: 7rem;
      border-radius: 50rem 0 0 50rem;
      z-index: -2;
    }
  `}
`;

export const Container = styled.div`
  margin-top: 1.5rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 250px));
  @media screen and (max-width: 800px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
  gap: 1rem;
`;

export const Card = styled.a`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: ${theme.colors.tertiaryBackgroundSolid};
    padding: 2rem;
    border-radius: 1rem;
    transition: background 0.3s ease-in-out;
    border: 1px solid ${theme.colors.secondaryBackgroundOpacity};
    :hover {
      background: ${theme.colors.secondaryBackgroundOpacity};
    }
    img,
    svg {
      width: 100%;
      height: 100%;
      max-height: 3.5rem;
      max-width: 3.5rem;
    }
    img {
      object-fit: contain;
    }
  `}
`;
