import * as React from "react"

const Unchecked = (props) => (
  <svg
    width={19}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect x={0.184} width={17.951} height={18} rx={1} fill="#E82327" />
    <path
      d="m12.9 5.5-6.483 7M6.417 5.5l6.482 7"
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default Unchecked
