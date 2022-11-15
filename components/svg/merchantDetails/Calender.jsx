import * as React from "react"

const Calender = (props) => (
  <svg
    width={47}
    height={47}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M37.208 7.833H9.792a3.917 3.917 0 0 0-3.917 3.917v27.417a3.917 3.917 0 0 0 3.917 3.916h27.416a3.917 3.917 0 0 0 3.917-3.916V11.75a3.917 3.917 0 0 0-3.917-3.917ZM31.333 3.917v7.833M15.667 3.917v7.833M5.875 19.583h35.25"
      stroke="#fff"
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default Calender
