import * as React from 'react';

function SvgEthereum(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 12 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g opacity={0.8} fill="#fff">
        <path d="M5.941.077L5.816.5v12.314l.125.125 5.716-3.38L5.941.078z" />
        <path d="M5.941.077L.226 9.56 5.94 12.94V.077zM5.941 14.8l-.07.085v4.386l.07.206 5.72-8.055L5.94 14.8z" />
        <path d="M5.941 19.477v-4.678L.226 11.422l5.715 8.055zM5.941 12.94l5.716-3.379-5.716-2.598v5.977z" />
        <path d="M.226 9.56l5.715 3.38V6.962L.226 9.56z" />
      </g>
    </svg>
  );
}

export default SvgEthereum;
