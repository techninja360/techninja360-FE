import React, { useRef, useState } from 'react'
import DocumentUpload from '../svg/merchantSignUp/DocumentUpload'
import DocumentUploadBg from '../svg/merchantSignUp/DocumentUploadBg'

const UploadImageInput = ({id, required, width, title, placeholder, warning, onChange, value, error, imgSize, sizeRule}) => {

    const fileUploadRef = useRef()
    const [fileName, setFileName] = useState(placeholder)
    const [sizeError, setsizeError] = useState(false)
    const [sizeWarning, setsizeWarning] = useState(warning)

    const hanldleFileUpload = (e) => {
        // console.log(e.target)
        console.log(e.target.files[0])
        if(imgSize){
            if(sizeRule === 'lt'){
                if(e.target.files[0].size < imgSize){
                    setFileName(e.target.files[0].name)
                    setsizeError(false)
                    setsizeWarning(false)
                    onChange(e)
                }
                else{
                    setsizeError(`Uploaded img Size is larger than ${imgSize/1024} kb`)
                }
            }
            else if(sizeRule === 'gt'){
                if(e.target.files[0].size > imgSize){
                    setFileName(e.target.files[0].name)
                    setsizeError(false)
                    setsizeWarning(false)
                    onChange(e)
                }
                else{
                    setsizeError(`Uploaded img Size is smaller than ${imgSize/1024} kb`)
                }
            }

            else{
                setFileName('Please specify appropriate sizeRule arg')
            }
        }
        else{
            setFileName(e.target.files[0].name)
            onChange(e)
        }

    }

  return (
    <div className={`flex flex-wrap ${width} relative`}>
        {title ? <h3 className='font-semibold text-sm uppercase'>{title} {required?<span className='text-red-500'>*</span>:null}</h3> : null}

        <label htmlFor={id} className={`py-3 px-4 h-auto pl-14 mt-2 w-full font-normal text-base bg-[#F9F9F9] border ${(sizeError === false || sizeError === undefined) && (error === false || error === undefined) ? 'border-[#0079E9]' : 'border-red-500'} rounded-md`} type="file" placeholder={placeholder}>{fileName}</label>

        <input ref={fileUploadRef} className='hidden' type="file" id={id} onChange={(e)=>hanldleFileUpload(e)}/>
        
        <div className='absolute top-9 left-2'>
            <div className='relative'>
                <div className='absolute top-1 left-2'>
                    <DocumentUpload/>
                </div>
                <DocumentUploadBg/>
            </div>
        </div>
        
        {(sizeWarning || sizeError!==false) && (sizeWarning || error !==false) ? <p className='font-normal text-[10px] italic text-red-500 mt-2'>{sizeError ? sizeError : error ? error : sizeWarning}</p> : null}
    </div>
  )
}

export default UploadImageInput