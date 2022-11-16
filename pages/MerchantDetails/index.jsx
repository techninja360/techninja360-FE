import React from 'react'
import Footer from '../../components/Footer'
import DetailsTabs from '../../components/merchantDetails/DetailsTabs'
import LocationBreadcrum from '../../components/merchantDetails/LocationBreadcrum'
import TabAbout from '../../components/merchantDetails/TabAbout'
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

const MerchantDetails = () => {

    const {active, setActive} = useMerchantDetailsContext()
  return (
    <>
        {/* <MerchantLogIn/> */}
        <Navbar/>
        <div className='flex bg-[#F3FAFC] justify-center w-full'>
            <LocationBreadcrum/>
        </div>
        <div className='flex bg-[#F3FAFC] justify-center w-full relative'>
            <div className='h-72 w-full overflow-hidden'>
                <div className='absolute bg-[#0005] w-full h-72'></div>
                <img src="./assets/images/merchantDetails/merchantBg.png" alt="" className='object-cover w-full h-full blur-xl' />
            </div>
            <div className='absolute max-w-[1100px] w-full'>
                <div className=' h-40 w-[550px] absolute right-0 top-10'>
                    
                    <div className='relative w-full h-full'>
                        <div className='absolute w-full h-[70%] bg-white drop-shadow-md top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2'></div>
                        <div className='absolute w-[95%] h-[80%] bg-white drop-shadow-md top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2'></div>
                        <div className='absolute w-[90%] h-[100%] bg-white drop-shadow-md top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2'>
                            <div className='w-full h-full flex justify-between gap-x-4 p-7'>
                                <div className='w-1/5 flex flex-col justify-center items-center gap-y-3'>
                                    <div className='w-24 h-24'>
                                        <img src="./assets/images/home/reviewClient.png" alt="client" className='object-cover h-full w-full' />
                                    </div>
                                    <div className='flex justify-between gap-x-1'><StarFill/> <StarFill/> <StarFill/> <StarFill/> <StarEmpty/> </div>
                                </div>
                                <div className='w-4/5'>
                                    <div className='flex gap-x-4 w-full items-center'>
                                        <h1 className='font-medium text-xl'>Hannah Schmitt</h1>
                                        <h3 className='font-normal text-base italic text-[#A3A3A3]'>Lead Designer</h3>
                                    </div>
                                    <div className='mt-3'>
                                        <p className='font-light text-sm text-[#3D3D3D]'>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. 
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='absolute w-full -bottom-5'>
                            <div className='flex w-full justify-center items-center gap-x-1'>
                                <ActiveSlide/><InactiveSlide/><InactiveSlide/>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        
        <div className='flex justify-center w-full'>
            <div className='relative max-w-[1100px] w-full flex justify-center flex-wrap mb-10'>
                
                <div className='absolute left-0 -top-52 '>
                    <div className='w-[500px] h-44'>
                        <img src="./assets/images/home/reviewBusiness.png" alt="" className='object-cover h-full w-full rounded-t-sm' />
                    </div>
                    <div className='pt-5  bg-[#0079E9] text-white rounded-b-sm'>
                        <div className='flex w-full justify-between items-center pl-9 pr-6'>
                            <h1 className='font-semibold text-[28px]'>247 PC REPAIR</h1>
                            <div className='flex items-center py-1 px-3 gap-x-1 bg-white text-[#0079E9]'>
                                <Direction/> <p className=''> Get Direction</p>
                            </div>
                        </div>
                        
                        <div className='mt-4 pl-8 pb-8'>
                            <div className='flex gap-x-3 mb-5 items-center'>
                                <MapPin/>
                                <h3 className='text-lg font-normal'>141 E 62nd Street, New York, NY, 10065 </h3>
                            </div>
                            <div className='flex gap-x-3 mb-5 items-center'>
                                <GlobeIcon/>
                                <h3 className='text-lg font-normal'>https://www.247pcrepair.com </h3>
                            </div>
                            <div className='flex gap-x-3 mb-5 items-center'>
                                <TollFreePhone/>
                                <h3 className='text-lg font-normal'>1-800-346-8752  (Toll free) </h3>
                            </div>
                            <div className='flex gap-x-3 items-center'>
                                <HomeIcon/>
                                <h3 className='text-lg font-normal'><span className='text-[#FFEF5C] font-semibold'> Open Now </span>(9am - 10pm) Today </h3>
                            </div>
                        </div>
                    </div>
                </div>
                

                <div className='w-full'>
                    
                    <div className='flex mt-10'>
                        <div className='w-1/2'></div>
                        <div className='w-1/2'>
                            <div className='relative flex justify-end'>
                                <input  className={`placeholder-[#B0B0B0] py-3 px-4 h-fit w-[88%] font-normal text-base bg-[#F9F9F9] border border-[#E9E9E9] rounded-md`} type="text" placeholder='Search for services' />
                                <div className='absolute top-4 right-3'>
                                    <SearchIcon/>
                                </div>
                            </div>
                            <div className='flex gap-x-5 justify-end mt-7'>
                                <button className='flex items-center gap-x-2 px-[18px] h-12 bg-[#F8B84E]  rounded-sm'>
                                    <Review/>
                                    <h5 className='font-medium text-base text-white'>Add a review</h5>
                                </button>
                                <button className='flex justify-center items-center h-12 w-12 border-2 border-[#E82327] rounded-sm'>
                                    <Heart/>
                                </button>
                                <button className='flex justify-center items-center h-12 w-12 bg-[#00900E] rounded-sm'>
                                    <Share/>
                                </button>
                                <button className='flex items-center gap-x-2 px-[18px] h-12 bg-[#747474]  rounded-sm'>
                                    <Flag/>
                                    <h5 className='font-medium text-base text-white'>Report Error</h5>
                                </button>
                            </div>
                            <div className='flex gap-x-5 justify-end mt-5'>
                                <button className='flex items-center gap-x-2 px-[18px] h-12 bg-[#F88B4E]  rounded-sm'>
                                    <div className='flex justify-center items-center bg-white h-8 w-8 rounded-sm'>
                                        <MessageIcon/>
                                    </div>
                                    <h5 className='font-medium text-base text-white'>Live Chat</h5>
                                </button>
                                <button className='flex items-center gap-x-2 px-[18px] h-12 bg-[#0079E9]  rounded-sm'>
                                    <div className='flex justify-center items-center bg-white h-8 w-8 rounded-sm'>
                                        <PhoneCall/>
                                    </div>
                                    <h5 className='font-medium text-base text-white'>Request a Callback</h5>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className='w-full mt-14'>
                        <p className='font-normal text-lg text-[#696969]'>Technology is all around us—connecting us, entertaining us and helping us run our businesses. My Computer Works is here to keep the technology in your life running smoothly with expert solutions ranging from support to recommendations.</p>
                    </div>
                    
                    <div>
                        <DetailsTabs/>
                    </div>

                    <div>
                    {
                        active === 0 && <TabAbout/>   
                    }
                    {
                        active === 1 && <TabServices/>   
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