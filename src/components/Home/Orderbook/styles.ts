import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  max-width: 100rem;
  margin: 8rem auto 0 auto;
  display: flex;
  flex-direction: column;
  gap: 5rem;
`;

export const Hero = styled.div`
  display: grid;
  align-items: center;
  gap: 1rem;
  @media screen and (min-width: 800px) {
    grid-template-columns: 1fr minmax(auto, 30rem);
  }
`;

export const AsideLeft = styled(motion.div)`
  svg {
    /* transform: scale(1.05) translateX(-2rem); */
    @media screen and (min-width: 1120px) {
      transform: scale(1.1) translateX(-6rem);
    }
  }
`;
export const AsideRight = styled(motion.div)`
  ${({ theme }) => css`
    @media screen and (max-width: 800px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      padding: 1rem;
    }
    h2 {
      margin-bottom: 3rem;
      font-size: 3rem;
      font-weight: 500;
      line-height: 1.8;

      svg {
        display: block;
        width: 20rem;
        height: auto;
        overflow: hidden;
      }
    }
    p {
      line-height: ${theme.font.lineHeight.normal};
    }
  `}
`;

export const AsideRightIcon = styled.div`
  width: 8rem;
  margin-bottom: 3rem;
`;

export const Actions = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 1rem;
    margin: 2rem 0;
    a {
      padding: 1rem 2rem;
      border-radius: 0.4rem;
      :first-child {
        color: ${theme.colors.white};
        background: ${theme.colors.primary};
        transition: background 0.2s ease-in-out;
      }
      :last-child {
        color: ${theme.colors.blue};
        transition: background 0.2s ease-in-out;
        :hover {
          background: ${theme.colors.blue}19;
        }
        svg {
          display: inline-block;
          width: 1rem;
          vertical-align: middle;
        }
      }
    }
  `}
`;

export const Features = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  @media screen and (max-width: 1000px) {
    padding: 1rem;
  }
`;

export const FeaturesFlex = styled.div`
  ${() => css`
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    ${Card} {
      div :last-child {
        height: 20rem;
        svg {
          width: 100%;
          height: auto;
          @media screen and (max-width: 838px) {
            width: unset;
            height: 20rem;
          }
        }
      }
    }
  `}
`;
export const FeaturesGrid = styled.div`
  ${() => css`
    display: grid;
    gap: 2rem;
    @media screen and (min-width: 1000px) {
      grid-template-columns: 1.8fr 1.2fr 1.2fr;
    }
    @media screen and (min-width: 880px) and (max-width: 1000px) {
      grid-template-columns: 1fr 1fr 1fr;
    }
    ${Card} {
      div :last-child {
        height: 20rem;
        svg {
          width: 100%;
          height: auto;
          @media screen and (max-width: 880px) {
            width: unset;
            height: 20rem;
          }
        }
      }
    }
  `}
`;
export const FeaturesBox = styled.div`
  ${() => css`
    display: grid;
    gap: 2rem;
    @media screen and (min-width: 1000px) {
      grid-template-columns: 1fr 2fr;
    }
    ${Card} {
      div :last-child {
        height: 25rem;
      }
      :first-child {
        div svg {
          width: 100%;
          height: auto;
          @media screen and (max-width: 1000px) {
            width: unset;
            height: 20rem;
          }
        }
      }
      :last-child {
        div svg {
          width: auto;
          height: 100%;
          @media screen and (max-width: 1000px) {
            width: unset;
            height: 20rem;
          }
        }
      }
    }
  `}
`;
export const Card = styled(motion.div)`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: ${theme.colors.tertiaryBackgroundOpacity};
    border: 1px solid ${theme.colors.secondaryBackground};
    border-radius: 0.5rem;
    overflow: hidden;
    div {
      :first-child {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        padding: 3rem;
        h3 {
          font-size: 2rem;
          font-weight: 500;
        }
        p {
          opacity: 0.7;
          line-height: ${theme.font.lineHeight.normal};
        }
      }
      :last-child {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-start;
        svg {
          display: block;
        }
      }
    }
  `}
`;
export const Listing = styled(motion.div)`
  ${({ theme }) => css`
    position: relative;
    background: ${theme.colors.primaryBackground};
    border: 1px solid ${theme.colors.secondaryBackground};
    border-radius: 0.5rem;
    margin-top: 2rem;
    display: grid;
    background-image: url('/img/orderbookListingBg.svg');
    background-repeat: no-repeat;
    background-position: -10rem 0;
    background-size: 130% 100%;

    @media screen and (min-width: 580px) {
      grid-template-columns: 2fr 1fr;
    }
    @media screen and (max-width: 935px) {
      background-size: cover;
    }
  `}
`;
export const ListingWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 10rem 6rem;
    h2 {
      font-size: 3rem;
      font-weight: 500;
      strong {
        display: block;
        font-weight: 600;
      }
    }
    a {
      background: gray;
      width: fit-content;
      padding: 1rem 3rem;
      border-radius: 0.4rem;
      cursor: not-allowed;
    }
  `}
`;
export const ListingHero = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  bottom: 0;
  max-width: 90rem;
  width: 100%;
  right: 0;
  @media screen and (min-width: 1160px) {
    right: -2rem;
  }
`;
