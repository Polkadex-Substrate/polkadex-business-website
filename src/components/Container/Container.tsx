import React, { FC, ReactNode, useEffect, useRef, useState } from 'react';

import { ObservBox, Wrapper } from './Container.styles';

type TProps = {
  children: ReactNode | ReactNode[];
  hasNotRelative?: boolean;
};

export const Container: FC<TProps> = ({ children, hasNotRelative = false }) => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const callbackFunction = (entries) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '100px',
      threshold: 1,
    };

    const observer = new IntersectionObserver(callbackFunction, options);
    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, [containerRef]);

  // console.log('Visible: ', isVisible);

  return (
    <Wrapper isVisible={isVisible} hasNotRelative={hasNotRelative}>
      {/* <ObservBox className="box" ref={containerRef} /> */}
      {children}
    </Wrapper>
  );
};
