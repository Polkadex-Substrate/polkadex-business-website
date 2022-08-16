import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.primaryBackground};
    min-height: 100vh;
    main {
      padding-top: 2rem;
    }
  `}
`;

export const Terms = styled.div<{ isVisible?: boolean }>`
  ${({ theme, isVisible }) => css`
    transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
    transform: translateY(${isVisible ? '0' : '100%'});
    z-index: 50;
    background: ${`${theme.colors.primaryBackground}F9`};
    width: 100%;
    padding: 3rem 4rem;
    width: 100%;
    margin: 0 auto;
    text-align: left;
    box-shadow: 0px -8px 142px rgba(0, 0, 0, 0.1);
    border-radius: 3rem 3rem 0 0;
  `}
`;

export const TermsContainer = styled.div`
  ${({ theme }) => css`
    h2 {
      font-size: 2.2rem;
      margin-bottom: 1rem;
    }
    max-width: 90rem;
    margin: 0 auto;
    div {
      display: flex;
      label {
        display: block;
        position: relative;
        cursor: pointer;
        user-select: none;
        span:after {
          left: 0.7rem;
          top: 0.3rem;
          width: 0.4rem;
          height: 0.8rem;
          border: solid white;
          border-width: 0 2px 2px 0;
          transform: rotate(45deg);
        }
      }
      input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
        :checked ~ span:after {
          display: block;
        }
        :checked ~ span {
          background-color: ${theme.colors.primary};
        }
      }
      span {
        position: absolute;
        top: 0;
        left: 0;
        height: 2rem;
        width: 2rem;
        border-radius: 0.2rem;
        background-color: ${theme.colors.secondaryBackground};
        :after {
          content: '';
          position: absolute;
          display: none;
        }
      }
      p {
        margin-left: 2.5rem;
      }
    }
    a {
      color: ${theme.colors.primary};
      margin-left: 0.5rem;
    }
  `}
`;
