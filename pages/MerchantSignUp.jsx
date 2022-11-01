import React from 'react'
import Footer from '../components/Footer'
import MerchantSteps from '../components/merchantSignUp/MerchantSteps'
import StepOne from '../components/merchantSignUp/StepOne'
import NavbarMerchant from '../components/NavbarMerchant'

const MerchantSignUp = () => {
  return (
    <>
    <NavbarMerchant/>
    <div className='flex justify-center w-full'>
        <div className='relative max-w-[1100px] w-full flex justify-center flex-wrap mb-10'>

          <MerchantSteps/>
          <StepOne/>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default MerchantSignUp