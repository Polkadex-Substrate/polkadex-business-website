import * as React from 'react';

function SvgThirdParty(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 63 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M37.419 7.992h4.56a7.792 7.792 0 110 15.585H26.396c-6.455 0-11.688-5.234-11.688-11.689S19.94.2 26.395.2c5.09 0 9.419 3.252 11.024 7.792zm-4.273 0a7.792 7.792 0 10-6.75 11.688H41.98a3.896 3.896 0 000-7.792h-9.74a1.948 1.948 0 010-3.896h.905z"
      />
      <path
        d="M19.872 19.9v18.092c0 1.184-.96 2.143-2.143 2.143h-4.675"
        strokeWidth={3.214}
        strokeLinecap="round"
      />
      <path
        d="M26.884 23.576v5.65c0 1.183-.96 2.143-2.143 2.143H4.286"
        strokeWidth={3.214}
        strokeLinecap="round"
      />
      <circle opacity={0.5} cx={11.493} cy={39.94} r={2.922} />
      <circle opacity={0.5} cx={2.922} cy={31.369} r={2.922} />
      <path
        d="M31.757 21.628v18.507"
        strokeWidth={3.214}
        strokeLinecap="round"
      />
      <circle
        opacity={0.5}
        r={2.922}
        transform="matrix(-1 0 0 1 31.756 41.693)"
      />
      <path
        d="M36.623 23.576v5.65c0 1.183.96 2.143 2.143 2.143h18.02"
        strokeWidth={3.214}
        strokeLinecap="round"
      />
      <path
        d="M45.001 21.628v17.436c0 1.183.96 2.142 2.143 2.142h4.675"
        strokeWidth={3.214}
        strokeLinecap="round"
      />
      <circle
        opacity={0.5}
        r={2.922}
        transform="matrix(-1 0 0 1 53.379 41.011)"
      />
      <path
        opacity={0.5}
        d="M55.715 31.37a2.922 2.922 0 105.845 0 2.922 2.922 0 00-5.845 0z"
      />
    </svg>
  );
}

export default SvgThirdParty;
