import * as S from './styles';

const InvestorCard = ({ name = 'M6', link = '/' }) => (
  <S.Wrapper href={link}>
    <img src={`/img/investors/${name}.png`} alt={`${name} Logo`} />
  </S.Wrapper>
);

export default InvestorCard;
