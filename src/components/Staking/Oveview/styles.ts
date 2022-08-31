import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  display: grid;
  align-items: center;
`;
export const Container = styled.div`
  max-width: 100rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 0.6fr 1fr;
  align-items: center;
  min-height: 70rem;
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
  `}
`;

export const OverviewHero = styled.div`
  position: absolute;
  max-width: 60rem;
  justify-self: flex-end;
`;
