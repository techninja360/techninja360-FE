import React from 'react'
import CategoryComputers from '../svg/home/CategoryComputers'
import CategoryComputersLight from '../svg/home/CategoryComputersLight'
import Eclipse from '../svg/home/Eclipse'

const SingleCategory = ({name,primSvg,secSvg}) => {
  return (
    <div className='relative bg-gray-100 h-[91px] w-[343px] overflow-y-hidden'>
        <div className='absolute top-2 left-4'>
            <Eclipse/>
        </div>
        <div className='absolute top-6 left-11'>
            {primSvg}
        </div>
        <p className='absolute top-8 left-32 font-medium text-lg'>{name}</p>
        <div className='absolute top-12 right-3'>
            {secSvg}
        </div>
    </div>
  )
}

export default SingleCategory