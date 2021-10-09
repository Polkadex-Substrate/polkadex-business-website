import * as React from 'react';

function SvgArrowLeft(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 28 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.95248 10.8334L25.5003 10.8334C26.4208 10.8334 27.167 11.5796 27.167 12.5C27.167 13.4205 26.4208 14.1667 25.5003 14.1667L5.95248 14.1667L13.6757 21.4621C14.3307 22.0809 14.3307 23.084 13.6757 23.7027C13.0208 24.3214 11.9588 24.3214 11.3038 23.7027L1.81615 14.7406C0.506176 13.5032 0.506176 11.4969 1.81615 10.2595L11.3038 1.2974C11.9588 0.678697 13.0208 0.678697 13.6757 1.2974C14.3307 1.91611 14.3307 2.91923 13.6757 3.53793L5.95248 10.8334Z"
      />
      ;
    </svg>
  );
}

export default SvgArrowLeft;
