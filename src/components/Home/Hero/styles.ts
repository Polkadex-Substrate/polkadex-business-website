import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  margin-top: 2rem;
`;
export const Main = styled.div`
  max-width: 110rem;
  margin: 0 auto;
  background: linear-gradient(
    179.95deg,
    rgba(139, 161, 190, 0.05) 0.04%,
    rgba(139, 161, 190, 0) 63.37%
  );

  border-radius: 2rem;
`;
export const Content = styled.div`
  max-width: 100rem;
  margin: 0 auto;
  display: grid;
  align-items: center;
  @media screen and (min-width: 890px) {
    grid-template-columns: 1fr 2fr;
    padding: 6rem 0 3rem 0;
  }
  @media screen and (max-width: 1000px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

export const HeroImage = styled.div`
  position: relative;
  @media screen and (max-width: 890px) {
    grid-row-start: 1;
  }
`;
export const HeroIllustration = styled.div`
  svg {
    @media screen and (min-width: 1210px) {
      transform: scale(1.2) translateX(3rem);
    }
  }
`;

export const HeroImageAside = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  gap: 1rem;
  @media screen and (max-width: 1024px) {
    transform: scale(0.8);
    right: -3rem;
  }
  @media screen and (max-width: 740px) {
    transform: scale(0.7);
    right: -5rem;
    bottom: 0;
  }
  @media screen and (max-width: 540px) {
    bottom: -5rem;
  }

  svg {
    max-width: 13rem;
  }
  span {
    display: block;
    font-family: 'Caveat';
    font-size: 2.5rem;
    margin-right: 1rem;
    white-space: nowrap;
  }
`;

export const Container = styled.div`
  ${({ theme }) => css`
    @media screen and (max-width: 895px) {
      margin-top: 6rem;
    }
    p {
      line-height: ${theme.font.lineHeight.normal};
    }
    h1 {
      font-size: 5rem;
      font-weight: 500;
      margin-bottom: 2rem;
      line-height: ${theme.font.lineHeight.small};
      @media screen and (max-width: 700px) {
        font-size: 3.5rem;
      }
      strong {
        display: block;
        font-weight: 500;
        color: ${theme.colors.primary};
      }
    }
  `}
`;

export const Actions = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 1rem;
    margin: 2rem 0;
    a {
      padding: 1rem 3rem;
      border-radius: 0.4rem;
      white-space: nowrap;
      :first-child {
        color: ${theme.colors.white};
        background: ${theme.colors.primary};
        transition: background 0.2s ease-in-out;
      }
      :last-child {
        color: ${theme.colors.blue};
        transition: background 0.2s ease-in-out;
        :hover {
          background: ${theme.colors.blue}19;
        }
        svg {
          display: inline-block;
          width: 1rem;
          vertical-align: middle;
        }
      }
    }
  `}
`;
