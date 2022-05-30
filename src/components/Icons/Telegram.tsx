import * as React from 'react';

function SvgTelegram(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 19 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M7.56376 10.5738L7.25366 14.8852C7.59234 14.8884 7.91308 14.7351 8.12081 14.4708L10.202 12.5013L14.5151 15.6218C15.3059 16.0576 15.863 15.8276 16.0769 14.9029L18.9046 1.79729C19.1553 0.641683 18.4814 0.190055 17.7113 0.474069L1.07425 6.77172C-0.0568167 7.20752 -0.0445635 7.83235 0.885741 8.11636L5.14044 9.42003L15.0222 3.31141C15.4869 3.00691 15.9101 3.17546 15.5623 3.47996L7.56376 10.5738Z" />
    </svg>
  );
}

export default SvgTelegram;
