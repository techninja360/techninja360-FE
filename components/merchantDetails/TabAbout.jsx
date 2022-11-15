import React from 'react'
import Calender from '../svg/merchantDetails/Calender'
import Checked from '../svg/merchantDetails/Checked'
import Clock from '../svg/merchantDetails/Clock'
import Unchecked from '../svg/merchantDetails/Unchecked'
import Users from '../svg/merchantDetails/Users'

const bnHours = [
    {bnDays : 'Monday',bnStart:'10am',bnEnd:'9pm'},
    {bnDays : 'Tuesday',bnStart:'10am',bnEnd:'9pm'},
    {bnDays : 'Wednesday',bnStart:'10am',bnEnd:'9pm'},
    {bnDays : 'Thursday',bnStart:'10am',bnEnd:'9pm'},
    {bnDays : 'Friday',bnStart:'10am',bnEnd:'9pm'},
    {bnDays : 'Saturday',bnStart:'10am',bnEnd:'9pm'},
    {bnDays : 'Sunday',bnStart:'10am',bnEnd:'9pm'},
  ]

const TabAbout = () => {
  return (
    <div className='flex gap-x-6 mt-9 w-full'>
      
      <div className='w-1/3 bg-[#F6F6F6] rounded-md'>
        
        <div className='flex gap-x-4 p-5  border-b border-[#E1E1E1]'>
          <div className='flex justify-center items-center w-[70px] h-[70px] bg-[#0079E9] rounded-sm'>
            <Calender/>
          </div>
          <div>
            <h1 className='font-semibold text-xl capitalize mt-1'>years in Business</h1>
            <h4 className='font-normal text-base text-[#8D8D8D] mt-1'>25 Years</h4>
          </div>
        </div>

        <div className='flex gap-x-4 p-5  border-b border-[#E1E1E1]'>
          <div className='flex justify-center items-center min-w-[70px] h-[70px] bg-[#0079E9] rounded-sm'>
            <Clock/>
          </div>
          <div className='w-full'>
            <h1 className='font-semibold text-xl capitalize mt-2'>Business hours</h1>
            <div className='mt-1'>
              {
                bnHours.map((day)=>{
                  return(
                    <div className='flex justify-between w-full mb-1'>
                      <h3 className='font-normal text-sm text-[#8D8D8D]'>{day.bnDays}</h3>
                      <div className='flex font-semibold text-sm text-[#8D8D8D]'>
                        <h3>{day.bnStart} - </h3>
                        <h3> {day.bnEnd}</h3>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>

        <div className='flex gap-x-4 p-5'>
          <div className='flex justify-center items-center w-[70px] h-[70px] bg-[#0079E9] rounded-sm'>
            <svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_1144_1020)">
            <path d="M30.4587 37.625V34.0417C30.4587 32.1409 29.7036 30.3181 28.3596 28.9741C27.0156 27.6301 25.1927 26.875 23.292 26.875H8.95866C7.05794 26.875 5.23507 27.6301 3.89106 28.9741C2.54705 30.3181 1.79199 32.1409 1.79199 34.0417V37.625" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M16.1247 19.7083C20.0827 19.7083 23.2913 16.4997 23.2913 12.5417C23.2913 8.58363 20.0827 5.375 16.1247 5.375C12.1666 5.375 8.95801 8.58363 8.95801 12.5417C8.95801 16.4997 12.1666 19.7083 16.1247 19.7083Z" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M41.208 37.625V34.0417C41.2068 32.4538 40.6783 30.9112 39.7055 29.6562C38.7326 28.4012 37.3705 27.5049 35.833 27.1079" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M28.667 5.60791C30.2086 6.00262 31.5749 6.89917 32.5507 8.15622C33.5264 9.41327 34.056 10.9593 34.056 12.5506C34.056 14.1419 33.5264 15.688 32.5507 16.945C31.5749 18.2021 30.2086 19.0986 28.667 19.4933" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
            <defs>
            <clipPath id="clip0_1144_1020">
            <rect width="43" height="43" fill="white"/>
            </clipPath>
            </defs>
            </svg>
          </div>
          <div>
            <h1 className='font-semibold text-xl capitalize mt-1'>Employee Strength</h1>
            <h4 className='font-normal text-base text-[#8D8D8D] mt-1'>500+ Employees</h4>
          </div>
        </div>

      </div>
      
      
      <div className='w-2/3  px-8 bg-[#F6F6F6] rounded-md'>
        <div className='mt-9'>
          
          <h1 className='text-xl font-semibold'>1. Support type</h1>
          
          <div className='flex justify-between mt-3'>
            <div className='flex items-center gap-x-2  min-w-[38%]'>
              <Checked/>
              <p className='font-normal text-[15px] text-[#8D8D8D]'>Remote Support</p>
            </div>
            <div className='flex items-center gap-x-2  min-w-[38%]'>
              <Unchecked/>
              <p className='font-normal text-[15px] text-[#8D8D8D]'>Local Instore Support</p>
            </div>
            <div className='flex items-center gap-x-2  min-w-[38%]'>
              <Checked/>
              <p className='font-normal text-[15px] text-[#8D8D8D]'>House Call</p>
            </div>
          </div>

        </div>
        
        <div className='mt-8'>
          
          <h1 className='text-xl font-semibold'>2. Pick and Drop </h1>
          
          <div className='flex justify-between mt-3'>
            <div className='flex items-center gap-x-2'>
              <Checked/>
              <p className='font-normal text-[15px] text-[#8D8D8D]'>Yes</p>
            </div>
           
          </div>

        </div>

        <div className='mt-9'>
          
          <h1 className='text-xl font-semibold'>3. Plan Type</h1>
          
          <div className='flex mt-3'>
            <div className='flex items-center gap-x-2 min-w-[38%]'>
              <Checked/>
              <p className='font-normal text-[15px] text-[#8D8D8D]'>One Time</p>
            </div>
            <div className='flex items-center gap-x-2 min-w-[38%]'>
              <Unchecked/>
              <p className='font-normal text-[15px] text-[#8D8D8D]'>Monthly Unlimited</p>
            </div>
            <div className='flex items-center gap-x-2 min-w-[38%]'>
              <Checked/>
              <p className='font-normal text-[15px] text-[#8D8D8D]'>Yearly Unlimited </p>
            </div>
          </div>

        </div>
        
        <div className='mt-9'>
          
          <h1 className='text-xl font-semibold'>4. Caters</h1>
          
          <div className='flex justify-between mt-3'>
            <div className='flex items-center gap-x-2 min-w-[38%]'>
              <Checked/>
              <p className='font-normal text-[15px] text-[#8D8D8D]'>Personal</p>
            </div>
            <div className='flex items-center gap-x-2 min-w-[38%]'>
              <Unchecked/>
              <p className='font-normal text-[15px] text-[#8D8D8D]'>Business</p>
            </div>
            <div className='flex items-center gap-x-2 min-w-[38%]'>
              <Checked/>
              <p className='font-normal text-[15px] text-[#8D8D8D]'>Enterprise</p>
            </div>
          </div>

        </div>

      </div>

    </div>
  )
}

export default TabAbout