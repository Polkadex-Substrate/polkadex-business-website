import { motion, useReducedMotion } from 'framer-motion';
import { ReactNode } from 'react';

/* ── Motion feel ─────────────────────────────────────────────────────────
 * Tuned to read like ikea.com: reveals travel further and settle slowly.
 * EASE is an expo-out curve — it covers most of the distance quickly, then
 * spends the rest of the (long) duration easing into place. That's what
 * makes a 1s+ animation feel graceful instead of sluggish: the content is
 * readable early, only the settle is slow.
 */
const EASE = [0.16, 1, 0.3, 1] as const;

type Props = {
  children: ReactNode;
  /** Amount of vertical slide-in in pixels. Defaults to 56. */
  distance?: number;
  /** Reveal duration in seconds. Defaults to 1.1. */
  duration?: number;
  /** Optional stagger delay in seconds (useful for chaining reveals). */
  delay?: number;
  /**
   * How far into the viewport the element must be before revealing.
   * Negative values delay the trigger (element must be more visible).
   * Default '-80px' waits until ~80px of the element is in view.
   */
  margin?: string;
  /** Pass through className if the wrapper needs styling. */
  className?: string;
};

/**
 * Wraps its children in a subtle fade-up animation that plays once when
 * the element scrolls into view. Uses framer-motion's whileInView so it
 * doesn't fire repeatedly and doesn't tie into scroll position math.
 *
 * Respects `prefers-reduced-motion` — users with reduced-motion enabled
 * see content instantly without animation.
 */
export const ScrollReveal = ({
  children,
  distance = 56,
  duration = 1.1,
  delay = 0,
  // Slightly earlier trigger than before (-60px vs -80px): with the longer
  // duration, starting sooner means the element has finished settling by
  // the time the reader's eye reaches it.
  margin = '-60px',
  className,
}: Props) => {
  const reduced = useReducedMotion();

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: distance }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin }}
      transition={{ duration, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
};

/* ── Staggered grids ─────────────────────────────────────────────────────
 * Wrap a card grid in <StaggerGroup> and each card in <StaggerChild> to
 * cascade the cards in one-by-one as the grid scrolls into view.
 * Variants propagate through intermediate plain elements (the styled grid
 * div), so the structure can stay:
 *   <StaggerGroup><S.Grid><StaggerChild>…</StaggerChild></S.Grid></StaggerGroup>
 */

const groupVariants = {
  hidden: {},
  show: {
    // Wider stagger gap so each card's entrance is individually legible —
    // at 0.09s the cards read as one blob; at 0.15s the cascade is visible.
    transition: { staggerChildren: 0.15, delayChildren: 0.15 },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 44 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.95, ease: EASE },
  },
};

export const StaggerGroup = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  const reduced = useReducedMotion();
  if (reduced) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      variants={groupVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-40px' }}
    >
      {children}
    </motion.div>
  );
};

export const StaggerChild = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  const reduced = useReducedMotion();
  if (reduced) return <div className={className}>{children}</div>;
  return (
    <motion.div className={className} variants={childVariants}>
      {children}
    </motion.div>
  );
};

/* Prop bundles for use with styled-components' polymorphic `as` — keeps
 * the exact DOM/grid structure while adding the cascade:
 *
 *   <S.Grid as={motion.div} {...staggerGroupProps}>
 *     <S.Card as={motion.div} {...staggerChildProps}>…</S.Card>
 *   </S.Grid>
 */
export const staggerGroupProps = {
  variants: groupVariants,
  initial: 'hidden',
  whileInView: 'show',
  viewport: { once: true, margin: '-40px' },
} as const;

export const staggerChildProps = {
  variants: childVariants,
} as const;
