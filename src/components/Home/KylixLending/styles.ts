import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  width: 100%;
  max-width: 120rem;
  margin: 8rem auto 0 auto;
  @media screen and (max-width: 1200px) {
    margin: 4rem auto;
  }
  @media screen and (max-width: 1000px) {
    padding: 1rem;
  }
`;

export const Hero = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 1rem;
    max-width: 46rem;
    margin: 0 auto;
    span {
      padding: 0.4rem 1.2rem;
      border-radius: 2rem;
      background-color: ${theme.colors.primary};
      color: ${theme.colors.white};
      font-size: ${theme.font.sizes.xsmall};
      font-weight: 500;
    }
    h2 {
      font-size: 3rem;
      font-weight: 500;
      line-height: 1.3;
      overflow-wrap: break-word;
    }
    p {
      line-height: ${theme.font.lineHeight.normal};
      opacity: 0.85;
    }
    a {
      margin-top: 0.5rem;
      padding: 1rem 3rem;
      border-radius: 0.4rem;
      width: fit-content;
      color: ${theme.colors.blue};
      transition: background 0.2s ease-in-out;
      :hover {
        background: ${theme.colors.blue}19;
      }
    }
  `}
`;

export const Mark = styled.div`
  img {
    width: 9rem;
    height: 9rem;
    object-fit: contain;
  }
`;

export const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 220px), 1fr));
  gap: 2rem;
  max-width: 100rem;
  margin: 0 auto;
  width: 100%;
  min-width: 0;
`;

export const Card = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.secondaryBackground};
    border-radius: 1.5rem;
    padding: 2.5rem 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    min-width: 0;
    overflow-wrap: break-word;
    h3 {
      font-size: ${theme.font.sizes.large};
      font-weight: 500;
      color: ${theme.colors.primary};
    }
    p {
      line-height: ${theme.font.lineHeight.normal};
      opacity: 0.85;
    }
  `}
`;
