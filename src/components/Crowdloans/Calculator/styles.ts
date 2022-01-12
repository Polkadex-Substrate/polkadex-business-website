import { Wrapper as Icon } from 'components/Icon/styles';
import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  ${({ theme }) => css`
    background: linear-gradient(
      180deg,
      #1c1c26 80.72%,
      rgba(255, 255, 255, 0) 80.73%
    );
    color: ${theme.colors.inverse};
  `}
`;

export const Container = styled.div`
  padding: 1rem;
  padding: 5rem 0;
  max-width: 95rem;
  margin: 0 auto;
  p {
    line-height: 1.5;
  }
`;

export const Title = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  margin-bottom: 6rem;
  h2 {
    font-size: 3.5rem;
  }
  p {
    font-size: 1.5rem;
  }
`;

export const Calculator = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.inverse};
    border-radius: 1.5rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    span {
      display: block;
      margin-bottom: 1rem;
    }
    input {
      font-size: 2.5rem;
      font-weight: bold;
    }
  `}
`;

export const Amount = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.text};
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
  `}
`;

export const AmountFlex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const AmountToken = styled.div`
  ${({ theme }) => css`
    padding: 0.5rem 0.8rem;
    border: 1px solid ${theme.colors.secondaryBackground};
    border-radius: 10rem;
    vertical-align: middle;
    font-weight: 500;
    font-size: 1.4rem;
    ${Icon} {
      display: inline-block;
      margin-right: 0.5rem;
      border-radius: 50%;
    }
  `}
`;

export const Reward = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1.5rem;
    background: ${theme.colors.primary};
    color: ${theme.colors.inverse};
    border-radius: 1.5rem;
    input {
      color: ${theme.colors.inverse};
    }
    p {
      font-size: 2.5rem;
    }
    small {
      vertical-align: middle;
      font-size: 1.2rem;
    }
  `}
`;

export const Message = styled.p`
  text-align: center;
  font-size: 1.2rem;
  margin: 1.5rem auto 0 auto;
  max-width: 80rem;
`;

export const Actions = styled.div`
  ${({ theme }) => css`
    margin: 6rem auto 3rem auto;
    text-align: center;
    ${Icon} {
      margin: 1rem auto 0 auto;
      background: none;
      opacity: 0.6;
      svg {
        fill: ${theme.colors.inverse};
      }
    }
  `}
`;

export const Presentation = styled.div`
  text-align: center;
  h2 {
    font-size: 3.5rem;
  }
  p {
    margin: 0.5rem 0 4rem 0;
    font-size: 1.5rem;
  }
`;
