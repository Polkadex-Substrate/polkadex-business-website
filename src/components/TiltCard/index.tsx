import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from 'framer-motion';
import { ReactNode, useRef } from 'react';

type Props = {
  children: ReactNode;
  /** Max tilt in degrees. Keep small (2–4) for a premium feel. */
  maxTilt?: number;
  className?: string;
};

/**
 * Subtle 3D perspective tilt that follows the mouse — makes static
 * screenshots feel interactive. Springs back to flat on mouse-leave.
 * No-ops for touch devices (no mousemove) and reduced-motion users.
 */
export const TiltCard = ({ children, maxTilt = 3, className }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const rotateX = useSpring(useTransform(rx, [-0.5, 0.5], [maxTilt, -maxTilt]), {
    stiffness: 150,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(ry, [-0.5, 0.5], [-maxTilt, maxTilt]), {
    stiffness: 150,
    damping: 20,
  });

  if (reduced) return <div className={className}>{children}</div>;

  const onMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    ry.set((e.clientX - rect.left) / rect.width - 0.5);
    rx.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const onMouseLeave = () => {
    rx.set(0);
    ry.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1200,
        transformStyle: 'preserve-3d',
      }}
    >
      {children}
    </motion.div>
  );
};
