import Head from 'next/head'
import Image from 'next/image'
import CategorySection from '../components/home/CategorySection'
import Footer from '../components/home/Footer'
import MainSection from '../components/home/MainSection'
import ReviewsSection from '../components/home/ReviewsSection'
import SearchTermSection from '../components/home/SearchTermSection'
import GPSLocation from '../components/svg/home/GPSLocation'
import GPSRight from '../components/svg/home/GPSRight'
import HomePC from '../components/svg/home/HomePC'
import Phone from '../components/svg/home/phone'
import SearchIcon from '../components/svg/home/SearchIcon'
import SearchLocation from '../components/svg/home/SearchLocation'
import bgImg from '../public/assets/images/home/homeBg.png'


export default function Home() {
  return (
    <div>
      <MainSection/>
      <CategorySection/>
      <SearchTermSection/>
      <ReviewsSection/>
      <Footer/>
    </div>
  )
}
