import React, { useState } from 'react'

const SingleTab = ({name,primSvg,secSvg,hoverSvg}) => {
    const [hover, setHover] = useState(false)
  return (
    <div onMouseOver={()=>setHover(true)} onMouseOut={()=>setHover(false)} className={`flex pl-6 py-4 gap-x-2 w-full ${hover?'bg-blue-500':''}`}>
        {hover? hoverSvg : primSvg } 
        <p className={`${hover?'text-white':''}`}>{name}</p>
    </div>
  )
}

export default SingleTab