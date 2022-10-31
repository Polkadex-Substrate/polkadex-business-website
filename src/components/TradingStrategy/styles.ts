import styled from 'styled-components';

type TProps = TGeneralProps & {
  inverse?: boolean;
};

type TGeneralProps = {
  isViewed: boolean;
};

export const Wrapper = styled.section`
  margin-bottom: 60px;
`;

export const Title = styled.h2`
  text-align: center;
  max-width: 50%;
  font-size: 4rem;
  font-weight: 550;
  margin: 0 auto 78px;

  @media screen and (max-width: 992px) {
    max-width: 100%;
  }
`;

export const Item = styled.div`
  display: flex;
  padding: 40px 30px 60px;
  @media screen and (max-width: 650px) {
    padding: 30px;

    flex-direction: column;
    align-items: center;
  }
`;

export const Items = styled.div`
  display: flex;
  justify-content: center;
  @media screen and (max-width: 992px) {
    display: block;

    margin: 0 auto;
  }
`;

export const Text = styled.p<TProps>`
  white-space: pre-wrap;

  color: ${({ theme, inverse = false }) =>
    theme.colors[inverse ? 'black' : 'white']};

  font-size: 1.6rem;
  line-height: 1.5;
  margin: 0;
  margin-bottom: 0;

  opacity: ${({ isViewed }) => +isViewed};

  transition: 500ms opacity;
`;
export const Subtitle = styled.h3<TProps>`
  font-weight: 600;
  font-size: 3rem;
  line-height: 1.6;
  margin: 0;
  margin-bottom: 12px;

  color: ${({ theme, inverse = false }) =>
    theme.colors[inverse ? 'black' : 'white']};

  opacity: ${({ isViewed }) => +isViewed};

  transition: 500ms opacity;
`;

export const LightItem = styled.div`
  background-color: ${({ theme }) => theme.colors.gray};
  max-width: 560px;
  margin-left: 30px;
  border-radius: 15px;

  @media screen and (max-width: 992px) {
    & {
      margin: 0 auto;
    }
  }
`;

export const AnimatedWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 560px;
  width: 100%;

  & div:not(:last-child) {
    margin-bottom: 30px;
  }

  @media screen and (max-width: 992px) {
    margin: 0 auto;
  }
`;

export const DarkContent = styled.div`
  display: flex;
  align-items: flex-start;
  height: 50%;
`;

export const Img = styled.img`
  max-width: 396px;
  width: 100%;
  height: auto;
  transform: translateX(-60px);
  margin-top: 1.5rem;
  @media screen and (max-width: 650px) {
    transform: translateX(-40px);
  }
`;

export const IconWrap = styled.div`
  margin-right: 25px;
  & svg {
    width: 80px;
    @media screen and (max-width: 650px) {
      margin-bottom: 50px;
    }
  }
`;

export const LightItemContent = styled.div`
  padding: 30px 20px 10px 43px;

  overflow: hidden;
`;
