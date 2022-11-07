import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  max-width: 120rem;
  margin: 0 auto;
  border-radius: 4rem;
  position: relative;
  background: linear-gradient(
    179.94deg,
    #e6007a 0.05%,
    rgba(230, 0, 122, 0) 69.15%
  );
  padding-bottom: 5rem;

  @media screen and (min-width: 870px) {
    padding-bottom: 10rem;
  }
  margin-top: 2rem;
`;
export const Container = styled.div`
  @media screen and (min-width: 870px) {
    background-image: url('/img/orderbookListing.svg');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: top right;
  }
`;
export const Content = styled.div`
  max-width: 100rem;
  margin: 0 auto;
  display: grid;
  gap: 2rem;
  padding-top: 5rem;
  @media screen and (max-width: 1000px) {
    padding: 2rem;
  }
  @media screen and (min-width: 870px) {
    grid-template-columns: 1.2fr 1fr;
  }
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 4rem;
  @media screen and (min-width: 870px) {
    max-width: 40rem;
    padding-top: 10rem;

    div p {
      max-width: 28rem;
    }
  }
  div {
    p {
      line-height: 1.6;
      font-size: 1.6rem;
      strong {
        font-weight: 550;
      }
    }
    :first-child {
      h1 {
        @media screen and (min-width: 870px) {
          font-size: 4rem;
        }
        font-size: 3rem;
        line-height: 1.2;
        margin-bottom: 2rem;
      }
    }
  }
`;
export const Success = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    background: ${theme.colors.gradientBackground};
    border-radius: 2rem;
    padding: 1.5rem;
    p {
      max-width: 35rem;
      margin: 0 auto;
      line-height: 1.5;
    }
    div {
      width: 3rem;
      height: 3rem;
      border: 2px solid ${theme.colors.green};
      border-radius: 10rem;
      margin-bottom: 1rem;
      padding: 0.5rem;
      img {
        width: 100%;
        height: 100%;
      }
    }
  `}
`;

export const Form = styled.form`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background: ${theme.colors.gradientBackground};
    border-radius: 2rem;
    padding: 1.5rem;
    button {
      background: ${theme.colors.primary};
      padding: 2rem;
      border-radius: 1rem;
      font-size: 1.4rem;
      color: ${theme.colors.white};
      font-weight: 550;
      :disabled {
        background: gray;
      }
    }
    @media screen and (min-width: 320px) {
      padding: 2rem;
    }
  `}
`;
export const Flex = styled.div`
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
`;
export const Input = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.secondaryBackgroundOpacity};
    border-radius: 0.8rem;
    padding: 1.5rem;
    flex: 1;
    select {
      -webkit-appearance: none;
      box-shadow: none !important;
      :-webkit-autofill {
        color: #fff !important;
      }
    }
    label {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      span {
        opacity: 0.5;
        font-size: 1.2rem;
      }
      input,
      select {
        color: ${theme.colors.text};
        font-size: 1.4rem;
      }
    }
  `}
`;
export const InputWrapper = styled.div`
  ${({ theme }) => css`
    flex: 1;
    display: flex;
    flex-direction: column;
    p {
      color: red;
      font-size: 1.2rem;
      margin-top: 1rem;
    }
  `}
`;

export const Terms = styled.label`
  ${({ theme }) => css`
    display: flex;
    gap: 1rem;
    align-items: flex-start;
    margin: 1rem 0;
    input {
      margin-top: 0.2rem;
    }
    a {
      color: ${theme.colors.primary};
      font-weight: 500;
    }
    p {
      line-height: 1.4;
    }
  `}
`;
