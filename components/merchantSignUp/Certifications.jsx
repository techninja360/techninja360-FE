import React from 'react'
import TextInput from './TextInput'
import UploadImageInput from './UploadImageInput'

const Certifications = ({id}) => {
  return (
    <div className='mt-7 flex w-full gap-x-4 items-start'>
        <TextInput id={`certificateTitle${id}`} width='w-1/3' title={`${parseInt(id)+1} certificate title`} placeholder='Enter title' required={true} />
        <TextInput id={`certificateURL${id}`} width='w-1/3' title='certificate url link' placeholder='Enter Website Address' required={true} />
        <UploadImageInput id={`certificateImage${id}`}  title='UPLOAD LOGO' placeholder='Upload Image here' width='w-1/3'/> 
    </div>
  )
}

export default Certifications