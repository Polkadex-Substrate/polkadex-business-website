import {Wrapper as Icon} from 'components/Icon/styles';
import {Wrapper as Language} from 'components/LanguageSelector/styles';
import styled, {css} from 'styled-components';

export const Wrapper = styled.footer`
  max-width: 110rem;
  margin: 2rem auto 0 auto;
  padding: 3rem 0;

  @media screen and (max-width: 1200px) {
    padding: 2rem;
  }

  @media screen and (max-width: 850px) {
    margin-left: auto;
    margin-right: auto;
  }
`;

export const LogoWrapper = styled.div`
  & a svg {
    width: 213px;
    margin-right: 40px;

    @media screen and (max-width: 850px) {
      width: auto;
    }
  }
`;

export const Col = styled.div`
  & ul li {
    list-style: none;
  }

  @media screen and (max-width: 850px) {
    margin-right: 15px;
  }
`;

export const SocialWrapper = styled.div`
  display: flex;

  & a {
    transition: transform 1000ms ease-in-out;
    svg:hover {
      transform: translateY(-2px);
    }
  }

  ${Icon} {
    margin-right: 1rem;
  }
`;
export const Row = styled.div`
  display: flex;
  justify-content: space-around;
  row-gap: 2rem;

  @media screen and (max-width: 850px) {
    flex-direction: column;
    padding-left: 90px;
    padding-right: 90px;
  }

  @media screen and (max-width: 660px) {
    flex-wrap: wrap;
  }

  & h5 {
    font-size: 1.8rem;
    margin-bottom: 2.2rem;
  }
  ${Language} {
    margin-top: 1rem;
  }
  :first-child {
    padding-bottom: 4rem;
    grid-template-columns: 2fr;

    @media screen and (max-width: 850px) {
      margin-bottom: 2.2rem;
    }

    & ${Col} {
      & ul li {
        :not(:last-child) {
          margin-bottom: 2rem;
        }
        & a {
          ${({theme}) => css`
            transition: ${theme.transition.default};
          `}
          & :hover {
            opacity: 0.6;
          }
        }
      }

      & div {
        margin-bottom: 4rem;
      }
    }
  }

  :last-child {
    justify-content: space-between;
    padding-top: 4rem;

    ${({theme}) => css`
      border-top: ${` 1px solid ${theme.colors.text}1D`};
    `}

    & ${Col} {
      display: flex;
      align-items: center;

      & span {
        display: block;
        margin-right: 2.2rem;
      }

      & ul li {
        display: inline-block;
        :not(:last-child) {
          margin-right: 1.8rem;
        }
        & a {
          ${({theme}) => css`
            transition: ${theme.transition.default};
          `}
          & :hover {
            opacity: 0.6;
          }
        }
      }
    }

    @media screen and (max-width: 850px) {
      grid-template-columns: repeat(3, auto);
    }
    @media screen and (max-width: 850px) {
      & ${Col} {
        :last-child {
          margin-top: 2rem;
        }
      }
    }
  }
`;

export const Copyright = styled.span`
  font-family: 'SF Pro Display';
  font-style: normal;
  font-weight: 400;
  font-size: 19.4286px;
  line-height: 27px;

  @media screen and (max-width: 850px) {
    font-size: 15px;
  }
`;

export const CopyRightsLinks = styled.li`
  font-family: 'SF Pro Display';
  font-style: normal;
  font-weight: 400;
  font-size: 19.4286px;
  line-height: 27px;
  opacity: 0.6;

  @media screen and (max-width: 850px) {
    font-size: 15px;
  }
`;

export const LinkWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  @media screen and (max-width: 850px) {
    display: flex;
    flex-wrap: wrap;
  }
`;
