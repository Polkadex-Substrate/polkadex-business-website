import styled, { css } from 'styled-components';

export const Hero = styled.section`
  ${({ theme }) => css`
    max-width: ${theme.grid.container};
    margin: 0 auto;
    padding: 12rem 2rem 4rem 2rem;
    text-align: center;
    h1 {
      font-size: 5.5rem;
      line-height: 1.1;
      margin-bottom: 1.5rem;
    }
    p {
      line-height: 1.5;
      max-width: 60rem;
      margin: 0 auto;
      opacity: 0.8;
    }
  `}
`;

export const Grid = styled.section`
  ${({ theme }) => css`
    max-width: ${theme.grid.container};
    margin: 0 auto;
    padding: 2rem 2rem 8rem 2rem;
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: repeat(auto-fit, minmax(26rem, 1fr));
  `}
`;

export const Card = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.secondaryBackground};
    border-radius: 1.5rem;
    padding: 3rem 2.5rem;
    text-align: center;
    h3 {
      font-size: ${theme.font.sizes.xlarge};
      margin-bottom: 0.3rem;
    }
    span {
      display: block;
      color: ${theme.colors.primary};
      font-size: ${theme.font.sizes.small};
      font-weight: 500;
      margin-bottom: 1.2rem;
    }
    p {
      font-size: ${theme.font.sizes.small};
      line-height: 1.6;
      opacity: 0.8;
      margin-bottom: 1.5rem;
    }
  `}
`;

export const Avatar = styled.div`
  width: 12rem;
  height: 12rem;
  margin: 0 auto 2rem auto;
  border-radius: 50%;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Social = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    a {
      color: ${theme.colors.primary};
      font-size: ${theme.font.sizes.small};
      font-weight: 500;
      &:hover {
        text-decoration: underline;
      }
    }
  `}
`;
