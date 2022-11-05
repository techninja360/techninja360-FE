import React, { useRef, useState } from 'react'
import DocumentUpload from '../svg/merchantSignUp/DocumentUpload'
import DocumentUploadBg from '../svg/merchantSignUp/DocumentUploadBg'

const UploadImageInput = ({id,width,title,placeholder,warning}) => {

    const fileUploadRef = useRef()
    const [fileName, setFileName] = useState(placeholder)

  return (
    <div className={`flex flex-wrap ${width} relative`}>
        <h3 className='font-semibold text-sm uppercase'>{title} <span className='text-red-500'>*</span></h3>
        <label htmlFor={id} className='py-3 px-4 h-auto pl-14 mt-2 w-full font-normal text-base bg-[#F9F9F9] border border-[#0079E9] rounded-md' type="file" placeholder='Upload Image Here'>{fileName}</label>
        <input ref={fileUploadRef} className='hidden' type="file" id={id} onChange={(e)=>setFileName(e.target.value.split('\\').pop())}/>
        <div className='absolute top-9 left-2'>
            <div className='relative'>
                <div className='absolute top-1 left-2'>
                    <DocumentUpload/>
                </div>
                <DocumentUploadBg/>
            </div>
        </div>
        <p className='font-normal text-[10px] italic text-red-500 mt-2'>{warning}</p>
    </div>
  )
}

export default UploadImageInput