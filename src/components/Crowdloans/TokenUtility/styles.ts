import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  margin-bottom: 5rem;
`;

export const Title = styled.div`
  display: grid;
  grid-gap: 1rem;
  margin-bottom: 5rem;
  max-width: 95rem;
  margin: 0 auto 5rem auto;
  @media screen and (min-width: 500px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 950px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  h2 {
    font-size: 3.5rem;
  }
`;

export const Container = styled.div`
  max-width: 90rem;
  margin: 0 auto;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 2rem;
`;

export const Card = styled.div`
  max-width: 16.4rem;
  img {
    max-width: 10rem;
    max-height: 10rem;
  }
  p {
    font-size: 1.5rem;
    line-height: 1.5;
  }
`;
