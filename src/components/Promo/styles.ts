import styled from 'styled-components';

type TProps = {
  step: number;
};

export const Container = styled.div<TProps>`
  padding-top: ${({step}) => (step === 4 ? 0 : 0)}px;
  transition: padding 500ms ease-out, padding-top 500ms ease-out;

  will-change: padding-top;
  will-change: padding;

  position: relative;
`;

export const Overlay = styled.div<TProps>`
  position: ${({step}) => (step === 4 ? 'static' : 'fixed')};

  left: 0;
  top: 0;
  right: 4px;
  height: ${({step}) => (step === 4 ? '680px' : '100vh')};
  background-color: #1c1c26;

  transition: 800ms height ease-out;
  z-index: 100000;

  overflow: hidden;

  @media screen and (max-width: 878px) {
    position: static;

    height: 450px;
    overflow-y: hidden;
    z-index: 1;
  }
`;

export const Wrapper = styled.section<TProps>`
  position: relative;

  left: 0;
  top: 0;
  bottom: 0;
  right: 0px;
  z-index: 10;

  overflow: hidden;

  @media screen and (max-width: 1440px) {
    padding: 0
      ${({step}) => (step === 1 ? 34 : step === 2 ? 62 : step === 4 ? 0 : 92)}px;
    padding-top: ${({step}) => (step === 4 ? 70 : 0)}px;
  }
  @media screen and (max-width: 1200px) {
    padding: 0
      ${({step}) => (step === 1 ? 34 : step === 2 ? 32 : step === 4 ? 0 : 52)}px;
    padding-top: ${({step}) => (step === 4 ? 70 : 0)}px;
  }

  @media screen and (max-width: 996px) {
    padding: 0
      ${({step}) => (step === 1 ? 16 : step === 2 ? 12 : step === 4 ? 0 : 8)}px;
    padding-top: ${({step}) => (step === 4 ? 70 : 0)}px;
  }

  @media screen and (max-width: 878px) {
    padding-top: 0px;
    position: relative;
    z-index: 1;
  }
`;

export const AnimationWrapper = styled.div<TProps>`
  width: 100%;

  height: 100vh;
  position: relative;

  transition: 800ms transform ease-out, width 400ms ease-out,
    height 400ms ease-out;
  background-color: #1c1c26 ${({step}) => (step < 3 ? 'ff' : '00')};

  will-change: transform;
  will-change: width;
  will-change: height;

  z-index: 3;

  transform: translateY(${({step}) => (step === 3 ? -130 : 0)}px)
    scale(${({step}) => (step === 3 ? 0.95 : 1)});

  ${({step}) =>
    step === 4 &&
    `
  
    height: 690px;
    width: 572px;
  `}

  animation: ${({step}) => step === 4 && 'finish 1s forwards'};
  @keyframes finish {
    0% {
      position: absolute;
      right: 0;
      top: 0;
    }

    100% {
      position: absolute;
      right: -36px;
      top: 66px;
    }
  }
  @media screen and (max-width: 1096px) {
    ${({step}) =>
      step === 4 &&
      `
  
    height: 520px;
    width: 340px;
  `}

    @keyframes finish {
      0% {
        position: absolute;
        right: 0;
        top: 0;
      }

      100% {
        position: absolute;
        right: 0px;
        top: 70px;
      }
    }
  }
  @media screen and (max-width: 878px) {
    display: none;
  }
`;

export const MainChart = styled.div<TProps>`
  width: ${({step}) => (step === 1 ? '100%' : step === 2 ? '86.5%' : '86%')};
  transition: 500ms width ease-out;
  will-change: width;
`;

export const MenuImg = styled.img<TProps>`
  width: ${({step}) => (step === 1 ? 0 : 5.5)}%;
  height: 100%;

  transform: translateY(${({step}) => (step === 1 ? -200 : 0)}%);

  transition: 800ms transform ease-out, 400ms width ease-out;

  will-change: transform;
  will-change: width;
`;

export const ChartImg = styled.img<TProps>`
  height: 100%;
  width: ${({step}) => (step === 1 ? '100%' : 'calc(85%)')};

  will-change: width;
  transition: 400ms width ease-out;
`;

export const OrderImg = styled.img<TProps>`
  width: 100%;

  transform: translateY(${({step}) => (step === 1 ? -100 : 0)}%);
  transition: 800ms transform ease-out;

  will-change: transform;
`;
export const MarketTradeImg = styled.img<TProps>`
  width: ${({step}) => (step < 3 ? 0 : 100)}%;

  transform: translateX(${({step}) => (step < 3 ? -170 : 0)}%);

  transition: 800ms transform ease-out, width 800ms ease-out;
  will-change: transform;
`;

export const AsideWrapper = styled.div<TProps>`
  width: ${({step}) => (step === 1 ? 0 : step > 2 ? '20.8%' : '20.5%')};
  height: 100%;

  position: absolute;
  right: 0;
  top: 0;

  transition: 800ms width ease-out;
  will-change: width;
`;

