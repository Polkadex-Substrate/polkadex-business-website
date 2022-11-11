import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  position: relative;
  background: linear-gradient(
    180deg,
    rgba(230, 0, 122, 0.3) 0%,
    rgba(230, 0, 122, 0) 100%
  );
  padding: 5rem 0;
  @media screen and (min-width: 870px) {
    margin-top: 5rem;
  }
`;

export const Container = styled.div`
  max-width: 100rem;
  margin: 0 auto;
  padding-top: 5rem;
  @media screen and (max-width: 1000px) {
    padding: 2rem;
  }
`;
export const About = styled.div`
  position: relative;
  img {
    width: 100%;
  }
`;
export const AboutImage = styled.div`
  position: absolute;
  max-width: 70rem;
  display: block;
  top: -25rem;
  right: -16rem;
  @media screen and (max-width: 950px) {
    top: -16rem;
    right: 15rem;
    max-width: 40rem;
  }
  @media screen and (max-width: 570px) {
    display: none;
  }
`;

export const AboutWrapper = styled.div`
  display: grid;
  gap: 2rem;
  padding-top: 25rem;

  @media screen and (min-width: 950px) {
    grid-template-columns: 1fr 1.4fr;
    padding-top: 0;
  }
  @media screen and (max-width: 570px) {
    padding-top: 0;
  }
`;

export const Title = styled.div`
  h2 {
    font-size: 3.5rem;
    font-weight: 550;
    line-height: 1.2;
    margin-bottom: 2rem;
  }
  p {
    line-height: 1.6;
    font-size: 1.6rem;
  }
`;

export const Benefits = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background: linear-gradient(
    180deg,
    rgba(230, 0, 122, 0.3) 0%,
    rgba(230, 0, 122, 0) 100%
  );
  margin-top: 5rem;
  padding: 3rem;
  border-radius: 1.5rem;
  @media screen and (min-width: 540px) {
    padding: 5rem;
  }
  h3 {
    font-size: 2.3rem;
    font-weight: 500;
    max-width: 25rem;
  }
`;
export const Content = styled.div`
  margin-top: 3rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
  row-gap: 4rem;
  column-gap: 6rem;
`;
export const Actions = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    align-self: center;
    margin-top: 6rem;
    a {
      :first-child {
        div {
          margin-left: 0.5rem;
          vertical-align: middle;
          display: inline-block;
          width: 1rem;
        }
      }
      :last-child {
        font-weight: 500;
        padding: 1rem 2rem;
        border-radius: 0.8rem;
        background: ${theme.colors.primary};
        width: fit-content;
      }
    }
  `}
`;
export const Card = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    div {
      display: flex;
      align-items: center;
      justify-content: center;
      background: ${theme.colors.green};
      width: 4rem;
      height: 4rem;
      padding: 1rem;
      border-radius: 0.8rem;
    }
    p {
      line-height: 1.5;
    }
  `}
`;
