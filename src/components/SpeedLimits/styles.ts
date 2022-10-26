import Image from 'next/image';
import styled from 'styled-components';

type TProps = {
  isViewed: boolean;
};

export const Wrapper = styled.section`
  display: flex;
  margin: 0 auto 100px;
  justify-content: center;
  @media screen and (max-width: 1005px) {
    display: block;
  }
`;

export const Item = styled.div<TProps>`
  opacity: ${({isViewed}) => +isViewed};
  ${({isViewed}) => (isViewed ? 'inherit' : 'hidden')};

  &:first-child {
    transform: translateY(${({isViewed}) => (isViewed ? 0 : -20)}%);
  }
  &:last-child {
    transform: translateY(${({isViewed}) => (isViewed ? 0 : 20)}%);
  }

  transition: 500ms opacity, 500ms transform;
`;

export const SpeedLimitsContainer = styled.div<TProps>`
  position: relative;
  max-width: 560px;

  width: 100%;
  padding: 50px;
  margin-right: 30px;
  background: linear-gradient(180deg, #e6007a 0%, rgba(230, 0, 122, 0) 92.41%);
  border-radius: 15px;
  overflow: hidden;

  opacity: ${({isViewed}) => +isViewed};

  transform: translateX(${({isViewed}) => (isViewed ? 0 : -20)}%);

  transition: 500ms opacity, 500ms transform;

  @media screen and (max-width: 1005px) {
    margin: 0 auto 30px;
    padding: 50px 50px;
  }
`;

export const Title = styled.h5`
  font-weight: 600;
  font-size: 3rem;

  line-height: 50px;
  color: #ffffff;
  margin-bottom: 20px;
  max-width: 25vw;

  @media screen and (max-width: 1005px) {
    max-width: 70vw;
  }
`;

export const Description = styled.p`
  display: block;

  font-size: 2rem;
  line-height: 1.5;
  color: #ffffff;
  margin-bottom: 20px;
`;

export const RocketWrapper = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  & svg {
    width: 100%;
    z-index: -999;
  }

  @media screen and (max-width: 1005px) {
    display: none;
  }
`;

export const BlockContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 560px;

  width: 100%;

  & div:not(:last-child) {
    margin-bottom: 15px;
  }

  @media screen and (max-width: 1005px) {
    margin: 0 auto;
  }
`;

export const BlockWrapper = styled.div`
  padding: 50px 23px;

  height: 350px;

  display: flex;
  flex-direction: row;
  @media screen and (max-width: 650px) {
    /* flex-direction: column; */
    align-items: center;
    justify-content: space-between;
    display: flex;
    padding: 40px 20px;
  }
`;

export const BlockTitle = styled.li`
  font-weight: 600;
  font-size: 3rem;
  line-height: 25px;
  color: #ffffff;
  margin-bottom: 25px;
`;

export const BlockText = styled.li`
  font-size: 2rem;
  line-height: 1.5;
  color: #ffffff;
`;

export const BlockList = styled.ul`
  list-style: none;
  @media screen and (max-width: 652px) {
    & {
      width: 80%;
    }
  }
`;

export const BlockIcon = styled.div`
  transform: translateY(-20%);
  margin-right: 25px;

  & svg {
    width: 80px;
  }
`;

export const DoneIconWrapper = styled(Image)`
  height: 24px;
  width: 24px;
`;

export const ImageWrapper = styled.div`
  margin-right: 10px;
  /* padding-top: 10px; */

  & span {
    height: 24px !important;
    width: 24px !important;
  }
`;

export const TextAndIconWrapper = styled.div`
  display: flex;
  /* &:not(:last-child) {
    margin-bottom: 15px;
  } */
`;

export const ButtonWrapper = styled.div<TProps>`
  opacity: ${({isViewed}) => +isViewed};

  transform: translateX(${({isViewed}) => (isViewed ? 0 : -20)}%);

  transition: 500ms opacity, 500ms transform;

  & a {
    margin: 0 auto 92px;
    font-weight: 500;
    font-size: 1.8rem;
    width: 166px;
    justify-content: center;

    &::before {
      display: block;
      position: absolute;
      content: '';
      width: 470px;
      height: 1px;
      background-color: #e6007a;
      left: 30px;
      @media screen and (max-width: 1250px) {
        & {
          display: none;
        }
      }
    }

    &::after {
      display: block;
      position: absolute;
      content: '';
      width: 9px;
      height: 9px;
      border-radius: 50%;
      background-color: #e6007a;
      left: 500px;

      @media screen and (max-width: 1250px) {
        display: none;
      }
    }
  }
`;
