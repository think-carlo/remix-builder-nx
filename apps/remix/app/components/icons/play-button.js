import * as React from 'react';
const SvgPlayButton = props => (
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
      d="M22.871 16.994c.383.246.629.683.629 1.12 0 .466-.246.903-.629 1.122l-7.875 4.813c-.41.246-.93.273-1.34.027-.41-.219-.656-.656-.656-1.149v-9.625c0-.464.246-.902.656-1.12a1.25 1.25 0 0 1 1.34.027l7.875 4.785Z"
      fill="#0E1A62"
    />
  </svg>
);
export default SvgPlayButton;

