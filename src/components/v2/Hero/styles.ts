import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  ${({ theme }) => css`
    padding: 1rem;
    max-width: ${theme.grid.container};
    margin: 0 auto;
  `}
`;
export const Main = styled.div`
  padding: 4rem;
  background: white;
  color: black;
  display: grid;
  align-items: center;
  border-radius: 2rem;
  @media screen and (min-width: 890px) {
    grid-template-columns: 1fr 2fr;
  }
`;

export const HeroImage = styled.div`
  @media screen and (max-width: 890px) {
    grid-row-start: 1;
  }
  img {
    width: 100%;
  }
`;

export const Container = styled.div`
  ${({ theme }) => css`
    p {
      line-height: 1.5;
    }
    h1 {
      font-size: 5rem;
      font-weight: 700;
      margin-bottom: 1rem;
      line-height: 1.1;
    }
    strong {
      display: block;
      color: ${theme.colors.primary};
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
      font-weight: 500;
      padding: 1rem 2rem;
      border-radius: 1rem;
      :first-child {
        color: ${theme.colors.white};
        background: ${theme.colors.primary};
        transition: transform 0.2s ease-in-out;
        :hover {
          transform: scale(1.05);
        }
        :active {
          transform: scale(0.95);
        }
      }
      :last-child {
        color: ${theme.colors.primary};
        transition: background 0.2s ease-in-out;
        :hover {
          background: ${theme.colors.primary}19;
        }
      }
    }
  `}
`;

export const DownloadLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 2rem;
  a {
    transition: opacity 0.2s ease-in-out;
    :hover {
      opacity: 0.8;
    }
    svg {
      margin-right: 0.5rem;
      vertical-align: middle;
      width: 1.5rem;
      height: 1.5rem;
    }
  }
`;

export const ScanQrCode = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  img {
    max-width: 8rem;
  }
  span svg {
    width: 1rem;
    height: 1rem;
    fill: black;
    margin-right: 1rem;
  }
`;
