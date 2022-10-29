import React from 'react'
import ReviewBlob from '../svg/home/ReviewBlob'
import ReviewLeft from '../svg/home/ReviewLeft'
import ReviewRight from '../svg/home/ReviewRight'
import StarEmpty from '../svg/home/StarEmpty'
import StarFill from '../svg/home/StarFill'

const ReviewsSection = () => {
  return (
    <section className='flex h-[620px]'>
        
        <div className='bg-[#fdfdfd] w-1/2 relative'>
            <div className='pt-14'>
                <h1 className='text-center font-bold text-3xl'>Reviews By Clients</h1>
            </div>
            <div className='absolute top-28 right-11'>
                <ReviewBlob/>
            </div>
            <div className='relative h-[500px] flex justify-center items-center'>
                <div className='absolute w-[496px] h-[248px] bg-white rounded-xl border drop-shadow-md'></div>
                <div className='absolute w-[474px] h-[271px] bg-white rounded-xl border drop-shadow-md'></div>
                <div className='z-40 -mt-24'>
                    <div className='w-full flex justify-center z-50'>
                        <img src="./assets/images/home/reviewClient.png" alt="" />
                    </div>
                    <div className='relative h-44 flex justify-center -z-10 items-center' >
                        <div className='absolute w-[445px] h-[287px] bg-white rounded-xl border drop-shadow-md text-center'>
                            <div className='mt-14'>
                                <h1 className='font-regular text-xl'>Hannah Schmitt</h1>
                                <h3 className='italic font-normal text-base text-gray-500 mt-1'>Lead Designer</h3>
                                <p className='font-light text-base p-4 pt-0 mt-1'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi et fugiat laudantium quam reprehenderit, odit possimus quidem id est soluta molestias explicabo. Minima culpa nesciunt molestias reiciendis, natus quas.</p>
                            </div>
                            <div className='flex gap-1 justify-center'>
                                <StarFill/><StarFill/><StarFill/><StarFill/><StarEmpty/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center -mt-16 gap-x-3'>
                    <button className='w-11 h-11 flex justify-center items-center rounded-full bg-white drop-shadow-sm'><ReviewLeft/></button>
                    <button className='w-11 h-11 flex justify-center items-center rounded-full bg-white drop-shadow-sm'><ReviewRight/></button>
                </div>

        </div>

        <div className=' relative w-1/2 businessReviewBG'>
            <div className='absolute w-full h-full'>
                <img className='w-full h-full object-cover' src="./assets/images/home/reviewBg.png" alt="" />
            </div>
            <div className='pt-14'>
                <h1 className='relative text-center font-bold text-3xl'>Reviews By Businesses</h1>
            </div>
            <div className='absolute top-28 right-11'>
                <ReviewBlob/>
            </div>
            <div className='relative h-[500px] flex justify-center items-center'>
                <div className='absolute w-[496px] h-[248px] bg-white rounded-xl border drop-shadow-md'></div>
                <div className='absolute w-[474px] h-[271px] bg-white rounded-xl border drop-shadow-md'></div>
                <div className='z-40 -mt-14'>
                    <div className='w-full flex justify-center z-50'>
                        <img src="./assets/images/home/reviewBusiness.png" alt="" />
                    </div>
                    <div className='relative h-56 flex justify-center -z-10 items-center' >
                        <div className='absolute w-[445px] h-[287px] bg-white rounded-xl border drop-shadow-md text-center'>
                            <div className='mt-14'>
                                <h1 className='font-regular text-xl'>24 7 PC Repair</h1>
                                <h3 className='italic font-normal text-base text-gray-500 mt-1'>California, USA</h3>
                                <p className='font-light text-base  p-4 pt-0 mt-1'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi et fugiat laudantium quam reprehenderit, odit possimus quidem id est soluta molestias explicabo. Minima culpa nesciunt molestias reiciendis, natus quas.</p>
                            </div>
                            <div className='flex gap-1 justify-center'>
                                <StarFill/><StarFill/><StarFill/><StarFill/><StarEmpty/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                <div className='flex justify-center -mt-16 gap-x-3'>
                    <button className='w-11 h-11 flex justify-center items-center rounded-full bg-white drop-shadow-sm'><ReviewLeft/></button>
                    <button className='w-11 h-11 flex justify-center items-center rounded-full bg-white drop-shadow-sm'><ReviewRight/></button>
                </div>

        </div>
    </section>
  )
}

export default ReviewsSection