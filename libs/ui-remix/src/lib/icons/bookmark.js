import * as React from 'react';
const SvgBookmark = (props) => (
  <svg width={23} height={26} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M17.641 1.235v12l-4-3-4 3v-12" />
    <path
      d="M17.641 1.235v12l-4-3-4 3v-12"
      stroke="#000"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M1.641 24.235a2.988 2.988 0 0 1 3-3h17v-20h-17a2.987 2.987 0 0 0-3 3v20Z"
      stroke="#000"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M1.641 24.235v1h18" />
    <path
      d="M1.641 24.235v1h18"
      stroke="#000"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgBookmark;

