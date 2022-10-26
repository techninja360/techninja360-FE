import React from 'react'
import GPSLocation from '../svg/home/GPSLocation'
import GPSRight from '../svg/home/GPSRight'
import SearchIcon from '../svg/home/SearchIcon'
import SearchLocation from '../svg/home/SearchLocation'

const MainSection = () => {
  return (
    <section className='h-[520px]'>

        <div className='absolute w-full -z-10'>
          <img 
            src={'https://images.unsplash.com/photo-1644088379091-d574269d422f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1693&q=80'} 
            alt="bg"
            className='object-cover w-full h-[520px]'
            />
        </div>
        <div className='w-full text-white relative'>
          <div className='absolute right-32 top-11'>
            <a href="">List your Business</a> | <a href="">Sign Up</a> | <a href="">Sign In</a>
          </div>
        </div>
        <div className='flex justify-center flex-wrap pt-56'>
          
          <div className='w-full flex justify-center'>
            <img src="./assets/images/home/TechNinja360.png" alt="" />
          </div>
          
          <div className='w-full flex justify-center'>
            <div className='w-[758px] flex items-center bg-white rounded-sm px-3 h-11 mt-5'>
              <div className='flex'>
                <SearchLocation/>
                <input type="text" placeholder='Find My Location' className='text-lg px-3 border-r-gray-300 border-r-2'/>
              </div>
              <div className='flex pl-3 flex-1 items-center'>
                <SearchIcon/>
                <input type="text" placeholder='Search for services/business' className='text-lg pl-11 w-full'/>
              </div>
            </div>
          </div>

          <div className='w-[758px] flex mt-2'>
            <div className='w-[412px] h-[125px] p-3 rounded-sm bg-white'>
              <div className='w-full flex justify-between border-b pb-5'>
                <div className='flex'>
                  <GPSLocation/>
                  <p className='text-gray-400 text-base font-medium pl-3'>Current Location</p>
                </div>
                <div className='flex items-center pr-7'>
                  <p className='text-blue-500 text-base font-semibold pr-8'>Detect using GPS</p>
                  <GPSRight/>
                </div>
                
              </div>
              <div className=' flex justify-between items-center p-4 w-[386px] h-11 bg-gray-100 mt-3 rounded-sm border border-gray-200'>
                <input className='bg-gray-100' type="text" placeholder='Enter Locality/zip code' />
                <SearchIcon/>
              </div>
            </div>

          </div>
        </div>
      </section>
     
  )
}

export default MainSection