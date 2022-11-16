import * as React from "react"

const InactiveSlide = (props) => (
  <svg
    width={9}
    height={9}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={4.5} cy={4.5} r={4.5} fill="#D9D9D9" />
  </svg>
)

export default InactiveSlide
