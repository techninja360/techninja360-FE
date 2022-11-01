import * as React from "react"

const Step3 = (props) => (
  <svg
    width={265}
    height={74}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g filter="url(#a)">
      <mask id="b" fill="#fff">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.589 6.663C1.378 4.013 3.314 1 6.227 1H259a4 4 0 0 1 4 4v62a4 4 0 0 1-4 4H6.227c-2.913 0-4.85-3.014-3.638-5.663l12.65-27.674a4 4 0 0 0 0-3.326L2.59 6.663Z"
        />
      </mask>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.589 6.663C1.378 4.013 3.314 1 6.227 1H259a4 4 0 0 1 4 4v62a4 4 0 0 1-4 4H6.227c-2.913 0-4.85-3.014-3.638-5.663l12.65-27.674a4 4 0 0 0 0-3.326L2.59 6.663Z"
        fill="#fff"
      />
      <path
        d="m15.24 37.663.91.416-.91-.416Zm0-3.326.91-.416-.91.416ZM259 0H6.227v2H259V0Zm5 67V5h-2v62h2ZM6.227 72H259v-2H6.227v2Zm8.103-34.753L1.68 64.921l1.818.832L16.15 38.079l-1.819-.832Zm0-2.494a3 3 0 0 1 0 2.494l1.82.832a5 5 0 0 0 0-4.158l-1.82.832ZM1.68 7.079l12.65 27.674 1.82-.832L3.497 6.247 1.68 7.08ZM6.226 70c-2.185 0-3.637-2.26-2.729-4.247L1.68 64.92C.166 68.233 2.586 72 6.227 72v-2ZM262 67a3 3 0 0 1-3 3v2a5 5 0 0 0 5-5h-2ZM6.227 0C2.586 0 .166 3.767 1.679 7.079l1.82-.832C2.59 4.26 4.041 2 6.226 2V0ZM259 2a3 3 0 0 1 3 3h2a5 5 0 0 0-5-5v2Z"
        fill="#C1C9D2"
        mask="url(#b)"
      />
    </g>
    <defs>
      <filter
        id="a"
        x={0.222}
        y={0}
        width={264.778}
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
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_2_166" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_2_166"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
)

export default Step3
