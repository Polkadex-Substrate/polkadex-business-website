import { useEffect, useState } from 'react';

export function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: process.browser && window.innerWidth,
    height: process.browser && window.innerHeight,
  });

  const handleSize = () => {
    setWindowSize({
      width: process.browser && window.innerWidth,
      height: process.browser && window.innerHeight,
    });
  };
  useEffect(() => {
    process.browser && window.addEventListener('resize', handleSize);
    return () =>
      process.browser && window.addEventListener('resize', handleSize);
  }, []);
  return {
    width: windowSize.width,
    height: windowSize.height,
  };
}
