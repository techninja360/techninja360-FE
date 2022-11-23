import React, { useEffect, useRef, useState } from 'react'

const RadioInputListing = ({id, required, width, title, placeholder, items, warning, onChange, value, error}) => {

    const [selected, setSelected] = useState(value);
  
    const handleChange = (e) => {
        onChange(e)
        setSelected(e.target.value)
    }

    return (
        <div className={`flex flex-wrap ${width} relative`}>
            {title ? <h3 className='font-semibold text-sm uppercase'>{title} {required?<span className='text-red-500'>*</span>:null}</h3> : null}

            <div className={`${title ? 'mt-2':'mt-0'} flex flex-wrap gap-y-1 w-full gap-x-12`}>
                {
                    items.map((item)=>{
                        return (
                            <div key={id + item.value} className='flex gap-x-3 w-full' onChange={e=>handleChange(e)}>
                                <input type="radio" id={id + item.value} name={id} value={item.value} checked={value === item.value} />
                                <label htmlFor={id + item.value} className='font-normal text-sm text-[#605F5F]'>{item.name}</label>
                            </div>
                        )
                    })
                }
                
            </div> 
            {warning || error!==false ? <p className='font-normal text-[10px] italic text-red-500 mt-2'>{error ? error : warning}</p> : null}
        </div>
  )
}

export default RadioInputListing