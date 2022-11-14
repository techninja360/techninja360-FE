import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import BackArrow from './svg/signUp/BackArrow'
import SignUpDivider from './svg/signUp/SignUpDivider'
import { useSignUpContext } from '../context/signUp_context'
import {useRouter} from 'next/router'
import { useMerchantSignUpContext } from '../context/merchantSignUp_context'

const MerchantSignUp = () => {

    const Router = useRouter()
    const {smerchantSignUpOpen, setMerchantSignUpOpen} = useMerchantSignUpContext()

    const [authRes, setAuthRes] = useState()

    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [phnNo, setPhnNo] = useState('')
    const [email, setEmail] = useState('')
    const [pword, setPword] = useState('')
    const [cpword, setCpword] = useState('')
    const [error, setError] = useState({
        fname : false, 
        lname : false, 
        phnNo : false, 
        email : false, 
        pword : false, 
        cpword : false,
    })

    const handleSubmit = async (e) => {
        
        e.preventDefault()
        if(validateSignUp()){
            setError({
                fname : false, 
                lname : false, 
                phnNo : false, 
                email : false, 
                pword : false, 
                cpword : false,
            })
            console.log('form is good')

            const formBody = {
                "first_name" : fname,
                "last_name" : lname,
                "email" : email,
                "password" : pword,
                "phone_no" : phnNo
            }

            const rawRes = await fetch('http://localhost:8000/api/auth/signup',{method:'POST', body: JSON.stringify(formBody),headers: {
                "Content-Type": "application/json",
                // "Authorization": "Bearer " + auth.token,
              },})
            const data = await rawRes.json()
            console.log(data)
            setAuthRes(data)

            if(data.status === 'ok'){
                const userDetail = await fetch('http://localhost:8000/api/user/profile/details',{method:'GET',headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + data.user_data.token,
                },})
                const userDetailData = await userDetail.json()
                console.log('userDetailData',userDetailData);
                Router.push('http://localhost:3000/UserProfile')
            }

        }
        else{
            console.log('form is not good');
        }
    }

    // const handleGoogleSignUp = (e) => {
    //     e.preventDefault();
    //     window.open("http://localhost:8000/api/auth/google", "_self");
    // }
    const googleAuth = (e) => {
        e.preventDefault();
		window.open(
			`http://localhost:8000/api/auth/google/`,
			"_self"
		);
	};

    const validateSignUp = () =>{

        if(fname===null || fname===undefined || fname==='' ){
            setError({...error,fname:true})
            return false
        }

        if(lname===null || lname===undefined || lname===''){
            setError({...error,lname:true})
            return false
        }

        // if(phnNo===null || phnNo===undefined || phnNo==='' || isNaN(phnNo) || phnNo.length !== 10 ){
        //     setError({...error,phnNo:true})
        //     return false
        // }

        if(phnNo !== ''){
            if(isNaN(phnNo) || phnNo.length !== 10 ){
                setError({...error,phnNo:true})
                return false
            }   
        }

        if(email===null || email===undefined || email==='' || !email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
            setError({...error,email:true})
            return false
        }

        if(pword===null || pword===undefined || pword===''){
            setError({...error,pword:true})
            return false
        }

        if(cpword===null || cpword===undefined || cpword==='' || cpword !== pword){
            setError({...error,cpword:true})
            return false
        }

        console.log(error);
        console.log('in final validate')
        return true
    }
  
    return (
        <div className='justify-center items-center h-screen flex overflow-x-hidden overflow-y-auto fixed z-50 outline-none focus:outline-none bg-[#0009]'>
            <div className='h-full flex justify-center items-center '>

                <main className='w-[80%] flex h-fit sm:w-screen sm:h-full '>
                    <div className='h-auto min-h-[900px] w-1/3 md:hidden'>
                        <img src="./assets/images/userSignUp/merchantSignUpImg.png" alt="Sign Up Img" className='h-full w-full min-h-full object-cover'/>
                    </div>
                    <div className='p-16 h-fit w-2/3 bg-[#FBFBFB] md:w-full sm:p-8'>
                        <div className='flex justify-between w-full flex-wrap'>
                            <button onClick={()=>setMerchantSignUpOpen(false)}><BackArrow/></button>
                            <p className=' w-3/4 text-right sm:hidden'>Already Have an Account? <span className='text-blue-500'> Sign In </span></p>
                        </div>
                        <div className='mt-16'>
                            <h1 className='font-semibold text-5xl leading-[60px] sm:text-3xl sm:text-center'>Create Your Free</h1>
                            <h1 className='font-semibold text-5xl leading-[60px] text-blue-500 sm:text-3xl sm:text-center'>Account Now</h1>
                        </div>

                        <div className='mt-12'>
                            <form action="POST" onSubmit={handleSubmit} className='flex flex-wrap gap-y-7 justify-center sm:gap-y-5'>
                                <div className='flex gap-x-8 w-full sm:flex-wrap sm:gap-y-5 sm:justify-center'>                        
                                    <input onChange={(e)=>setFname(e.target.value)} type="text" placeholder='First Name' className={`px-5 py-3 border ${error.fname?'border border-red-500': 'border-[#BDBDBD]'} rounded-md w-2/5 flex-1 sm:w-full sm:flex-none`} required/>
                                    <input onChange={(e)=>setLname(e.target.value)} type="text" placeholder='Last Name' className={`px-5 py-3 border ${error.lname?'border border-red-500': 'border-[#BDBDBD]'} rounded-md w-2/5 flex-1 sm:w-full sm:flex-none`} required/>
                                </div>
                                <div className='flex gap-x-8 w-full sm:flex-wrap sm:gap-y-5'>
                                    <input onChange={(e)=>setPhnNo((e.target.value))} type="text" placeholder='Phone Number (optional)' className={`px-5 py-3 border ${error.phnNo?'border border-red-500': 'border-[#BDBDBD]'} rounded-md w-2/5 flex-1 sm:w-full sm:flex-none`}/>
                                    <input onChange={(e)=>setEmail(e.target.value)} type="email" placeholder='Email Address' className={`px-5 py-3 border ${error.email?'border border-red-500': 'border-[#BDBDBD]'} rounded-md w-2/5 flex-1 sm:w-full sm:flex-none`} required/>
                                </div>
                                <div className='flex gap-x-8 w-full sm:flex-wrap sm:gap-y-5'>
                                    <input onChange={(e)=>setPword(e.target.value)} type="password" placeholder='Password' className={`px-5 py-3 border ${error.pword?'border border-red-500': 'border-[#BDBDBD]'} rounded-md w-2/5 flex-1 sm:w-full sm:flex-none`} />
                                    <input onChange={(e)=>setCpword(e.target.value)} type="password" placeholder='Confirm Password' className={`px-5 py-3 border ${error.cpword?'border border-red-500': 'border-[#BDBDBD]'} rounded-md w-2/5 flex-1 sm:w-full sm:flex-none`} />
                                </div>

                                <button className='w-[440px] py-4 bg-blue-400 text-white rounded-sm sm:mt-5' type="submit">Create Account</button>
                                <div className='flex justify-center w-full flex-wrap'>
                                    <p className=' w-3/4 hidden text-center sm:block'>Already Have an Account? <span className='text-blue-500 sm:block'> Sign In </span></p>
                                </div>
                            </form>
                        </div>

                        <div className='flex justify-center'>
                            <div className='my-7 flex w-full self-center justify-center items-center max-w-[440px]'>
                                <div className='w-full bg-[#C5C5C5] h-px mr-5'></div>
                                <p className='text-[#A6A0A0]'> or </p> 
                                <div className='w-full bg-[#C5C5C5] h-px ml-5'></div>
                            </div>
                        </div>

                            {/* <div className='my-7 flex w-full self-center justify-center items-center'>
                                <SignUpDivider/>
                            </div> */}
                        <div className='w-full flex flex-wrap justify-center gap-y-7'>
                            
                            <div className='w-full flex justify-center'>
                                <button className='flex justify-center w-[440px] gap-x-2 bg-white border border-[#C5C5C5] py-3 ' onClick={(e)=>googleAuth(e)}>
                                    <img src="./assets/images/userSignUp/google.png" alt="" />
                                    <p>Sign Up with google</p>
                                </button>
                            </div>
                            
                            <div className='w-full flex justify-center'>
                                <button className='flex justify-center w-[440px] gap-x-2 bg-white border border-[#C5C5C5] py-3 '>
                                    <img src="./assets/images/userSignUp/fb.png" alt="" />
                                    <p>Sign Up with Facebook</p>
                                </button>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
  )
}

export default MerchantSignUp