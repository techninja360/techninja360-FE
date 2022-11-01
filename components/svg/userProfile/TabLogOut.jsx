import * as React from "react"

const TabLogOut = (props) => (
  <svg
    width={21}
    height={21}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7.522 18.19H4.19a1.667 1.667 0 0 1-1.667-1.666V4.857A1.667 1.667 0 0 1 4.19 3.19h3.333M13.356 14.857l4.167-4.167-4.167-4.166M17.523 10.69h-10"
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export const TabLogOutHover = (props) => (
  <svg
    width={21}
    height={21}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7.522 18.19H4.19a1.667 1.667 0 0 1-1.667-1.666V4.857A1.667 1.667 0 0 1 4.19 3.19h3.333M13.356 14.857l4.167-4.167-4.167-4.166M17.523 10.69h-10"
      stroke="#fff"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
export default TabLogOut
