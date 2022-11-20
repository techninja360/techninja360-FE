import React, { useState } from 'react'
import ComputerIcon from '../svg/merchantDetails/ComputerIcon'
import PrinterIcon from '../svg/merchantDetails/PrinterIcon'
import SelectedCategory from '../svg/merchantDetails/SelectedCategory'

import { services } from '../../data/merchantServices'
import ServiceCategories from './ServiceCategories'
import CheckCircle from '../svg/merchantDetails/CheckCircle'

const TabServices = () => {
  const [selected, setSelected] = useState(0)
  return (
    <div className='flex mt-4 gap-x-8 w-full'>
    
      <div className='w-1/4 border-r border-r-[#D1D1D1]'>
        <div>
          {
            services.map((service,index)=>{
              return(
                <ServiceCategories key={index} categoryName={service.mainCategory} icon={service.icon} selectedIcon={service.selectedIcon} selected={selected} setSelected={setSelected} index={index}/>
              )
            })
          }
        </div>
      </div>

      <div className='w-3/4'>
          <div>
            <div className='flex gap-x-4 p-3 mb-5 bg-[#F6F6F6]'>
              <div className='p-[14px] bg-[#0079E9] rounded-sm'>
                <CheckCircle/>
              </div>
              <div>
                <h1 className='font-semibold text-lg'>Computer Diagnosis</h1>
                <h3 className='font-bold text-base text-[#F88B4E]'>Flat Fee - $50</h3>
                <p className='font-normal text-sm text-[#8D8D8D]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
              </div>
            </div>
            <div className='flex gap-x-4 p-3 mb-5 bg-[#F6F6F6]'>
              <div className='p-[14px] bg-[#0079E9] rounded-sm'>
                <CheckCircle/>
              </div>
              <div>
                <h1 className='font-semibold text-lg'>Computer Diagnosis</h1>
                <h3 className='font-bold text-base text-[#F88B4E]'>Flat Fee - $50</h3>
                <p className='font-normal text-sm text-[#8D8D8D]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
              </div>
            </div>
            <div className='flex gap-x-4 p-3 mb-5 bg-[#F6F6F6]'>
              <div className='p-[14px] bg-[#0079E9] rounded-sm'>
                <CheckCircle/>
              </div>
              <div>
                <h1 className='font-semibold text-lg'>Computer Diagnosis</h1>
                <h3 className='font-bold text-base text-[#F88B4E]'>Flat Fee - $50</h3>
                <p className='font-normal text-sm text-[#8D8D8D]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
              </div>
            </div>
            <div className='flex gap-x-4 p-3 mb-5 bg-[#F6F6F6]'>
              <div className='p-[14px] bg-[#0079E9] rounded-sm'>
                <CheckCircle/>
              </div>
              <div>
                <h1 className='font-semibold text-lg'>Computer Diagnosis</h1>
                <h3 className='font-bold text-base text-[#F88B4E]'>Flat Fee - $50</h3>
                <p className='font-normal text-sm text-[#8D8D8D]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
              </div>
            </div>
            <div className='flex gap-x-4 p-3 mb-5 bg-[#F6F6F6]'>
              <div className='p-[14px] bg-[#0079E9] rounded-sm'>
                <CheckCircle/>
              </div>
              <div>
                <h1 className='font-semibold text-lg'>Computer Diagnosis</h1>
                <h3 className='font-bold text-base text-[#F88B4E]'>Flat Fee - $50</h3>
                <p className='font-normal text-sm text-[#8D8D8D]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
              </div>
            </div>
          </div>
      </div>

    </div>
  )
}

export default TabServices