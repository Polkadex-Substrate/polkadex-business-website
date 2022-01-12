import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  padding: 5rem 0;
  max-width: 90rem;
  margin: 0 auto;
  p,
  a {
    font-size: 1.5rem;
    line-height: 1.5;
  }
`;

export const Title = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
    margin-bottom: 5rem;
    h2 {
      font-size: 3.5rem;
    }
    a {
      display: block;
      margin-top: 1rem;
      color: ${theme.colors.primary};
    }
  `}
`;
export const Content = styled.div``;
export const Card = styled.div<{ isActive?: boolean }>`
  ${({ theme, isActive }) => css`
    padding: 1.5rem 2rem;
    box-shadow: ${isActive ? theme.shadow.primary : 'none'};
    border: 1px solid ${theme.colors.secondaryBackground};
    border-radius: 1rem;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    :hover {
      box-shadow: ${theme.shadow.primary};
    }

    span {
      display: block;
      user-select: none;
      font-weight: ${isActive ? 'bold' : 'normal'};
    }
    p {
      margin-top: 1rem;
    }

    :not(:last-child) {
      margin-bottom: 1rem;
    }
  `}
`;
