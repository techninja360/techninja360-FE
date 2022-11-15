import * as React from "react"

const Users = (props) => (
  <svg
    width={43}
    height={43}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g
      clipPath="url(#a)"
      stroke="#fff"
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M30.459 37.625v-3.583a7.167 7.167 0 0 0-7.167-7.167H8.959a7.167 7.167 0 0 0-7.167 7.167v3.583M16.125 19.708a7.167 7.167 0 1 0 0-14.333 7.167 7.167 0 0 0 0 14.333ZM41.208 37.625v-3.583a7.167 7.167 0 0 0-5.375-6.934M28.667 5.608a7.167 7.167 0 0 1 0 13.885" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h43v43H0z" />
      </clipPath>
    </defs>
  </svg>
)

export default Users
