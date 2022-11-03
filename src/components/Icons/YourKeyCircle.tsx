import * as React from 'react';

function YourKeyCircle(props: React.SVGProps<SVGSVGElement>) {
  return (
   <svg width="100" height="100" viewBox="0 0 195 420" fill="none" {...props}  >
<mask id="mask0_658_341" style={{ maskType: "alpha" }}maskUnits="userSpaceOnUse" x="0" y="0" width="195" height="420">
<rect width="195" height="420" fill="#D9D9D9"/>
</mask>
<g mask="url(#mask0_658_341)">
<circle cx="-16" cy="210" r="103" fill="#E6007A"/>
<circle cx="-16" cy="210" r="148.5" stroke="#E6007A"/>
<circle opacity="0.5" cx="-16" cy="210" r="196.5" stroke="#E6007A"/>
</g>
</svg>

  );
}

export default YourKeyCircle;
