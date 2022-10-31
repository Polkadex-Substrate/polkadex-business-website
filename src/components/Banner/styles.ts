import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: grid;
  text-align: left;
  @media screen and (min-width: 690px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background: #ffffff;
    padding: 6rem 2.5rem;
    border-radius: 1.5rem;
    margin-bottom: 2.5rem;
    color: ${theme.colors.black};
    position: relative;
    display: flex;
    flex-direction: column;
    box-shadow: ${theme.shadow.secondary};
    border: 2px solid ${theme.colors.secondaryBackgroundOpacity};
    width: 100%;
    div {
      position: relative;
      z-index: 2;
      h3,
      p {
        color: ${theme.colors.black};
      }
      p {
        line-height: 1.5;
      }
      h3 {
        font-size: 3rem;
        margin-bottom: 0.8rem;
      }
      a {
        display: block;
        background: ${theme.colors.secondary};
        color: ${theme.colors.white};
        padding: 1rem;
        border-radius: 0.5rem;
        margin-top: 2rem;
        width: fit-content;
        transition: opacity 0.5s;
        opacity: 1;
        :hover {
          opacity: 0.7;
        }
      }
    }
    @media screen and (min-width: 690px) {
      max-width: 90rem;
      img {
        position: absolute;
        bottom: 0;
        right: 0;
        max-width: 45rem;
        z-index: 1;
      }
    }
    @media screen and (max-width: 690px) {
      flex-direction: column-reverse;
      img {
        max-width: 50rem;
        align-self: flex-start;
        width: 90%;
        margin-bottom: 2rem;
      }
    }
  `}
`;
