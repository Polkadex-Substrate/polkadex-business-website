import * as React from 'react';

export function Airplane(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 123 85"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M0 40.5L123 0L32.204 49.729L0 40.5Z" fill="#E6007A" />
      <path d="M123 0L32.2051 49.729L46.7851 80.798L123 0Z" fill="#C2066A" />
      <path d="M123 0L46 53.5L85.5 84.5L123 0Z" fill="#E6007A" />
      <path
        d="M46.7852 80.7982L45.5 53L61.5 65.5L46.7852 80.7982Z"
        fill="#96004F"
      />
    </svg>
  );
}
