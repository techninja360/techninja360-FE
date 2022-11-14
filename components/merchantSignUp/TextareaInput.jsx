import React, { useEffect, useRef, useState } from 'react'

const TextareaInput = ({id, required, width, height, title, placeholder, warning, onChange, value, error, wordLimit}) => {

  const [limit, setLimit] = useState(0)
  const handleChange = (e)=> {
    // setLimit(e.target.value.length)
    
    if((e.target.value.length)>wordLimit){}
    else{
      setLimit(e.target.value.length)
      onChange(e)
    }
  }
 
  return (
    <div className={`flex flex-wrap ${width} relative`}>
        {title ? <h3 className='font-semibold text-sm uppercase'>{title} {required?<span className='text-red-500'>*</span>:null}</h3> : null}
      
        <textarea value={value?value:''} className={`py-3 px-4 ${title ? 'mt-2':'mt-0'} w-full ${height} font-normal text-base bg-[#F9F9F9] border ${error === false || error === undefined ? 'border-[#E9E9E9]' : 'border-red-500'} rounded-md`} placeholder={placeholder} type="text" id={id} required={required} onChange={e=>handleChange(e)}/>
        <div className='flex justify-between w-full'>

          {warning || error!==false ? <p className={`font-normal text-[10px] italic ${error ?'text-red-500':'text-[#6A6A6A]'} w-full mt-2`}>{error ? error : warning}</p> : null}
          {wordLimit &&<h3 className='text-xs text-right w-full text-gray-500 mt-2'>{limit}/{wordLimit}</h3>}
        </div>
    </div>
  )
}

export default TextareaInput