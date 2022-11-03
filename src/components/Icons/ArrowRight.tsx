import * as React from 'react';

function SvgArrowRight(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 8 8"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        fill="#fff"
        clipRule="evenodd"
        d="M6.44492 4.57142L0.506339 4.57142C0.226693 4.57142 -6.79105e-07 4.31558 -6.51517e-07 4.00002C-6.23927e-07 3.68442 0.226693 3.42858 0.506339 3.42858L6.44492 3.42858L4.09862 0.927299C3.89964 0.715139 3.89964 0.371219 4.09862 0.159094C4.29758 -0.0530316 4.62021 -0.0530315 4.8192 0.159094L7.70153 3.23181C8.09949 3.65606 8.09949 4.34394 7.70153 4.76819L4.8192 7.8409C4.62021 8.05303 4.29758 8.05303 4.09862 7.8409C3.89964 7.62878 3.89964 7.28485 4.09862 7.07272L6.44492 4.57142Z"
      />
    </svg>
  );
}

export default SvgArrowRight;
