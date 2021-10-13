import * as S from './styles';
import Props from './types';

const PartnerCard = ({ name, width, opacity = 1 }: Props) => (
  <S.Wrapper width={width} opacity={opacity}>
    {name && <img src={`/img/partners/${name}.svg`} alt={`${name} Logo`} />}
  </S.Wrapper>
);

export default PartnerCard;
