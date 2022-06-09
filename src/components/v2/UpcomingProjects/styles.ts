import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  ${({ theme }) => css`
    max-width: ${theme.grid.container};
    margin: 2rem auto 10rem auto;
    @media screen and (max-width: 1200px) {
      margin: 4rem 2rem;
    }
  `}
`;

export const Title = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    h2 {
      line-height: 1.2;
      font-size: 4rem;
    }
    a {
      border: 1px solid ${theme.colors.text}33;
      padding: 1rem;
      border-radius: 0.8rem;
    }
  `}
`;
export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    margin-top: 4rem;
    button {
      margin-top: 4rem;
      align-self: center;
      width: fit-content;
      color: ${theme.colors.text};
      border: 1px solid ${theme.colors.text}33;
      padding: 1rem;
      border-radius: 0.8rem;
    }
  `}
`;

export const Projects = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 5rem;
`;

export const Card = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.tertiaryBackgroundOpacity};
    border-radius: 2rem;
  `}
`;

export const CardHeader = styled.div`
  ${({ theme }) => css`
    position: relative;
    span {
      position: absolute;
      top: 2rem;
      right: 2rem;
      background: ${theme.colors.secondary};
      padding: 0.3rem 0.8rem;
      border-radius: 2rem;
    }
    img {
      width: 100%;
      border-radius: 2rem 2rem 0 0;
    }
  `}
`;
export const CardContent = styled.div`
  position: relative;
  padding: 1.5rem;
  margin-top: -2.7rem;
`;
export const CardContentHeader = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: flex-end;
    margin-bottom: 1.5rem;
    span {
      font-size: 1.6rem;
      font-weight: 500;
    }
    small {
      display: block;
      opacity: 0.7;
    }
    div {
      :first-child {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 10rem;
        width: 6rem;
        height: 6rem;
        padding: 1.5rem;
        background: ${theme.colors.white};
        margin-right: 1rem;
        margin-bottom: -0.3rem;
        img {
          width: 100%;
        }
      }
    }
  `}
`;

export const CardContentFooter = styled.div`
  ${({ theme }) => css`
    margin-top: 2rem;
    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      :not(:last-child) {
        margin-bottom: 1rem;
      }
    }
  `}
`;
export const CardFooter = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.5rem;
    border-top: 1px solid ${theme.colors.white}11;
  `}
`;
export const CardVotes = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;

    div {
      :first-child {
        display: flex;
        align-items: center;
        justify-content: center;
        background: ${theme.colors.secondaryBackground};
        width: 4rem;
        height: 4rem;
        border-radius: 10rem;
        margin-right: 0.5rem;
      }
      small {
        opacity: 0.7;
      }
    }
  `}
`;

export const CardInfo = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 1rem;
    span {
      background: ${theme.colors.secondaryBackground};
      padding: 0.4rem;
      border-radius: 0.5rem;
    }
    div {
      background: ${theme.colors.white};
      padding: 0.4rem;
      border-radius: 0.5rem;
      width: 2.4rem;
      height: 2.4rem;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        width: 100%;
      }
    }
  `}
`;
