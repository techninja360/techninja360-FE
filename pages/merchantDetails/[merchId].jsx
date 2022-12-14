import { useRouter } from 'next/dist/client/router'
import React, { useEffect, useState } from 'react'
import Footer from '../../components/Footer'
import DetailsTabs from '../../components/merchantDetails/DetailsTabs'
import LocationBreadcrum from '../../components/merchantDetails/LocationBreadcrum'
import ReportError from '../../components/merchantDetails/ReportError'
import RequestCallback from '../../components/merchantDetails/RequestCallback'
import TabAbout from '../../components/merchantDetails/TabAbout'
import TabCertificates from '../../components/merchantDetails/TabCertificates'
import TabMap from '../../components/merchantDetails/TabMap'
import TabOffers from '../../components/merchantDetails/TabOffers'
import TabPhotos from '../../components/merchantDetails/TabPhotos'
import TabReviews from '../../components/merchantDetails/TabReviews'
import TabServices from '../../components/merchantDetails/TabServices'
import MerchantLogIn from '../../components/MerchantLogIn'
import Navbar from '../../components/Navbar'
import SearchIcon from '../../components/svg/home/SearchIcon'
import ActiveSlide from '../../components/svg/merchantDetails/ActiveSlide'
import Direction from '../../components/svg/merchantDetails/Direction'
import Flag from '../../components/svg/merchantDetails/Flag'
import GlobeIcon from '../../components/svg/merchantDetails/GlobeIcon'
import Heart from '../../components/svg/merchantDetails/Heart'
import HomeIcon from '../../components/svg/merchantDetails/HomeIcon'
import InactiveSlide from '../../components/svg/merchantDetails/InactiveSlide'
import MapPin from '../../components/svg/merchantDetails/MapPin'
import MessageIcon from '../../components/svg/merchantDetails/MessageIcon'
import PhoneCall from '../../components/svg/merchantDetails/PhoneCall'
import Review from '../../components/svg/merchantDetails/Review'
import Share from '../../components/svg/merchantDetails/Share'
import StarEmpty from '../../components/svg/merchantDetails/StarEmpty'
import StarFill from '../../components/svg/merchantDetails/StarFill'
import TollFreePhone from '../../components/svg/merchantDetails/TollFreePhone'
import { useMerchantDetailsContext } from '../../context/merchantDetails_context'
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ChatMerchant from '../../components/merchantDetails/ChatMerchant'
import { displayReviews } from '../../data/MerchantDetailsReviews'
import { backend_server, frontend_server } from '../../config'
import { businessDays, businessTime } from '../../data/businessHoursVals'

