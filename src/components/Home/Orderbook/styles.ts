import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  ${({ theme }) => css`
    max-width: ${theme.grid.container};
    margin: 4rem auto 0 auto;
    @media screen and (max-width: 1200px) {
      margin: 4rem 1rem;
    }
  `}
`;

export const Hero = styled.div`
  display: grid;
  align-items: center;
  gap: 1rem;
  grid-template-columns: 1fr minmax(auto, 30rem);
`;

export const AsideLeft = styled.div``;
export const AsideRight = styled.div`
  ${({ theme }) => css`
    h2 {
      font-size: 3rem;
      margin-bottom: 3rem;
      line-height: 1.8;
      font-weight: 500;
      svg {
        display: block;
        max-width: 20rem;
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
  max-width: 8rem;
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
        :hover {
          background: ${theme.colors.black};
        }
      }
      :last-child {
        color: ${theme.colors.blue};
        transition: background 0.2s ease-in-out;
        :hover {
          background: ${theme.colors.primary}19;
        }
      }
    }
  `}
`;

export const Features = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const FeaturesFlex = styled.div`
  ${() => css`
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    ${Card} {
      div :last-child {
        height: 20rem;
        svg {
          width: auto;
          height: 100%;
        }
      }
    }
  `}
`;
export const FeaturesGrid = styled.div`
  ${() => css`
    display: grid;
    gap: 2rem;
    grid-template-columns: 1.8fr 1.2fr 1.2fr;
    ${Card} {
      div :last-child {
        height: 25rem;
        svg {
          width: 100%;
          height: auto;
        }
      }
    }
  `}
`;
export const FeaturesBox = styled.div`
  ${() => css`
    display: grid;
    gap: 2rem;
    grid-template-columns: 1fr 2fr;
    ${Card} {
      div :last-child {
        height: 25rem;
      }
      :first-child {
        div svg {
          width: 100%;
          height: auto;
        }
      }
      :last-child {
        div svg {
          width: auto;
          height: 100%;
        }
      }
    }
  `}
`;
export const Card = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: ${theme.colors.tertiaryBackgroundOpacity};
    border: 1px solid ${theme.colors.secondaryBackground};
    border-radius: 0.5rem;

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
