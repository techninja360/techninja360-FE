import * as React from "react"

const CheckCircle = (props) => (
  <svg
    width={41}
    height={41}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M37.584 18.928V20.5a17.083 17.083 0 1 1-10.13-15.614"
      stroke="#fff"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M37.583 6.833 20.5 23.933l-5.125-5.124"
      stroke="#fff"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default CheckCircle
