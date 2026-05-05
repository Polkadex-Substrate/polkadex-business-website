import { motion } from 'framer-motion';
import * as React from 'react';

export function SwapCircle(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 86 86"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <motion.circle
        cx="43"
        cy="43"
        r="43"
        fill="url(#paint0_radial_1567_17694)"
        animate={{
          opacity: [0, 1, 1, 0],
          scale: [0, 0.5, 1, 1],
        }}
        transition={{
          duration: 5,
          ease: 'easeInOut',
          times: [0, 0.1, 0.4, 0.7, 0.9],
          repeat: Infinity,
        }}
      />
      <motion.circle
        cx="43"
        cy="43"
        r="42.6322"
        stroke="#8BA1BE"
        strokeOpacity="0.2"
        strokeWidth="0.735637"
        animate={{
          opacity: [0, 1, 1, 0],
          scale: [0, 0.5, 1, 1],
        }}
        transition={{
          duration: 5,
          ease: 'easeInOut',
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
        }}
      />
      <motion.circle
        cx="43"
        cy="43"
        r="32"
        fill="url(#paint1_radial_1567_17694)"
        animate={{
          opacity: [0, 1, 1, 0],
          scale: [0, 0.5, 1, 1],
        }}
        transition={{
          duration: 5,
          ease: 'easeInOut',
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
        }}
      />
      <circle
        cx="43"
        cy="43"
        r="31.6322"
        stroke="#8BA1BE"
        strokeOpacity="0.2"
        strokeWidth="0.735637"
      />
      <circle
        cx="50.3834"
        cy="49.5321"
        r="4.04506"
        stroke="#7F7F7F"
        strokeWidth="1.61812"
      />
      <circle
        cx="36.36"
        cy="36.5873"
        r="4.04506"
        stroke="#F2F2F2"
        strokeWidth="1.61812"
      />
      <circle cx="36.3616" cy="36.5874" r="0.539347" fill="#F2F2F2" />
      <circle cx="50.3851" cy="49.5323" r="0.539347" fill="#7F7F7F" />
      <path
        d="M43.3717 36.0481H46.2626C48.2582 36.0481 49.1859 38.5183 47.6865 39.8343L39.0677 47.3744C37.5683 48.6796 38.496 51.1498 40.4808 51.1498H43.3717"
        stroke="#F2F2F2"
        strokeWidth="1.61812"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <radialGradient
          id="paint0_radial_1567_17694"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(59.9919 19.9395) rotate(104.425) scale(68.2108)"
        >
          <stop stopColor="white" stopOpacity="0.08" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </radialGradient>
        <radialGradient
          id="paint1_radial_1567_17694"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(55.6452 25.8387) rotate(104.425) scale(50.7615)"
        >
          <stop stopColor="white" stopOpacity="0.08" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
}
