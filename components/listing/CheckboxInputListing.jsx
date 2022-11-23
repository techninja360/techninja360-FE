import React, { useRef, useState } from 'react'

const CheckboxInput = ({id, required, width, title, placeholder, items, warning, onChange, value, error}) => {

    const [selected, setSelected] = useState(value);
  
    const handleChange = (e) => {
        // onChange(e)
        console.log(e.target.value)
        let tempArr = [...selected]
        console.log(selected.length);
        if(selected.length === 0){
            tempArr.push(e.target.value)
        }
        else{
            for(let i=0; i<=selected.length; i++){
                if(selected[i] === e.target.value){
                    console.log('here')
                    tempArr = tempArr.filter(item => item !== e.target.value)
                    break;
                }
                else if(i === (selected.length - 1)){
                    console.log('here else if')
                    tempArr.push(e.target.value)
                }
                console.log('else outside')
            }
        }
        console.log(tempArr)
        setSelected(tempArr)
        onChange(id, tempArr)
    }

    return (
        <div className={`flex flex-wrap ${width} relative`}>
            {title ? <h3 className='font-semibold text-sm uppercase'>{title} {required?<span className='text-red-500'>*</span>:null}</h3> : null}

            <div className={`${title ? 'mt-2':'mt-0'} flex flex-wrap gap-y-1 w-full gap-x-12`}>
                {
                    items.map((item)=>{
                        return (
                            <div key={id + item.value} className='flex gap-x-3 w-full' onChange={e=>handleChange(e)}>
                                <input type="checkbox" id={id + item.value} name={id} value={item.value} checked={selected.includes(item.value) && value.includes(item.value)} />
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

export default CheckboxInput