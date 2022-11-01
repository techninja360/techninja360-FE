import * as React from "react"

const Step2Active = (props) => (
  <svg
    width={281}
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
          d="M264.068 3.337A3.998 3.998 0 0 0 260.431 1H6.227c-2.913 0-4.85 3.014-3.638 5.663l12.65 27.674a4 4 0 0 1 0 3.326L2.59 65.337C1.378 67.987 3.314 71 6.227 71H260.43a3.998 3.998 0 0 0 3.637-2.337l14.172-31a3.998 3.998 0 0 0 0-3.326l-14.172-31Z"
        />
      </mask>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M264.068 3.337A3.998 3.998 0 0 0 260.431 1H6.227c-2.913 0-4.85 3.014-3.638 5.663l12.65 27.674a4 4 0 0 1 0 3.326L2.59 65.337C1.378 67.987 3.314 71 6.227 71H260.43a3.998 3.998 0 0 0 3.637-2.337l14.172-31a3.998 3.998 0 0 0 0-3.326l-14.172-31Z"
        fill="#0079E9"
      />
      <path
        d="m15.24 34.337.91-.416-.91.416Zm0 3.326.91.416-.91-.416Zm263 0-.91-.416.91.416Zm0-3.326-.91.416.91-.416Zm-275.651 31-.91-.416.91.416Zm261.479-62-.909.416.909-.416Zm0 65.326-.909-.416.909.416ZM6.227 2H260.43V0H6.227v2Zm9.922 31.921L3.5 6.247l-1.82.832L14.33 34.753l1.82-.832Zm0 4.158a5 5 0 0 0 0-4.158l-1.819.832a3 3 0 0 1 0 2.494l1.82.832ZM3.5 65.753l12.65-27.674-1.819-.832L1.68 64.921l1.818.832ZM260.43 70H6.227v2H260.43v-2Zm16.899-32.753-14.171 31 1.819.832 14.171-31-1.819-.832Zm0-2.494a2.993 2.993 0 0 1 0 2.494l1.819.832a4.996 4.996 0 0 0 0-4.158l-1.819.832Zm-14.171-31 14.171 31 1.819-.832-14.171-31-1.819.832ZM1.679 64.92C.166 68.233 2.586 72 6.227 72v-2c-2.185 0-3.637-2.26-2.729-4.247L1.68 64.92ZM260.431 2a3 3 0 0 1 2.728 1.753l1.819-.832A5 5 0 0 0 260.431 0v2Zm0 70a5 5 0 0 0 4.547-2.921l-1.819-.832A3 3 0 0 1 260.431 70v2ZM6.227 0C2.586 0 .166 3.767 1.679 7.079l1.82-.832C2.59 4.26 4.041 2 6.226 2V0Z"
        fill="#0079E9"
        mask="url(#b)"
      />
    </g>
    <defs>
      <filter
        id="a"
        x={0.222}
        y={0}
        width={280.38}
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
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_2_240" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_2_240"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
)

export default Step2Active
