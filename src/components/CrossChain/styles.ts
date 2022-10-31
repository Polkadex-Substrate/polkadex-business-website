import styled from 'styled-components';

type TProps = {
  isViewed: boolean;
};

export const Content = styled.div<TProps>`
  opacity: ${({ isViewed }) => +isViewed};
  transition: 500ms opacity;
`;

export const Wrapper = styled.div`
  position: relative;
  max-width: 1405px;
  width: 85%;
  margin: 0 auto 120px;

  @media screen and (max-width: 1060px) {
    margin: 0 auto 20px;
  }
`;

export const UpperComponentWrapper = styled.div`
  display: flex;
`;

export const UpperTextComponent = styled.div`
  margin: 64px auto 114px 64px;
  width: 40%;
  z-index: 1;

  @media screen and (max-width: 1060px) {
    width: 80%;
    margin: 60px;

    margin-bottom: 0;
  }
`;

export const Title = styled.h5<TProps>`
  font-weight: 550;
  font-size: 3rem;
  margin-bottom: 30px;

  opacity: ${({ isViewed }) => +isViewed};
  transform: translateY(${({ isViewed }) => (isViewed ? 0 : -40)}%);
  transition: 500ms opacity, 500ms transform;

  @media screen and (max-width: 576px) {
    font-size: 3.5rem;
    text-align: center;
  }
`;

export const Description = styled.p<TProps>`
  font-size: 1.6rem;
  line-height: 1.8;
  margin-bottom: 60px;

  opacity: ${({ isViewed }) => +isViewed};
  transform: translateY(${({ isViewed }) => (isViewed ? 0 : 40)}%);
  transition: 500ms opacity, 500ms transform;
  @media screen and (max-width: 576px) {
    font-size: 1.6rem;
    text-align: center;
  }
`;

export const SubDescription = styled.p`
  font-weight: 500;
  font-size: 2.1rem;

  margin-left: 20px;

  width: 70%;

  @media screen and (max-width: 576px) {
    font-size: 1.8rem;
  }
`;

export const IconTextWrapper = styled.div<TProps>`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  opacity: ${({ isViewed }) => +isViewed};
  transform: translateY(${({ isViewed }) => (isViewed ? 0 : -20)}%);
  transition: 500ms opacity, 500ms transform;
  & svg {
    width: 50px;
    height: 50px;
  }
`;

export const ButtonWrapper = styled.div<TProps>`
  opacity: ${({ isViewed }) => +isViewed};
  transform: translateY(${({ isViewed }) => (isViewed ? 0 : 20)}%);
  transition: 500ms opacity, 500ms transform;

  margin-left: 60px;
  margin-bottom: 60px;
  & a {
    color: #e6007a;
  }
  & path {
    fill: #e6007a;
  }
`;

export const SoonComponent = styled.p`
  display: inline-block;
  padding: 2px 9px;
  margin-left: 60px;
  margin-bottom: 15px;
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 25px;
  color: #e6007a;
  background: rgba(230, 0, 122, 0.2);
  border-radius: 14px;
`;

export const ImageWrapper = styled.div`
  position: absolute;

  top: 25px;
  right: -3%;
  max-width: 1304px;
  width: 85%;

  & svg {
    width: 100%;
  }

  @media screen and (max-width: 1060px) {
    display: none;
  }
`;

export const LowerComponentWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const LaptopWrapper = styled.div`
  position: absolute;
  width: 70%;
  left: -9%;
  z-index: 1;

  @media screen and (max-width: 1060px) {
    display: none;
  }
`;

export const LowerTextComponent = styled.div`
  margin: 0 48px 0 auto;
  width: 35%;

  @media screen and (max-width: 1060px) {
    width: 80%;
    margin: 60px;

    margin-top: 24px;
  }
`;
