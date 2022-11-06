import { useRouter } from 'next/router'
import React, { useContext, useEffect, useState } from 'react'
import axios from "axios";

const SignUpContext = React.createContext()
export const SignUpProvider = ({ children }) => {

    const [signUpOpen, setSignUpOpen] = useState(false)
    const [token, setToken] = useState(null)
    const [authUser, setAuthUser] = useState({})

    const router = useRouter()
    const [user, setUser] = useState(null);

    const getUser = async () => {
      try {
        const url = `http://localhost:8000/api/auth/login/success`;
        // const { data } = await axios.get(url, { withCredentials: true });
        const requestOptions = {
              method: "GET",
              mode: "no-cors",
              headers: { "Content-Type": "application/json",
                          'Access-Control-Allow-Origin': '*' },
            }
        const res = await fetch(url,requestOptions)
        const data =  await res.json()
        console.log('in response')
        console.log(data)
        setUser(data.user._json);
      } catch (err) {
        console.log('in error')
        console.log(err);
      }
    };

    // useEffect(() => {
    //   getUser();
    // }, []);

    // const getUserData = async()=>{
    //   // const res = await fetch('http://localhost:8000/api/auth/login/success')
    //   // const data =  await res.json()
    //   const requestOptions = {
    //     method: "GET",
    //     mode: "no-cors",
    //     headers: { "Content-Type": "application/json" },
    //     // body: JSON.stringify(this.tutorial)
    //   }
    //   console.log('here');
    //   const res = await fetch('http://localhost:8000/api/auth/login/success')
    //   const data = await res.json()
    //   console.log(data);
    //   setAuthUser(data)
    // }
    
    // useEffect(()=>{
    //   if(router.query.token){
    //     setToken(router.query.token)
    //     localStorage.setItem('token',router.query.token)
    //     getUserData()
    //     router.push('/')
    //   }
    // },[router])

    // useEffect(()=>{
    //   getUserData()
    // },[])

  return (
    <SignUpContext.Provider value={{signUpOpen, setSignUpOpen,token, setToken}}>{children}</SignUpContext.Provider>
  )
}
// make sure use
export const useSignUpContext = () => {
  return useContext(SignUpContext)
}