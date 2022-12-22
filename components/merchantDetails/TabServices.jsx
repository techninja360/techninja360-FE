import React, { useEffect, useState } from 'react'
import ComputerIcon from '../svg/merchantDetails/ComputerIcon'
import PrinterIcon from '../svg/merchantDetails/PrinterIcon'
import SelectedCategory from '../svg/merchantDetails/SelectedCategory'

import { services } from '../../data/merchantServices'
import ServiceCategories from './ServiceCategories'
import CheckCircle from '../svg/merchantDetails/CheckCircle'

const TabServices = ({merchServices}) => {
  const [selected, setSelected] = useState(0)
  const [selectedCategory, setSelectedCategory] = useState()
  const [avlCategories, setAvlCategories] = useState([])
  const [selectedServices, setSelectedServices] = useState()
  
  useEffect(()=>{
    console.log('merchServices',merchServices)
    let temp_avlCategories = merchServices.map((item)=>{
      return item.service_category
    })
    temp_avlCategories = [...new Set(temp_avlCategories)]
    console.log('temp_avlCategories',temp_avlCategories)


    let temp_AvlServices = services.filter((item)=>{
      if(temp_avlCategories.includes(item.mainCategory)){
        return item
      }
    })

    setSelectedCategory(temp_AvlServices[0].mainCategory)
    setAvlCategories(temp_AvlServices)
  },[])
  
  useEffect(()=>{
    let temp_services = merchServices.filter((item)=>{
      if(item.service_category === selectedCategory){
        return item
      } 
    })

    console.log('temp_services', temp_services);

    setSelectedServices(temp_services)
  },[selectedCategory])
  
  return (
    <div className='flex mt-4 gap-x-8 w-full'>
    
      <div className='w-1/4 border-r border-r-[#D1D1D1]'>
        <div>
          {
            avlCategories.map((service,index)=>{
              return(
                <ServiceCategories key={index} categoryName={service.mainCategory} icon={service.icon} selectedIcon={service.selectedIcon} selected={selected} setSelected={setSelected} setSelectedCategory={setSelectedCategory} index={index}/>
              )
            })
          }
        </div>
      </div>

      <div className='w-3/4'>
          <div>
            {
              selectedServices?.map((item)=>{
                return (
                  <div className='flex gap-x-4 p-3 mb-5 bg-[#F6F6F6]'>
                    <div className='p-[14px] bg-[#0079E9] rounded-sm'>
                      <CheckCircle/>
                    </div>
                    <div>
                      <h1 className='font-semibold text-lg'>{item.service_name}</h1>
                      <h3 className='font-bold text-base text-[#F88B4E] capitalize'>{item.pricing_type} - ${item.service_price}</h3>
                      <p className='font-normal text-sm text-[#8D8D8D]'>{item.service_desc}</p>
                    </div>
                  </div>
                )
              })
            }
            {/* <div className='flex gap-x-4 p-3 mb-5 bg-[#F6F6F6]'>
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
            </div> */}
          </div>
      </div>

    </div>
  )
}

export default TabServices