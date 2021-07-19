import * as React from 'react';

function SvgGooglePlus(props: React.SVGProps<SVGSVGElement>) {
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
        d="M18 12v-1.4a.6.6 0 01.6-.6h.8a.6.6 0 01.6.6V12h1.4a.6.6 0 01.6.6v.8a.6.6 0 01-.6.6H20v1.4a.6.6 0 01-.6.6h-.8a.6.6 0 01-.6-.6V14h-1.4a.6.6 0 01-.6-.6v-.8a.6.6 0 01.6-.6H18z"
        fillOpacity={0.5}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 12a1 1 0 011 1v1a5 5 0 01-5 5H7a5 5 0 01-5-5v-4a5 5 0 015-5h3c2.296 0 4.28 1.56 4.843 3.754a1 1 0 01-1.937.497A3.001 3.001 0 0010 7H7a3 3 0 00-3 3v4a3 3 0 003 3h3a3 3 0 003-3h-3a1 1 0 110-2h4z"
      />
    </svg>
  );
}

export default SvgGooglePlus;
