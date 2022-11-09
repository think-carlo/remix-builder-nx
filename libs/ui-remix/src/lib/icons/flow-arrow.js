import * as React from 'react';
const SvgFlowArrow = (props) => (
  <svg width={30} height={23} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.5 15.942a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5Zm-4.25 2.75a4.25 4.25 0 1 1 8.5 0 4.25 4.25 0 0 1-8.5 0ZM23.47 1.162a.75.75 0 0 1 1.06 0l5 5a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 1 1-1.06-1.06l4.47-4.47-4.47-4.47a.75.75 0 0 1 0-1.06Z"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21 7.442a5.25 5.25 0 0 0-5.25 5.25A6.75 6.75 0 0 1 9 19.442H8a.75.75 0 1 1 0-1.5h1a5.25 5.25 0 0 0 5.25-5.25A6.75 6.75 0 0 1 21 5.942h8a.75.75 0 1 1 0 1.5h-8Z"
    />
  </svg>
);
export default SvgFlowArrow;

