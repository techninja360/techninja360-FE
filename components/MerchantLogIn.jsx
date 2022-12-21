import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { backend_server } from '../config'
import { useMerchantProfileContext } from '../context/merchantProfile_context'
import HidePassword from './svg/HidePassword'
import ShowPassword from './svg/ShowPassword'
import XBlack from './svg/XBlack'
import XWhite from './svg/XWhite'



const MerchantLogIn = () => {
    const [showPass, setShowPass] = useState(true)

    const [merchEmail, setMerchEmail] = useState('')
    const [merchPass, setMerchPass] = useState('')

    const [errorLogin, setErrorLogin] = useState('')

    const {contextMerchToken, setContextMerchToken,merchantSignUpOpen, setMerchantSignUpOpen, merchantLogin, setMerchantLogin, merchantSignInDetails, setMerchantSignInDetails} = useMerchantProfileContext()
    
    const Router = useRouter()
    const logInMerchant = async (e) => {
        e.preventDefault()
        const formBody = {
                "email":merchEmail,
                "password":merchPass
        }
        const rawRes = await fetch(`${backend_server}/api/merchant/signin`,{method:'POST', body: JSON.stringify(formBody),headers: {
            "Content-Type": "application/json",
            // "Authorization": "Bearer " + auth.token,
          },})
        const data = await rawRes.json()
        console.log(data)
        // setAuthRes(data)

        if(data.status === 'ok'){
            console.log(data);
            setMerchantSignInDetails(data.user_details)
            sessionStorage.setItem('merchToken',data.user_details.token)
            setContextMerchToken(data.user_details.token)
            Router.push('http://localhost:3000/merchantProfile')
        }
        
        else{
            setErrorLogin(data)
        }
    }
  return (
    <div className='justify-center items-center w-full h-screen flex overflow-x-hidden overflow-y-auto fixed z-50 outline-none focus:outline-none bg-[#0009]'>
        <div className='h-full w-full flex justify-center items-center '>
            <div className='bg-white  w-[30%] pb-7 rounded-md'>
                <div className='flex justify-end p-4 w-full' onClick={()=>setMerchantLogin(false)}>
                    <XBlack/>
                </div>
                <div className='flex justify-center mt-6'>
                    <h1 className='font-bold text-[34px]'>Log In</h1>
                </div>
                <form className='mt-7'>
                    
                    <div className='w-full px-11'>
                        <label htmlFor={'email'} className='text-xl font-normal text-[#222222]'>Email Address</label>
                        <input id={'email'} type={'text'} className='placeholder:text-[#999999] placeholder:text-xl placeholder:font-normal mt-2 h-12 w-full text-base font-medium bg-white border border-[#CCCCCC] rounded-sm pl-6' placeholder='Add Email Address' value={merchEmail} onChange={e=>setMerchEmail(e.target.value)}/>
                    </div>
                    
                    <div className='relative w-full px-11 mt-7'>
                        <label htmlFor={'merchPass'} className='text-xl font-normal text-[#222222]'>Password</label>
                        <input id={'merchPass'} type={showPass ?  "password" : "text"} className='placeholder:text-[#999999] placeholder:text-xl placeholder:font-normal mt-2 h-12 w-full text-base font-medium bg-white border border-[#CCCCCC] rounded-sm pl-6' placeholder='Add Password' value={merchPass} onChange={e=>setMerchPass(e.target.value)}/>
                        <div className='absolute top-12 right-14' onClick={()=>setShowPass(!showPass)}>
                            {showPass ? <ShowPassword/> : <HidePassword/>}
                        </div>
                    </div>
                    
                    <div className='relative flex justify-between w-full px-11 mt-7'>
                        <div>
                            <input type="checkbox" id={'merchRemember'} name={'merchRemember'} />
                            <label htmlFor={'merchRemember'} className={`text-black font-normal text-sm ml-2`} >Remember Me</label>
                        </div>
                        <div>
                            <Link href={'/'}><p className={`text-[#0079E9] font-normal text-sm ml-2`}> Forgot Password?</p></Link>
                        </div>
                    </div>

                    <div className='mt-8 w-full flex justify-center'>
                        <button className='bg-[#0079E9] text-white py-4 px-28 font-bold text-lg rounded-sm' onClick={logInMerchant}>LOG IN</button>
                    </div>
                </form>
                {errorLogin && <p>{errorLogin}</p>}
                <div className='flex justify-center'>
                    <div className='my-7 flex w-full self-center justify-center items-center max-w-[440px]'>
                        <div className='w-full bg-[#C5C5C5] h-px'></div>
                        <p className='text-[#A6A0A0] w-full text-center'>Sign up with</p> 
                        <div className='w-full bg-[#C5C5C5] h-px'></div>
                    </div>
                </div>

                <div className='flex px-7 gap-x-7'>
                    <div className='w-full flex justify-center'>
                        <button className='flex justify-center w-full gap-x-2 bg-[#F9F9F9] border border-[#C5C5C5] py-3 rounded-sm' onClick={(e)=>googleAuth(e)}>
                            <img src="./assets/images/userSignUp/google.png" alt="" />
                            <p className='font-medium text-base'>Sign Up with google</p>
                        </button>
                    </div>
                    
                    <div className='w-full flex justify-center'>
                        <button className='flex justify-center w-full gap-x-2 bg-[#F9F9F9] border border-[#C5C5C5] py-3 rounded-sm'>
                            <img src="./assets/images/userSignUp/fb.png" alt="" />
                            <p className='font-medium text-base'>Sign Up with Facebook</p>
                        </button>
                    </div>
                </div>

                <div className='flex flex-wrap justify-center mt-8'>
                    <h4 className='w-full font-normal text-sm text-center'>Don&apos;t have an account?</h4>
                    <button onClick={()=>{
                        setMerchantSignUpOpen(true)
                        setMerchantLogin(false)
                    }}><p className={`text-[#0079E9] font-bold text-lg ml-2`}> SIGN UP</p></button>
                </div>

            </div>
        </div>
    </div>

  )
}

export default MerchantLogIn