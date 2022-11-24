import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  ${({ theme }) => css`
    max-width: ${theme.grid.container};
    margin: 4rem auto 0 auto;
    @media screen and (max-width: 1200px) {
      margin: 4rem 1rem;
    }
  `}
`;

export const Hero = styled.div`
  display: grid;
  align-items: center;
  gap: 1rem;
  grid-template-columns: 1fr minmax(auto, 30rem);
`;

export const AsideLeft = styled.div`
  img {
    width: 100%;
  }
`;
export const AsideRight = styled.div`
  ${({ theme }) => css`
    h2 {
      margin-bottom: 3rem;
      font-size: 3rem;
      font-weight: 500;
      line-height: 1.8;

      svg {
        display: block;
        max-width: 20rem;
        height: auto;
        overflow: hidden;
      }
    }
    p {
      line-height: ${theme.font.lineHeight.normal};
    }
  `}
`;

export const AsideRightIcon = styled.div`
  max-width: 8rem;
  margin-bottom: 3rem;
`;

export const Actions = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 1rem;
    margin: 2rem 0;
    a {
      border-radius: 0.4rem;
      color: ${theme.colors.blue};
    }
  `}
`;

export const Features = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: -5rem;
`;

export const FeaturesCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 5rem;
  margin-top: 3rem;
`;
export const FeaturesCard = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    p {
      line-height: ${theme.font.lineHeight.normal};
    }
    svg {
      width: 3rem;
      height: 3rem;
    }
  `}
`;
