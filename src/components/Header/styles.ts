import styled, {css} from 'styled-components';

type TProps = {
  isCurrent: boolean;
};
type TWrapperProps = {
  show?: boolean;
  sticky?: boolean;
};
export const Wrapper = styled.header<TWrapperProps>`
  position: ${({sticky}) => (sticky ? 'fixed' : 'static')};
  z-index: 1000100;
  background-color: ${({theme}) => theme.colors.black};

  left: 15px;
  right: 15px;

  border-radius: 0 0 32px 32px;

  overflow: hidden;

  padding: 0 15px;

  @media screen and (min-width: 576px) {
    left: calc(50vw - 270px);
    right: calc(50vw - 270px);

    ${({sticky}) => !sticky && 'margin: 0 calc(50vw - 270px);'}
  }
  @media screen and (min-width: 768px) {
    right: calc(50vw - 360px);
    left: calc(50vw - 360px);

    ${({sticky}) => !sticky && 'margin: 0 calc(50vw - 360px);'}
  }
  @media screen and (min-width: 992px) {
    right: calc(50vw - 480px);
    left: calc(50vw - 480px);

    ${({sticky}) => !sticky && 'margin: 0 calc(50vw - 480px);'}
  }
  @media screen and (min-width: 1200px) {
    right: calc(50vw - 590px);
    left: calc(50vw - 590px);
    ${({sticky}) => !sticky && 'margin: 0 calc(50vw - 590px);'}
  }

  /* padding: 3rem 10vw; */

  padding: 20px 30px;

  @media screen and (max-width: 915px) {
    padding: 3rem 5vw;
  }
`;

export const MenuIcon = styled.div<TWrapperProps>`
  display: none;
  ${({theme}) => css`
    svg {
      width: 3rem;
      height: 3rem;
    }
    :hover {
      opacity: 0.6;
    }
    .line {
      fill: none;
      stroke: ${theme.colors.text};
      stroke-width: 6;
      transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
        stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
    }
    .line1 {
      stroke-dasharray: 60 207;
      stroke-width: 6;
    }
    .line2 {
      stroke-dasharray: 60 60;
      stroke-width: 6;
    }
    .line3 {
      stroke-dasharray: 60 207;
      stroke-width: 6;
    }
    @media screen and (max-width: 915px) {
      display: block;
    }
  `}
`;

export const Container = styled.div<TWrapperProps>`
  display: flex;
  column-gap: 1rem;
  align-items: center;
  width: 100%;
  justify-content: space-between;

  z-index: 1000100;
`;
export const LogoWrapper = styled.div<TWrapperProps>`
  display: flex;
  column-gap: 1rem;
  align-items: center;
  margin-right: 20px;
`;

export const Column = styled.div<TWrapperProps>`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 915px) {
    display: none;
  }
  & ul {
    list-style: none;
    display: flex;
    justify-content: space-between;
    width: 300px;
    @media screen and (max-width: 915px) {
      flex-direction: column;
    }
  }
`;
export const TopContainer = styled.div<TWrapperProps>`
  display: flex;
  &.show {
    ${MenuIcon} {
      .line1 {
        stroke-dasharray: 90 207;
        stroke-dashoffset: -134;
        stroke-width: 6;
      }
      .line2 {
        stroke-dasharray: 1 60;
        stroke-dashoffset: -30;
        stroke-width: 6;
      }
      .line3 {
        stroke-dasharray: 90 207;
        stroke-dashoffset: -134;
        stroke-width: 6;
      }
    }
  }
`;
export const Link = styled.a<TProps>`
  color: ${({theme, isCurrent}) =>
    theme.colors[isCurrent ? 'white' : 'disable']};
`;
export const ButtonWrapper = styled.div`
  display: flex;

  align-items: center;

  @media screen and (max-width: 1100px) {
    & > a:nth-child(2n) {
      display: none;
    }
  }
  @media screen and (max-width: 915px) {
    display: none;
  }
`;
export const MenuButton = styled.a`
  display: flex;
  flex-direction: row;
  width: 100px;
  cursor: pointer;
  margin: 0 20px 0 0;

  @media screen and (max-width: 915px) {
    margin: 10px 0 10px;
  }
`;
export const MenuWrapper = styled.div<TWrapperProps>`
  height: ${({show}) => (show ? '200px' : '0')};

  overflow: hidden;

  display: flex;
  width: 100%;
  padding: ${({show}) => (show ? 20 : 0)}px 0;
  transition: all 250ms linear;

  justify-content: space-between;
  @media screen and (max-width: 650px) {
    flex-direction: column;
  }
`;
export const MenuColumn = styled.ul`
  list-style: none;
  @media screen and (max-width: 915px) {
    & > div {
      display: none;
    }
  }
`;
export const MenuItem = styled.li`
  color: ${({theme}) => theme.colors.white};
  margin: 8px 0;
  display: flex;
  align-items: center;
  font-weight: 700;
  cursor: pointer;
  :hover {
    color: ${({theme}) => theme.colors.primary};
  }
`;

export const MenuTitle = styled.span`
  color: ${({theme}) => theme.colors.disable};
`;
export const MenuLinks = styled(MenuColumn)`
  display: none;
  @media screen and (max-width: 915px) {
    display: block;
  }
`;
export const NewWrapper = styled.div`
  color: ${({theme}) => theme.colors.primary};
  border-radius: 15px;
  font-weight: 400;
  width: 46px;
  height: 23px;
  background-color: #fce6f2;
  margin-left: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
