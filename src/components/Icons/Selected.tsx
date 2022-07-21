import * as React from 'react';

function SvgSelected(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 19 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        opacity={0.5}
        fillRule="evenodd"
        clipRule="evenodd"
        fill="#02C076"
        d="M8.551 13.71c.44.439.44 1.15 0 1.588a1.126 1.126 0 01-1.59 0l-3.043-3.215A1.123 1.123 0 115.55 10.54L8.55 13.71z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        fill="#02C076"
        d="M8.634 15.348c-.439.44-1.15.44-1.588 0a1.126 1.126 0 010-1.59l7.901-7.73a1.124 1.124 0 011.572 1.607l-7.885 7.713z"
      />
    </svg>
  );
}

export default SvgSelected;
