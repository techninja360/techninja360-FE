import React, { useEffect, useState } from 'react'
import { MapContainer, Marker, Popup, TileLayer, useMap, useMapEvents } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import TextInput from './TextInput'
import L from 'leaflet';
import Navlocator from '../svg/Navlocator';

const icon = L.icon({ iconUrl: "./assets/images/mapImages/marker-icon.png" });

const StepTwoMap = () => {
    const [posititonX, setPosititonX] = useState(0)
    const [posititonY, setPosititonY] = useState(0)

    const [findLocation, setFindLocation] = useState(false)
    const handlePosX = (pos) => {
        let finalPosX 
        console.log(pos)
        if(isNaN(pos) || pos===null || pos === undefined || pos===''){
            finalPosX = 0
        }
        else(
            finalPosX = parseInt(pos)
            )
            setPosititonX(finalPosX)
        }
        
        const handlePosY = (pos) => {
            let finalPosY 
        if(isNaN(pos) || pos===null || pos === undefined || pos===''){
            finalPosY = 0
        }
        else(
            finalPosY = parseInt(pos)
        )
        setPosititonY(parseInt(finalPosY))
    }

    function ChangeMapView({ coords }) {
        const map = useMap();
        map.setView(coords, map.getZoom());
      
        return null;
      }

    function LocationMarker() {
        const [position, setPosition] = useState(null)
        const map = useMapEvents({
            click() {
            map.locate()
            },
            locationfound(e) {
            setPosition(e.latlng)
            map.flyTo(e.latlng, map.getZoom())
            },
        })
    
        return (
            position === null  ? null : (
                <Marker position={position} icon={icon}>
                    <Popup>You are here</Popup>
                </Marker>
            )
        )
    }

    // const map = useMap()
    // const [position, setPosition] = useState(null);
    // const getCurrMap = () => {
    //     setFindLocation(true)
    //     map.locate().on("locationfound", function (e) {
    //         setPosition(e.latlng);
    //         map.flyTo(e.latlng, map.getZoom());
    //       });
    // }
      
    // useEffect(()=>{
    //     console.log(posititonX, posititonY)
    // },[posititonX,posititonY])

  return (
    <div className='relative'>
        <div className='top-10 bg-blue-500 flex px-4 py-2 text-sm font-semibold text-white items-center gap-x-3 rounded-sm mt-7 w-fit' onClick={()=>setFindLocation(true)}><Navlocator/>Get Current Location</div>
        <div className='mt-2 flex w-full relative gap-x-4 items-start'>
            <MapContainer center={[0+parseInt(posititonX),0+parseInt(posititonY)]} zoom={10} scrollWheelZoom={false} style={{height: 400, width: "100%"}}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {!findLocation && <Marker position={[0+parseInt(posititonX),0+parseInt(posititonY)]} icon={icon}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>}
            <ChangeMapView coords={[posititonX,posititonY]} />
            {/* {findLocation && 
                <Marker position={position} icon={visitorIcon}>
                    <Popup>You are here</Popup>
                </Marker>
            }
                 */}
            <LocationMarker/>
            </MapContainer>
        </div>
        <div className='mt-7 flex w-full gap-x-4 items-start'>
            <div className={`flex flex-wrap w-full relative`}>
            <h3 className='font-semibold text-sm uppercase'>Or Directly enter the co-ordinates</h3>
                <div className='mt-2 flex w-full gap-x-4'>
                    <TextInput id='latName' placeholder='Latitude' width='w-1/3' onChange={handlePosX}/>
                    <TextInput id='longName' placeholder='Longitude' width='w-1/3' onChange={handlePosY}/>
                </div>
            
            </div>
        </div>
    </div>
  )
}

export default StepTwoMap