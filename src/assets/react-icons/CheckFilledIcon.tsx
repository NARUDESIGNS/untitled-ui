import React from "react";

const CheckFilledIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <>
  <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
<rect x="0.5" y="0.5" rx="7.5"/>
<rect x="0.5" y="0.5" rx="7.5" stroke="#7F56D9"/>
<path d="M11.3334 5.5L6.75002 10.0833L4.66669 8" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

  </>
);

export default CheckFilledIcon;
