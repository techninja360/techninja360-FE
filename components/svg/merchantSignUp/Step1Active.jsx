import * as React from "react"

const Step1Active = (props) => (
  <svg
    width={283}
    height={74}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g filter="url(#a)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 5a4 4 0 0 1 4-4h256.43a4 4 0 0 1 3.638 2.337l14.172 31a3.998 3.998 0 0 1 0 3.326l-14.172 31A4 4 0 0 1 262.43 71H6a4 4 0 0 1-4-4V5Z"
        fill="#0079E9"
      />
    </g>
    <defs>
      <filter
        id="a"
        x={0}
        y={0}
        width={282.602}
        height={74}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy={1} />
        <feGaussianBlur stdDeviation={1} />
        <feColorMatrix values="0 0 0 0 0.215686 0 0 0 0 0.254902 0 0 0 0 0.317647 0 0 0 0.08 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_2_151" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_2_151"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
)

export default Step1Active
