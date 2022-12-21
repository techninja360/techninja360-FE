import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import ChangePhoto from '../../components/svg/userProfile/ChangePhoto'
import LabeledInput from '../../components/userProfile/LabeledInput'
import SideBar from '../../components/userProfile/SideBar'
import { backend_server } from '../../config'


const UserProfile = () => {
  const router = useRouter()

  const ISSERVER = typeof window === "undefined";

  const [userData, setUserData] = useState()
  if(!ISSERVER) {
      // Access localStorage
      
  }

  // console.log(router.query.token);
  useEffect( ()=>{
    if(!router.isReady) return;

    // console.log('here');
    // console.log(router.query);
    if(router.query.token){
          // setToken(router.query.token)
          // console.log('google')
          localStorage.setItem('userToken',router.query.token)
          router.push('http://localhost:3000/UserProfile')          
        }

    else{
    }
      // console.log('regular')
      const userToken = localStorage.getItem('userToken')
      console.log(userToken);
      
      const getUserData = async () => {
        const userRes = await fetch(`${backend_server}/api/user/profile/details`,{method:'GET',headers: {
              "Content-Type": "application/json",
              "Authorization": "Bearer " + userToken,
          },})
  
        const userResData = await userRes.json()
        setUserData(userResData)
        console.log(userResData);
        localStorage.setItem('userData',JSON.stringify(userResData))
      }
      
      getUserData()
    
    },[router.isReady])
    
  useEffect(()=>{
    console.log('uesrData',(userData))
    // setUserData( JSON.parse(localStorage.getItem('userData')))
  },[])
  
  return (
    <>
        <Navbar/>
        <div className='flex justify-center w-full'>

          <div className='relative  max-w-[1100px]'>

              <div className='relative w-full h-40 -z-10'>
                <div className='absolute bg-[#0005] w-full h-full'></div>
                <img src="./assets/images/userProfile/userCover.png" alt="" className='w-full h-full object-cover' />
              </div>

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
                      <h1 className='text-2xl font-semibold'>{userData?.results?.first_name} {userData?.results?.last_name}</h1>
                    </div>
                    <div className='mt-2'>
                      <h3 className='text-xl font-normal text-[#A9B7BD]'>john@example.com |  +919876 543 210</h3>
                    </div>
                  </div>

              </div>

              <div className='flex mt-3 gap-x-9 mb-16'>
                
                <div className='w-1/5 mt-[88px]'>
                  <SideBar/>
                </div>

                <div className='w-4/5'>
                  
                  <div className='w-full border-b border-[#E6E6E6] h-14 flex flex-col justify-between'>
                    <h1 className='text-2xl font-medium w-full'>Profile Settings</h1>
                    <div className='w-16 h-1 bg-blue-500'></div>
                  </div>

                  <div>
                    <form className='w-full bg-[#F6F6F6] border border-[#DFDFDF] rounded-sm mt-8 px-10 py-8'>
                      <h1 className='text-2xl font-medium w-full'>Basic Information</h1>
                      
                      <div className='flex gap-x-8 mt-3'>
                        <LabeledInput type='text' id='fname' labelName='First Name'/>
                        <LabeledInput type='text' id='lname' labelName='Last Name'/>
                      </div>
                      
                      <div className='flex gap-x-8 mt-7'>
                        <LabeledInput type='text' id='phNum' labelName='Phone Number'/>
                        <LabeledInput type='text' id='email' labelName='Email Address'/>
                      </div>

                      <div className='flex mt-7 flex-wrap'>
                        <label htmlFor="desc" className='text-base font-normal text-[#6B6B6B]'>Description</label>
                        <textarea id="desc" className='mt-2 h-36 w-full text-base font-medium bg-white border border-[#BDBDBD] rounded-sm pl-6'/>
                      </div>

                      <h1 className='text-2xl font-medium w-full mt-9'>Change Password</h1>
                      <div className='flex mt-7 flex-wrap w-full'>
                        <LabeledInput type='password' id='oldPword' labelName='Old Password'/>
                        <div className='flex gap-x-8 mt-7'>
                          <LabeledInput type='password' id='newPword' labelName='New Password'/>
                          <LabeledInput type='password' id='cNewPword' labelName='Confirm New Password'/>
                        </div>
                      </div>

                      <button type="submit" className='py-3 px-8 bg-blue-500 text-white mt-7'>Save Changes</button>

                    </form>
                  </div>

                </div>
              </div>

          </div>
        </div>
    </>
  )
}

export default UserProfile