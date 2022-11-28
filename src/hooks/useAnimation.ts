import { useAnimation as useAnimationFramer, Variants } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

type Props = {
  variants?: Variants;
  duration: number;
};

const defaultVariants: Variants = {
  initial: { opacity: 0, translateY: '8rem' },
  final: { opacity: 1, translateY: 0 },
};

export function useAnimation({ variants, duration }: Props) {
  const control = useAnimationFramer();
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      control.start('final');
    }
  }, [control, inView]);

  return {
    ref,
    variants: variants ?? defaultVariants,
    animate: control,
    initial: Object.getOwnPropertyNames(variants ?? defaultVariants)[0],
    transition: {
      duration,
    },
  };
}
