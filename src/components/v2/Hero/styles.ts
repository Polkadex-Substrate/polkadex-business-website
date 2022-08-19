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
  background: white;
  color: black;
  display: grid;
  align-items: center;
  border-radius: 2rem;
  @media screen and (min-width: 890px) {
    grid-template-columns: 1fr 2fr;
    padding: 4rem;
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
      line-height: 1.2;
      @media screen and (max-width: 700px) {
        font-size: 3.5rem;
      }
      strong {
        display: block;
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
      padding: 1rem;
      border-radius: 0.8rem;
      :first-child {
        color: ${theme.colors.white};
        background: ${theme.colors.primary};
        transition: background 0.2s ease-in-out;
        :hover {
          background: ${theme.colors.black};
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
export const DownloadLinksContent = styled.div`
  span {
    display: block;
    margin-bottom: 1rem;
    font-size: 1.4rem;
  }
`;

export const DownloadLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 2rem;
  a {
    opacity: 0.4;

    svg {
      margin-right: 0.5rem;
      vertical-align: middle;
      width: 1.5rem;
      height: 1.5rem;
    }
  }
`;

export const ScanQrCode = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 1rem;
    img {
      max-width: 8rem;
      padding: 0.2rem;
      box-shadow: ${theme.shadow.tertiary};
    }
    span svg {
      width: 1rem;
      height: 1rem;
      fill: black;
      margin-right: 1rem;
    }
  `}
`;
