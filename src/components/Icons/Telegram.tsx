import * as React from 'react';

function SvgTelegram(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M9.823 14.442l-.287 3.997c.314.003.611-.139.804-.384l1.93-1.826 3.999 2.893c.733.405 1.25.191 1.448-.666L20.34 6.303c.233-1.071-.392-1.49-1.106-1.227l-15.427 5.84c-1.05.404-1.038.984-.175 1.247l3.945 1.209 9.163-5.665c.431-.282.823-.126.5.157l-7.416 6.578z" />
    </svg>
  );
}

export default SvgTelegram;
