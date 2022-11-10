import * as React from 'react';
const SvgPauseButton = props => (
  <svg
    width={36}
    height={36}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle
      opacity={0.94}
      cx={18}
      cy={18}
      r={18}
      transform="rotate(-180 18 18)"
      fill="#FCFDFF"
    />
    <path
      d="M12.375 12.938c0-.915.703-1.688 1.688-1.688a1.71 1.71 0 0 1 1.687 1.688v10.124c0 .985-.773 1.688-1.688 1.688-.984 0-1.687-.703-1.687-1.688V12.938Zm7.875 0c0-.915.703-1.688 1.688-1.688a1.71 1.71 0 0 1 1.687 1.688v10.124c0 .985-.773 1.688-1.688 1.688-.984 0-1.687-.703-1.687-1.688V12.938Z"
      fill="#0E1A62"
    />
  </svg>
);
export default SvgPauseButton;

