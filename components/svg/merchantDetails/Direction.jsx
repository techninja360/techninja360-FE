import * as React from "react"

const Direction = (props) => (
  <svg
    width={19}
    height={19}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        d="m17.183 8.942-7.125-7.125a.788.788 0 0 0-1.116 0L1.817 8.942a.793.793 0 0 0 0 1.12l7.125 7.121v.004a.793.793 0 0 0 1.12 0l7.125-7.125a.79.79 0 0 0-.004-1.12Zm-6.1 2.537V9.5H7.916v2.375H6.333V8.708c0-.439.352-.791.792-.791h3.958v-1.98l2.77 2.771-2.77 2.771Z"
        fill="#0079E9"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h19v19H0z" />
      </clipPath>
    </defs>
  </svg>
)

export default Direction
