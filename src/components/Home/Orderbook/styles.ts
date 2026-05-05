import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  max-width: 140rem;
  margin: 8rem auto 0 auto;
  display: flex;
  flex-direction: column;
  gap: 5rem;
`;

export const Hero = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const AsideLeft = styled(motion.div)`
  position: relative;
  display: flex;
  align-items: center;
  svg {
    width: 100%;
  }
  div {
    background: rgba(13, 13, 14, 0)
      linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0) 10%,
        rgba(13, 13, 14, 0.1) 50%,
        rgba(13, 13, 14, 0.5) 75%,
        rgba(13, 13, 14, 1) 100%
      )
      repeat scroll 0 0;
    position: absolute;
    width: 100%;
    height: 100%;
  }
`;
export const AsideRight = styled(motion.div)`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 1rem;
    h4 {
      font-weight: 500;
      font-size: 1.8rem;
      line-height: 2;
    }
    h2 {
      margin-bottom: 3rem;
      font-size: 3rem;
      font-weight: 500;
      line-height: 1.5;

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
    margin: 4rem 0;
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
  max-width: 100rem;
  margin: 0 auto;

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
          width: 100%;
          max-width: 55rem;
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
    max-width: 100rem;
    margin: 0 auto;
    width: 100%;
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
      background: ${theme.colors.primary};
      width: fit-content;
      padding: 1rem 3rem;
      border-radius: 0.4rem;
      font-weight: 500;
    }
  `}
`;