const MerchantDetails = ({merchDetails, merchLocation, merchAbout, merchServices}) => {

    const {active, setActive, reqCallback, reportError, setReportError, setReqCallback, chatOpen, setChatOpen} = useMerchantDetailsContext()

    const [readMore, setReadMore] = useState(false)
    const [latLng, setLatLng] = useState({lat:0,lng:0})
    const [currReview, setCurrReview] = useState(0)

    const [businessOpenStatus, setBusinessOpenStatus] = useState({
        start_time : '',
        end_time : '',
        day : '',
    })

    const [tooltip, setTooltip] = useState({
        bookmark : false,
        share : false,
        report : false,
        chat : false,
        callback : false
    })

    const address = `${merchLocation?.address?.street} , ${merchLocation?.address?.city} , ${merchLocation?.address?.state} , ${merchLocation?.address?.zip_code}`
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`

    const router = useRouter()
    const handleShare = () => {
        let url = frontend_server + router.pathname
        navigator.clipboard.writeText(url)
        toast("Copied to clip board",);
        console.log(url)
    }


    function phoneFormat(input) {//returns (###) ###-####
        input = input.replace(/\D/g,'');
        var size = input.length;
        if (size>0) {input="("+input}
        if (size>3) {input=input.slice(0,4)+") "+input.slice(4,11)}
        if (size>6) {input=input.slice(0,9)+"-" +input.slice(9)}
        return input;
    }
    

    function openNowStatus(weekly_hours){
        
        let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

        let d = new Date()
        let currDay = days[d.getDay()]
        let currHour = d.getHours();

        let avl_days = weekly_hours.filter((item)=>{
            if(item.days === currDay){
                if((Number(item.start_time) <= Number(currHour)) && (Number(currHour) < Number(item.end_time))){
                    return item
                }
            }
            else if(item.days === 'SatSun' && (currDay === 'Sat' || currDay === 'Sun' )){
                if((Number(item.start_time) <= Number(currHour)) && (Number(currHour) < Number(item.end_time))){
                    return item
                }
            }
            else if(item.days === 'MonFri' && (currDay === 'Mon' || currDay === 'Tue' || currDay === 'Wed' || currDay === 'Thu' || currDay === 'Fri' )){
                if((Number(item.start_time) <= Number(currHour)) && (Number(currHour) < Number(item.end_time))){
                    return item
                }
            }
        })

        if(avl_days.length > 0){

            let start_time = ''
            let end_time = ''

            businessTime.every(hour => {
                if(hour.value === avl_days[0]?.start_time){
                    start_time = hour.name
                    return false
                }
                else{
                    return true
                }
            });

            businessTime.every(hour => {
                if(hour.value === avl_days[0]?.end_time){
                    end_time = hour.name
                    return false
                }
                else{
                    return true
                }
            });
            setBusinessOpenStatus({
                start_time : start_time,
                end_time : end_time,
                day : currDay,
            })
            
        }
        else{
            setBusinessOpenStatus(false)
        }

    }


    useEffect(()=>{
        
    
        const fetchLatLng = async () => {
          const res = await fetch(url)
          const resData = await res.json()
    
          if(resData.status === "OK"){
            console.log("OK");
            console.log(resData);
            const lat = resData.results[0].geometry.location.lat
            const lng = resData.results[0].geometry.location.lng
            setLatLng({lat:lat,lng:lng})
          }
          else{
            console.log("error")
            console.log(resData)
          }
        }
    
        fetchLatLng()
    
      },[])

      useEffect(()=>{
        openNowStatus(merchAbout?.business_hours?.weekly_hours)
      },[merchAbout])

      useEffect(()=>{
        const interval = setInterval(()=>{
            if(currReview > (displayReviews.length - 2)){
                setCurrReview(0)
            }
            else{
                setCurrReview(prev => prev + 1)
            }
        },2000)

        return () => clearInterval(interval);
      },[currReview])
  return (
    <>
        {/* <MerchantLogIn/> */}
        {reqCallback && <RequestCallback/>}
        {reportError && <ReportError/>}
        {chatOpen && <ChatMerchant/>}
        <ToastContainer
            position="bottom-center"
            transition={Slide}
            autoClose={4000}
            hideProgressBar
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme='colored'
            toastStyle={{ backgroundColor: "#0079E9", color:"#fff", fontWeight:400, fontSize:'18px' }}
            />
        <Navbar/>
        <div className='flex bg-[#F3FAFC] justify-center w-full'>
            <LocationBreadcrum/>
        </div>
        <div className='flex bg-[#F3FAFC] justify-center w-full relative'>
            <div className='h-72 w-full overflow-hidden'>
                <div className='absolute bg-[#0005] w-full h-72'></div>
                <img src="../assets/images/merchantDetails/merchantBg.png" alt="" className='object-cover w-full h-full blur-xl' />
            </div>
            <div className='absolute max-w-[1100px] w-full'>
                <div className=' h-40 w-[550px] absolute right-0 top-10'>
                    
                    <div className='relative w-full h-full mt-3'>
                        <div className='absolute w-full h-[70%] bg-white drop-shadow-md top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2'></div>
                        <div className='absolute w-[95%] h-[80%] bg-white drop-shadow-md top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2'></div>
                        {
                            displayReviews.map((review,index)=>{
                                return (
                                    currReview === index &&
                                    <div key={index} className='absolute w-[90%] h-[100%] bg-white drop-shadow-md top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2'>
                                        <div className='w-full h-full flex justify-between gap-x-4 px-7 py-4'>
                                            {/* <div className='w-1/5 flex flex-col justify-center items-center gap-y-3'>
                                                <div className='w-24 h-24'>
                                                    <img src="./assets/images/home/reviewClient.png" alt="client" className='object-cover h-full w-full' />
                                                </div>
                                                <div className='flex justify-between gap-x-1'><StarFill/> <StarFill/> <StarFill/> <StarFill/> <StarEmpty/> </div>
                                            </div> */}
                                            <div className='w-full'>
                                                <div className='flex flex-wrap gap-x-4 w-full items-center'>
                                                    <h1 className='font-medium text-xl text-center w-full'>{review.name}</h1>
                                                    <div className='w-full justify-center items-center gap-x-3 flex'>
                                                        <h3 className=' font-normal text-sm text-center italic text-[#A3A3A3]'>{review.place}</h3>
                                                        <h3 className='flex items-center gap-x-1'>
                                                            {review.rating > 0 ? <StarFill/> : <StarEmpty/>}
                                                            {review.rating > 1 ? <StarFill/> : <StarEmpty/>}
                                                            {review.rating > 2 ? <StarFill/> : <StarEmpty/>}
                                                            {review.rating > 3 ? <StarFill/> : <StarEmpty/>}
                                                            {review.rating > 4 ? <StarFill/> : <StarEmpty/>}
                                                        </h3>
                                                    </div>
                                                </div>
                                                <div className='mt-3'>
                                                    <p className='font-light text-sm text-[#3D3D3D]'>
                                                    {review.review < 150 ? review.review : (review.review).slice(0,150) + '...'}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        
                        <div className='absolute w-full -bottom-5'>
                            <div className='flex w-full justify-center items-center gap-x-1'>
                            {
                                displayReviews.map((review, index)=>{
                                    if(index === currReview){
                                        return <ActiveSlide key={index}/>
                                    }
                                    else{
                                        return <InactiveSlide key={index}/>
                                    }
                                })
                            }
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        
        <div className='flex justify-center w-full'>
            <div className='relative max-w-[1100px] w-full flex justify-center flex-wrap mb-10'>
                
                <div className='absolute left-0 -top-60 border border-[#e4e4e4] w-[500px] rounded-sm'>
                    <div className='w-[500px] h-32 bg-white flex justify-center items-center'>
                        <img src="../assets/images/home/reviewBusiness.png" alt="" className='object-contain h-[60%] w-[60%] rounded-t-sm' />
                    </div>
                    <div className='pt-5  bg-[#0079E9] text-white rounded-b-sm'>
                    {/* <div className='pt-5  bg-[#F6F6F6] text-[#464646] border-t border-t-[#e4e4e4] rounded-b-sm'> */}
                        <div className='flex w-full justify-between items-center pl-9 pr-6'>
                            <h1 className='font-semibold text-[28px]'>{merchDetails?.business_details?.business_name} </h1>
                            {/* <div className='flex items-center py-1 px-3 gap-x-1 bg-white text-[#0079E9]'>
                                <Direction/> <p className=''> Get Direction</p>
                            </div> */}
                        </div>
                        
                        <div className='mt-4 pl-8 pb-8'>
                            <div className='flex gap-x-3 mb-[12px] items-center'>
                                <MapPin/>
                                <h3 className='text-lg font-normal'>{merchLocation?.address?.street} , {merchLocation?.address?.city} , {merchLocation?.address?.state} , {merchLocation?.address?.zip_code}</h3>
                            </div>
                            {/* <div className='flex gap-x-3 mb-[12px] items-center'>
                                <GlobeIcon/>
                                <h3 className='text-lg font-normal'>https://www.247pcrepair.com </h3>
                            </div> */}
                            <div className='flex gap-x-3 mb-[12px] items-center'>
                                <TollFreePhone/>
                                <h3 className='text-lg font-normal'>{phoneFormat(String(merchDetails?.business_details?.contact?.toll_no))} , {phoneFormat(String(merchDetails?.business_details?.contact?.work_number))} </h3>
                            </div>
                            <div className='flex gap-x-3 items-center'>
                                <HomeIcon/>
                                <h3 className='text-lg font-normal'>
                                    {businessOpenStatus ?
                                        <>
                                            <span className='text-[#FFEF5C] font-semibold'> Open Now </span> ({businessOpenStatus.start_time} - {businessOpenStatus.end_time})  {businessOpenStatus.day}
                                        </>
                                        : 
                                        <span className='text-[#ff5c5c] font-semibold'> Closed Now </span>
                                    }
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
                

                <div className='w-full'>
                    
                    <div className='flex mt-5'>
                        <div className='w-1/2'></div>
                        <div className='w-1/2'>
                            {/* <div className='relative flex justify-end'>
                                <input  className={`placeholder-[#B0B0B0] py-3 px-4 h-fit w-[88%] font-normal text-base bg-[#F9F9F9] border border-[#E9E9E9] rounded-md`} type="text" placeholder='Search for services' />
                                <div className='absolute top-4 right-3'>
                                    <SearchIcon/>
                                </div>
                            </div> */}
                            <div className='flex gap-x-5 justify-end'>
                                {/* <button className='flex items-center gap-x-2 px-[18px] h-12 bg-[#F8B84E]  rounded-sm'>
                                    <Review/>
                                    <h5 className='font-medium text-base text-white'>Add a review</h5>
                                </button> */}
                                <button className='relative flex justify-center items-center w-[50px] gap-x-3 border-2 border-[#E82327] rounded-sm' onMouseOver={()=>setTooltip(prev=>({...prev, bookmark : true}))} onMouseOut={()=>setTooltip(prev=>({...prev, bookmark : false}))}>
                                    {/* <h5 className='font-medium text-sm  text-[#E82327]'>Bookmark</h5> */}
                                    <Heart/>
                                    {tooltip.bookmark && <h1 className='absolute top-14 border border-gray-200 px-2 py-1 shadow-md'>Bookmark</h1>}
                                </button>
                                <button className='relative flex justify-center items-center w-[50px] gap-x-3 border-2 border-[#00900E] rounded-sm' onMouseOver={()=>setTooltip(prev=>({...prev, share : true}))} onMouseOut={()=>setTooltip(prev=>({...prev, share : false}))} onClick={()=>handleShare()}>
                                    {/* <h5 className='font-medium text-sm  text-white'>Share</h5> */}
                                    <Share/>
                                    {tooltip.share && <h1 className='absolute top-14 border border-gray-200 px-2 py-1 shadow-md'>Share</h1>}
                                </button>
                                <button className='relative flex justify-center items-center w-[50px] gap-x-2 h-12  border-2 border-[#747474]  rounded-sm' onMouseOver={()=>setTooltip(prev=>({...prev, report : true}))} onMouseOut={()=>setTooltip(prev=>({...prev, report : false}))} onClick={()=>setReportError(true)}>
                                    <Flag/>
                                    {tooltip.report && <h1 className='absolute top-14 border border-gray-200 px-2 py-1 shadow-md'>Report</h1>}
                                    {/* <h5 className='font-medium text-sm text-white'>Report Error</h5> */}
                                </button>
                                <button className='relative flex justify-center items-center gap-x-2 w-[50px] h-12 border-2 border-[#F88B4E]  rounded-sm' onMouseOver={()=>setTooltip(prev=>({...prev, chat : true}))} onMouseOut={()=>setTooltip(prev=>({...prev, chat : false}))} onClick={()=>setChatOpen(!chatOpen)}>
                                    <div className='flex justify-center items-center bg-white h-8 rounded-sm'>
                                        <MessageIcon/>
                                    </div>
                                    {/* <h5 className='font-medium text-sm text-white'>Live Chat</h5> */}
                                    {tooltip.chat && <h1 className='absolute top-14 border border-gray-200 px-2 py-1 shadow-md'>Chat</h1>}
                                </button>
                                <button className='relative flex justify-center items-center gap-x-2 w-[50px] h-12 border-2 border-[#0079E9]  rounded-sm' onMouseOver={()=>setTooltip(prev=>({...prev, callback : true}))} onMouseOut={()=>setTooltip(prev=>({...prev, callback : false}))} onClick={()=>setReqCallback(true)}>
                                    <div className='flex justify-center items-center bg-white h-8 rounded-sm'>
                                        <PhoneCall/>
                                    </div>
                                    {/* <h5 className='font-medium text-sm text-white'>Request a Callback</h5> */}
                                    {tooltip.callback && <h1 className='absolute top-14 border border-gray-200 px-2 py-1 shadow-md'>Callback</h1>}
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className='w-full mt-[80px]'>
                        <p className='font-normal text-lg text-[#696969]'>{
                            merchDetails?.business_details?.description?.length > 220 ? 
                                <>
                                {(merchDetails?.business_details?.description).slice(0,readMore? undefined : 220)}<span className='text-[#0079E9] font-medium cursor-pointer' onClick={()=>setReadMore(!readMore)}>{readMore ? ' Read less':'...Read more'}</span>
                                </>
                                :
                                merchDetails?.business_details?.description
                            }
                        </p>
                    </div>
                    
                    <div>
                        <DetailsTabs/>
                    </div>

                    <div>
                    {
                        active === 0 && <TabAbout merchAbout = {merchAbout}/>   
                    }
                    {
                        active === 1 && <TabServices merchServices = {merchServices}/>   
                    }
                    {
                        active === 2 && <TabReviews/>
                    }
                    {
                        active === 3 && <TabPhotos/>
                    }
                    {
                        active === 4 && <TabMap latLng={latLng} address={address}/>
                    }
                    {
                        active === 5 && <TabOffers/>
                    }
                    {
                        active === 6 && <TabCertificates/>
                    }
                    </div>
                </div>

            </div>
        </div>
        <Footer/>
    </>
  )
}

export default MerchantDetails

export async function getServerSideProps({params:{merchId}}){
    const responseDetails = await fetch(`${backend_server}/api/business/profile/details/${merchId}`)
    const dataDetails = await responseDetails.json()
    
    const responseLocation = await fetch(`${backend_server}/api/business/profile/location/${merchId}`)
    const dataLocation = await responseLocation.json()
    
    const responseServices = await fetch(`${backend_server}/api/business/profile/services/${merchId}`)
    const dataServices = await responseServices.json()
    
    const responseAbout = await fetch(`${backend_server}/api/business/profile/about/${merchId}`)
    const dataAbout = await responseAbout.json()

    let merchDetails = {}
    let merchLocation = {}
    let merchServices = {}
    let merchAbout = {}
    if(dataDetails.status === 'ok' && dataLocation.status === 'ok' && dataServices.status === 'ok' && dataAbout.status === 'ok'){
        merchDetails = dataDetails.result
        merchLocation = dataLocation.result
        merchServices = dataServices.result
        merchAbout = dataAbout.result
    }
    return{
        props : {
            merchDetails : merchDetails,
            merchLocation : merchLocation,
            merchServices : merchServices,
            merchAbout : merchAbout,
        }
    }
  }