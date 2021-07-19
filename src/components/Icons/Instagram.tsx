import * as React from 'react';

function SvgInstagram(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17 8a1 1 0 100-2 1 1 0 000 2z"
        fillOpacity={0.5}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 2h8a6 6 0 016 6v8a6 6 0 01-6 6H8a6 6 0 01-6-6V8a6 6 0 016-6zm0 2a4 4 0 00-4 4v8a4 4 0 004 4h8a4 4 0 004-4V8a4 4 0 00-4-4H8zm1.577 11.337a1 1 0 00.553 1.302 5 5 0 10-2.767-2.764 1 1 0 101.855-.75 3 3 0 111.661 1.66 1 1 0 00-1.302.552z"
      />
    </svg>
  );
}

export default SvgInstagram;
