import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  padding: 5rem 0;

  p {
    font-size: 1.5rem;
    line-height: 1.5;
  }
`;

export const Title = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
    margin-bottom: 5rem;
    max-width: 95rem;
    margin: 0 auto 5rem auto;
    h2 {
      font-size: 3.5rem;
    }
  `}
`;
export const Content = styled.div`
  margin-top: 12rem;
`;
export const Timeline = styled.div``;
export const TimelineControls = styled.div``;
export const TimelineContent = styled.div`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    justify-content: space-between;
    max-width: 90rem;
    margin: 0 auto;
    :before {
      content: '';
      position: absolute;
      width: 100%;
      top: 0;
      transform: translateY(-5.5rem);
      border: 0.1px solid ${theme.colors.text};
      opacity: 0.2;
    }
  `}
`;
export const TimelineCard = styled.div<{ isActive?: boolean }>`
  ${({ theme, isActive }) => css`
    max-width: 26rem;
    width: 100%;
    position: relative;
    span {
      display: block;
      opacity: 0.5;
    }
    strong {
      display: block;
      font-size: 2rem;
      margin: 1rem 0;
    }
    :after {
      content: '';
      position: absolute;
      width: 1rem;
      height: 1rem;
      top: 0;
      left: 0;
      transform: translateY(-6rem);
      border-radius: 50%;
      background: ${isActive ? theme.colors.primary : theme.colors.text};
    }
    ${isActive &&
    css`
      :before {
        content: '';
        position: absolute;
        width: 1.5rem;
        height: 1.5rem;
        top: 0;
        left: 0;
        transform: translateY(-6.4rem);
        margin-left: -0.33rem;
        border-radius: 50%;
        border: 1px solid ${theme.colors.primary};
      }
    `}

    :not(:last-child) {
      margin-right: 1rem;
    }
  `}
`;

export const Rules = styled.div`
  ${({ theme }) => css`
    margin-top: 5rem;
    padding: 3rem 0;
    background: ${theme.colors.secondaryBackgroundOpacity};
    h3 {
      font-size: 1.8rem;
      margin-bottom: 1rem;
    }
  `}
`;
export const RulesWrapper = styled.div`
  display: grid;
  grid-template-areas:
    'rule1 rule2 rule3 rule4'
    'rule5 rule6 rule7 rule7';
  grid-gap: 1rem;
`;

export const RulesContent = styled.div`
  max-width: 90rem;
  margin: 0 auto;
`;

export const RuleCard = styled.div`
  ${({ theme }) => css`
    padding: 1.5rem;
    background: ${theme.colors.inverse};
    span {
      display: block;
      font-weight: bold;
      margin-bottom: 1rem;
    }
    :nth-child(1) {
      grid-area: rule1;
    }
    :nth-child(2) {
      grid-area: rule2;
    }
    :nth-child(3) {
      grid-area: rule3;
    }
    :nth-child(4) {
      grid-area: rule4;
    }
    :nth-child(5) {
      grid-area: rule5;
    }
    :nth-child(6) {
      grid-area: rule6;
    }
    :nth-child(7) {
      grid-area: rule7;
    }
  `}
`;
