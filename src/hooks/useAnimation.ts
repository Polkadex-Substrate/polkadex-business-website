import { useAnimation as useAnimationFramer, Variants } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

type Props = {
  variants: Variants;
  duration: number;
};
export default function useAnimation({ variants, duration }: Props) {
  const control = useAnimationFramer();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start('final');
    } else {
      control.start('initial');
    }
  }, [control, inView]);

  return {
    ref,
    variants,
    animate: control,
    initial: Object.getOwnPropertyNames(variants)[0],
    transition: {
      duration,
    },
  };
}
