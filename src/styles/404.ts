import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  ${({ theme }) => css`
    position: relative;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    isolation: isolate;

    /* Brand blobs — same visual language as the homepage sections. */
    ::before,
    ::after {
      content: '';
      position: absolute;
      border-radius: 50%;
      filter: blur(130px);
      opacity: 0.3;
      z-index: -1;
    }
    ::before {
      background: ${theme.colors.primary};
      width: 50rem;
      height: 50rem;
      top: -12rem;
      left: -12rem;
    }
    ::after {
      background: ${theme.colors.secondary};
      width: 55rem;
      height: 55rem;
      bottom: -16rem;
      right: -12rem;
    }
  `}
`;

export const Container = styled.div`
  max-width: 1200px;

  @media screen and (max-width: 900px) {
    padding: 2rem;
    grid-template-columns: 1fr;
    row-gap: 3rem;
    text-align: center;
  }

  @media screen and (min-width: 900px) and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 1200px) {
    padding: 2rem;
  }

  @media screen and (min-width: 1200px) {
    grid-template-columns: 1fr 2fr;
  }
  margin: 0 auto;
  display: grid;
  align-items: center;
  column-gap: 4rem;
`;

export const TitleContainer = styled.div`
  ${({ theme }) => css`
    & h1 {
      font-size: 12rem;
      background: ${theme.colors.gradient};
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    & h2 {
      font-size: 4rem;
      margin-bottom: 2rem;
    }

    & p {
      line-height: 1.7;
      opacity: 0.8;
    }
  `}
`;

export const Actions = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 1.6rem;
    flex-wrap: wrap;
    margin-top: 3rem;
    @media screen and (max-width: 900px) {
      justify-content: center;
    }

    a {
      display: inline-flex;
      align-items: center;
      padding: 1.1rem 2.4rem;
      border-radius: 0.6rem;
      font-weight: 500;
      transition: opacity 0.2s ease-in-out;
    }
    a.primary {
      background: ${theme.colors.primary};
      color: ${theme.colors.white};
      :hover {
        opacity: 0.9;
      }
    }
    a.secondary {
      color: ${theme.colors.text};
      text-decoration: underline;
      text-underline-offset: 3px;
      opacity: 0.85;
      :hover {
        opacity: 1;
      }
    }
  `}
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  & img {
    width: 100%;
  }
`;
