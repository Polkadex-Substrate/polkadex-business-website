import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    max-width: 100rem;
    margin: 3rem auto 7rem auto;
  `}
`;

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1rem;
    background: ${theme.colors.white};
    padding: 2.5rem;
    border-radius: 2rem;
    max-width: 60rem;
    @media screen and (max-width: 950px) {
      padding: 1.5rem;
    }
  `}
`;

export const Card = styled.div`
  ${({ theme }) => css`
    span,
    p {
      color: ${theme.colors.black};
    }
    span {
      font-size: 3.3rem;
      font-weight: 500;
    }
    p {
      font-size: 1.2rem;
      margin-top: 0.5rem;
    }
  `}
`;
