import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  ${({ theme }) => css`
    padding: 8rem 1rem;
    max-width: ${theme.grid.container};
    margin: 0 auto;
  `}
`;
export const Title = styled.div``;
export const Comparison = styled.div``;
export const ComparisonCard = styled.div``;
export const ComparisonContainer = styled.div``;
export const Overview = styled.div``;
export const OverviewCard = styled.div``;
