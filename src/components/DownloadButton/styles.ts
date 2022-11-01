import styled from 'styled-components';

export const Wrapper = styled.a`
  width: 170px;
  height: 60px;
  background-color: ${({theme}) => theme.colors.white};
  color: ${({theme}) => theme.colors.black};
  border-radius: 11px;
  padding: 11px 11px 11px 22px;
  display: flex;
  align-items: center;
  text-decoration: none;
  pointer-events: none;

  @media screen and (max-screen: 562px) {
    width: 200px;
  }
`;

export const Icon = styled.div`
  margin-right: 10px;
`;
export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Download = styled.span`
  font-size: 11px;
  @media screen and (min-width: 995px) and (max-width: 1200px) {
    font-size: 9px;
  }
`;
export const Title = styled.span`
  font-weight: 600;
  font-size: 16px;
  @media screen and (min-width: 995px) and (max-width: 1200px) {
    font-size: 15px;
  }
`;
