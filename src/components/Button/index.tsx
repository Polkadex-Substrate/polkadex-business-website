import * as S from './styles';
import { ButtonFormProps, ButtonProps } from './types';

export const PrimaryButton = ({
  icon = 'doubleArrow',
  content = 'Example',
  withOpacity = false,
  href = '#',
  background = 'primary',
}: ButtonProps) => (
  <S.PrimaryWrapper
    href={href}
    withOpacity={withOpacity}
    background={background}
  >
    <div>
      <img src={`/img/icons/${icon}.svg`} alt="Icon Description" />
    </div>
    {content}
  </S.PrimaryWrapper>
);

export const SecondaryButton = ({
  icon = 'doubleArrowRight',
  content = 'Example',
  href = '#',
  background = 'none',
}: ButtonProps) => (
  <S.SecondaryWrpaper href={href} background={background}>
    {content}
    <div>
      <img src={`/img/icons/${icon}.svg`} alt="Icon Description" />
    </div>
  </S.SecondaryWrpaper>
);

export const FormButton = ({
  icon = 'doubleArrow',
  content = 'Example',
  action,
  type = 'button',
  disable = false,
}: ButtonFormProps) => (
  <S.FormWrapper type={type} onClick={action} disabled={disable}>
    <div>
      <img src={`/img/icons/${icon}.svg`} alt="Icon Description" />
    </div>
    {content}
  </S.FormWrapper>
);
