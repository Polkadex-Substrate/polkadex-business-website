import styled, { css } from 'styled-components';

export const Flex = styled.div`
  display: flex;
  gap: 1rem;
`;
export const Container = styled(Flex)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  h6 {
    font-size: 1.8rem;
    line-height: 1.6;
    font-weight: 550;
  }
  p {
    line-height: 1.6;
    opacity: 0.9;
  }
  img {
    width: 100%;
  }
  div {
    padding: 2.5rem 2.5rem 0 2.5rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
`;
export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: 2rem;
    flex-direction: column;
    background: ${theme.colors.secondaryBackgroundSolid};
    border-radius: 2rem;
  `}
`;
export const Terms = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 2.5rem;
    img {
      max-width: 15rem;
      width: 100%;
    }
    div {
      display: flex;
      flex-direction: column;
      gap: 1.2rem;
      h5 {
        font-size: 1.8rem;
        font-weight: 500;
      }
      p {
        line-height: 1.6;
      }
      a {
        color: ${theme.colors.primary};
        text-decoration: underline;
      }
    }
  `}
`;

export const Actions = styled(Flex)`
  ${({ theme }) => css`
    align-items: center;
    justify-content: space-between;
    button {
      background: ${theme.colors.primaryBackground};
      border-radius: 0.5rem;
      color: ${theme.colors.white};
      padding: 0.8rem 1rem;
      font-size: 1.4rem;
      transition: opacity 0.5s ease;
      cursor: pointer;
      :hover {
        opacity: 0.8;
      }
    }
  `}
`;
export const FlexActions = styled(Flex)`
  ${({ theme }) => css`
    justify-content: space-between;
    align-items: center;
    padding: 0 2.5rem 2.5rem 2.5rem;
  `}
`;
export const Button = styled.button`
  ${({ theme }) => css`
    background: ${theme.colors.primary};
    border-radius: 0.5rem;
    color: ${theme.colors.white};
    padding: 0.8rem 1rem;
    font-size: 1.4rem;
    transition: opacity 0.5s ease;
    cursor: pointer;
    :hover {
      opacity: 0.8;
    }
  `}
`;
export const Label = styled.label`
  ${({ theme }) => css`
    display: flex;
    gap: 0.5rem;
    font-size: 1.4rem;
    input[type='checkbox'] {
      transform: scale(1.1);
      background-color: lightblue;
    }
  `}
`;
