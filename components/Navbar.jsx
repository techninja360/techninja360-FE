import Link from 'next/link'
import React from 'react'
import ArrowDown from './svg/ArrowDown'
import SearchIcon from './svg/home/SearchIcon'
import SearchLocation from './svg/home/SearchLocation'

const Navbar = () => {
  return (
    <div className='flex justify-center w-full'>
      <nav className='flex justify-between items-center w-full h-24 max-w-[1100px]'>
          <Link href={'/'}>
              <img src="./assets/images/home/logo.png" alt="logo" className='h-6 cursor-pointer' />
          </Link>
          
          <div className='min-w-2/5 h-11  drop-shadow-md '>
            <div className='h-11 flex items-center bg-white rounded-md px-3 sm:flex-wrap sm:h-auto  sm:py-4'>
              <div className='flex w-1/3 sm:w-full sm:items-center'>
                <SearchLocation/>
                <input type="text" placeholder='Detect My Location' className='text-sm px-3 w-full border-r-gray-300 border-r-2 sm:border-none sm:py-1 sm:text-base'/>
              </div>
              <div className='h-px w-full hidden bg-gray-300 my-1 sm:block'></div>
              <div className='flex pl-3 flex-1 items-center sm:w-full sm:pl-0 sm:items-center'>
                <SearchIcon/>
                <input type="text" placeholder='Search for services' className='text-sm pl-3 w-full sm:pl-4 sm:py-1 sm:text-base'/>
              </div>
            </div>
          </div>

          <div className='flex justify-between items-center gap-x-1'>
            <div className='border-4 border-[#D9D9D9] rounded-full'>
              <img src="./assets/images/userProfile/userProfile.png" alt="profile" className='h-12 w-12 object-cover rounded-full'/>
            </div>
            <h1>Johnson</h1>
            <ArrowDown/>
          </div>
      </nav>
    </div>
  )
}

export default Navbar