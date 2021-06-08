import * as React from 'react';

function SvgSpeed(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 61 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M44.092.125l15.804 6.3A1.75 1.75 0 0161 8.05v18.9a1.75 1.75 0 01-1.104 1.625l-15.804 6.3a1.762 1.762 0 01-1.305 0l-15.804-6.3a1.75 1.75 0 01-1.104-1.625V8.05c0-.716.437-1.36 1.104-1.625l15.804-6.3a1.762 1.762 0 011.305 0zm13.144 25.74a.4.4 0 00.252-.371V12.182a.1.1 0 00-.137-.093l-11.904 4.745a.4.4 0 00-.251.372v13.311a.1.1 0 00.137.093l11.903-4.744zm-15.69 4.745a.1.1 0 00.138-.093V17.206a.4.4 0 00-.252-.372L29.528 12.09a.1.1 0 00-.137.093v13.312c0 .164.1.31.252.372l11.903 4.744zM30.84 8.657a.1.1 0 000 .186l12.451 4.963a.4.4 0 00.297 0l12.45-4.963a.1.1 0 000-.186l-12.45-4.963a.4.4 0 00-.297 0l-12.45 4.963z"
        fill="#fff"
      />
      <path
        opacity={0.5}
        d="M5.546 7.369H21.51M1.849 22.105h20.333M14.788 14.737h7.394M11.09 29.474h11.092"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
      />
    </svg>
  );
}

export default SvgSpeed;
