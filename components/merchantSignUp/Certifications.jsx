import React, { useEffect, useState } from 'react'
import TextInput from './TextInput'
import UploadImageInput from './UploadImageInput'

const Certifications = ({id, certificationsDetail, setCertificationsDetail}) => {

  const certId = `cert${id}`
  console.log(certificationsDetail)
  const onChange = (e) =>{
    console.log( e.target.type);
    
    if(e.target.type === 'file'){
      // setCertificationsDetail([...certificationsDetail, {[e.target.id]:e.target.files[0]}])
      // setCertificationsDetail(prevState => ({...prevState, [certId] : {'certFile':e.target.files[0]}}))
    }
    // else if(e.target.id.includes('certificateTitle')){
    //   setCertificationsDetail(prevState => ({...prevState, [certId] : {'certTitle':e.target.value}}))
    // }
    // else if(e.target.id.includes('certificateURL')){
    //   setCertificationsDetail(prevState => ({...prevState, [certId] : {'certUrl':e.target.value}}))
    // }
    setCertificationsDetail([...certificationsDetail, {[e.target.id]:e.target.value}])
}

  const [certTitle, setCertTitle] = useState('')
  const [certUrl, setCertUrl] = useState('')
  const [certFile, setCertFile] = useState()

  useEffect(()=>{
    setCertificationsDetail(prevState => ({...prevState, [`cert${id}`] : {'certTitle':certTitle, 'certUrl':certUrl, 'certFile':certFile}}))
  },[certTitle,certFile, certUrl])

  return (
    <div className='mt-7 flex w-full gap-x-4 items-start'>
        <TextInput id={`certificateTitle${id}`} width='w-1/3' title={`${parseInt(id)+1} certificate title`} placeholder='Enter title' required={true} value={certTitle} onChange={(e)=>setCertTitle(e.target.value)}/>
        <TextInput id={`certificateURL${id}`} width='w-1/3' title='certificate url link' placeholder='Enter Website Address' required={true} value={certUrl} onChange={(e)=>setCertUrl(e.target.value)}/>
        <UploadImageInput id={`certificateImage${id}`}  title='UPLOAD LOGO' placeholder='Upload Image here' width='w-1/3' onChange={(e)=>setCertFile(e)} required={true} /> 
    </div>
  )
}

export default Certifications