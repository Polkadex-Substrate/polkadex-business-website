import * as React from 'react';

function SvgWaiting(props: React.SVGProps<SVGSVGElement>) {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.208 10.396a8.312 8.312 0 11-16.625 0 8.312 8.312 0 0116.625 0zm-1.583 0a6.73 6.73 0 11-13.459 0 6.73 6.73 0 0113.459 0z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.291 10h3.167a.792.792 0 010 1.584H9.5a.79.79 0 01-.792-.792V6.834a.792.792 0 111.583 0V10z"
        fillOpacity={0.5}
      />
    </svg>
  );
}

export default SvgWaiting;
