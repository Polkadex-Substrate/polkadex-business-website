import styled, { css } from 'styled-components';

export const Alert = styled.div``;
export const Official = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    padding: 1.5rem;
    background: ${theme.colors.tertiaryBackgroundOpacity};
    p {
      font-size: 1.6rem;
      font-weight: 450;
    }
    img {
      max-height: 3rem;
    }
  `}
`;
export const Message = styled.div`
  ${({ theme }) => css`
    padding: 2rem;
    background: ${theme.colors.tertiaryBackgroundOpacity};
    border-top: 1px solid ${theme.colors.secondaryBackground};
    border-bottom: 1px solid ${theme.colors.secondaryBackground};
  `}
`;
export const MessageWrapper = styled.div`
  max-width: 90rem;
  margin: 0 auto;
  display: flex;
  gap: 2rem;
  align-items: center;
  img {
    width: 4rem;
  }
`;

export const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  h3 {
    font-weight: 500;
  }
  p {
    line-height: 1.5;
  }
  span {
    text-decoration: underline;
    font-weight: 500;
  }
`;
