import styled from 'styled-components';

type TProps = {
  isViewed: boolean;
};

export const Wrapper = styled.div`
  position: relative;
  max-width: 1070px;
  width: 100%;
  display: flex;
  max-height: 380px;
  justify-content: space-between;
  align-items: center;
  border-radius: 20px;
  margin: 0 auto 130px;
  background-image: url('/img/question.svg');
  background-size: cover;
  background-position: right;
  background-repeat: no-repeat;

  @media screen and (max-width: 660px) {
    background-image: none;
    max-height: 820px;

    background: linear-gradient(180deg, #e6007a 0%, rgba(230, 0, 122, 0) 100%);
    flex-direction: column-reverse;
  }
`;

export const ContentWrapper = styled.div`
  padding: 130px 91px;
  width: 60%;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 660px) {
    width: 100%;
    padding: 90px 91px;
    text-align: center;
    align-items: center;
  }
`;

export const Question = styled.p<TProps>`
  font-weight: 400;
  font-size: 36px;
  line-height: 50px;
  margin-bottom: 35px;
  position: relative;
`;

export const ButtonWrapper = styled.div<TProps>`
  width: 140px;

  display: flex;
  align-items: center;

  opacity: ${({isViewed}) => +isViewed};

  transform: translateX(${({isViewed}) => (isViewed ? 0 : -20)}%);

  transition: 500ms opacity, 500ms transform;
  & a {
  }
`;
export const IconWrapper = styled.div`
  padding-right: 100px;
  @media screen and (max-width: 660px) {
    padding-right: 0px;
    padding-top: 50px;
  }

  & > svg {
    height: 160px;

    width: 120px;
  }
  & > div {
    svg {
      @media screen and (max-width: 660px) {
        top: 85px;
      }
      position: absolute;
      top: 125px;
      width: 120px;
      height: 160px;
    }
  }
`;
export const ComingSoon = styled.div`
  transition: 500ms all;

  border-top: 3px solid white;
  border-bottom: 3px solid white;
  color: '#000';
  background-color: ${({theme}) => theme.colors.black};
  opacity: 0.95;
  font-weight: 500;
  font-size: 14px;
  margin-left: -5px;
  position: absolute;
  height: 100px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  @media screen and (min-width: 995px) and (max-width: 1200px) {
    width: calc(100% - 20px);
  }
  @media screen and (max-width: 560px) {
    width: 100%;
    transform: rotate(0deg);
    margin-left: 0;
  }
`;
export const Soon = styled.span<TProps>`
  margin-top: 30px;
  font-size: 20px;
  font-weight: 500;

  opacity: ${({isViewed}) => +isViewed};
  ${({isViewed}) => (isViewed ? 'inherit' : 'hidden')};

  transform: translateY(${({isViewed}) => (isViewed ? 0 : 20)}%);

  transition: 500ms opacity, 500ms transform;
`;
