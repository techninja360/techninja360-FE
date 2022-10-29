import * as React from "react"

const BackArrow = (props) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m.44 10.94 6-6a1.5 1.5 0 1 1 2.12 2.122L5.125 10.5H22.5a1.499 1.499 0 1 1 0 3H5.124l3.44 3.44a1.5 1.5 0 1 1-2.122 2.12l-6-6a1.496 1.496 0 0 1-.002-2.12Z"
      fill="#242331"
    />
  </svg>
)

export default BackArrow
