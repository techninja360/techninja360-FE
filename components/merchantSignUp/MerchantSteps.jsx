import React from 'react'
import Step1Active from '../svg/merchantSignUp/Step1Active'
import Step2 from '../svg/merchantSignUp/Step2'
import Step3 from '../svg/merchantSignUp/step3'

const MerchantSteps = () => {
  return (
    <div className='border border-[#E9E9E9] flex w-full bg-[#F7FAFC] justify-center -z-20 h-36 items-center'>
            
            <div className='flex'>                    
              <div className='relative -z-10'>
                <Step1Active/>
              </div>
              <div className='px-6 absolute py-4 flex flex-col justify-center'>
                <h1 className='font-medium text-sm text-white'>Basic Information</h1>
                <p className='font-normal text-xs text-white'>Merchant Details add here</p>
              </div>
            </div>

            <div className='flex '>        
              <div className='relative -z-10'>
                <Step2/>
              </div>
              <div className='px-6 absolute py-4 flex flex-col justify-center pl-10'>
                <h1 className='font-medium text-sm text-blue-400'>Business Information</h1>
                <p className='font-normal text-xs text-blue-400'>Business details add here</p>
              </div>
            </div>

            <div className='flex '>        
              <div className='relative -z-10'>
                <Step3/>
              </div>
              <div className='px-6 absolute py-4 flex flex-col justify-center'>
                <h1 className='font-medium text-sm'>Services Provided</h1>
                <p className='font-normal text-xs'>Service categories and price details</p>
              </div>
            </div>
           
          </div>
  )
}

export default MerchantSteps