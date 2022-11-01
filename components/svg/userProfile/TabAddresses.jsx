import * as React from "react"

const TabAddresses = (props) => (
  <svg
    width={21}
    height={21}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g
      clipPath="url(#a)"
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18.183 8.707c0 5.834-7.5 10.834-7.5 10.834s-7.5-5-7.5-10.834a7.5 7.5 0 1 1 15 0Z" />
      <path d="M10.683 11.207a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" transform="translate(.683 .374)" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
)

export const TabAddressesHover = (props) => (
  <svg
    width={21}
    height={21}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g
      clipPath="url(#a)"
      stroke="#fff"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18.183 8.707c0 5.834-7.5 10.834-7.5 10.834s-7.5-5-7.5-10.834a7.5 7.5 0 1 1 15 0Z" />
      <path d="M10.683 11.207a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" transform="translate(.683 .374)" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
)

export default TabAddresses
