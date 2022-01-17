import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  padding: 5rem 0;
  max-width: 95rem;
  margin: 0 auto;
  @media screen and (max-width: 950px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  p,
  a {
    font-size: 1.5rem;
    line-height: 1.5;
  }
`;

export const Title = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-gap: 1rem;
    margin-bottom: 5rem;
    @media screen and (min-width: 720px) {
      grid-template-columns: 1fr 1fr;
    }
    h2 {
      font-size: 3.5rem;
    }
    a {
      display: block;
      margin-top: 1rem;
      color: ${theme.colors.primary};
    }
  `}
`;

export const Information = styled.div`
  margin-bottom: 2rem;
  h3 {
    margin-bottom: 2rem;
  }
  > div {
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 560px) {
      flex-direction: column;
    }
  }
`;

export const InformationCard = styled.div`
  ${({ theme }) => css`
    position: relative;
    @media screen and (max-width: 560px) {
      :not(:last-child) {
        margin-bottom: 2rem;
      }
    }
    @media screen and (min-width: 560px) {
      :not(:last-child) {
        :before {
          content: '';
          position: absolute;
          width: 1px;
          height: 4rem;
          background: ${theme.colors.text};
          opacity: 0.1;
          top: 0;
          right: -50%;
        }
      }
    }

    span {
      font-size: 3rem;
      font-weight: bold;
      color: ${theme.colors.primary};
    }
  `}
`;

export const Allocation = styled.div`
  margin: 5rem 0;
  h3 {
    margin-bottom: 2rem;
  }
`;

export const AllocationContent = styled.div`
  display: grid;
  grid-gap: 1rem;

  @media screen and (min-width: 970px) {
    grid-template-columns: 1fr 2.5fr 1fr;
  }
`;
export const AllocationCardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    font-weight: bold;
  }
`;

export const AllocationCard = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    :nth-child(1),
    :nth-child(3) {
      color: ${theme.colors.inverse};
      padding: 2rem;
    }
    :nth-child(2) > ${AllocationCardHeader} {
      padding: 1rem 2rem;
    }
    :nth-child(1) {
      background: ${theme.colors.primary};
      color: ${theme.colors.white};
    }
    :nth-child(2) {
      border: 1px solid ${theme.colors.secondaryBackground};
    }
    :nth-child(3) {
      background: ${theme.colors.text};
    }
  `}
`;

export const AllocationCardContent = styled.div`
  margin-top: 10rem;
  span {
    display: block;
    margin-bottom: 1rem;
    font-size: 1.8rem;
    font-weight: bold;
  }
  p {
    font-size: 1.3rem;
  }
`;
export const AllocationCardBoxWrapper = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;

  @media screen and (min-width: 500px) {
    grid-template-areas:
      'early afterward referee'
      'early afterward referred';
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }
`;

export const AllocationBox = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 1rem;
    background: ${theme.colors.secondaryBackground};
    @media screen and (min-width: 500px) {
      :nth-child(1) {
        grid-area: early;
      }
      :nth-child(2) {
        grid-area: afterward;
      }
      :nth-child(3) {
        grid-area: referee;
      }
      :nth-child(3) {
        grid-area: referred;
      }
    }
    justify-content: flex-end;

    span {
      font-size: 1.8rem;
      font-weight: bold;
    }

    p {
      font-size: 1.4rem;
    }
  `}
`;
export const Graph = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    padding: 2rem 2rem 0 2rem;
    border-radius: 2rem;
    border: 1px solid ${theme.colors.secondaryBackground};
    color: ${theme.colors.black};
    margin-top: 4rem;
  `}
`;

export const Vesting = styled.div``;
export const VestingTitle = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
    span {
      font-size: 1.2rem;
      color: ${theme.colors.text};
      text-align: center;
    }
    @media screen and (max-width: 580px) {
      flex-direction: column;
    }
  `}
`;

export const VestingBar = styled.div`
  display: grid;
  @media screen and (min-width: 415px) {
    grid-template-columns: 1fr 4fr;
  }
`;

export const VestingInfo = styled.div`
  ${({ theme }) => css`
    div {
      margin-bottom: 0.5rem;
      border: 1px solid ${theme.colors.secondaryBackground};
      padding: 1rem;
      font-weight: bold;
    }
    :last-child div {
      background: ${theme.colors.secondary};
      color: ${theme.colors.white};
    }
    p {
      font-size: 1.3rem;
    }

    @media screen and (max-width: 415px) {
      :first-child {
        margin-bottom: 1rem;
      }
    }
  `}
`;
