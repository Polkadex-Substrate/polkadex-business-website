import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  max-width: 140rem;

  margin: 6rem auto;
`;

export const TitleContainer = styled.div`
  ${({ theme }) => css`
    max-width: ${theme.grid.container};
  `}
  @media screen and (min-width: 1000px) {
    margin-bottom: 4rem;
  }

  margin: 0 auto;

  @media screen and (max-width: 1200px) {
    padding: 2rem;
  }
`;
export const ContentContainer = styled.div`
  ${({ theme }) => css`
    max-width: ${theme.grid.container};
  `}

  @media screen and (min-width: 1000px) {
    min-height: 135rem;
    background-image: url('/img/polkadexIcon.svg');
    background-repeat: no-repeat;
    background-size: auto 100%;
  }

  @media screen and (max-width: 1000px) {
    padding-left: 2rem;
    padding-right: 2rem;
    display: flex;
    flex-direction: column-reverse;
  }

  position: relative;
`;
export const Box = styled.div``;
export const InfoContainer = styled.div`
  @media screen and (min-width: 1000px) {
    position: absolute;
    top: 40%;
    left: 15%;
  }
  @media screen and (max-width: 1000px) {
    margin-bottom: 4rem;
  }
  & img {
    max-width: 6rem;
    margin-bottom: 3rem;
  }

  & div {
    :nth-child(2) {
      margin-bottom: 3rem;
    }

    & span {
      font-size: 1.3rem;
      opacity: 0.7;
    }

    & p {
      font-size: 2.2rem;
      font-weight: 700;
    }
  }
`;
