import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled(motion.section)`
  ${({ theme }) => css`
    max-width: 100rem;
    margin: 8rem auto 5rem auto;

    @media screen and (max-width: 1200px) {
      margin: 4rem auto;
    }
  `}
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;
export const Heading = styled.tr`
  font-weight: 400;
  font-size: 1.5rem;
  text-align: left;
  th {
    font-weight: 400;
  }
`;
export const Row = styled.td`
  border: 1px solid rgba(139, 161, 190, 0.2);
  padding: 1rem 2rem;
`;
