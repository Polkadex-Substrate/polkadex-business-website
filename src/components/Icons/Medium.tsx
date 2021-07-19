import * as React from 'react';

function SvgMedium(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M19.484 5.763L21 4.317V4h-5.252l-3.743 9.29L7.747 4H2.24v.317l1.77 2.125a.74.74 0 01.24.619v8.358a.951.951 0 01-.256.83L2 18.657v.312h5.657v-.313l-1.995-2.404a.98.98 0 01-.275-.83V8.19l4.966 10.784h.574L15.204 8.19v8.588c0 .229 0 .273-.15.42l-1.536 1.482V19h7.452v-.317l-1.48-1.446a.439.439 0 01-.17-.422V6.185a.437.437 0 01.169-.422h-.005z" />
    </svg>
  );
}

export default SvgMedium;
