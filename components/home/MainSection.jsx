import React from 'react'
import GPSLocation from '../svg/home/GPSLocation'
import GPSRight from '../svg/home/GPSRight'
import SearchIcon from '../svg/home/SearchIcon'
import SearchLocation from '../svg/home/SearchLocation'
import Link from 'next/link'
import { useSignUpContext } from '../../context/signUp_context'

const MainSection = () => {
  const {signUpOpen, setSignUpOpen} = useSignUpContext()

  return (
    <section className='relative h-[520px] md:h-[600px]'>

        <div className='absolute w-full -z-10 md:h-[600px]'>
          <img 
            src={'https://images.unsplash.com/photo-1644088379091-d574269d422f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1693&q=80'} 
            alt="bg"
            className='object-cover w-full h-[520px] md:h-[600px]'
            />
        </div>
        <div className='w-full text-white relative sm:flex sm:justify-center'>
          <div className='absolute right-32 top-11 md:right-10 sm:relative sm:right-0'>
            <a href="">List your Business</a> | <button onClick={()=>setSignUpOpen(true)}>Sign Up</button> | <a href="">Sign In</a>
          </div>
        </div>
        <div className='flex justify-center flex-wrap pt-56'>
          
          <div className='w-full flex justify-center'>
            <img src="./assets/images/home/TechNinja360.png" alt="" className='md:w-[80%] max-w-[550px] object-cover' />
          </div>
          
          <div className='w-full flex justify-center md:px-5'>
            <div className='w-[758px] h-11 flex items-center bg-white rounded-sm px-3 mt-5 sm:flex-wrap sm:h-auto  sm:py-4'>
              <div className='flex w-1/3 sm:w-full sm:items-center'>
                <SearchLocation/>
                <input type="text" placeholder='Find My Location' className='text-lg px-3 w-full border-r-gray-300 border-r-2 sm:border-none sm:py-1 sm:text-base'/>
              </div>
              <div className='h-px w-full hidden bg-gray-300 my-1 sm:block'></div>
              <div className='flex pl-3 flex-1 items-center sm:w-full sm:pl-0 sm:items-center'>
                <SearchIcon/>
                <input type="text" placeholder='Search for services/business' className='text-lg pl-11 w-full sm:pl-4 sm:py-1 sm:text-base'/>
              </div>
            </div>
          </div>

          <div className='w-[758px] flex mt-2 md:px-5 md:mb-5 sm:w-full'>
            <div className='w-[412px] p-3 py-4 rounded-sm bg-white sm:w-full'>
              <div className='w-full flex justify-between border-b pb-3'>
                <div className='flex sm:gap-x-2 sm:items-center'>
                  <div>
                    <GPSLocation/>
                  </div>
                  <p className='text-gray-400 text-base font-medium pl-3 sm:pl-0'>Current Location</p>
                </div>
                <div className='flex items-center pr-1'>
                  <p className='text-blue-500 text-base font-semibold pr-6'>Detect using GPS</p>
                  <GPSRight/>
                </div>
                
              </div>
              <div className=' flex justify-between items-center p-4 w-[386px] h-11 bg-gray-100 mt-3 rounded-sm border border-gray-200 sm:w-full'>
                <input className='bg-gray-100 sm:w-3/4' type="text" placeholder='Enter Locality/zip code' />
                <SearchIcon/>
              </div>
            </div>

          </div>
        </div>
      </section>
     
  )
}

export default MainSection