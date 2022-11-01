import React, { FC, useContext, useEffect, useRef } from 'react';

import * as S from './styles';

type TProps = {
  title: string;
  setIsOpened: () => any;
  isOpened: boolean;
};
export const SelectBox: FC<TProps> = ({ title, setIsOpened, isOpened }) => {
  return (
    <S.Wrapper>
      <S.Select>
        <option selected disabled>
          {title}
        </option>
      </S.Select>
    </S.Wrapper>
  );
};