export const FooterImg = styled.img<TProps>`
  height: 100%;
  width: 100%;

  transform: translateX(${({step}) => (step < 3 ? -100 : 0)}%);

  margin-top: 8px;
  width: ${({step}) => (step < 3 ? 0 : 90)}%;

  transition: 800ms width ease-out, 800ms transform ease-out;
  will-change: width;
  will-change: transform;
`;

export const Chart = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

export const NoteBook = styled.div<TProps>`
  background-image: url('/img/landing/promo/Laptop.png');
  background-repeat: no-repeat;
  background-size: contain;

  width: 1600px;
  height: 600px;
  position: absolute;
  top: -32px;
  right: -610px;
  z-index: 1;

  opacity: ${({step}) => (step === 4 ? 1 : 0)};
  transform: scale(0.99);

  will-change: opacity;

  transition: 2000ms opacity ease-out;

  @media screen and (max-width: 1096px) {
    top: 0px;
    right: -518px;

    width: 1150px;
    height: 380px;
  }

  @media screen and (max-width: 878px) {
    display: none;
  }
`;

export const Content = styled.div<TProps>`
  opacity: ${({step}) => (step === 3 ? 0 : 1)};
  transition: 500ms opacity ease-out, 500ms padding-left ease-out;

  position: relative;

  @media screen and (max-width: 1296px) {
    padding-left: 18px;
    opacity: 1;
  }
`;

export const Title = styled.h1<TProps>`
  font-size: 5rem;
  font-weight: 500;
  text-align: ${({step}) => (step === 4 ? 'left' : 'center')};

  @media screen and (max-width: 1440px) {
    font-size: 3rem;
  }

  @media screen and (max-width: 878px) {
    text-align: left;
  }
`;

export const Main = styled.div<TProps>`
  display: ${({step}) => (step === 4 ? 'flex' : 'block')};
  ${({step}) => (step === 4 ? 'min-' : '')}height: ${({step}) =>
    step === 4 ? '570px' : '100px'};

  position: relative;

  transition: 500ms height ease-out;

  align-items: center;
  margin-bottom: 10px;

  overflow: hidden;

  @media screen and (max-width: 1440px) {
    align-items: flex-start;
  }

  @media screen and (max-width: 1296px) {
    height: ${({step}) => (step === 4 ? '700px' : '100px')};
  }

  @media screen and (max-width: 878px) {
    height: 470px;
    display: flex;

    padding-top: 24px;
    align-items: flex-start;
    justify-content: center;
  }
`;

export const List = styled.p<TProps>`
  display: ${({step}) => (step === 4 ? 'flex' : 'block')};
  font-size: 2rem;

  flex-direction: column;
  text-align: ${({step}) => (step === 4 ? 'left' : 'center')};

  & > span {
    margin-left: 4px;
    font-weight: 400;
    padding-bottom: 3px;
    & > span {
      font-weight: 500;

      color: ${({theme}) => theme.colors.primary};
    }
  }

  @media screen and (max-width: 1440px) {
    font-size: 1.5rem;
  }

  @media screen and (max-width: 878px) {
    display: flex;
    text-align: left;
  }
`;
export const AvailableList = styled(List)`
  @media screen and (max-width: 878px) {
    text-align: center;
    align-items: center;
  }
`;
export const Buttons = styled.div<TProps>`
  display: grid;
  grid-template-columns: 148px 148px;

  column-gap: 66px;
  font-size: 1.8rem;

  margin-top: 42px;
  margin-bottom: 70px;
  & > a:first-child {
    justify-content: center;

    width: 166px;
    border-radius: 12px;
  }

  transition: 500ms opacity ease-out;

  will-change: opacity;
  opacity: ${({step}) => (step === 4 ? 1 : 0)};

  @media screen and (max-width: 1440px) {
    margin-top: 22px;
    margin-bottom: 60px;
  }

  @media screen and (max-width: 1440px) {
    font-size: 1.5rem;
  }

  @media screen and (max-width: 878px) {
    opacity: 1;
    margin-bottom: 20px;
  }
`;

export const Img = styled.img<TProps>`
  height: 400px;
  max-width: 100%;
  opacity: 0;

  position: absolute;

  z-index: 3;

  top: 152px;

  right: 320px;

  animation: ${({step}) => (step === 4 ? 'phone 1000ms forwards' : 'none')};

  @keyframes phone {
    0% {
      opacity: 0;
      transform: scale(2) translateX(-100%);
    }

    100% {
      transform: scale(1) translateX(0);
      opacity: 1;
    }
  }
  @media screen and (max-width: 1096px) {
    height: 250px;
    max-width: 100%;

    right: 235px;
    top: 132px;
  }

  @media screen and (max-width: 878px) {
    display: none;
  }
`;

export const Step = styled.div<TProps>`
  height: ${({step}) => (step === 4 ? 0 : 100)}vh;

  /* transition: 500ms height; */
`;
