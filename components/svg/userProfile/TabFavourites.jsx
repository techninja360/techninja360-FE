import * as React from "react"

const TabFavourutes = (props) => (
  <svg
    width={21}
    height={21}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        d="M17.71 4.545a4.584 4.584 0 0 0-6.484 0l-.883.884-.883-.884a4.584 4.584 0 1 0-6.483 6.484l.883.883 6.483 6.483 6.483-6.483.884-.883a4.585 4.585 0 0 0 0-6.484v0Z"
        stroke="#000"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" transform="translate(.343 .704)" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
)

export const TabFavourutesHover = (props) => (
  <svg
    width={21}
    height={21}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        d="M17.71 4.545a4.584 4.584 0 0 0-6.484 0l-.883.884-.883-.884a4.584 4.584 0 1 0-6.483 6.484l.883.883 6.483 6.483 6.483-6.483.884-.883a4.585 4.585 0 0 0 0-6.484v0Z"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" transform="translate(.343 .704)" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default TabFavourutes
