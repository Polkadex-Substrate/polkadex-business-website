import * as React from 'react';

export function BetterLooking(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 500 156"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <mask
        id="mask0_2805_11215"
        style={{ maskType: 'alpha' }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="500"
        height="156"
      >
        <path
          d="M0 6C0 2.6863 2.68629 0 6 0H494C497.314 0 500 2.68629 500 6V150C500 153.314 497.314 156 494 156H6.00001C2.6863 156 0 153.314 0 150V6Z"
          fill="white"
        />
        <path
          d="M6 0.367818H494C497.111 0.367818 499.632 2.88943 499.632 6V150C499.632 153.111 497.111 155.632 494 155.632H6.00001C2.88944 155.632 0.367818 153.111 0.367818 150V6C0.367818 2.88944 2.88943 0.367818 6 0.367818Z"
          stroke="#8BA1BE"
          strokeOpacity="0.2"
          strokeWidth="0.735637"
        />
      </mask>
      <g mask="url(#mask0_2805_11215)">
        <circle
          cx="10.5"
          cy="131.5"
          r="109.5"
          fill="url(#paint0_radial_2805_11215)"
        />
        <circle
          cx="10.5"
          cy="131.5"
          r="109.166"
          stroke="#8BA1BE"
          strokeOpacity="0.2"
          strokeWidth="0.668483"
        />
        <circle
          cx="10.5803"
          cy="131.745"
          r="82.0783"
          fill="url(#paint1_radial_2805_11215)"
        />
        <circle
          cx="10.5803"
          cy="131.745"
          r="81.2852"
          stroke="#8BA1BE"
          strokeOpacity="0.1"
          strokeWidth="1.58619"
        />
        <circle
          cx="31.4027"
          cy="100.287"
          r="2.4125"
          fill="#1C1C26"
          stroke="#1C1C26"
          strokeWidth="2"
        />
        <path
          d="M26.6317 99.8387H20.5622M27.9805 96.7903L23.5969 92.3871M32.0268 95.0968V89M35.0616 96.7903L39.4451 92.3871M36.7475 100.177H42.8171M19.8878 118.806L29.6664 131H41.4683C45.1776 131 47.875 126.597 47.875 123.21V113.048C47.875 110.339 43.4915 109.661 43.4915 113.048V116.774V111.694C43.4915 108.645 38.7707 108.306 38.7707 111.694V115.419V110.339C38.7707 106.952 34.3872 107.121 34.3872 110.339V114.065V100.177C34.3872 96.7903 29.6664 96.7903 29.6664 100.177V118.806L26.2945 115.419C22.2483 111.355 16.8531 114.742 19.8878 118.806Z"
          stroke="white"
          strokeWidth="2"
        />
      </g>
      <defs>
        <radialGradient
          id="paint0_radial_2805_11215"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(53.7702 72.7762) rotate(104.425) scale(173.7)"
        >
          <stop stopColor="white" stopOpacity="0.08" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </radialGradient>
        <radialGradient
          id="paint1_radial_2805_11215"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(43.0145 87.7274) rotate(104.425) scale(130.201)"
        >
          <stop stopOpacity="0.08" />
          <stop offset="1" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
}
