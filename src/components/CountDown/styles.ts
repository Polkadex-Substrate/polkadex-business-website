import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  margin-top: 2rem;
  h3 {
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }
`;

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 3rem;
  `}
`;

export const Card = styled.div`
  ${({ theme }) => css`
    position: relative;
    span {
      font-size: 5rem;
      font-weight: ;
    }
    p {
      font-size: 1.3rem;
    }
    :not(:last-child):before {
      content: ':';
      font-size: 5rem;
      position: absolute;
      right: -2.2rem;
    }
  `}
`;
