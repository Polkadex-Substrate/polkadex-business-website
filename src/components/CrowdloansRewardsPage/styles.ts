import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    max-width: 100rem;
    margin: 7rem auto 0 auto;
    padding-top: 4rem;
    @media screen and (max-width: 1000px) {
      padding-left: 1rem;
      padding-right: 1rem;
    }
  `}
`;
export const InputWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;

    border-bottom: 2px solid ${theme.colors.secondaryBackground};
  `}
`;
export const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Input = styled.div`
  width: 100%;
  input {
    width: 97%;
    font-size: x-large;
    padding: 1rem 2rem;
    color: white;
  }
`;
export const Paste = styled(Center)`
  ${({ theme }) => css`
    border-radius: ${theme.border.radius.small};
    background-color: ${theme.colors.secondaryBackgroundOpacity};
    width: 11rem;
    height: 4rem;
    cursor: pointer;
    flex-shrink: 0;
  `}
`;
export const InfoWrapper = styled(Center)`
  ${({ theme }) => css`
    margin: 7rem;
    flex-direction: column;
    h2 {
      font-weight: normal;
      font-size: xx-large;
    }
    p {
      padding: 2rem;
      width: 70%;
      text-align: center;
      font-size: large;
      color: #bdbdbd;
    }
  `}
`;
