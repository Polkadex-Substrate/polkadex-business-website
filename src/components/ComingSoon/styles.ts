import styled from 'styled-components';

export const ButtonsWrapper = styled.div`
  display: flex;
  & svg {
    width: 28px;
    height: 32px;
  }
  & a {
    margin-right: 30px;
  }
  filter: blur(4px);
  @media screen and (max-width: 560px) {
    & a {
      margin-right: 0px;
      margin-top: 10px;
    }
    /* justify-content: center; */
    align-items: center;
  }
`;
export const ComingSoon = styled.div`
  border-top: 3px solid white;
  border-bottom: 3px solid white;

  background-color: ${({theme}) => theme.colors.black};

  opacity: 0.6;

  font-weight: 500;
  font-size: 14px;

  margin-left: -5px;

  position: absolute;
  top: 0;

  height: 100%;
  width: 380px;

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  transform: rotate(-4deg);
  transition: 500ms all;

  @media screen and (min-width: 995px) and (max-width: 1200px) {
    width: calc(100% - 20px);
  }

  @media screen and (max-width: 560px) {
    width: 360px;
    transform: rotate(4deg);
    margin-left: 0;
  }
`;

export const Wrapper = styled.div`
  display: flex;

  position: relative;

  margin: 10px 0 50px 0;

  width: 100%;

  padding-left: 8px;

  :hover {
    & ${ComingSoon} {
      transform: rotate(4deg) scale(1.01);
    }
  }
  @media screen and (max-width: 560px) {
    align-items: center;
    justify-content: center;
  }
`;
