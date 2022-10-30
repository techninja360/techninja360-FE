import { useState } from 'react'
import CategorySection from '../components/home/CategorySection'
import Footer from '../components/home/Footer'
import MainSection from '../components/home/MainSection'
import ReviewsSection from '../components/home/ReviewsSection'
import SearchTermSection from '../components/home/SearchTermSection'
import SignUp from '../components/SignUp'
import { useSignUpContext } from '../context/signUp_context'

export default function Home() {

  const {signUpOpen, setSignUpOpen} = useSignUpContext()
  return (
    <div className={`relative ${signUpOpen ? 'overscroll-none':''}`}>
    {signUpOpen ? <SignUp/> : null}
      <MainSection/>
      <CategorySection/>
      <SearchTermSection/>
      <ReviewsSection/>
      <Footer/>
    </div>
  )
}
