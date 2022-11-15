import * as React from "react"

const Clock = (props) => (
  <svg
    width={49}
    height={49}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M24.5 44.917c11.276 0 20.416-9.141 20.416-20.417 0-11.276-9.14-20.417-20.416-20.417S4.083 13.224 4.083 24.5c0 11.276 9.14 20.417 20.417 20.417Z"
      stroke="#fff"
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M24.5 12.25V24.5l8.167 4.083"
      stroke="#fff"
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default Clock
