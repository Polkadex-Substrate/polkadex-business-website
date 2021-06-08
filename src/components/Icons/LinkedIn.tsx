import * as React from 'react';

function SvgLinkedIn(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        opacity={0.5}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.27 5.25c-.923 0-1.668-.784-1.668-1.75s.745-1.75 1.668-1.75c.919 0 1.665.784 1.665 1.75S5.189 5.25 4.27 5.25z"
        fill="#fff"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.157 6.183h.754c2.498 0 4.524 2.047 4.524 4.572v7.01c0 .337-.27.61-.604.61h-1.81a.606.606 0 01-.602-.61v-7.01c0-.842-.676-1.524-1.508-1.524h-.754c-1.25 0-2.262 1.024-2.262 2.286v6.248c0 .337-.27.61-.603.61h-1.81a.606.606 0 01-.603-.61V6.793c0-.337.27-.61.603-.61h1.905c.28 0 .508.23.508.513a5.211 5.211 0 012.262-.513zM2.602 17.765V6.793c0-.337.283-.61.633-.61h1.9c.35 0 .633.273.633.61v10.972c0 .337-.283.61-.633.61h-1.9a.622.622 0 01-.633-.61z"
        fill="#fff"
      />
    </svg>
  );
}

export default SvgLinkedIn;
