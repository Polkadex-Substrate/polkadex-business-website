import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  padding: 5rem 0;
  max-width: 100rem;
  margin: 0 auto;

  @media screen and (max-width: 950px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  p {
    font-size: 1.5rem;
    line-height: 1.5;
  }
`;

export const Title = styled.div`
  margin-bottom: 5rem;
  text-align: center;

  h2 {
    font-weight: 550;
    font-size: 3rem;
    @media screen and (min-width: 660px) {
      font-size: 4rem;
    }
  }
  div {
    :first-child {
      max-width: 60rem;
      margin: 0 auto;
      p {
        margin-top: 1rem;
      }
    }
    :last-child {
      margin-top: 2.5rem;
      p {
        font-size: 1.6rem;
      }
      svg {
        margin-top: 2rem;
        max-width: 3rem;
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
    }
  }
`;
export const Content = styled.div`
  h4 {
    font-size: 1.6rem;
    padding-top: 2rem;
    padding-left: 2rem;
  }
`;

export const Row = styled.div`
  small {
    padding-left: 2rem;
    display: block;
    margin-top: 1.5rem;
    font-size: 1.3rem;
  }
`;

export const Column = styled.div``;

export const ColumnBox = styled.div`
  display: grid;
  grid-gap: 2rem;
  margin-top: 1rem;

  @media screen and (min-width: 450px) and (max-width: 680px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (min-width: 680px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const ColumnContent = styled.div``;

export const Rewards = styled.div`
  span {
    font-size: 1.8rem;
    display: block;
    font-weight: bold;
  }

  ul {
    list-style: none;
  }

  li {
    :not(:last-child) {
      margin-bottom: 1rem;
    }
  }
`;

export const FlipFront = styled.div<{ disabled?: boolean }>`
  ${({ theme, disabled }) => css`
    cursor: ${disabled ? 'not-allowed' : 'pointer'};
    pointer-events: ${disabled ? 'none' : 'inherit'};
    opacity: ${disabled ? 0.5 : 1};
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background: ${theme.colors.secondaryBackgroundOpacity};
    padding: 4rem 2rem;
    border-radius: 1rem;
    transition: all 0.3s ease-in-out;
    padding: 6rem 1rem;
  `}
`;

export const ColumnCard = styled.div`
  text-align: center;
  width: 100%;

  img {
    margin: 2rem 0;
    max-height: 6rem;
  }

  @media screen and (min-width: 960px) {
    min-width: 22.5rem;
    :not(:last-child) {
      margin-right: 1.5rem;
    }
  }

  @media screen and (max-width: 960px) {
    :not(:last-child) {
      margin-right: 2rem;
    }
  }

  @media screen and (max-width: 740px) {
    :not(:last-child) {
      margin-bottom: 2rem;
    }
  }
`;
export const ColumnHeader = styled.div`
  display: flex;
  justify-content: space-between;

  div:last-child {
    display: flex;
    align-items: center;
    span {
      margin-left: 0.5rem;
    }
  }
`;

export const RowFlat = styled.div`
  margin-top: 1.5rem;
  h4 {
    font-weight: 500;
    font-size: 2rem;
  }
`;

export const RowFlatWrapper = styled.div`
  display: grid;
  grid-gap: 1.5rem;
  margin-top: 1rem;
  @media screen and (min-width: 720px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

export const RowExplorerWrapper = styled.div`
  display: grid;
  grid-gap: 1.5rem;
  margin-top: 1rem;
  @media screen and (min-width: 720px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const HorizontalCard = styled.a<{
  isActive?: boolean;
  hasAccepted?: boolean;
}>`
  ${({ theme, isActive }) => css`
    display: flex;
    background: ${theme.colors.secondaryBackgroundOpacity};
    padding: 1.5rem;
    border-radius: 1rem;
    opacity: ${isActive ? 1 : 0.3};
    transition: transform 0.3s ease-in-out;
    transform: translateY(0);
    cursor: pointer;
    :hover {
      transform: translateY(-0.2rem);
      box-shadow: ${theme.shadow.secondary};
    }
  `}
`;
export const HorizontalCardContent = styled.div`
  display: flex;
  align-items: center;

  gap: 2rem;
  img {
    max-width: 4rem;
    max-height: 4rem;
    margin-right: 1rem;
  }

  span {
    font-weight: 500;
  }

  p {
    opacity: 0.5;
  }
`;

export const HorizontalCardVideo = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  span {
    margin-left: 0.5rem;
  }
`;

export const Terms = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    background: ${theme.colors.secondaryBackgroundSolid};
    border-radius: 1rem;
    padding: 2rem;
    max-width: 40rem;
  `}
`;

export const TermsTitle = styled.div`
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
  }
  h3 {
    font-size: 2rem;
    font-weight: 500;
  }

  p {
    line-height: 1.6;
  }
  ul {
    margin-top: 0.5rem;
    margin-left: 2rem;
    li::marker {
      color: cornflowerblue;
    }
    a {
      display: block;
      padding: 1rem;
      width: 100%;
      color: cornflowerblue;
    }
  }
`;
export const TermsActions = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 1rem;
    button {
      padding: 1rem;
      border-radius: 0.3rem;
      color: ${theme.colors.text};
      transition: opacity 0.5 ease;
      font-weight: 550;
      cursor: pointer;

      :hover {
        opacity: 0.8;
      }
      :first-child {
        background-color: ${theme.colors.secondaryBackground};
      }
      :last-child {
        background-color: ${theme.colors.primary};
      }
    }
  `}
`;
