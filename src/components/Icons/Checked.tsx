import * as React from 'react';

function SvgChecked(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 75 58"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M75 10L65 0L26.5 38.5L10 22L0.5 31.5L27 58L75 10Z" />
    </svg>
  );
}

export default SvgChecked;
