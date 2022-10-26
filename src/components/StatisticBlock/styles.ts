import styled from 'styled-components';

type TProps = {
  viewed: boolean;
};

export const Wrapper = styled.div<TProps>`
  padding: 64px 66px;
  padding-top: 24px;
  display: flex;
  justify-content: space-between;
  /* margin-bottom: 150px; */

  opacity: ${({viewed}) => +viewed};

  transition: 500ms opacity;

  @media screen and (max-width: 1288px) {
    padding: 104px 250px;
    flex-wrap: wrap;
  }

  @media screen and (max-width: 1094px) {
    padding: 64px 160px;
    margin: 0 auto;
    justify-content: center;
  }
  @media screen and (max-width: 849px) {
    padding: 12px 50px;
  }

  @media screen and (max-width: 689px) {
    padding: 12px 150px;
  }
  @media screen and (max-width: 577px) {
    padding: 12px 40px;
  }
`;

export const Block = styled.div`
  max-width: 250px;
  width: 100%;
  padding: 18px 32px;
  background: rgba(139, 161, 190, 0.1);
  border-radius: 15px;

  @media screen and (max-width: 1288px) {
    margin-bottom: 30px;
  }

  @media screen and (max-width: 1094px) {
    width: 230px;

    &:nth-child(even) {
      margin-left: 30px;
    }
  }

  @media screen and (max-width: 849px) {
    width: 250px;
  }
  @media screen and (max-width: 770px) {
    &:nth-child(even) {
      margin-left: 0;
    }
  }

  @media screen and (max-width: 689px) {
    width: 255px;
  }
`;

export const Stat = styled.p`
  color: #e6007a;
  font-style: normal;
  font-size: 5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 5px;

  @media screen and (max-width: 1060px) {
    font-size: 5rem;
  }
`;

export const Description = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 2rem;

  text-align: center;

  @media screen and (max-width: 1060px) {
    font-size: 1.5rem;
  }
`;
