import React, { useState } from 'react'
import XWhite from '../svg/XWhite'

const imgList = [
    'https://source.unsplash.com/random',
    'https://images.unsplash.com/photo-1668892433187-5716feb4212b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80',
    'https://images.unsplash.com/photo-1668877334122-b60dd15bc1b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    'https://images.unsplash.com/photo-1668871333606-ef8461d43922?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
    'https://images.unsplash.com/photo-1668836249693-36a558df5323?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
    'https://images.unsplash.com/photo-1664575197229-3bbebc281874?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    'https://plus.unsplash.com/premium_photo-1668461477216-2d4f89d77b0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1668876483952-4ae3cd49ac5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=780&q=80',
    'https://images.unsplash.com/photo-1668876303651-ef4dc5814cc0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80',
    'https://images.unsplash.com/photo-1668877874752-518c5315d38d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
    'https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80',
]

const TabPhotos = () => {
    const [imgOpen, setImgOpen] = useState(false)
  return (
    <>
        {imgOpen && <div className='flex justify-center items-center fixed top-0 right-0 w-screen h-screen overflow-x-hidden overflow-y-auto z-50 outline-none focus:outline-none bg-[#0009]'>
            <div className='h-full w-full flex justify-center items-center '>
                        <div className='relative flex justify-center items-center w-fit h-fit max-w-[80vw]'>
                            <div className='absolute -top-8 -right-8 flex justify-center items-center bg-[#E82327] w-16 h-16 rounded-full cursor-pointer' onClick={()=>setImgOpen(false)}><XWhite/></div>
                            <img src={imgOpen} alt="" className='w-fit max-h-[80vh] object-cover'/>
                        </div>
            </div>
        </div>}
        <div className='mt-4 gap-x-8 w-full'>
            <div className='w-full'>
                <h1 className='font-bold text-[22px]'>Service Photos</h1>
            </div>
            <div className='mt-5 flex flex-wrap gap-x-6 gap-y-5'>
                
                {
                    imgList.map((src,index)=>{
                        return(
                            <div key={index} className='flex justify-center items-center bg-white border drop-shadow-md w-64 h-44 rounded-md cursor-pointer' onClick={()=>setImgOpen(src)}>
                                <img src={src} alt="" className='w-[95%] h-[95%] object-cover rounded-md' />
                            </div>
                        )
                    })
                }
                
                
            </div>
        </div>
    </>
  )
}

export default TabPhotos