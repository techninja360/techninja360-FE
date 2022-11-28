import React, { useEffect, useMemo, useState } from 'react'
import 'leaflet/dist/leaflet.css'
import TextInput from './TextInput'
import { GoogleMap, MarkerF, useLoadScript } from '@react-google-maps/api';
import MapGetDirection from '../svg/merchantDetails/MapGetDirection';
import { useMerchantSignUpContext } from '../../context/merchantSignUp_context';

const StepTwoMap = ({latLng, address}) => {

    
    const {formTwoVals, setFormTwoVals} = useMerchantSignUpContext()
    const {isLoaded} = useLoadScript({
        googleMapsApiKey : process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
    })
    
    const [posititonX, setPosititonX] = useState(latLng.lat)
    const [posititonY, setPosititonY] = useState(latLng.lng)
    
    const [findLocation, setFindLocation] = useState(false)
    
    const center = useMemo(()=>({lat:posititonX, lng: posititonY}),[latLng,posititonX,posititonY])

    const handlePosY = (pos) => {
        pos = pos.target.value
        let finalPosY 
        console.log(pos)
        if(!isNaN(pos) || pos.conaians('-')){
            console.log('here');
            finalPosY = parseFloat(pos)
        }
        else{
            finalPosY = 0
        }
        setPosititonY(finalPosY)
    }

    const handlePosX = (pos) => {
        pos = pos.target.value
        let finalPosX 
        console.log(pos)
        if(!isNaN(pos) || pos.conaians('-')){
            console.log('here');
            finalPosX = parseFloat(pos)
        }
        else{
            finalPosX = 0
        }
        setPosititonX(finalPosX)
    }
    
    const fetchAddress = async (url) => {
        const res = await fetch(url)
        const resData = await res.json()

        if(resData.status === "OK"){
            console.log("OK");
            console.log(resData);
            const streetName = resData.results[0]?.formatted_address?.split(',')[0]
            const cityName = resData.results[0]?.formatted_address?.split(',')[1]
            const stateName = resData.results[0]?.formatted_address?.split(',')[2].split(' ')[1]
            const zipName = resData.results[0]?.formatted_address?.split(',')[2].split(' ')[2]
            const countryName = resData.results[0]?.formatted_address?.split(',')[3]

            setFormTwoVals(prevState => ({...prevState, businessLocationStreetName:streetName}))
            setFormTwoVals(prevState => ({...prevState, businessLocationCityName:cityName}))
            setFormTwoVals(prevState => ({...prevState, businessLocationStateName:stateName}))
            setFormTwoVals(prevState => ({...prevState, businessLocationCountryName:countryName}))
            setFormTwoVals(prevState => ({...prevState, businessLocationZipCodeName:zipName}))

            const lng = resData.results[0].geometry.location.lng
            
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
                setPosititonX(pos.lat)
                setPosititonY(pos.lng)
                console.log(pos)

                const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${pos.lat},${pos.lng}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`
                fetchAddress(url)
            });
        }

        else{
            console.log('error');
        }
      }

    
      
    useEffect(()=>{
        setPosititonX(latLng.lat)
        setPosititonY(latLng.lng)
    },[latLng])

    if(!isLoaded) return <div>Loading...</div>
  
    return (
    <div className='relative mt-7'>
        <div className='absolute top-5 left-5 z-10 flex gap-x-2 w-fit min-w-[158px] bg-[#0079E9] text-white font-semibold text-sm px-5 py-2 rounded-sm cursor-pointer' onClick={getLocation}>
            <MapGetDirection/>
            <h4>Find my Location</h4>
        </div> 
        <div className='h-[272px]'>
            <GoogleMap 
                zoom={15} 
                center={center}
                position={center}
                mapContainerClassName="map-container-merchantSignUp"
                options={{
                streetViewControl:false,
                mapTypeControl:false
                }}
                onClick={ev => {
                    console.log("latitide = ", ev.latLng.lat());
                    console.log("longitude = ", ev.latLng.lng());
                    setPosititonX(ev.latLng.lat())
                    setPosititonY(ev.latLng.lng())
                    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${ev.latLng.lat()},${ev.latLng.lng()}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`

                    fetchAddress(url)

                }}
            >
                <MarkerF position={center} draggable={false}/>
            </GoogleMap>
        </div>
        <div className='mt-7 flex w-full gap-x-4 items-start'>
            <div className={`flex flex-wrap w-full relative`}>
            <h3 className='font-semibold text-sm uppercase'>Or Directly enter the co-ordinates</h3>
                <div className='mt-2 flex w-full gap-x-4'>
                    <TextInput id='latName' type={'number'} placeholder='Latitude' width='w-1/3' value={posititonX} onChange={handlePosX}/>
                    <TextInput id='longName' type={'number'} placeholder='Longitude' width='w-1/3' value={posititonY} onChange={handlePosY}/>
                </div>
            
            </div>
        </div>
    </div>
  )
}

export default StepTwoMap