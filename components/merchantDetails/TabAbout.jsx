import React from 'react'
import Calender from '../svg/merchantDetails/Calender'
import Checked from '../svg/merchantDetails/Checked'
import Clock from '../svg/merchantDetails/Clock'
import Unchecked from '../svg/merchantDetails/Unchecked'
import Users from '../svg/merchantDetails/Users'

const bnHours = [
    {bnDays : 'Monday',bnStart:'10am',bnEnd:'9pm'},
    {bnDays : 'Tuesday',bnStart:'10am',bnEnd:'12pm'},
    {bnDays : 'Wednesday',bnStart:'10am',bnEnd:'9pm'},
    {bnDays : 'Thursday',bnStart:'10am',bnEnd:'9pm'},
    {bnDays : 'Friday',bnStart:'10am',bnEnd:'9pm'},
    {bnDays : 'Saturday',bnStart:'10am',bnEnd:'9pm'},
    {bnDays : 'Sunday',bnStart:'10am',bnEnd:'9pm'},
  ]

const TabAbout = () => {
  return (
    <div className='flex gap-x-6 mt-4 w-full'>
      
      <div className='w-1/3 bg-[#F6F6F6] rounded-md'>
        
        <div className='flex gap-x-4 p-5  border-b border-[#E1E1E1]'>
          <div className='flex justify-center items-center w-[70px] h-[70px] bg-[#0079E9] rounded-sm'>
            <Calender/>
          </div>
          <div>
            <h1 className='font-semibold text-xl text-[#464646] capitalize mt-1'>years in Business</h1>
            <h4 className='font-[350px] text-base text-[#8D8D8D] mt-1'>25 Years</h4>
          </div>
        </div>

        <div className='flex gap-x-4 p-5  border-b border-[#E1E1E1]'>
          <div className='flex justify-center items-center min-w-[70px] h-[70px] bg-[#0079E9] rounded-sm'>
            <Clock/>
          </div>
          <div className='w-full'>
            <h1 className='font-semibold text-xl text-[#464646] capitalize mt-2'>Business hours</h1>
            <div className='mt-1'>
              {
                bnHours.map((day)=>{
                  return(
                    <div key={day.bnDays} className='flex justify-between w-full mb-1'>
                      <h3 className='font-[350px] text-sm text-[#8D8D8D]'>{day.bnDays}</h3>
                      <div className='flex font-semibold gap-x-2 text-sm text-[#8D8D8D]'>
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
            <Users/>
          </div>
          <div>
            <h1 className='font-semibold text-xl text-[#464646] capitalize mt-1'>Employee Strength</h1>
            <h4 className='font-[350px] text-base text-[#8D8D8D] mt-1'>500+ Employees</h4>
          </div>
        </div>

      </div>
      
      
      <div className='w-2/3  px-8 bg-[#F6F6F6] rounded-md'>
        <div className='mt-9'>
          
          <h1 className='text-xl font-semibold text-[#464646]'>1. Support type</h1>
          
          <div className='flex justify-between mt-3'>
            <div className='flex items-center gap-x-2  min-w-[38%]'>
              <Checked/>
              <p className='font-normal text-[15px] text-[#5d5d5d]'>Remote Support</p>
            </div>
            <div className='flex items-center gap-x-2  min-w-[38%]'>
              <Unchecked/>
              <p className='font-normal text-[15px] text-[#5d5d5d]'>Local Instore Support</p>
            </div>
            <div className='flex items-center gap-x-2  min-w-[38%]'>
              <Checked/>
              <p className='font-normal text-[15px] text-[#5d5d5d]'>House Call</p>
            </div>
          </div>

        </div>
        
        <div className='mt-8'>
          
          <h1 className='text-xl font-semibold text-[#464646]'>2. Pick and Drop </h1>
          
          <div className='flex justify-between mt-3'>
            <div className='flex items-center gap-x-2'>
              <Checked/>
              <p className='font-normal text-[15px] text-[#5d5d5d]'>Yes</p>
            </div>
           
          </div>

        </div>

        <div className='mt-9'>
          
          <h1 className='text-xl font-semibold text-[#464646]'>3. Plan Type</h1>
          
          <div className='flex mt-3'>
            <div className='flex items-center gap-x-2 min-w-[38%]'>
              <Checked/>
              <p className='font-normal text-[15px] text-[#5d5d5d]'>One Time</p>
            </div>
            <div className='flex items-center gap-x-2 min-w-[38%]'>
              <Unchecked/>
              <p className='font-normal text-[15px] text-[#5d5d5d]'>Monthly Unlimited</p>
            </div>
            <div className='flex items-center gap-x-2 min-w-[38%]'>
              <Checked/>
              <p className='font-normal text-[15px] text-[#5d5d5d]'>Yearly Unlimited </p>
            </div>
          </div>

        </div>
        
        <div className='mt-9'>
          
          <h1 className='text-xl font-semibold text-[#464646]'>4. Caters</h1>
          
          <div className='flex justify-start mt-3'>
            <div className='flex items-center gap-x-2 min-w-[38%]'>
              <Checked/>
              <p className='font-normal text-[15px] text-[#5d5d5d]'>Personal</p>
            </div>
            <div className='flex items-center gap-x-2 min-w-[38%]'>
              <Unchecked/>
              <p className='font-normal text-[15px] text-[#5d5d5d]'>Business</p>
            </div>
            
          </div>

        </div>

      </div>

    </div>
  )
}

export default TabAbout