import * as React from "react"

const Eclipse = (props) => (
  <svg
    width={66}
    height={66}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={33} cy={33} r={33} fill="url(#a)" />
    <defs>
      <linearGradient
        id="a"
        x1={33}
        y1={0}
        x2={33}
        y2={66}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#D9D9D9" />
        <stop offset={1} stopColor="#D9D9D9" stopOpacity={0} />
      </linearGradient>
    </defs>
  </svg>
)

export default Eclipse
