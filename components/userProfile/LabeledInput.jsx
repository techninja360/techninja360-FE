import React from 'react'

const LabeledInput = ({id, labelName, type}) => {
  return (
    <div className='w-full'>
        <label htmlFor={id} className='text-base font-normal text-[#6B6B6B]'>{labelName}</label>
        <input id={id} type={type} className='mt-2 h-12 w-full text-base font-medium bg-white border border-[#BDBDBD] rounded-sm pl-6'/>
    </div>
  )
}

export default LabeledInput