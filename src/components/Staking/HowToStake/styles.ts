import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100rem;
  margin: 10rem auto 5rem auto;
  text-align: center;
  align-items: center;
  gap: 3rem;
  video {
    max-width: 80rem;
    width: 100%;
  }
`;

export const Title = styled.div`
  margin-bottom: 2rem;

  h2 {
    font-size: 3.5rem;
    line-height: 1;
    margin-bottom: 1rem;
  }
  p {
    line-height: 1.6;
  }
`;

export const Actions = styled.div`
  display: flex;
  gap: 2rem;
`;
