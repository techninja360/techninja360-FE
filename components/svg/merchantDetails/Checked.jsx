import * as React from "react"

const Checked = (props) => (
  <svg
    width={19}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect x={0.914} width={17.951} height={18} rx={1} fill="#0079E9" />
    <path
      d="M7.646 12.15 5.028 9.525a.734.734 0 0 0-1.047 0 .74.74 0 0 0 0 1.05l3.133 3.143a.743.743 0 0 0 1.055 0l7.928-7.943a.74.74 0 0 0 0-1.05.735.735 0 0 0-1.047 0L7.646 12.15Z"
      fill="#fff"
    />
  </svg>
)

export default Checked
