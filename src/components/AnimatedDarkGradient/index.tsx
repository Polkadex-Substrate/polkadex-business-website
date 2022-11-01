import { FC, ReactNode, useEffect, useRef, useState } from 'react';

import * as S from './styles';

type TProps = {
  children: ReactNode | ReactNode[];
};

export const AnimatedDarkGradient: FC<TProps> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setHeight(ref.current.clientHeight || 0);
  }, []);

  return (
    <S.Wrapper ref={ref} clientHeight={height}>
      {children}
    </S.Wrapper>
  );
};
