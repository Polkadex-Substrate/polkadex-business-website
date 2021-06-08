import * as Icons from 'components/Icons';

import * as S from './styles';
import Props from './types';

const Icon = ({
  name = 'Twitter',
  alt = 'Icon Description',
  link = '/',
}: Props) => {
  const IconComponent = Icons[name];

  return (
    <S.Wrapper href={link}>
      <IconComponent />
    </S.Wrapper>
  );
};
export default Icon;
