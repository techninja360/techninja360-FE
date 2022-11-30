import * as React from "react"

const MapPin = (props) => (
  <svg
    width={20}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g
      clipPath="url(#a)"
      stroke="#464646"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.5 8.334c0 5.833-7.5 10.833-7.5 10.833s-7.5-5-7.5-10.834a7.5 7.5 0 1 1 15 0Z" />
      <path d="M10 10.834a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#464646" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
)

export default MapPin
