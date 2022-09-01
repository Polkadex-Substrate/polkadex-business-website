import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  align-items: center;
  @media screen and (min-width: 860px) {
    display: grid;
  }
`;
export const Container = styled.div`
  max-width: 100rem;
  margin: 0 auto;
  display: grid;
  align-items: center;
  @media screen and (min-width: 860px) {
    grid-template-columns: 0.6fr 1fr;
    min-height: 70rem;
  }
`;

export const Card = styled.div`
  ${({ theme }) => css`
    h2 {
      font-size: 3rem;
      strong {
        color: ${theme.colors.primary};
      }
    }
    p {
      margin-top: 2rem;
      line-height: 1.7;
    }
    @media screen and (max-width: 1000px) {
      padding: 1rem;
    }
  `}
`;

export const OverviewHero = styled.div`
  position: absolute;
  max-width: 60rem;
  justify-self: flex-end;
  @media screen and (max-width: 860px) {
    display: none;
  }
`;
