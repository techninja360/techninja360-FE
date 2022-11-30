import * as React from "react"

const GlobeIcon = (props) => (
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
      <path d="M10 18.333a8.333 8.333 0 1 0 0-16.667 8.333 8.333 0 0 0 0 16.667ZM1.667 10h16.667" />
      <path d="M10 1.667A12.75 12.75 0 0 1 13.334 10 12.75 12.75 0 0 1 10 18.333 12.75 12.75 0 0 1 6.667 10 12.75 12.75 0 0 1 10 1.667v0Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#464646" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
)

export default GlobeIcon
