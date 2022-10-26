import React, { FC, ReactNode } from 'react';

import * as S from './styles';

type TProps = {
  children: ReactNode;
};

export const FlyCube: FC<TProps> = ({ children }) => {
  return <S.Wrapper>{children} </S.Wrapper>;
};
