import * as S from './styles';
import Props from './types';

const Icon = ({
  name = 'twitter',
  alt = 'Icon Description',
  link = '/',
}: Props) => (
  <S.Wrapper href={link}>
    <img src={`/img/icons/${name}.svg`} alt={alt} />
  </S.Wrapper>
);

export default Icon;
