import { animate, useInView, useReducedMotion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

type Props = {
  /** Display value, e.g. "5,460", "7.15 million", "14.2%", "200". */
  value: string;
  /** Count duration in seconds. */
  duration?: number;
};

/**
 * Parses the leading number out of a formatted string and counts up to it
 * when scrolled into view, preserving any prefix/suffix text
 * ("7.15 million" → counts 0 → 7.15, keeps " million").
 * Falls back to static text for reduced-motion users or non-numeric values.
 */
export const CountUp = ({ value, duration = 1.4 }: Props) => {
  const match = value.replace(/,/g, '').match(/^([^\d-]*)(-?[\d.]+)(.*)$/);
  const prefix = match?.[1] ?? '';
  const target = match ? parseFloat(match[2]) : NaN;
  const suffix = match?.[3] ?? '';
  const decimals = match?.[2].includes('.')
    ? (match[2].split('.')[1] ?? '').length
    : 0;
  const useThousands = value.includes(',');

  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const reduced = useReducedMotion();
  const [display, setDisplay] = useState(
    reduced || Number.isNaN(target) ? value : `${prefix}0${suffix}`,
  );

  useEffect(() => {
    if (reduced || !inView || Number.isNaN(target)) return undefined;
    const controls = animate(0, target, {
      duration,
      ease: [0.25, 0.4, 0.25, 1],
      onUpdate: (v) => {
        const num = useThousands
          ? Math.round(v).toLocaleString('en-US')
          : v.toFixed(decimals);
        setDisplay(`${prefix}${num}${suffix}`);
      },
      onComplete: () => setDisplay(value),
    });
    return () => controls.stop();
  }, [inView, reduced, target, duration, prefix, suffix, decimals, useThousands, value]);

  return <span ref={ref}>{display}</span>;
};
