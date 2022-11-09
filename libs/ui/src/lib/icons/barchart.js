import * as React from 'react';
const SvgBarchart = (props) => (
  <svg width={27} height={23} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M.092 22a.75.75 0 0 1 .75-.75h25a.75.75 0 1 1 0 1.5h-25a.75.75 0 0 1-.75-.75Z"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.092 7a.75.75 0 0 1 .75-.75h7a.75.75 0 1 1 0 1.5h-6.25V22a.75.75 0 1 1-1.5 0V7Z"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.092 1a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 .75.75v21a.75.75 0 0 1-.75.75h-7a.75.75 0 0 1-.75-.75V1Zm1.5.75v19.5h5.5V1.75h-5.5ZM2.092 13a.75.75 0 0 1 .75-.75h7a.75.75 0 1 1 0 1.5h-6.25V22a.75.75 0 1 1-1.5 0v-9Z"
    />
  </svg>
);
export default SvgBarchart;

