import * as Icons from 'components/Icons';

import * as S from './styles';
import { Props } from './types';

export const Icon = ({
  name = 'Twitter',
  link = '#',
  size = 'normal',
  isActive = false,
  background = 'secondaryBackground',
  hoverable = false,
  ...props
}: Props) => {
  const IconComponent = Icons[name];

  return (
    <S.Wrapper
      href={link}
      size={size}
      isActive={isActive}
      background={background}
      hoverable={hoverable}
      {...props}
    >
      <IconComponent />
    </S.Wrapper>
  );
};
