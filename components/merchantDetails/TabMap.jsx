import React, { useEffect, useMemo, useState } from 'react'
import { GoogleMap, useLoadScript, MarkerF} from '@react-google-maps/api'
import MapIcon from '../svg/merchantDetails/MapIcon'
import MapGetDirection from '../svg/merchantDetails/MapGetDirection'

const TabMap = ({latLng, address}) => {

  
  const {isLoaded} = useLoadScript({
    googleMapsApiKey : process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
  })
  const center = useMemo(()=>({lat:latLng.lat, lng: latLng.lng}),[latLng])

  if(!isLoaded) return <div>Loading...</div>
  
  return (
    <div className='mt-4 gap-x-8 w-full'>
      <div className='w-full'>
          <h1 className='font-bold text-[22px]'>Service Offers</h1>
      </div>

      <div className='flex justify-between items-end w-[70%] p-[10px] pr-7 my-7 bg-[#F6F6F6] border border-[#E9E9E9] rounded-md'>
        <div className='flex items-center'>
          <div className='bg-[#0079E9] w-fit p-4 rounded-sm'>
            <img src="./assets/images/merchantDetails/mapIcon.png" alt="" />
          </div>
          <div className='ml-5 mr-10'>
            <h1 className='text-lg font-semibold'>Address</h1>
            <h5 className='text-base font-normal'>{address}</h5>
          </div>
        </div>
        <div className='flex items-end h-full mb-2'>
          <button className='flex gap-x-2 w-full min-w-[158px] bg-[#0079E9] text-white font-semibold text-sm px-5 py-2 rounded-sm' onClick={()=>{
             window.open(`https://maps.google.com?q=${center.lat},${center.lng}`);
            //  window.open(`https://www.google.com/maps/place/${parseInt(center.lat)}°07'24.0%22N+${parseInt(center.lng)}°07'23.4%22E,${zoom}z/@${center.lat},${center.lng}/`);
          }}>
            <MapGetDirection/>
            <h4>Get Direction</h4>
          </button>
        </div>
      </div>

      <div className='p-1 border border-[#E7E7EC] rounded-md h-80'>
          <GoogleMap 
            zoom={15} 
            center={center} 
            mapContainerClassName="map-container-merchantDetails"
            options={{
              streetViewControl:false,
              mapTypeControl:false
            }}
          >
            <MarkerF position={center} draggable={false}/>
          </GoogleMap>
      </div>
    </div>
  )
}

export default TabMap