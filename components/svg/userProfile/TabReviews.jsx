import * as React from "react"

const TabReviews = (props) => (
  <svg
    width={21}
    height={21}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M17.932 13.332A1.667 1.667 0 0 1 16.265 15h-10l-3.333 3.333V5a1.667 1.667 0 0 1 1.666-1.666h11.667a1.667 1.667 0 0 1 1.667 1.666v8.334Z"
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export const TabReviewsHover = (props) => (
  <svg
    width={21}
    height={21}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M17.932 13.332A1.667 1.667 0 0 1 16.265 15h-10l-3.333 3.333V5a1.667 1.667 0 0 1 1.666-1.666h11.667a1.667 1.667 0 0 1 1.667 1.666v8.334Z"
      stroke="#fff"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
export default TabReviews
