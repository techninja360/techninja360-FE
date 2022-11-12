import React, { useState } from 'react'
import Footer from '../components/Footer'
import MerchantSteps from '../components/merchantSignUp/MerchantSteps'
import StepOne from '../components/merchantSignUp/StepOne'
import StepThree from '../components/merchantSignUp/StepThree'
import StepTwo from '../components/merchantSignUp/StepTwo'
import NavbarMerchant from '../components/NavbarMerchant'
import { useMerchantSignUpContext } from '../context/merchantSignUp_context'

const MerchantSignUp = () => {
  
  const {step, setStep} = useMerchantSignUpContext()
  return (

    <>
    <NavbarMerchant/>
    <div className='flex justify-center w-full'>
      <MerchantSteps step = {step}/>
    </div>
    <div className='flex justify-center w-full'>
        <div className='relative max-w-[1100px] w-full flex justify-center flex-wrap mb-10'>

          {
            step === 1 && <StepOne/>
            
          }
          {
            step === 2 && <StepTwo/>
            
          }
          {
            step === 3 && <StepThree/>
          }
          
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default MerchantSignUp