import styled from 'styled-components';

export const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  padding: 22rem 0;
  max-width: 95rem;
  margin: 0 auto;
  h1 {
    font-size: 4rem;
    margin-bottom: 1rem;
  }
  p {
    font-size: 1.5rem;
    line-height: 1.5;
  }
`;
