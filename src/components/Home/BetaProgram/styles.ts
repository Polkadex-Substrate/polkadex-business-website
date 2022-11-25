import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  max-width: 100rem;
  margin: 0 auto;
  @media screen and (max-width: 1000px) {
    padding: 1rem;
  }
`;

export const Content = styled.div`
  ${({ theme }) => css`
    position: relative;
    background: ${theme.colors.primaryBackground};
    border: 1px solid ${theme.colors.secondaryBackground};
    border-radius: 0.5rem;
    display: grid;
    background-image: url('/img/betaProgramBg.svg');
    background-repeat: no-repeat;
    background-size: 125% 100%;
    background-position: -10rem 0;
    margin-top: 2rem;

    @media screen and (max-width: 910px) {
      background-size: cover;
      background-position: left;
    }
    @media screen and (min-width: 750px) {
      grid-template-columns: 0.7fr 1fr;
      margin-top: 8rem;
    }
  `}
`;

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 7rem 6rem;
    h2 {
      font-size: 3rem;
      font-weight: 500;
    }
    a {
      background: ${theme.colors.primary};
      width: fit-content;
      padding: 1rem 3rem;
      border-radius: 0.4rem;
    }
    p {
      line-height: ${theme.font.lineHeight};
    }
  `}
`;

export const Hero = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  right: 0;
  bottom: 0;
  width: 50rem;

  @media screen and (min-width: 910px) {
    width: 65rem;
  }
  @media screen and (max-width: 750px) {
    display: none;
  }
`;
