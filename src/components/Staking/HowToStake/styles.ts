import { PrimaryWrapper as Button } from 'components/Button/styles';
import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 10rem auto;
  text-align: center;
  align-items: center;
  gap: 3rem;
  overflow-x: hidden;
  video {
    max-width: 80rem;
    width: 100%;
  }
`;

export const Title = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
    width: 100%;
    max-width: 100rem;
    line-height: 1;
    margin-bottom: 1rem;
    font-size: 2.5rem;
    text-align: left;
    h2 {
      max-width: 40rem;
    }
    button {
      display: inline-block;
      font-size: 1.5rem;
      font-weight: bold;
      color: ${theme.colors.text};
      cursor: pointer;
      svg {
        vertical-align: middle;
        margin-left: 1rem;
        width: 1.5rem;
        display: inline-block;
      }
    }
  `}
`;
export const Actions = styled.div`
  display: flex;
  gap: 2rem;
`;
export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: 10rem;
    width: 100%;
    overflow-x: hidden;
    padding: 0 2rem;
    .swiper-pagination-bullet {
      width: 1.2rem;
      height: 1.2rem;
    }
    .swiper-pagination-bullet-active {
      background-color: ${theme.colors.primary};
    }
  `}
`;

export const ContentBox = styled.div`
  display: grid;
  align-items: center;
  width: 100%;

  @media screen and (min-width: 710px) {
    grid-template-columns: minmax(35rem, 35rem) auto;
    max-width: 65rem;
    min-width: 65rem;
    gap: 4rem;
  }
`;

export const ContentWrapper = styled.div`
  ${({ theme }) => css`
    a {
      color: ${theme.colors.primary};
      text-decoration: underline;
      font-weight: 500;
    }
  `}
`;
export const ContentCardNumber = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  hr {
    width: 4rem;
    margin: 0 1rem;
  }
  span {
    font-size: 1.6rem;
    font-weight: bold;
    :last-child {
      opacity: 0.5;
    }
  }
`;

export const ContentBannerOverflow = styled.div`
  ${({ theme }) => css`
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-end;
    min-height: 50rem;
    width: 100%;
    background: ${theme.colors.white};
    border-radius: 2.5rem;
    z-index: 2;
    img {
      width: 100%;
    }
    div {
      padding: 3rem;
    }
  `}
`;

export const ContentOverflow = styled.div`
  ${({ theme }) => css`
    position: absolute;
    top: 0;
    left: 0;
    content: '';
    background-color: ${theme.colors.white}10;
    border-radius: 2rem;
    width: 100%;
    height: 100%;
    z-index: 1;
    transform: translateX(3rem) rotate(5deg) scale(0.9);
  `}
`;

export const ContentBanner = styled.div`
  ${({ theme }) => css`
    position: relative;
    max-width: 40rem;
    min-width: 30rem;
  `}
`;

export const ContentCard = styled.div``;
export const ContentCardSteps = styled.div`
  ${({ theme }) => css`
    text-align: left;
    h3 {
      font-size: 2rem;
      font-weight: 500;
      margin-bottom: 1rem;
    }
    p {
      line-height: 1.5;
    }
    ${Button} {
      margin-top: 2rem;
    }
  `}
`;

export const ContentCardVideo = styled.a`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 2rem;
    border-radius: 1.5rem;
    padding: 1.8rem;
    background: ${theme.colors.secondaryBackgroundOpacity};
    margin-top: 4rem;
    transition: transform 0.3s ease-in-out;
    :hover {
      transform: translateY(-0.2rem);
    }
    div {
      text-align: left;
    }
    svg {
      width: 5rem;
    }
    span {
      display: block;
      font-weight: 550;
      margin-bottom: 0.5rem;
    }
  `}
`;

export const OthersWays = styled.div`
  margin-top: 5rem;
  h2 {
    font-size: 3rem;
    max-width: 50rem;
    margin: 0 auto;
  }
`;

export const OthersWaysContent = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  flex-wrap: wrap;
  text-align: left;
  margin-top: 4rem;
  span {
    font-weight: 550;
  }
`;

export const OthersWaysCard = styled.a`
  ${({ theme }) => css`
    border-radius: 1.5rem;
    padding: 3rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background: ${theme.colors.secondaryBackgroundOpacity};
    max-width: 32rem;
    transition: transform 0.3s ease-in-out;
    img,
    div {
      max-width: 4rem;
    }
    :hover {
      transform: translateY(-0.5rem);
    }
  `}
`;
