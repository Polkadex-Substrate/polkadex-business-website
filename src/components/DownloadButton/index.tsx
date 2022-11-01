import {FC, ReactNode} from 'react';
import * as S from './styles';
type TProps = {
  icon: ReactNode;
  title: string;
};
export const DownloadButton: FC<TProps> = ({icon, title}) => {
  return (
    <S.Wrapper>
      <S.Icon>{icon}</S.Icon>
      <S.ContentWrapper>
        <S.Download>Download on the</S.Download>
        <S.Title>{title}</S.Title>
      </S.ContentWrapper>
    </S.Wrapper>
  );
};
