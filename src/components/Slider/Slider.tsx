import React, {FC, ReactNode, RefObject, useRef} from 'react';

import Sliders, {Settings} from 'react-slick';

import * as Icons from 'components/Icons';
import * as S from './styles';

type TProps = Settings & {
  children: ReactNode[];
  customRef?: any;
};

export const Slider: FC<TProps> = ({children, customRef, ...props}) => {
  const ref = useRef<Sliders>(null);

  return (
    <div style={{position: 'relative'}}>
      {props.arrows && (
        <>
          <S.Controls onClick={() => ref.current.slickPrev()}>
            <Icons.ArrowLeft />
          </S.Controls>
          <S.Controls onClick={() => ref.current.slickNext()}>
            <Icons.ArrowLeft />
          </S.Controls>
        </>
      )}
      <Sliders
        {...props}
        ref={(e: any) => {
          ref.current = e;
          if (customRef) customRef.current = e;
        }}
        arrows={false}
      >
        {children}
      </Sliders>
    </div>
  );
};
