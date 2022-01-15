import { Wrapper as Icon } from 'components/Icon/styles';
import { Wrapper as Input } from 'components/Input/styles';
import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  background: linear-gradient(
    180deg,
    #1c1c26 80.72%,
    rgba(255, 255, 255, 0) 80.73%
  );
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
  ${({ theme }) => css`
    display: grid;
    grid-gap: 1rem;
    margin-bottom: 6rem;
    h2,
    p {
      color: ${theme.colors.white};
    }
    @media screen and (max-width: 950px) {
      padding-left: 1rem;
      padding-right: 1rem;
    }

    @media screen and (min-width: 720px) {
      grid-template-columns: 1fr 1fr;
    }

    h2 {
      font-size: 3.5rem;
    }

    p {
      font-size: 1.5rem;
    }
  `}
`;
export const CalculatorActionsContainer = styled.div`
  ${({ theme }) => css`
    h4 {
      margin-bottom: 1rem;
      color: ${theme.colors.white};
    }
  `}
  @media screen and (max-width: 620px) {
    :not(:last-child) {
      margin-bottom: 2rem;
    }
  }
`;

export const CalculatorWrapper = styled.div`
  @media screen and (max-width: 950px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;
export const CalculatorActions = styled.div`
  ${({ theme }) => css`
    padding: 2rem;
    display: flex;
    justify-content: space-between;
    color: ${theme.colors.inverse};
    flex-direction: column;
    @media screen and (min-width: 620px) {
      flex-direction: row;
      align-items: center;
    }
  `}
`;
export const CalculatorActionsWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    @media screen and (min-width: 460px) {
      flex-direction: row;
      align-items: center;
    }

    ${Input} {
      color: ${theme.colors.white};

      :not(:last-child) {
        margin-right: 1rem;
        @media screen and (max-width: 460px) {
          margin-bottom: 1rem;
        }
      }
    }
  `}
`;

export const Calculator = styled.div`
  ${({ theme }) => css`
    border-radius: 2rem;
    background: ${theme.colors.secondaryBackground};
  `}
`;

export const CalculatorContainer = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.inverse};
    border-radius: 1.5rem;
    display: grid;
    @media screen and (min-width: 760px) {
      grid-template-columns: 1fr 1fr;
    }

    input {
      font-size: 2.5rem;
      font-weight: bold;
      width: 100%;
    }
  `}
`;
export const Heading = styled.div`
  span {
    display: block;
    margin-bottom: 1rem;
  }
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
export const Percent = styled.div`
  span {
    margin-right: 1rem;
  }
`;

export const AmountFlex = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    input {
      color: ${theme.colors.text};
    }
    @media screen and (max-width: 420px) {
      input {
        width: 100%;
      }
    }
  `}
`;

export const AmountToken = styled.div`
  ${({ theme }) => css`
    padding: 0.5rem 0.8rem;
    border: 1px solid ${theme.colors.secondaryBackground};
    border-radius: 10rem;
    font-weight: 500;
    font-size: 1.4rem;
    display: flex;
    align-items: center;
    ${Icon} {
      display: inline-block;
      margin-right: 0.5rem;
      border-radius: 10rem;
      background: ${theme.colors.text};
      width: 3rem;
      height: 3rem;
      svg {
        fill: ${theme.colors.primary} !important;
      }
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
    color: ${theme.colors.white};
    border-radius: 1.5rem;

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
  ${({ theme }) => css`
    text-align: center;
    font-size: 1.2rem;
    margin: 1.5rem auto 0 auto;
    max-width: 80rem;
    color: ${theme.colors.white};
  `}
`;

export const Actions = styled.div`
  ${({ theme }) => css`
    margin: 6rem auto 3rem auto;
    text-align: center;
    color: ${theme.colors.white};

    ${Icon} {
      margin: 1rem auto 0 auto;
      background: none;
      opacity: 0.6;
      svg {
        fill: ${theme.colors.white};
      }
      animation: goBottom 1s infinite;

      @keyframes goBottom {
        0% {
          transform: translateY(0);
        }

        50% {
          transform: translateY(1rem);
        }

        100% {
          transform: translateY(0);
        }
      }
    }
  `}
`;

export const Presentation = styled.div`
  ${({ theme }) => css`
    text-align: center;
    color: ${theme.colors.white};
    h2 {
      font-size: 3.5rem;
    }
    p {
      margin: 0.5rem 0 4rem 0;
      font-size: 1.5rem;
    }
    iframe {
      width: 100%;
      @media screen and (max-width: 600px) {
        max-height: 30rem;
      }
    }
  `}
`;
