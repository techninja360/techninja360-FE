import * as React from "react"

const Step3Active = (props) => (
  <svg
    width={265}
    height={75}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g filter="url(#a)">
      <mask id="b" fill="#fff">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.592 7.558C1.38 4.91 3.316 1.894 6.23 1.894H259a4 4 0 0 1 4 4v61.932a4 4 0 0 1-4 4H6.23c-2.914 0-4.85-3.015-3.638-5.664L15.24 38.524a4 4 0 0 0 0-3.328L2.592 7.558Z"
        />
      </mask>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.592 7.558C1.38 4.91 3.316 1.894 6.23 1.894H259a4 4 0 0 1 4 4v61.932a4 4 0 0 1-4 4H6.23c-2.914 0-4.85-3.015-3.638-5.664L15.24 38.524a4 4 0 0 0 0-3.328L2.592 7.558Z"
        fill="#0079E9"
      />
      <path
        d="m15.239 38.525.91.416-.91-.416Zm0-3.33-.91.417.91-.416ZM2.592 66.163l-.909-.416.91.416ZM259.001.894H6.23v2H259v-2Zm5 66.932V5.894h-2v61.932h2Zm-257.771 5H259v-2H6.23v2Zm8.1-34.718L1.683 65.746l1.819.832L16.148 38.94l-1.818-.832Zm0-2.496a3 3 0 0 1 0 2.496l1.818.833a5 5 0 0 0 0-4.161l-1.818.832ZM1.683 7.975 14.33 35.612l1.818-.832L3.502 7.142l-1.819.833ZM6.23 70.826c-2.185 0-3.637-2.261-2.728-4.248l-1.819-.832c-1.515 3.311.905 7.08 4.547 7.08v-2Zm255.771-3a3 3 0 0 1-3 3v2a5 5 0 0 0 5-5h-2ZM6.23.894c-3.642 0-6.062 3.769-4.547 7.08l1.819-.832c-.91-1.987.543-4.248 2.728-4.248v-2Zm252.771 2a3 3 0 0 1 3 3h2a5 5 0 0 0-5-5v2Z"
        fill="#0079E9"
        mask="url(#b)"
      />
    </g>
    <defs>
      <filter
        id="a"
        x={0.225}
        y={0.894}
        width={264.775}
        height={73.932}
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
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_2_652" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_2_652"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
)

export default Step3Active
