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
      strong {
        color: ${theme.colors.primary};
      }
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
export const ContentOverlay = styled.div``;

export const Round = styled.div`
  ${({ theme }) => css`
    position: absolute;
    top: -50%;
    transform: translate(0, 50%);
    z-index: 1;
    width: 20rem;
    height: 100%;
    border-radius: 0 100rem 100rem 0;
    background: ${theme.colors.primary}99;
    margin-left: -12rem;
  `}
`;

export const ContentVideoWrapper = styled.div`
  position: relative;
  z-index: 2;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: saturate(180%) blur(20px);
  border-radius: 0 3rem 3rem 0;
  height: 100%;
  min-width: 28rem;
`;

export const ContentVideoBox = styled.a`
  display: block;
  max-width: 30rem;
  text-align: left;
  padding: 2.5rem;
  h4 {
    font-size: 1.8rem;
    margin-bottom: 2rem;
  }
  p {
    line-height: 1.6;
  }
  div {
    margin-top: 2rem;
    position: relative;
    svg {
      max-width: 5rem;
      position: absolute;
      left: 50%;
      transform: translate(-50%, 0);
    }
    img {
      width: 100%;
    }
  }
`;

export const ContentVideo = styled.div`
  position: relative;
`;

export const Actions = styled.div`
  display: flex;
  gap: 2rem;
`;
export const ActionButton = styled.button`
  border-radius: 10rem;
  padding: 1rem;
  vertical-align: middle;
  transition: transform 0.1s ease-in;
  cursor: pointer;
  :hover {
    transform: translateY(0.2rem);
  }
  svg {
    width: 1rem;
  }
`;

export const PrevButton = styled(ActionButton)`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    svg {
      fill: ${theme.colors.black};
      margin-right: 0.5rem;
    }
  `}
`;
export const NextButton = styled(ActionButton)`
  ${({ theme }) => css`
    background: ${theme.colors.primary};
    color: white;
    svg {
      margin-left: 0.5rem;
    }
  `}
`;

export const ContentFlex = styled.div`
  ${({ theme }) => css`
    display: flex;
    overflow-x: hidden;

    .swiper-pagination-bullet {
      width: 1.2rem;
      height: 1.2rem;
      background: ${theme.colors.text};
      display: none;
    }
    .swiper-pagination-bullet-active {
      background-color: ${theme.colors.primary};
    }
    .swiper-button-prev,
    .swiper-button-next {
      border-radius: 2rem;
      width: 4rem;
      height: 4rem;
      padding: 1rem;
      background: ${theme.colors.primary};
      color: ${theme.colors.text};
      font-size: 1rem;
      ::after {
        font-size: 2rem;
        font-weight: bold;
      }
    }
  `}
`;
export const SwipperCardActions = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 3rem;
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: 3rem;
    width: 100%;
    max-width: 100rem;
    margin: 0 auto;
    overflow-x: hidden;
    @media screen and (max-width: 950px) {
      flex-direction: column;
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

export const SwipperCard = styled.div`
  ${({ theme }) => css`
    display: grid;
    align-items: center;
    background: ${theme.colors.secondaryBackgroundOpacity};
    border-radius: 2rem;
    @media screen and (min-width: 760px) {
      grid-template-columns: 0.8fr 1fr;
    }
    img {
      width: 100%;
      max-width: 40rem;
      align-self: flex-end;
      justify-self: flex-end;
    }
  `}
`;
export const SwipperCardWrapper = styled.div`
  padding: 3rem;
  text-align: left;
  h3 {
    font-size: 2.2rem;
    margin-bottom: 1.5rem;
    font-weight: 500;
  }
  p {
    line-height: 1.6;
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
  ${({ theme }) => css`
    margin-top: 5rem;
    h2 {
      font-size: 3rem;
      max-width: 50rem;
      margin: 0 auto;
      strong {
        color: ${theme.colors.primary};
      }
    }
  `}
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

export const OthersWaysCard = styled.div`
  ${({ theme }) => css`
    border-radius: 1.5rem;
    padding: 3rem;
    background: ${theme.colors.secondaryBackgroundOpacity};
    transition: transform 0.3s ease-in-out, background-color 0.3s ease-in-out;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    @media screen and (min-width: 1000px) {
      max-width: 32rem;
    }
    :hover {
      transform: translateY(-0.5rem);
      background: ${theme.colors.primary};
    }
    p {
      margin-bottom: 1rem;
    }
    a {
      text-decoration: underline;
    }
  `}
`;
export const OthersWaysCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  img,
  div {
    max-width: 4rem;
  }
  margin-bottom: 1.5rem;
`;
