import * as React from 'react';
const SvgFacebook = (props) => (
  <svg width={18} height={18} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g clipPath="url(#facebook_svg__a)">
      <path d="M18 9a9 9 0 1 0-10.406 8.89v-6.288H5.309V9h2.285V7.017c0-2.255 1.343-3.501 3.4-3.501.984 0 2.014.175 2.014.175v2.215h-1.135c-1.118 0-1.467.694-1.467 1.407V9h2.496l-.399 2.602h-2.097v6.289A9.001 9.001 0 0 0 18 9Z" />
    </g>
    <defs>
      <clipPath id="facebook_svg__a">
        <path fill="#fff" d="M0 0h18v18H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgFacebook;

