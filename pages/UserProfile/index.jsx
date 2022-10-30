import React from 'react'
import Navbar from '../../components/Navbar'
import ChangePhoto from '../../components/svg/userProfile/ChangePhoto'

const UserProfile = () => {
  return (
    <>
        <Navbar/>
        <div className='relative'>

            <div className='w-full h-40 relative -z-10'>
              <div className='absolute bg-[#0005] w-full h-full'></div>
              <img src="./assets/images/userProfile/userCover.png" alt="" className='w-full h-full object-cover' />
            </div>

            <div>
              <div className='pl-20 flex '>
                  <div className='relative'>
                    <div className='rounded-full border-8 border-[#00AEEF80] -mt-16'>
                      <img src="./assets/images/userProfile/userProfile.png" alt="" className='h-44 w-44 rounded-full object-cover' />
                    </div>
                    <button className='absolute right-0 bottom-[10%]'>
                      <ChangePhoto/>
                    </button>
                  </div>


                  <div className='pl-10 mt-6'>
                    <div>
                      <h1 className='text-2xl font-semibold'>Johnson Smith</h1>
                    </div>
                    <div className='mt-2'>
                      <h3 className='text-xl font-normal text-[#A9B7BD]'>john@example.com |  +919876 543 210</h3>
                    </div>
                  </div>
              </div>
            </div>
        </div>
    </>
  )
}

export default UserProfile