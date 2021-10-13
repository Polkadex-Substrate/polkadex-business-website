import { FormWrapper as Button } from 'components/Button/styles';
import styled, { css } from 'styled-components';

export const Wrapper = styled.section<{ isDark?: boolean }>`
  ${({ isDark }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    max-width: 120rem;
    margin: 0 auto;
    min-height: 45rem;
    border-radius: 2rem;

    @media screen and (min-width: 1060px) and (max-width: 1200px) {
      min-height: 43rem;
    }
    @media screen and (min-width: 960px) and (max-width: 1060px) {
      min-height: 39rem;
    }
    @media screen and (min-width: 860px) and (max-width: 960px) {
      min-height: 35rem;
    }
    @media screen and (min-width: 795px) and (max-width: 860px) {
      min-height: 32rem;
    }

    @media screen and (min-width: 795px) {
      background-image: ${isDark
        ? 'url(/img/newsletterHeroDark.svg)'
        : 'url(/img/newsletterHeroLight.svg)'};
      background-repeat: no-repeat;
      background-size: contain;
    }

    & h3 {
      font-size: 4rem;
      margin-bottom: 0.5rem;
    }

    @media screen and (max-width: 1200px) {
      padding: 2rem;
      & h3 {
        font-size: 3.2rem;
      }
    }
  `}
`;

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;

    & form {
      background: ${theme.colors.primaryBackground};
      box-shadow: ${theme.shadow.tertiary};
      margin-top: 3rem;
      padding: 1rem 1rem 1rem 2rem;
      border-radius: 1rem;
      max-width: 40rem;
      width: 100%;
    }
  `}
`;
export const FormWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  & input {
    ${({ theme }) => css`
      color: ${theme.colors.text};
    `}
  }
  @media screen and (max-width: 380px) {
    flex-direction: column;

    & input {
      margin-bottom: 2rem;
    }

    & ${Button} {
      width: 100%;
    }
  }
`;

export const MessageBox = styled.div`
  margin-top: 0.5rem;
`;
