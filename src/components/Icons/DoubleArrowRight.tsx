import * as React from 'react';

function SvgDoubleArrowRight(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.193 14.466l3.544-4.253a.333.333 0 000-.426L5.193 5.533a.833.833 0 111.28-1.066l4.167 5a.833.833 0 010 1.066l-4.166 5a.833.833 0 11-1.28-1.066z"
        fill="#fff"
        fillOpacity={0.5}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.36 14.466l3.544-4.253a.333.333 0 000-.426L9.36 5.533a.833.833 0 011.28-1.066l4.167 5a.833.833 0 010 1.066l-4.167 5a.833.833 0 11-1.28-1.066z"
        fill="#fff"
      />
    </svg>
  );
}

export default SvgDoubleArrowRight;
