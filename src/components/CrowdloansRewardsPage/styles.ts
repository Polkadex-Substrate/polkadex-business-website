import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    max-width: 100rem;
    margin: 7rem auto 0 auto;
    padding-top: 4rem;
    @media screen and (max-width: 1000px) {
      padding-left: 1rem;
      padding-right: 1rem;
    }
  `}
`;

export const InputWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;

    border-bottom: 2px solid ${theme.colors.secondaryBackground};
  `}
`;

export const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.div`
  width: 100%;
  input {
    width: 97%;
    font-size: x-large;
    padding: 1rem 2rem;
    color: white;
  }
`;

export const Paste = styled.button`
  ${({ theme }) => css`
    border-radius: ${theme.border.radius.small};
    background-color: ${theme.colors.secondaryBackgroundOpacity};
    color: white;
    width: 11rem;
    height: 4rem;
    cursor: pointer;
    flex-shrink: 0;
  `}
`;

export const InfoWrapper = styled(Center)`
  ${({ theme }) => css`
    margin: 7rem;
    flex-direction: column;
    h2 {
      font-weight: 500;
      font-size: xx-large;
      text-align: center;
    }
    p {
      padding: 2rem;
      width: 80%;
      text-align: center;
      font-size: large;
      color: #bdbdbd;
    }
  `}
`;

export const WhiteText = styled.span`
  color: white;
`;

export const UnderlinedText = styled(WhiteText)`
  text-decoration: underline;
`;

export const InfoWrapperContributed = styled(InfoWrapper)`
  ${({ theme }) => css`
    margin: 5rem 0 15rem 0;
    h2,
    p {
      font-weight: 400;
      text-align: left;
      padding: 2rem 0 0 0;
    }
  `}
`;

export const InfoWrapperDidnt = styled(Center)`
  ${({ theme }) => css`
    margin: 7rem;
    flex-direction: column;
    h2 {
      font-weight: 500;
      font-size: xx-large;
    }
    p {
      padding: 2rem;
      width: 70%;
      text-align: center;
      font-size: large;
      color: #bdbdbd;
    }
  `}
`;

export const ListWrapper = styled.div`
  background-color: rgba(256, 256, 256, 0.01);
  border-radius: 1.7rem;
  padding: 9rem;
  backdrop-filter: blur(2rem);
  max-width: 100rem;
  width: 100%;
  box-shadow: 0px 38.8687px 166.907px rgba(0, 0, 0, 0.24);
`;

export const Badge = styled.div`
  background-color: white;
  border-radius: 6rem;
  padding: 0.4rem 0.6rem;
  color: black;
  font-size: small;
  margin-left: 2rem;
`;

export const ListHeader = styled.div`
  display: flex;
  align-items: center;
  font-weight: 400;
  font-size: large;
  margin-bottom: 6rem;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableRow = styled.tr`
  background-color: ${(props) =>
    props.isOdd ? 'transparent' : 'rgba(139,161,190,0.05)'};
`;

export const TableCell = styled.td`
  padding: 1.5rem;
`;

export const TableCellUnder = styled(TableCell)`
  text-decoration: underline;
`;
