import * as React from "react"

const GPSLocation = (props) => (
  <svg
    width={18}
    height={22}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M16.75 8.875C16.75 15 8.875 20.25 8.875 20.25S1 15 1 8.875a7.875 7.875 0 0 1 15.75 0Z"
      stroke="#0079E9"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default GPSLocation
