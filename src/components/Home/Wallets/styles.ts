import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    max-width: ${theme.grid.container};
    margin: 4rem auto 0 auto;
    z-index: 1;
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
      top: 4rem;
      left: -10%;
      background: ${theme.colors.primary};
      width: 35rem;
      height: 15rem;
      border-radius: 0 50rem 50rem 0;
      z-index: -2;
    }
  `}
`;

export const Container = styled.div`
  margin-top: 2.5rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 1rem;
`;

export const Card = styled.a`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    flex-direction: column;
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
      max-height: 4.5rem;
      max-width: 4.5rem;
    }
    img {
      object-fit: contain;
    }
    p {
      margin-top: 8rem;
    }
  `}
`;

export const Badge = styled.span`
  ${({ theme }) => css`
    position: absolute;
    border: 1px solid ${theme.colors.primary};
    color: ${theme.colors.primary};
    border-radius: 0.2rem;
    background: ${theme.colors.primary}33;
    right: 0.8rem;
    padding: 0 0.2rem;
  `}
`;
