import { motion } from 'framer-motion';
import * as React from 'react';

export function ExchangeCircle(props: React.SVGProps<SVGSVGElement>) {
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
        fill="url(#paint0_radial_1567_14103)"
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
        fill="url(#paint1_radial_1567_14103)"
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
      <path
        d="M51.8164 46.1696L46.4121 51.5847"
        stroke="#7F7F7F"
        strokeWidth="1.61804"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M33.4785 46.1696H51.8163"
        stroke="#7F7F7F"
        strokeWidth="1.61804"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M33.4785 39.719L38.8828 34.304"
        stroke="#F2F2F2"
        strokeWidth="1.61804"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M51.8163 39.7191H33.4785"
        stroke="#F2F2F2"
        strokeWidth="1.61804"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <radialGradient
          id="paint0_radial_1567_14103"
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
          id="paint1_radial_1567_14103"
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
