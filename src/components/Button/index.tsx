import * as Icons from 'components/Icons';

import * as S from './styles';
import { ButtonFormProps, ButtonProps } from './types';

export const PrimaryButton = ({
  icon = 'DoubleArrowRight',
  content = 'Example',
  withOpacity = false,
  href = '#',
  background = 'primary',
}: ButtonProps) => {
  const IconComponent = Icons[icon];

  return (
    <S.PrimaryWrapper
      href={href}
      withOpacity={withOpacity}
      background={background}
    >
      <div>
        <IconComponent />
      </div>
      {content}
    </S.PrimaryWrapper>
  );
};

export const SecondaryButton = ({
  icon = 'DoubleArrowRight',
  content = 'Example',
  href = '#',
  background = 'none',
}: ButtonProps) => {
  const IconComponent = Icons[icon];

  return (
    <S.SecondaryWrpaper href={href} background={background}>
      {content}
      <div>
        <IconComponent />
      </div>
    </S.SecondaryWrpaper>
  );
};

export const FormButton = ({
  icon = 'DoubleArrowRight',
  content = 'Example',
  action,
  type = 'button',
  disable = false,
}: ButtonFormProps) => {
  const IconComponent = Icons[icon];

  return (
    <S.FormWrapper type={type} onClick={action} disabled={disable}>
      <div>
        <IconComponent />
      </div>
      {content}
    </S.FormWrapper>
  );
};
