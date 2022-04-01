import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  background: #1c1c26;
  padding: 4rem 0;
  margin: 2rem 0 8rem 0;
  @media screen and (min-width: 735px) {
    padding: 10rem 0;
  }
`;
export const Container = styled.div`
  ${({ theme }) => css`
    display: grid;
    gap: 2rem;
    max-width: 95rem;
    margin: 0 auto;
    h2,
    p {
      color: ${theme.colors.white};
    }
    h2 {
      font-size: 3.5rem;
    }

    p {
      line-height: 1.6;
      font-size: 1.5rem;
    }
    @media screen and (max-width: 950px) {
      padding-left: 1rem;
      padding-right: 1rem;
    }
    @media screen and (min-width: 735px) {
      grid-template-columns: 1fr 1.5fr;
    }
  `}
`;

export const AsideRight = styled.div`
  position: relative;

  img {
    position: absolute;
    left: -5rem;
    width: 100%;
    min-width: 40rem;
    display: none;
    @media screen and (min-width: 735px) {
      display: block;
    }
  }
`;
export const AsideLeft = styled.div`
  ${({ theme }) => css`
    div {
      padding-left: 2rem;
      position: relative;
      :before {
        position: absolute;
        content: '';
        width: 0.8rem;
        height: 0.8rem;
        background: ${theme.colors.primary};
        border-radius: 50%;
        left: -1%;
        top: 1rem;
      }
      :not(:last-child) {
        margin-bottom: 4.5rem;
      }
      @media screen and (min-width: 735px) {
        max-width: 40rem;
      }
    }
  `}
`;
