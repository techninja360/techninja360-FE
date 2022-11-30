import React from 'react'
import { useMerchantDetailsContext } from '../../context/merchantDetails_context'

const tabs = ['About','Services','Reviews','Photos','Map','Offers','Certificates',];

const DetailsTabs = () => {
    const {active, setActive} = useMerchantDetailsContext()
  
    return (
        <div className='flex justify-between mt-4 border-b-2 border-[#EEEEEE]'>
            {
                tabs.map((tab,index)=>{
                    return(
                        <div key={index} className={`py-3 w-full flex justify-center cursor-pointer ${index===active ? 'border-b-4 border-[#0079E9] bg-[#0079E9]':'' }`} onClick={e=>setActive(index)}>
                            <h2 className={`font-medium text-xl  ${index===active ? ' text-[#fff]':'text-[#AEAEAE]' }`}>{tab}</h2>
                        </div>
                    )
                })
            }
        </div>
  )
}

export default DetailsTabs