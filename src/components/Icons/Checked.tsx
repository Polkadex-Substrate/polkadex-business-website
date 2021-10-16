import * as React from 'react';

function SvgChecked(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 21 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.04927 10.5L18.5263 0.875418C19.0922 0.28273 20.0097 0.28273 20.5756 0.875418C21.1415 1.4681 21.1415 2.42905 20.5756 3.02173L9.98768 14.111C8.8559 15.2964 7.02092 15.2964 5.88914 14.111L0.424418 8.38751C-0.141473 7.79482 -0.141473 6.83388 0.424418 6.2412C0.990308 5.64851 1.9078 5.64851 2.47369 6.2412L7 10.5C7.56589 11.0927 8.48338 11.0927 9.04927 10.5Z"
        fill="white"
      />
    </svg>
  );
}

export default SvgChecked;
