import styled from 'styled-components';

type TProps = {
  isViewed: boolean;
};

export const Wrapper = styled.div`
  position: relative;
  padding: 0 70px;
  padding-bottom: 100px;

  @media screen and (max-width: 700px) {
    padding: 0 30px;
  }
`;

export const ImageContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 10%;
  height: auto;

  @media screen and (max-width: 1200px) {
    display: none;
  }
  img {
    width: 100%;
  }
`;

export const TitleContainer = styled.div`
  position: relative;
  max-width: 55%;
  margin-bottom: 36px;

  @media screen and (max-width: 1400px) {
    max-width: 75%;
  }

  @media screen and (max-width: 1225px) {
    max-width: 100%;
  }
`;

export const Title = styled.h5<TProps>`
  font-weight: 500;
  line-height: 1.2;
  font-size: 5rem;
  padding-bottom: 2.5rem;

  opacity: ${({ isViewed }) => +isViewed};
  transform: translateY(${({ isViewed }) => (isViewed ? 0 : 20)}%);

  transition: 500ms opacity, 500ms transform;

  @media screen and (max-width: 875px) {
    text-align: center;
    font-size: 4rem;
  }
`;

export const TitleDescription = styled.p<TProps>`
  display: block;
  max-width: 30vw;
  font-size: 1.6rem;
  color: #ffffff;
  line-height: 1.5;
  opacity: ${({ isViewed }) => +isViewed};
  ${({ isViewed }) => (isViewed ? 'inherit' : 'hidden')};
  transform: translateY(${({ isViewed }) => (isViewed ? 0 : 20)}%);

  transition: 500ms opacity, 500ms transform;

  @media screen and (max-width: 1363px) {
    max-width: 75%;
  }

  @media screen and (max-width: 1225px) {
    max-width: 100%;
  }

  @media screen and (max-width: 700px) {
    text-align: center;
  }
`;

export const NoRiskContainer = styled.div`
  margin-top: 115px;
  margin-left: auto;
  max-width: 33%;

  @media screen and (max-width: 1331px) {
    max-width: 50%;
  }

  @media screen and (max-width: 1000px) {
    max-width: 100%;
    margin-top: 70px;
  }
`;

export const NoRiskImageContainer = styled.div<TProps>`
  position: absolute;
  left: 0;
  max-width: 75%;
  z-index: -1;

  opacity: ${({ isViewed }) => +isViewed};
  transform: translateX(${({ isViewed }) => (isViewed ? 0 : -100)}%);

  transition: 500ms opacity, 500ms transform;

  & > img {
    width: 90%;
    height: auto;
    margin-top: -110px;
    margin-left: -1rem;
  }

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

export const NoRiscTitle = styled.h5`
  position: relative;
  font-weight: 500;
  font-size: 3.4rem;
  line-height: 1.3;
  margin-top: 36px;
  margin-left: auto;

  &::before {
    content: '';
    position: absolute;
    display: block;
    height: 1px;
    background-color: #e6007a;
    top: -42px;
    max-width: 2700px;
    width: 100%;
  }

  &::after {
    content: '';
    position: absolute;
    display: block;
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background-color: #e6007a;
    top: -46px;
  }
`;

export const NoRiscDescription = styled.p`
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 1.5;
  margin-top: 28px;
  margin-left: auto;
  margin-bottom: 2rem;

  @media screen and (max-width: 1000px) {
    margin-top: 18px;
    margin-bottom: 40px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 1000px) {
    justify-content: center;
  }
`;

export const Item = styled.div<TProps>`
  opacity: ${({ isViewed }) => +isViewed};
  transform: translateX(${({ isViewed }) => (isViewed ? 0 : 100)}%);

  transition: 500ms opacity, 500ms transform;
`;
