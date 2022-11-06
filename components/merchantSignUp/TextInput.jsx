import React, { useRef, useState } from 'react'

const TextInput = ({id, required, width, title, placeholder, warning, onChange, value, error}) => {

  // const [value, setValue] = useState()
 
  return (
    <div className={`flex flex-wrap ${width} relative`}>
        {title ? <h3 className='font-semibold text-sm uppercase'>{title} {required?<span className='text-red-500'>*</span>:null}</h3> : null}
      
        <input value={value?value:''} className={`py-3 px-4 h-fit ${title ? 'mt-2':'mt-0'} w-full font-normal text-base bg-[#F9F9F9] border ${error === false || error === undefined ? 'border-[#E9E9E9]' : 'border-red-500'} rounded-md`} placeholder={placeholder} type="text" id={id} required={required} onChange={onChange}/>
        
        {warning || error!==false ? <p className='font-normal text-[10px] italic text-red-500 mt-2'>{error ? error : warning}</p> : null}
    </div>
  )
}

export default TextInput