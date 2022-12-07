import React, { useRef, useState } from 'react'

const TextInput = ({id, type, required, width, title, placeholder, warning, onChange, onBlur, value, error, limit, readOnly}) => {

  // const [value, setValue] = useState()
 
  return (
    <div className={`flex flex-wrap ${width} relative`}>
        {title ? <h3 className='font-semibold text-sm uppercase'>{title} {required?<span className='text-red-500'>*</span>:null}</h3> : null}
      
        <input value={value?value:''} className={`placeholder-[#B0B0B0] py-3 px-4 h-fit ${title ? 'mt-2':'mt-0'} w-full font-normal text-base ${readOnly ? 'bg-[#F9F9F9]' : 'bg-white'} border ${error === false || error === undefined ? 'border-[#E9E9E9]' : 'border-red-500'} rounded-md`} placeholder={placeholder} type={type} id={id} required={required} maxLength={limit} onChange={onChange} onBlur={onBlur} readOnly={readOnly}/>
        
        {warning || error!==false ? <p className={`font-normal text-[10px] italic ${error ?'text-red-500':'text-[#6A6A6A]'}  mt-2`}>{error ? error : warning}</p> : null}
    </div>
  )
}

export default TextInput