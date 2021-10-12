import * as Icons from 'components/Icons';

import * as S from './styles';
import Props from './types';

const PartnerCard = ({ name, height = '8rem', width, opacity = 1 }: Props) => {
  const IconComponent = name && Icons[name];

  return (
    <S.Wrapper width={width} opacity={opacity} height={height}>
      {name && <IconComponent />}
    </S.Wrapper>
  );
};

export default PartnerCard;
