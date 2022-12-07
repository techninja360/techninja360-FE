import { useEffect, useState } from 'react'
import CategorySection from '../components/home/CategorySection'
import Footer from '../components/Footer'
import MainSection from '../components/home/MainSection'
import ReviewsSection from '../components/home/ReviewsSection'
import SearchTermSection from '../components/home/SearchTermSection'
import UserSignUp from '../components/UserSignUp'
import { useSignUpContext } from '../context/signUp_context'
import { useRouter } from 'next/router'
import MerchantSignUp from '../components/MerchantSignUp'
import { useMerchantProfileContext } from '../context/merchantProfile_context'
import MerchantLogIn from '../components/MerchantLogIn'

export default function Home() {

  const {signUpOpen, setSignUpOpen, setToken} = useSignUpContext()
  const {merchantSignUpOpen, setMerchantSignUpOpen, merchantLogin, setMerchantLogin} = useMerchantProfileContext()

 
  // console.log(router.query);

  // useEffect(()=>{

  //   const getUserData = async()=>{
      
  //     const res = await fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
  //     const data = await res.json()
  //     console.log(data);
  //   }

  //   getUserData()
  // },[])

  return (
    <div className={`relative ${signUpOpen ? 'overscroll-none':''}`}>
    {signUpOpen ? <UserSignUp/> : null}
    {merchantSignUpOpen ? <MerchantSignUp/> : null}
    {merchantLogin ? <MerchantLogIn/> : null}
      <MainSection/>
      <CategorySection/>
      <SearchTermSection/>
      <ReviewsSection/>
      <Footer/>
    </div>
  )
}
