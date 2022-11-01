import * as React from 'react';

function DoneIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="18"
      viewBox="0 0 24 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M2 8.5L8.66667 15L22 2" stroke="#02C076" strokeWidth="3" />
    </svg>
  );
}

export default DoneIcon;
