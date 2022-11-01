import Link from 'next/link'
import React from 'react'
import ArrowDown from './svg/ArrowDown'
import SearchIcon from './svg/home/SearchIcon'
import SearchLocation from './svg/home/SearchLocation'

const NavbarMerchant = () => {
  return (
    <div className='flex justify-center w-full'>
      <nav className='flex justify-between items-center w-full h-24 max-w-[1100px]'>
          <Link href={'/'}>
              <img src="./assets/images/home/baldgenie.png" alt="logo" className='h-10 cursor-pointer' />
          </Link>

          <div className='flex justify-between items-center gap-x-1'>
            <div>
                <button>Sign Up&nbsp;</button> | 
                <button>&nbsp; Sign In</button>
            </div>
          </div>
      </nav>
    </div>
  )
}

export default NavbarMerchant