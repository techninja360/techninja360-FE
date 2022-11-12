import React from 'react'
import FB from './svg/home/FB'
import IN from './svg/home/IN'
import TW from './svg/home/TW'
import YT from './svg/home/YT'
import IG from './svg/home/IG'

const Footer = () => {
  return (
    <div className='flex bg-[rgb(30,30,30,1)]  justify-center'>
    <footer className='relative max-w-[1100px] w-full py-20 flex flex-wrap justify-between'>
        <div className='w-1/2 md:w-full'>
            <div className='flex flex-wrap justify-start gap-y-8'>
                <div className='h-14 w-full flex justify-start'>
                    <img className='h-8 sm:h-6 md:h-6' src="./assets/images/home/logo.png" alt="" />
                </div>
                <div className='flex gap-x-3 ml-12'>
                    <div  className='flex justify-center items-center h-7 w-7 rounded-full bg-white'>
                        <FB/>
                    </div>
                    <div  className='flex justify-center items-center h-7 w-7 rounded-full bg-white'>
                        <IG/>
                    </div>
                    <div  className='flex justify-center items-center h-7 w-7 rounded-full bg-white'>
                        <IN/>
                    </div>
                    <div  className='flex justify-center items-center h-7 w-7 rounded-full bg-white'>
                        <TW/>
                    </div>
                    <div  className='flex justify-center items-center h-7 w-7 rounded-full bg-white'>
                        <YT/>
                    </div>
                </div>
            </div>
        </div>

        <div className='text-white w-1/2 flex justify-between md:w-full md:mt-12'>
            <div className='w-[60%]'>
                <ul>
                    <li className='mb-3'><a href="">Home</a></li>
                    <li className='mb-3'><a href="">FAQ’s</a></li>
                    <li className='mb-3'><a href="">Terms & Conditions</a></li>
                    <li className='mb-3'><a href="">Privacy Policy</a></li>
                </ul>
            </div>
            <div  className='w-[30%]'>
                <ul>
                    <li className='mb-3'><a href="">Carriers</a></li>
                    <li className='mb-3'><a href="">Advertise with Us</a></li>
                    <li className='mb-3'><a href="">Help</a></li>
                    <li className='mb-3'><a href="">FAQ’s</a></li>
                </ul>
            </div>
            {/* <div className='w-[30%] md:hidden'></div> */}
        </div>
    </footer>
    </div>
  )
}

export default Footer