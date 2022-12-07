import React from 'react'
import Step1Active from '../svg/merchantSignUp/Step1Active'
import Step2 from '../svg/merchantSignUp/Step2'
import Step2Active from '../svg/merchantSignUp/Step2Active'
import Step3 from '../svg/merchantSignUp/Step3'
import Step3Active from '../svg/merchantSignUp/Step3Active'

const MerchantSteps = ({step}) => {
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
                {step===2 || step===3? <Step2Active/>: <Step2/>}
              </div>
              <div className='px-6 absolute py-4 flex flex-col justify-center pl-10'>
                <h1 className={`font-medium text-sm ${step===2 || step===3? 'text-white' :  'text-blue-400'}`}>Business Information</h1>
                <p className={`font-normal text-xs ${step===2 || step===3? 'text-white' :  'text-blue-400'}`}>Business details add here</p>
              </div>
            </div>

            <div className='flex '>        
              <div className='relative -z-10'>
                {step===3 ?<Step3Active/> : <Step3/>}
              </div>
              <div className='px-6 absolute py-4 flex flex-col justify-center'>
                <h1 className={`font-medium text-sm ${ step===3? 'text-white' :''}`}>Services Provided</h1>
                <p className={`font-normal text-xs  ${ step===3? 'text-white' :''}`}>Service categories and price details</p>
              </div>
            </div>
           
          </div>
  )
}

export default MerchantSteps