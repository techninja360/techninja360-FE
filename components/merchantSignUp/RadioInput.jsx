import React, { useRef, useState } from 'react'

const RadioInput = ({id,required,width,title,placeholder,items,warning}) => {

 
  return (
    <div className={`flex flex-wrap ${width} relative`}>
        {title ? <h3 className='font-semibold text-sm uppercase'>{title} {required?<span className='text-red-500'>*</span>:null}</h3> : null}
        {/* <select className={`py-3 px-4 h-auto ${title ? 'mt-2':'mt-0'} w-full font-normal text-base bg-[#F9F9F9] border border-[#E9E9E9] rounded-md`} placeholder={placeholder} type="text" id={id} required={required}>
            <option value="" disabled selected>{placeholder}</option>
            {
                items.map((item)=>{
                    return <option key={item.value} value={item.value}>{item.name}</option>
                })
            }
            
        </select> */}
        <div className={`${title ? 'mt-2':'mt-0'} flex w-full gap-x-12`}>
            {
                items.map((item)=>{
                    return (
                        <div className='flex gap-x-3'>
                            <input type="radio" id={id + item.value} name={id} value={item.value} />
                            <label for={id + item.value} className='font-normal text-base text-[#605F5F]'>{item.name}</label>
                        </div>
                    )
                })
            }
            
        </div> 
        {warning ? <p className='font-normal text-[10px] italic text-red-500 mt-2'>{warning}</p> : null}
    </div>
  )
}

export default RadioInput