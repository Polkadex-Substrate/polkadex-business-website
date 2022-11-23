import * as React from 'react';

export function Delegate(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 346 170"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <mask
        id="mask0_1567_13629"
        style={{ maskType: 'alpha' }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="346"
        height="170"
      >
        <path
          d="M0 6C0 2.68629 2.68629 0 6 0H340C343.314 0 346 2.68629 346 6V164C346 167.314 343.314 170 340 170H5.99999C2.68628 170 0 167.314 0 164V6Z"
          fill="white"
        />
        <path
          d="M0.367818 6C0.367818 2.88943 2.88943 0.367818 6 0.367818H340C343.111 0.367818 345.632 2.88943 345.632 6V164C345.632 167.111 343.111 169.632 340 169.632H5.99999C2.88942 169.632 0.367818 167.111 0.367818 164V6Z"
          stroke="#8BA1BE"
          strokeOpacity="0.2"
          strokeWidth="0.735637"
        />
      </mask>
      <g mask="url(#mask0_1567_13629)">
        <circle
          cx="21.5"
          cy="134.5"
          r="120.5"
          fill="url(#paint0_radial_1567_13629)"
        />
        <circle
          cx="21.5"
          cy="134.5"
          r="120.132"
          stroke="#8BA1BE"
          strokeOpacity="0.2"
          strokeWidth="0.735637"
        />
        <circle
          cx="21.5873"
          cy="134.77"
          r="90.3236"
          fill="url(#paint1_radial_1567_13629)"
        />
        <circle
          cx="21.5873"
          cy="134.77"
          r="89.4509"
          stroke="#8BA1BE"
          strokeOpacity="0.1"
          strokeWidth="1.74553"
        />
        <path
          d="M42.2977 105.252L35.0206 107.994C33.3435 108.621 31.9727 110.604 31.9727 112.383V123.219C31.9727 124.94 33.1102 127.2 34.4956 128.235L40.7664 132.917C42.8227 134.463 46.206 134.463 48.2622 132.917L54.5331 128.235C55.9185 127.2 57.056 124.94 57.056 123.219V112.383C57.056 110.59 55.6852 108.606 54.0081 107.979L46.731 105.252C45.4914 104.8 43.5081 104.8 42.2977 105.252Z"
          stroke="white"
          strokeWidth="2.1875"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M40.1992 119.31L42.5471 121.658L48.818 115.388"
          stroke="white"
          strokeWidth="2.1875"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <radialGradient
          id="paint0_radial_1567_13629"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(69.1169 69.877) rotate(104.425) scale(191.149)"
        >
          <stop stopColor="white" stopOpacity="0.08" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </radialGradient>
        <radialGradient
          id="paint1_radial_1567_13629"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(57.2797 86.3301) rotate(104.425) scale(143.28)"
        >
          <stop stopOpacity="0.08" />
          <stop offset="1" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
}
