import * as React from 'react';

function SvgFacebook(props: React.SVGProps<SVGSVGElement>) {
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
        d="M14 10.6a.4.4 0 01-.4.4h-1.2a.4.4 0 01-.4-.4V10a3 3 0 013-3h1.6c.22 0 .4.18.4.4v1.2a.4.4 0 01-.4.4H15a1 1 0 00-1 1v.6z"
        fill="#fff"
        fillOpacity={0.5}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 20v-6h-1.6a.4.4 0 01-.4-.4v-1.2c0-.22.18-.4.4-.4h6.2c.22 0 .4.18.4.4v1.2a.4.4 0 01-.4.4H14v6h2a4 4 0 004-4V8a4 4 0 00-4-4H8a4 4 0 00-4 4v8a4 4 0 004 4h4zM8 2h8a6 6 0 016 6v8a6 6 0 01-6 6H8a6 6 0 01-6-6V8a6 6 0 016-6z"
        fill="#fff"
      />
    </svg>
  );
}

export default SvgFacebook;
