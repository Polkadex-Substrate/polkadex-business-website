import { Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

type Props = {
  variants?: Variants;
  duration: number;
};

const defaultVariants: Variants = {
  visible: { opacity: 0, y: '8rem' },
  hidden: { opacity: 1, y: 0 },
};

export function useAnimation({ variants, duration }: Props) {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  return {
    ref,
    variants: variants ?? defaultVariants,
    animate: inView ? 'hidden' : 'visible',
    transition: {
      duration,
    },
  };
}
