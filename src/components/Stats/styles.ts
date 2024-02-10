import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  max-width: 120rem;
  margin: 8rem auto;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 5rem;
  @media screen and (max-width: 950px) {
    padding: 1.5rem;
  }
`;

export const Card = styled.div`
  ${({ theme }) => css`
    position: relative;
    text-align: right;
    ::before {
      content: '';
      position: absolute;
      height: 100%;
      width: 60%;
      background: ${theme.colors.secondaryBackgroundOpacity};
      border-radius: 1rem;
      right: -20%;
      top: -30%;
      padding: 2rem;
      z-index: 0;
    }
    span {
      font-size: 3.3rem;
      font-weight: 500;
    }
    p {
      font-size: 1.4rem;
      margin-top: 0.5rem;
    }
  `}
`;
