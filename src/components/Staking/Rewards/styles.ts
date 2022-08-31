import { PrimaryWrapper } from 'components/Button/styles';
import styled, { css } from 'styled-components';

export const Wrapper = styled.div``;

export const Title = styled.div`
  max-width: 100rem;
  margin: 0 auto;
  display: grid;
  p {
    line-height: 1.6;
  }
  @media screen and (max-width: 1000px) {
    padding: 1rem;
  }
  @media screen and (min-width: 830px) {
    grid-template-columns: 0.5fr 1fr;
  }
`;

export const TitleWrapper = styled.div`
  h2 {
    font-size: 3.5rem;
    line-height: 1;
    margin-bottom: 3.5rem;
  }
`;
export const TitleContainer = styled.div`
  justify-self: flex-end;
  @media screen and (min-width: 830px) {
    max-width: 40rem;
  }
`;

export const Container = styled.div``;
export const ContainerWrapper = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.secondaryBackgroundOpacity};
    padding: 1rem;
    @media screen and (min-width: 590px) {
      padding: 4rem;
    }
  `}
`;
export const ContainerBox = styled.div`
  max-width: 100rem;
  margin: 0 auto;
  display: grid;
  @media screen and (min-width: 960px) {
    grid-template-columns: 0.5fr 1fr;
  }
`;

export const Nominator = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: black;
    background: ${theme.colors.white};
    border-radius: 2rem;
  `}
`;

export const NominatorHeader = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  `}
`;
export const Tag = styled.span`
  ${({ theme }) => css`
    background: ${theme.colors.secondary};
    padding: 0.5rem 1rem;
    color: white;
    border-radius: 1.5rem 0 0 1.5rem;
    margin-top: 2rem;
  `}
`;

export const NominatorIcon = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.secondaryBackground};
    width: 6rem;
    height: 6rem;
    border-radius: 1.5rem;
    padding: 1rem;
  `}
`;

export const NominatorIconWhite = styled(NominatorIcon)`
  ${({ theme }) => css`
    svg {
      fill: ${theme.colors.black};
      stroke: ${theme.colors.black};
    }
  `}
`;

export const NominatorIconBlack = styled(NominatorIcon)`
  ${({ theme }) => css`
    svg {
      fill: ${theme.colors.white};
      stroke: ${theme.colors.white};
    }
  `}
`;

export const NominatorHeaderWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: flex-end;
    gap: 1rem;
    padding: 3rem 0 3rem 3rem;
    span {
      font-weight: 500;
      padding: 0.3rem 0.6rem;
      border-radius: 1.5rem;
      margin-bottom: 0.5rem;
    }
  `}
`;
export const NominatorHeaderWrapperWhite = styled(NominatorHeaderWrapper)`
  ${({ theme }) => css`
    span {
      color: white;
      background: ${theme.colors.black};
    }
  `}
`;
export const NominatorHeaderWrapperBlack = styled(NominatorHeaderWrapper)`
  ${({ theme }) => css`
    span {
      color: black;
      background: ${theme.colors.white};
    }
  `}
`;

export const NominatorBody = styled.h3`
  font-size: 1.8rem;
  font-weight: 550;
  padding: 0 3rem;
`;

export const Validator = styled.div`
  ${({ theme }) => css`
    padding: 2rem 0;
  `}
`;
export const ValidatorCard = styled.div``;

export const ValidatorWrapper = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.secondaryBackgroundOpacity};
    border-radius: 0 2rem 2rem 0;
  `}
`;
export const NominatorFooterTemplate = styled.div`
  h3 {
    font-size: 1.4rem;
    font-weight: 500;
    padding: 3rem 3rem 2rem 3rem;
  }
`;

export const NominatorFooter = styled(NominatorFooterTemplate)``;

export const ValidatorFooter = styled(NominatorFooterTemplate)`
  display: grid;
  gap: 1rem;
  @media screen and (min-width: 590px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export const FooterWrapperTemplte = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1.5rem;
    ${PrimaryWrapper} {
      margin-top: 2rem;
    }
  `}
`;

export const ValidatorFooterWrapper = styled(FooterWrapperTemplte)`
  padding: 0 3rem; ;
`;

export const NominatorFooterWrapper = styled(FooterWrapperTemplte)`
  ${({ theme }) => css`
    background: ${theme.colors.secondaryBackgroundOpacity};
    border-radius: 2rem 2rem 0 0;
    padding: 3rem;
  `}
`;
export const NominatorFooterCard = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    div {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 1.8rem;
      height: 1.8rem;
      border-radius: 10rem;
      background: ${theme.colors.green};
      padding: 0.4rem;
    }
  `}
`;
export const ValidateLinks = styled.div`
  padding: 0 2rem 2rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;
export const ValidateLinksCard = styled.a`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 2rem;
    border-radius: 1rem;
    background: ${theme.colors.secondaryBackground};
    transition: transform 0.3s ease-in-out;
    cursor: pointer;
    svg {
      width: 2rem;
    }
    :hover {
      transform: translateY(0.2rem);
    }
  `}
`;
