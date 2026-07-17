import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';
import { useEffect, useState } from 'react';

import * as S from './styles';

const RADIUS = 20;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

/**
 * Floating "back to top" button with a scroll-progress ring.
 * - Hidden until the user scrolls past the first screen (600px).
 * - The ring fills with reading progress, doubling as a position indicator.
 * - Click glides back to the top (instant for reduced-motion users).
 */
export const BackToTop = () => {
  const [visible, setVisible] = useState(false);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 28 });
  const dashOffset = useTransform(
    progress,
    [0, 1],
    [CIRCUMFERENCE, 0],
  );

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' });
  };

  return (
    <AnimatePresence>
      {visible && (
        <S.Button
          as={motion.button}
          type="button"
          aria-label="Back to top"
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 16, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.9 }}
          transition={{ duration: 0.25, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <svg viewBox="0 0 48 48" aria-hidden="true">
            {/* Track */}
            <circle
              className="track"
              cx="24"
              cy="24"
              r={RADIUS}
              fill="none"
              strokeWidth="2.5"
            />
            {/* Progress ring — fills with page scroll */}
            <motion.circle
              className="progress"
              cx="24"
              cy="24"
              r={RADIUS}
              fill="none"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeDasharray={CIRCUMFERENCE}
              style={{ strokeDashoffset: dashOffset }}
              transform="rotate(-90 24 24)"
            />
            {/* Arrow */}
            <path
              className="arrow"
              d="M24 30 V18 M18.5 23.5 L24 18 L29.5 23.5"
              fill="none"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </S.Button>
      )}
    </AnimatePresence>
  );
};
