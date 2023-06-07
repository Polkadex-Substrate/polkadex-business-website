import * as S from './styles';
import * as T from './types';

export const Button = ({
  isFull = false,
  background = 'text',
  color = 'inverse',
  children,
  size = 'medium',
  hoverColor = 'primary',
  isLoading = false,
  ...props
}: T.Props) => (
  <S.Wrapper
    size={size}
    background={background}
    color={color}
    isFull={isFull}
    isDisabled={props.disabled}
    hoverColor={hoverColor}
    isLoading={isLoading}
    {...props}
  >
    {isLoading ? <p>Loading</p> : children}
  </S.Wrapper>
);
