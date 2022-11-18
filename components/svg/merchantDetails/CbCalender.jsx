import * as React from "react"

const CbCalender = (props) => (
  <svg
    width={21}
    height={21}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M16.625 3.5H4.375a1.75 1.75 0 0 0-1.75 1.75V17.5c0 .966.784 1.75 1.75 1.75h12.25a1.75 1.75 0 0 0 1.75-1.75V5.25a1.75 1.75 0 0 0-1.75-1.75ZM14 1.75v3.5M7 1.75v3.5M2.625 8.75h15.75"
      stroke="#0079E9"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default CbCalender
