import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    z-index: 1;
    :before {
      content: '';
      position: absolute;
      top: 4rem;
      background: ${theme.colors.primary};
      width: 30%;
      height: 15rem;
      border-radius: 0 50rem 50rem 0;
      z-index: -2;
    }
  `}
`;
export const Content = styled.div`
  max-width: 100rem;
  margin: 4rem auto 0 auto;
  h2 {
    font-weight: 400;
    font-size: 1.8rem;
  }
`;

export const Container = styled.div`
  margin-top: 2.5rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(116px, 1fr));
  gap: 1rem;
`;

export const Card = styled.a`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6rem;
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
