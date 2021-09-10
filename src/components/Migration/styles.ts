import { Wrapper as Icon } from 'components/Icon/styles';
import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  background-image: url('/img/migrationBg.svg');
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 110vh;
  position: relative;
  margin: -10rem auto 0 auto;
  ${({ theme }) => css`
    max-width: ${theme.grid.container};
  `}
`;

export const Container = styled.div`
  display: grid;
  grid-gap: 1rem;
  align-items: center;
  padding-top: 10rem;
  @media screen and (min-width: 600px) and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (min-width: 1000px) {
    grid-template-columns: 1fr 1.8fr;
  }
`;

export const Box = styled.div`
  ${({ theme }) => css`
    :first-child {
      span {
        padding: 0.2rem 0.5rem;
        border-radius: 0.5rem;
        background-color: ${theme.colors.primary};
        font-weight: bold;
        font-size: 1.6rem;
        display: block;
        margin-bottom: 0.5rem;
        width: fit-content;
      }
      h1 {
        font-size: 5.5rem;
        line-height: 1.1;
      }
      strong {
        color: ${theme.colors.primary};
      }
      @media screen and (max-width: 1200px) {
        padding: 2rem;
      }
    }
    :last-child {
      display: flex;
      align-items: center;
      & img {
        width: 100%;
      }
    }
  `}
`;

export const MigrationConvert = styled.div`
  ${({ theme }) => css`
    max-width: ${theme.grid.container};
    margin: auto auto 5rem auto;
    position: relative;
    @media screen and (max-width: 600px) {
      margin-top: -15rem;
    }
    @media screen and (min-width: 600px) {
      margin-top: -38rem;
    }
    @media screen and (min-width: 1200px) {
      margin-top: -28rem;
    }
  `}
`;
export const Title = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  h2 {
    font-size: 2.3rem;
    font-weight: 500;
  }
  ${Icon} {
    margin: 0 auto;
  }
`;
export const CardWrapper = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.secondaryBackground};
    padding: 2rem;
    border-radius: 1rem;
    max-width: 70rem;
    margin: 0 auto;
    margin-bottom: 3rem;

    button {
      background: ${theme.colors.primary};
      color: ${theme.colors.white};
      padding: 1rem;
      border-radius: 1rem;
      margin-bottom: 2rem;
      font-weight: 550;
      cursor: pointer;
    }
  `}
`;
export const CardContainer = styled.div`
  h4 {
    font-size: 1.7rem;
    font-weight: 600;
    line-height: 1.8;
  }
  p {
    margin-bottom: 2rem;
  }
`;
export const Input = styled.div`
  label {
    display: block;
  }
`;

export const ImageContainer = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.secondaryBackground};
    padding: 1rem;
    border-radius: 1rem;
    width: 5rem;
    height: 5rem;
    margin-right: 1rem;
    img {
      width: 100%;
      max-height: 3rem;
    }
  `}
`;
export const Card = styled.div`
  flex: 1;
  input {
    color: white;
    font-weight: 600;
    font-size: 1.4rem;
    width: 100%;
  }
`;
export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;

export const InputBox = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.secondaryBackground};
    padding: 1rem;
    border-radius: 1rem;
    display: flex;
    align-items: center;
  `}
  margin-top: 1rem;
`;

export const MigrationActions = styled.div`
  ${({ theme }) => css`
    text-align: center;
    margin-top: 2rem;
    button {
      background: ${theme.colors.primary};
      color: ${theme.colors.white};
      padding: 1rem;
      border-radius: 1rem;
      margin-bottom: 2rem;
      font-weight: 550;
      cursor: pointer;

      &:disabled {
        cursor: inherit;
        background: gray;
      }
    }
    ul {
      margin-bottom: 20px;
      li {
        a:hover {
          text-decoration: underline;
        }
      }
    }
    p {
      max-width: 45rem;
      margin: 0 auto;
    }
  `}
`;
