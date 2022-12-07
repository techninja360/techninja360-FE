import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Footer from '../../components/Footer'
import MerchantSteps from '../../components/merchantProfile/MerchantSteps'
import StepOne from '../../components/merchantProfile/StepOne'
import StepThree from '../../components/merchantProfile/StepThree'
import StepTwo from '../../components/merchantProfile/StepTwo'
import NavbarMerchant from '../../components/NavbarMerchant'
import { useMerchantProfileContext } from '../../context/merchantProfile_context'

const MerchantProfile = () => {
  
  const {step, setStep} = useMerchantProfileContext()

  const router = useRouter()

  const ISSERVER = typeof window === "undefined";

  const [authorized, setAuthorized] = useState()

if(!ISSERVER) {
    // Access localStorage
    
}

// console.log(router.query.token);
useEffect( ()=>{
  if(!router.isReady) return;

  // console.log('here');
  // console.log(router.query);
  // if(router.query.token){
        // setToken(router.query.token)
        // console.log('google')
        // localStorage.setItem('merchToken',router.query.token)
        // router.push('http://localhost:3000/UserProfile')          
      // }

  // else{
  // }
    // console.log('regular')
    const merchToken = sessionStorage.getItem('merchToken')
    if(merchToken){
      console.log(merchToken);
      setAuthorized(true)
    }
    else{
      setAuthorized(false)
    }
    
    // const getMerchData = async () => {
    //   const userRes = await fetch('http://localhost:8000/api/merchant/profile/details',{method:'GET',headers: {
    //         "Content-Type": "application/json",
    //         "Authorization": "Bearer " + merchToken,
    //     },})

    //   const userResData = await userRes.json()
    //   setMerchData(userResData)
    //   console.log(userResData);
    //   localStorage.setItem('merchData',JSON.stringify(userResData))
    // }
    
    // getMerchData()
  
  },[router.isReady])

  return (

    <>
    <NavbarMerchant/>
    {authorized ? <>
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
      </>:
      <div>
        Unauthorized User
      </div>
      }
    <Footer/>
    </>
  )
}

export default MerchantProfile