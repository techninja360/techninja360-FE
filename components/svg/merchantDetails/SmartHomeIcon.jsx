import * as React from "react"

const SmartHomeIcon = (props) => (
  <svg
    width={20}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#a)" fill="#000">
      <path d="M19.417 8.709a.39.39 0 0 0 .583-.34V6.256a.39.39 0 0 0-.199-.34L10.192.494a.39.39 0 0 0-.384 0L.198 5.916a.39.39 0 0 0-.198.34v2.112a.39.39 0 0 0 .583.34L1.839 8v8.935H.391a.39.39 0 0 0-.391.39v1.84c0 .216.175.39.39.39h7.852a.39.39 0 0 0 0-.78H.782v-1.059h18.437v1.058h-7.461a.39.39 0 1 0 0 .781h7.851a.39.39 0 0 0 .391-.39v-1.84a.39.39 0 0 0-.39-.39h-1.45V8l1.257.709ZM.781 6.485 10 1.284l9.219 5.2V7.7l-9.027-5.092a.39.39 0 0 0-.384 0L.781 7.699V6.485Zm16.599 10.45H2.62V7.56L10 3.395l7.38 4.164v9.376Z" />
      <path d="M10 19.555a.39.39 0 1 0 0-.78.39.39 0 0 0 0 .78ZM8.22 7.788a2.522 2.522 0 0 0-.673 1.157 1.634 1.634 0 1 0-.51 3.185h.229v.89l-1.03.344a1.17 1.17 0 0 0-2.095.72c0 .645.525 1.171 1.171 1.171.64 0 1.16-.514 1.172-1.15l1.296-.433a.39.39 0 0 0 .267-.37V12.13h1.562v.848a1.173 1.173 0 0 0 .39 2.276 1.173 1.173 0 0 0 .392-2.276v-.848h1.562v1.172a.39.39 0 0 0 .267.37l1.296.432c.012.637.533 1.15 1.171 1.15.647 0 1.172-.525 1.172-1.171a1.173 1.173 0 0 0-2.095-.72l-1.03-.343v-.89h.229c.9 0 1.634-.733 1.634-1.633a1.635 1.635 0 0 0-2.144-1.552 2.522 2.522 0 0 0-.672-1.157A2.522 2.522 0 0 0 10 7.058c-.67 0-1.303.259-1.78.73Zm-2.908 6.686a.391.391 0 1 1 .002-.783.391.391 0 0 1-.002.783Zm4.688 0a.391.391 0 1 1 .001-.783.391.391 0 0 1-.001.783Zm4.688-.782a.391.391 0 1 1-.001.783.391.391 0 0 1 0-.783Zm-2.933-4.125a.39.39 0 0 0 .648.288.853.853 0 1 1 .56 1.494H7.037a.853.853 0 1 1 .56-1.494.39.39 0 0 0 .648-.288A1.762 1.762 0 0 1 10 7.839c.953 0 1.74.775 1.755 1.728Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
)

const SmartHomeIconSelected = (props) => (
  <svg
    width={20}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#a)" fill="#fff">
      <path d="M19.417 8.709a.39.39 0 0 0 .583-.34V6.256a.39.39 0 0 0-.199-.34L10.192.494a.39.39 0 0 0-.384 0L.198 5.916a.39.39 0 0 0-.198.34v2.112a.39.39 0 0 0 .583.34L1.839 8v8.935H.391a.39.39 0 0 0-.391.39v1.84c0 .216.175.39.39.39h7.852a.39.39 0 0 0 0-.78H.782v-1.059h18.437v1.058h-7.461a.39.39 0 1 0 0 .781h7.851a.39.39 0 0 0 .391-.39v-1.84a.39.39 0 0 0-.39-.39h-1.45V8l1.257.709ZM.781 6.485 10 1.284l9.219 5.2V7.7l-9.027-5.092a.39.39 0 0 0-.384 0L.781 7.699V6.485Zm16.599 10.45H2.62V7.56L10 3.395l7.38 4.164v9.376Z" />
      <path d="M10 19.555a.39.39 0 1 0 0-.78.39.39 0 0 0 0 .78ZM8.22 7.788a2.522 2.522 0 0 0-.673 1.157 1.634 1.634 0 1 0-.51 3.185h.229v.89l-1.03.344a1.17 1.17 0 0 0-2.095.72c0 .645.525 1.171 1.171 1.171.64 0 1.16-.514 1.172-1.15l1.296-.433a.39.39 0 0 0 .267-.37V12.13h1.562v.848a1.173 1.173 0 0 0 .39 2.276 1.173 1.173 0 0 0 .392-2.276v-.848h1.562v1.172a.39.39 0 0 0 .267.37l1.296.432c.012.637.533 1.15 1.171 1.15.647 0 1.172-.525 1.172-1.171a1.173 1.173 0 0 0-2.095-.72l-1.03-.343v-.89h.229c.9 0 1.634-.733 1.634-1.633a1.635 1.635 0 0 0-2.144-1.552 2.522 2.522 0 0 0-.672-1.157A2.522 2.522 0 0 0 10 7.058c-.67 0-1.303.259-1.78.73Zm-2.908 6.686a.391.391 0 1 1 .002-.783.391.391 0 0 1-.002.783Zm4.688 0a.391.391 0 1 1 .001-.783.391.391 0 0 1-.001.783Zm4.688-.782a.391.391 0 1 1-.001.783.391.391 0 0 1 0-.783Zm-2.933-4.125a.39.39 0 0 0 .648.288.853.853 0 1 1 .56 1.494H7.037a.853.853 0 1 1 .56-1.494.39.39 0 0 0 .648-.288A1.762 1.762 0 0 1 10 7.839c.953 0 1.74.775 1.755 1.728Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
)

export default SmartHomeIcon
export {SmartHomeIconSelected}