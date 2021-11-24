import { ThemingContext } from 'context';
import { useContext } from 'react';

import * as S from './styles';

const InvestorCard = ({ name = 'M6', link = '/' }) => {
  const { theme } = useContext(ThemingContext);

  return (
    <S.Wrapper href={link} isLight={theme.value.title === 'light'}>
      <img src={`/img/investors/${name}.png`} alt={`${name} Logo`} />
    </S.Wrapper>
  );
};

export default InvestorCard;
