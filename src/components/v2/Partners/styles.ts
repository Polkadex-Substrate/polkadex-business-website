import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    margin: 6rem 0;
    color: ${theme.colors.black};
    @media screen and (max-width: 1200px) {
      padding: 4rem 1rem 2rem 1rem;
    }
    h2 {
      max-width: 110rem;
      margin: 0 auto;
      font-size: 1.5rem;
      font-weight: 500;
    }
  `}
`;
export const Content = styled.div`
  position: absolute;
  left: 0;
  height: 100%;
`;

export const Container = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  gap: 5rem;
`;

export const Card = styled.li`
  list-style: none;
  img {
    object-fit: contain;
    max-height: 4rem;
    max-width: 12rem;
  }
`;
