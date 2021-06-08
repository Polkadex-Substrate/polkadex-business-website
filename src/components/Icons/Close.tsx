import * as React from 'react';

function SvgClose(props: React.SVGProps<SVGSVGElement>) {
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
        d="M13.703 13.129a.7.7 0 01.991 0l4.051 4.05a.991.991 0 01-1.402 1.402l-4.05-4.05a.7.7 0 010-.992l.41-.41z"
        fill="#fff"
        fillOpacity={0.5}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.828 18.581a.991.991 0 11-1.402-1.401l5.258-5.258-5.258-5.257a.991.991 0 011.402-1.402l5.257 5.257 5.258-5.257a.991.991 0 011.402 1.402L6.828 18.58z"
        fill="#fff"
      />
    </svg>
  );
}

export default SvgClose;
