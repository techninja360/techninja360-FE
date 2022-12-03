import React, { useEffect, useRef, useState } from 'react'
import GPSLocation from '../svg/home/GPSLocation'
import GPSRight from '../svg/home/GPSRight'
import SearchIcon from '../svg/home/SearchIcon'
import SearchLocation from '../svg/home/SearchLocation'
import Link from 'next/link'
import { useSignUpContext } from '../../context/signUp_context'
import { useMerchantSignUpContext } from '../../context/merchantSignUp_context'




const MainSection = () => {
  const {signUpOpen, setSignUpOpen} = useSignUpContext()
  const {smerchantSignUpOpen, setMerchantSignUpOpen} = useMerchantSignUpContext()

  const [openFindLocation, setOpenFindLocation] = useState(false)
  const [currAddress, setCurrAddress] = useState('Current Location')
  const [addressInput, setAddressInput] = useState('')
  const [localityInput, setLocalityInput] = useState('')

  const [localityList, setLocalityList] = useState([])

  function useOutsideAlerter(ref) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setOpenFindLocation(false)
          // alert("You clicked outside of me!");
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  const fetchAddress = async (url) => {
    const res = await fetch(url)
    const resData = await res.json()

    if(resData.status === "OK"){
        console.log("OK");
        console.log(resData);
        setCurrAddress(resData.results[0].formatted_address)
        setAddressInput(resData.results[0].formatted_address)
        
    }
    else{
        console.log("error")
        console.log(resData)
    }
  }

  const getLocation = () => {
    console.log('click')
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
            const pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude,
            };
            
            const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${pos.lat},${pos.lng}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`
            fetchAddress(url)
        });
    }

    else{
        console.log('error');
    }
  }

  const handleLocalitySearch = async () => {
    if(localityInput !== ''){

      const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${localityInput}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`
    
      const res = await fetch(url)
      const resData = await res.json()

      if(resData.status === "OK"){
        console.log("OK");
        console.log(resData);
        setLocalityList(resData.results)
      }
    }
  }

  const handleLocalityList = (address) => {
    console.log('click')
    setAddressInput(address)
    setLocalityList([])
    setOpenFindLocation(false)
  }

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
            <button onClick={()=>setMerchantSignUpOpen(true)}>List your Business</button> | <button onClick={()=>setSignUpOpen(true)}>Sign Up</button> | <a href="">Sign In</a>
          </div>
        </div>
        <div className='flex justify-center flex-wrap pt-56'>
          
          <div className='w-full flex justify-center'>
            <img src="./assets/images/home/logo.png" alt="" className='md:w-[80%] max-w-[550px] object-cover' />
          </div>
          
          <div className='w-full flex justify-center md:px-5'>
            <div className='w-[758px] h-11 flex items-center bg-white rounded-sm px-3 mt-5 sm:flex-wrap sm:h-auto  sm:py-4'>
              
              <div className='flex w-1/3 sm:w-full sm:items-center' onClick={()=>setOpenFindLocation(true)}>
                <SearchLocation/>
                <input type="text" placeholder='Find My Location' value={addressInput} onChange={e=>setAddressInput(e.target.value)} className='text-lg px-3 w-full border-r-gray-300 border-r-2 sm:border-none sm:py-1 sm:text-base' />
              </div>
              
              <div className='h-px w-full hidden bg-gray-300 my-1 sm:block'></div>
              
              <div className='flex pl-3 flex-1 items-center sm:w-full sm:pl-0 sm:items-center'>
                <SearchIcon/>
                <input type="text" placeholder='Search for services/business' className='text-lg pl-11 w-full sm:pl-4 sm:py-1 sm:text-base'/>
              </div>
            
            </div>
          </div>

          {
            openFindLocation &&
            <div className='w-[758px] flex flex-wrap mt-2 md:px-5 md:mb-5 sm:w-full' ref={wrapperRef} >
            <div className='w-[412px] p-3 py-4 rounded-sm bg-white sm:w-full' >
              <div className='w-full flex justify-between border-b pb-3'>
                
                <div className='flex sm:gap-x-2 sm:items-center'>
                  <div>
                    <GPSLocation/>
                  </div>
                  <p className='text-gray-400 text-base font-medium pl-3 sm:pl-0'>{currAddress.slice(0,20)} {currAddress !== 'Current Location' ? '...' : null}</p>
                </div>
                
                <div className='flex items-center pr-1 cursor-pointer' onClick={getLocation}>
                  <p className='text-blue-500 text-base font-semibold pr-6'>Detect using GPS</p>
                  <GPSRight/>
                </div>
                
              </div>
              
              <div className=' flex justify-between items-center p-4 w-[386px] h-11 bg-gray-100 mt-3 rounded-sm border border-gray-200 sm:w-full'>
                <input className='bg-gray-100 w-full sm:w-3/4' type="text" placeholder='Enter Locality/zip code' value={localityInput} onChange={e=>setLocalityInput(e.target.value)}/>
                <div className='cursor-pointer pl-4' onClick={handleLocalitySearch}>
                  <SearchIcon/>
                </div>
              </div>
              
            </div>
          
          {localityList.length > 0 &&
          <div className='w-[412px] max-w-[412px] max-h-[200px] overflow-y-scroll flex flex-wrap mt-2 border border-gray-200 shadow-md rounded-sm md:px-5 md:mb-5 sm:w-full'>
            {
              localityList.map((locality, index)=>{
                return(
                  <div key={index} className='bg-white w-full p-4 hover:bg-gray-100 cursor-pointer' onClick={()=>handleLocalityList(locality.formatted_address)}>
                    <p>{locality.formatted_address}</p>
                  </div>
                )
              })
            }
          </div>
          }
          </div>
          }
        </div>
      </section>
     
  )
}

export default MainSection