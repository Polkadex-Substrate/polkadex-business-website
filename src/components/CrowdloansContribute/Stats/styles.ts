import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  max-width: 90rem;
  margin: 3rem auto;
  @media screen and (min-width: 950px) {
    margin-top: 6rem;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
  @media screen and (max-width: 950px) {
    padding: 1rem;
  }
`;

export const Card = styled.div`
  ${({ theme }) => css`
    position: relative;
    text-align: right;
    span {
      font-size: 3.3rem;
    }
    p {
      font-size: 1.2rem;
      margin-top: 0.5rem;
    }
    @media screen and (min-width: 590px) {
      ::after {
        content: '';
        position: absolute;
        right: -1rem;
        top: -1.5rem;
        background: ${theme.colors.secondaryBackgroundOpacity};
        width: 6rem;
        height: 100%;
        border-radius: 1rem;
        padding: 2rem 1rem;
        z-index: 0;
        opacity: 0.6;
      }
    }
  `}
`;
