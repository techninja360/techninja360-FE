import React, { useRef, useState } from 'react'
import ArrowDown from '../svg/ArrowDown'

const SelectInput = ({id, required, width, title, placeholder, warning, items, onChange, value, error}) => {

 
  return (
    <div className={`flex flex-wrap ${width} relative`}>
        {title ? <h3 className='font-semibold text-sm uppercase'>{title} {required?<span className='text-red-500'>*</span>:null}</h3> : null}
        <div className='w-full relative'>
          <div className={`absolute right-0 pr-3 ${title ? 'top-7':'top-5'}`}>
            <ArrowDown/>
          </div>
          <select className={`placeholder-[#B0B0B0] py-3 px-4 h-fit ${title ? 'mt-2':'mt-0'} w-full font-normal text-base appearance-none bg-[#F9F9F9] border ${error === false || error === undefined ? 'border-[#E9E9E9]' : 'border-red-500'} rounded-md`} placeholder={placeholder} type="text" id={id} required={required} onChange={onChange} value={value?value:''}>
          
              <option value="" disabled className='text-gray-300'>{placeholder}</option>
              {
                  items?.map((item)=>{
                      return <option key={item.value} value={item.value}>{item.name}</option>
                  })
              }
              
          </select>
        </div>
        
        {warning || error!==false ? <p className='font-normal text-[10px] italic text-red-500 mt-2'>{error ? error : warning}</p> : null}
    </div>
  )
}

export default SelectInput