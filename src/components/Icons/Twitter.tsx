import * as React from 'react';

function SvgTwitter(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 20 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.9702 2.47304C20.2353 2.8077 19.4441 3.03401 18.6142 3.13513C19.4617 2.61509 20.1121 1.79048 20.4185 0.808177C19.6249 1.2897 18.748 1.64 17.8112 1.82779C17.0646 1.01041 15.9975 0.5 14.8165 0.5C12.5521 0.5 10.7149 2.38395 10.7149 4.70729C10.7149 5.03714 10.7501 5.35735 10.8205 5.66553C7.41031 5.48977 4.38749 3.81648 2.36247 1.26803C2.00912 1.8916 1.80721 2.61509 1.80721 3.38552C1.80721 4.84453 2.53152 6.1326 3.63265 6.88739C2.96117 6.86692 2.32725 6.67552 1.77317 6.36253V6.41429C1.77317 8.45353 3.18773 10.1545 5.066 10.5397C4.72204 10.6384 4.3593 10.6878 3.98483 10.6878C3.7207 10.6878 3.46244 10.6625 3.21239 10.6132C3.73479 12.284 5.24913 13.5011 7.04522 13.5336C5.64121 14.6628 3.87095 15.3357 1.94926 15.3357C1.61821 15.3357 1.29069 15.3164 0.970215 15.2779C2.78626 16.4697 4.94392 17.1667 7.26006 17.1667C14.8083 17.1667 18.9346 10.7564 18.9346 5.19604C18.9346 5.01306 18.9311 4.83008 18.9241 4.65071C19.7258 4.05724 20.422 3.3169 20.9702 2.47304Z"
      />
    </svg>
  );
}

export default SvgTwitter;
