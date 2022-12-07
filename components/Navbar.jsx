import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useRef, useState } from 'react'
import ArrowDown from './svg/ArrowDown'
import GPSLocation from './svg/home/GPSLocation'
import GPSRight from './svg/home/GPSRight'
import SearchIcon from './svg/home/SearchIcon'
import SearchLocation from './svg/home/SearchLocation'

const Navbar = () => {
  const [openFindLocation, setOpenFindLocation] = useState(false)
  const [currAddress, setCurrAddress] = useState('Current Location')
  const [addressInput, setAddressInput] = useState('')
  const [localityInput, setLocalityInput] = useState('')
  const router = useRouter()
  const [localityList, setLocalityList] = useState([])
  const [authorized, setAuthorized] = useState()

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

  useEffect( ()=>{
    if(!router.isReady) return;
    const merchToken = sessionStorage.getItem('merchToken')
    if(merchToken){
      console.log(merchToken);
      setAuthorized(true)
    }
    else{
      setAuthorized(false)
    }
  },[router.isReady])
  return (
    <div className='flex justify-center w-full'>
      <nav className='relative flex justify-between items-center gap-x-10 w-full h-24 max-w-[1100px]'>
          <Link href={'/'}>
              <img src="./assets/images/home/logo.png" alt="logo" className='h-6 cursor-pointer' />
          </Link>
          
          <div className='relative min-w-2/5 h-11 drop-shadow-md w-full z-10'>
            <div className='h-11 flex items-center bg-white rounded-md px-3 sm:flex-wrap sm:h-auto  sm:py-4'>
              <div className='flex w-1/3 sm:w-full sm:items-center' onClick={()=>setOpenFindLocation(true)}>
                <SearchLocation/>
                <input type="text" placeholder='Detect My Location' value={addressInput} onChange={e=>setAddressInput(e.target.value)} className='text-sm px-3 w-full border-r-gray-300 border-r-2 sm:border-none sm:py-1 sm:text-base'/>
              </div>
              <div className='h-px w-full hidden bg-gray-300 my-1 sm:block'></div>
              <div className='flex pl-3 flex-1 items-center sm:w-full sm:pl-0 sm:items-center'>
                <SearchIcon/>
                <input type="text" placeholder='Search for services' className='text-sm pl-3 w-full sm:pl-4 sm:py-1 sm:text-base'/>
              </div>
            </div>

            {openFindLocation &&
            <div className='flex flex-wrap mt-2 md:px-5 md:mb-5 sm:w-full'>
              <div className='w-[412px] p-3 py-4 rounded-sm bg-white sm:w-full'  ref={wrapperRef} >
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
                  <input className='bg-gray-100 sm:w-3/4' type="text" placeholder='Enter Locality/zip code' value={localityInput} onChange={e=>setLocalityInput(e.target.value)}/>
                  <div className='cursor-pointer' onClick={handleLocalitySearch}>
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
          {authorized ? 
            <div className='flex justify-between items-center gap-x-1 w-fit'>
              <div className='border-4 border-[#D9D9D9] rounded-full w-12 h-12'>
                <img src="./assets/images/userProfile/userProfile.png" alt="profile" className='h-full w-full object-cover rounded-full'/>
              </div>
              <h1>Johnson</h1>
              <ArrowDown/>
            </div>
          :
          <div className='flex justify-between items-center gap-x-1 w-[14rem]'>
            <div className=' w-fit'>
                <p className='w-fit'><span>Sign Up </span> | <span>Sign In</span></p>
            </div>
          </div>
          }
      </nav>
    </div>
  )
}

export default Navbar