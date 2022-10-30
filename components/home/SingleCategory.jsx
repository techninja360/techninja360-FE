import React, { useState } from 'react'
import Eclipse from '../svg/home/Eclipse'

const SingleCategory = ({name,primSvg,secSvg,hoverSvg}) => {

  const [hover, setHover] = useState(false)
  return (
    <div onMouseOver={()=>setHover(true)} onMouseOut={()=>setHover(false)} className={`flex items-center relative bg-gray-100 h-[91px] w-[30%] min-w-[270px] max-w-[343px] overflow-y-hidden hover:bg-blue-600 hover:text-white lg:w-[45%] sm:w-full sm:max-w-none`}>
        <div className='absolute top-2 left-4'>
            <Eclipse/>
        </div>
        {
          hover ? (
            <div className='absolute top-6 left-11'>
              {hoverSvg}
            </div>
          ):
          (
            <div className='absolute top-6 left-11'>
              {primSvg}
            </div>
          )
        }
        
        <p className='w-full pr-20 pl-28 font-medium text-lg '>{name}</p>
        <div className='absolute top-12 right-3'>
            {secSvg}
        </div>
    </div>
  )
}

export default SingleCategory