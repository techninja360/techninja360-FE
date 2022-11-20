import React from 'react'
import StarEmpty from '../svg/merchantDetails/StarEmpty'
import StarFill from '../svg/merchantDetails/StarFill'
import DocumentUpload from '../svg/merchantSignUp/DocumentUpload'
import DocumentUploadBg from '../svg/merchantSignUp/DocumentUploadBg'

const TabReviews = () => {
  return (
    <div className='mt-4 gap-x-8 w-full'>
        <div className='w-full'>
            <h1 className='font-bold text-[22px]'>Customer Reviews</h1>
        </div>
        
        <div className='mt-11 flex flex-col gap-y-10'>

            <div className='flex gap-x-8 w-full'>
                <div className='h-20 w-20'>
                    <img src="./assets/images/home/reviewClient.png" alt="" className='object-fit' />
                </div>
                <div className='w-full mt-2'>
                    <div className='flex justify-between items-center'>
                        <h2 className='font-semibold text-lg'>John Schmitt</h2>
                        <div className='flex justify-between gap-x-1'><StarFill/> <StarFill/> <StarFill/> <StarFill/> <StarEmpty/> </div>
                    </div>
                    <div>
                        <h5 className='font-normal text-sm italic text-[#77838F]'>john@example.com</h5>
                    </div>
                    <div>
                        <p className='font-normal text-sm mt-1 text-[#77838F]'>Ce module est bien expliqué grâce aux exemples concrets que Monsieur Hassan utilise à chaque fois quand il s'agit du terrain. La structure du module est cohérente. Je félicite notre formateur pour son intelligence et sa passion.</p>
                    </div>
                    <div className='flex gap-x-5 mt-5'>
                        <div className='h-24 w-24'>
                            <img src="https://source.unsplash.com/random" alt=""  className='w-full h-full object-cover'/>
                        </div>
                        <div className='h-24 w-24'>
                            <img src="https://source.unsplash.com/random" alt=""  className='w-full h-full object-cover'/>
                        </div>
                        
                    </div>
                </div>
            </div>
           
            <div className='flex gap-x-8 w-full'>
                <div className='h-20 w-20'>
                    <img src="./assets/images/home/reviewClient.png" alt="" className='object-fit' />
                </div>
                <div className='w-full mt-2'>
                    <div className='flex justify-between items-center'>
                        <h2 className='font-semibold text-lg'>John Schmitt</h2>
                        <div className='flex justify-between gap-x-1'><StarFill/> <StarFill/> <StarFill/> <StarFill/> <StarFill/> </div>
                    </div>
                    <div>
                        <h5 className='font-normal text-sm italic text-[#77838F]'>john@example.com</h5>
                    </div>
                    <div>
                        <p className='font-normal text-sm mt-1 text-[#77838F]'>Ce module est bien expliqué grâce aux exemples concrets que Monsieur Hassan utilise à chaque fois quand il s'agit du terrain. La structure du module est cohérente. Je félicite notre formateur pour son intelligence et sa passion.</p>
                    </div>
                    
                </div>
            </div>

        </div>

        <div className='w-full mt-11'>
            <div className='py-6 px-10 w-[770px] bg-[#F6F6F6] border border-[#E7E7E7]'>
                <div className='w-full'>
                    <h1 className='font-semibold text-[22px]'>Add Your Comment</h1>
                </div>
                <div className='flex flex-col w-fit mt-3'>
                    <h4 className='font-normal text-base text-[#77838F]'>Add Rating</h4>
                    <div className='flex justify-between gap-x-1 mt-2'><StarFill/> <StarFill/> <StarFill/> <StarFill/> <StarFill/> </div>
                </div>
               
                <div className={`flex flex-wrap w-full mt-6 relative`}>
                    <h3 className='font-normal text-base'>Add Image</h3>

                    <label className={`py-3 px-4 h-auto pl-14 mt-2 w-full font-normal text-base bg-[#fff] border border-[#0079E9] rounded-md`} type="file" placeholder={'Upload Image Here'}>Upload Image Here</label>

                    <input className='hidden' type="file"/>
                    
                    <div className='absolute top-10 left-2'>
                        <div className='relative'>
                            <div className='absolute top-1 left-2'>
                                <DocumentUpload/>
                            </div>
                            <DocumentUploadBg/>
                        </div>
                    </div>
                    
                </div>

                <div className={`flex flex-wrap mt-6 w-full relative`}>
                    <h3 className='font-normal text-base'>Add Comment</h3>
                
                    <textarea className={`py-3 px-4 mt-2 w-full h-52 font-normal text-base bg-[#fff] border  border-[#E9E9E9] rounded-md`} placeholder={'Add your comment here...'} type="text"/>
                    
                </div>

                <div className='mt-8 mb-4'>
                    <button className='font-bold text-base text-white bg-[#0079E9] py-4 px-9 rounded-sm'>Submit Comment</button>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default TabReviews