import * as React from "react"

const PhoneCall = (props) => (
  <svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        d="M10.034 3.333a3.333 3.333 0 0 1 2.633 2.634m-2.633-5.3a6 6 0 0 1 5.3 5.293m-.667 5.32v2a1.332 1.332 0 0 1-1.453 1.333 13.193 13.193 0 0 1-5.754-2.046 13 13 0 0 1-4-4 13.193 13.193 0 0 1-2.046-5.78A1.333 1.333 0 0 1 2.74 1.333h2A1.333 1.333 0 0 1 6.074 2.48a8.56 8.56 0 0 0 .466 1.873 1.333 1.333 0 0 1-.3 1.407l-.846.847a10.666 10.666 0 0 0 4 4l.846-.847a1.333 1.333 0 0 1 1.407-.3 8.56 8.56 0 0 0 1.873.467 1.333 1.333 0 0 1 1.147 1.353Z"
        stroke="#0079E9"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
)

export default PhoneCall
