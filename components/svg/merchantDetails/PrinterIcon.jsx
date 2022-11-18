import * as React from "react"

const PrinterIcon = (props) => (
  <svg
    width={18}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M17.385 6.12H7.7l-.392-.746L13.425 2.2c.32-.165.484-.67.368-1.124l-.127-.5c-.117-.453-.47-.688-.789-.523l-2.704 1.403c-.136.07-.207.287-.157.482.05.195.2.295.338.224L13.058.76c.045-.023.095.01.112.075l.128.5c.016.064-.008.136-.053.16L6.978 4.746l-.343-.654 2.55-1.323c.137-.071.207-.287.157-.482-.05-.195-.2-.296-.338-.225l-2.7 1.401-.42-.801c-.116-.22-.3-.352-.493-.352H.615c-.339 0-.615.394-.615.877v12.504c0 .483.276.877.615.877h3.573l-.35 2.63c-.056.416.169.802.466.802h9.392c.298 0 .521-.387.466-.803l-.35-2.63h3.573c.339 0 .615-.393.615-.876v-1.409c0-.207-.118-.376-.264-.376-.145 0-.263.169-.263.376v1.409c0 .069-.04.125-.088.125H15.3l-.529-1.387c-.107-.282-.314-.458-.54-.458H3.769c-.226 0-.433.176-.54.458L2.7 15.816H.615c-.048 0-.088-.056-.088-.125V9.446h11.46v.716c0 .483.276.877.615.877h4.783c.03 0 .059-.005.088-.01v1.499c0 .208.118.376.263.376.146 0 .264-.168.264-.376v-5.53c0-.484-.276-.877-.615-.877ZM4.368 19.249l.603-4.525h8.058l.603 4.525H4.368Zm9.94-4.46.392 1.028h-.989l-.145-1.093h.665c.032 0 .062.025.077.065Zm-10.616 0c.015-.04.045-.065.077-.065h.665l-.146 1.093H3.3l.392-1.028ZM.615 3.062h4.776c.027 0 .054.019.07.05l1.58 3.009H.527V3.187c0-.069.04-.125.088-.125ZM.527 8.694V6.872h11.467a1.258 1.258 0 0 0-.007.126v1.696H.527Zm16.858 1.593h-4.783c-.048 0-.088-.056-.088-.126V6.998c0-.07.04-.126.088-.126h4.782c.05 0 .089.056.089.126v3.163c0 .07-.04.126-.088.126Z"
      fill="#000"
    />
    <path
      d="M13.913 7.399c-.457 0-.828.53-.828 1.18 0 .652.371 1.181.828 1.181.457 0 .828-.53.828-1.18 0-.651-.371-1.181-.828-1.181Zm0 1.61c-.166 0-.3-.193-.3-.43 0-.236.134-.428.3-.428.166 0 .301.192.301.429 0 .236-.135.429-.3.429ZM16.074 7.399c-.456 0-.828.53-.828 1.18 0 .652.372 1.181.828 1.181.457 0 .828-.53.828-1.18 0-.651-.371-1.181-.828-1.181Zm0 1.61c-.166 0-.3-.193-.3-.43 0-.236.134-.428.3-.428.166 0 .301.192.301.429 0 .236-.135.429-.3.429ZM11.644 17.394H6.355c-.145 0-.263.169-.263.376 0 .208.118.376.263.376h5.29c.145 0 .263-.168.263-.376 0-.207-.118-.376-.264-.376ZM6.799 16.372H11.2c.146 0 .264-.168.264-.376 0-.207-.118-.375-.264-.375H6.8c-.146 0-.264.168-.264.375 0 .208.118.376.264.376Z"
      fill="#000"
    />
  </svg>
)

const PrinterIconSelected = (props) => (
  <svg
    width={18}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M17.385 6.12H7.7l-.392-.746L13.425 2.2c.32-.165.484-.67.368-1.124l-.127-.5c-.117-.453-.47-.688-.789-.523l-2.704 1.403c-.136.07-.207.287-.157.482.05.195.2.295.338.224L13.058.76c.045-.023.095.01.112.075l.128.5c.016.064-.008.136-.053.16L6.978 4.746l-.343-.654 2.55-1.323c.137-.071.207-.287.157-.482-.05-.195-.2-.296-.338-.225l-2.7 1.401-.42-.801c-.116-.22-.3-.352-.493-.352H.615c-.339 0-.615.394-.615.877v12.504c0 .483.276.877.615.877h3.573l-.35 2.63c-.056.416.169.802.466.802h9.392c.298 0 .521-.387.466-.803l-.35-2.63h3.573c.339 0 .615-.393.615-.876v-1.409c0-.207-.118-.376-.264-.376-.145 0-.263.169-.263.376v1.409c0 .069-.04.125-.088.125H15.3l-.529-1.387c-.107-.282-.314-.458-.54-.458H3.769c-.226 0-.433.176-.54.458L2.7 15.816H.615c-.048 0-.088-.056-.088-.125V9.446h11.46v.716c0 .483.276.877.615.877h4.783c.03 0 .059-.005.088-.01v1.499c0 .208.118.376.263.376.146 0 .264-.168.264-.376v-5.53c0-.484-.276-.877-.615-.877ZM4.368 19.249l.603-4.525h8.058l.603 4.525H4.368Zm9.94-4.46.392 1.028h-.989l-.145-1.093h.665c.032 0 .062.025.077.065Zm-10.616 0c.015-.04.045-.065.077-.065h.665l-.146 1.093H3.3l.392-1.028ZM.615 3.062h4.776c.027 0 .054.019.07.05l1.58 3.009H.527V3.187c0-.069.04-.125.088-.125ZM.527 8.694V6.872h11.467a1.258 1.258 0 0 0-.007.126v1.696H.527Zm16.858 1.593h-4.783c-.048 0-.088-.056-.088-.126V6.998c0-.07.04-.126.088-.126h4.782c.05 0 .089.056.089.126v3.163c0 .07-.04.126-.088.126Z"
      fill="#fff"
    />
    <path
      d="M13.913 7.399c-.457 0-.828.53-.828 1.18 0 .652.371 1.181.828 1.181.457 0 .828-.53.828-1.18 0-.651-.371-1.181-.828-1.181Zm0 1.61c-.166 0-.3-.193-.3-.43 0-.236.134-.428.3-.428.166 0 .301.192.301.429 0 .236-.135.429-.3.429ZM16.074 7.399c-.456 0-.828.53-.828 1.18 0 .652.372 1.181.828 1.181.457 0 .828-.53.828-1.18 0-.651-.371-1.181-.828-1.181Zm0 1.61c-.166 0-.3-.193-.3-.43 0-.236.134-.428.3-.428.166 0 .301.192.301.429 0 .236-.135.429-.3.429ZM11.644 17.394H6.355c-.145 0-.263.169-.263.376 0 .208.118.376.263.376h5.29c.145 0 .263-.168.263-.376 0-.207-.118-.376-.264-.376ZM6.799 16.372H11.2c.146 0 .264-.168.264-.376 0-.207-.118-.375-.264-.375H6.8c-.146 0-.264.168-.264.375 0 .208.118.376.264.376Z"
      fill="#fff"
    />
  </svg>
)

export  {PrinterIconSelected}
export default PrinterIcon
