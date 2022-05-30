import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  max-width: 110rem;
  margin: 4rem auto 0 auto;
  @media screen and (max-width: 1200px) {
    padding: 4rem 1rem 2rem 1rem;
  }
  h2 {
    font-size: 1.5rem;
    font-weight: 500;
  }
`;

export const Container = styled.div`
  margin-top: 1.5rem;
  /* display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem; */
`;

export const Card = styled.div`
  ${({ theme }) => css`
    img {
      object-fit: contain;
      max-height: 4rem;
    }
  `}
`;
