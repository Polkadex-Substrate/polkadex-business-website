import * as React from 'react';

function SvgArrowBottom(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.6668 3.33333C13.6668 4.25381 12.9206 5 12.0002 5C11.0797 5 10.3335 4.25381 10.3335 3.33333V1.66667C10.3335 0.746192 11.0797 0 12.0002 0C12.9206 0 13.6668 0.746192 13.6668 1.66667V3.33333Z"
        fillOpacity="0.5"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.3335 28.5479V9.00006C10.3335 8.07959 11.0797 7.33339 12.0002 7.33339C12.9206 7.33339 13.6668 8.07959 13.6668 9.00006V28.5479L20.9623 20.8246C21.581 20.1696 22.5841 20.1696 23.2028 20.8246C23.8215 21.4796 23.8215 22.5416 23.2028 23.1965L14.2407 32.6842C13.0033 33.9942 10.997 33.9942 9.75963 32.6842L0.797525 23.1965C0.17882 22.5416 0.17882 21.4796 0.797525 20.8246C1.41623 20.1696 2.41935 20.1696 3.03805 20.8246L10.3335 28.5479Z"
      />
      ;
    </svg>
  );
}

export default SvgArrowBottom;
