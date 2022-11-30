import React, { useEffect, useRef, useState } from 'react'
import SelectInput from '../merchantSignUp/SelectInput'
import XWhite from '../svg/XWhite'
import { services } from '../../data/merchantServices'
import RadioInput from '../merchantSignUp/RadioInput'
import CbCalender from '../svg/merchantDetails/CbCalender'
import { useMerchantDetailsContext } from '../../context/merchantDetails_context'
import Server from 'next/dist/server/base-server'

const ReportError = () => {

    const {reportError, setReportError} = useMerchantDetailsContext()

    const calenderRef = useRef()

    const [reportData, setReportData] = useState({
        functionalError : false,
        styleError : false,
        offensiveContent : false,
        otherError : false,
        detailsError:'',
    })


    const handleChange = (e) => {
        if(e.target.type === 'checkbox'){
            console.log('click');
            setReportData(prevState => ({...prevState, [e.target.id]:!prevState[e.target.id]}))
        }
        
        else{
            setReportData(prevState => ({...prevState, [e.target.id]:e.target.value}))
        }
    }

    
  return (
    <div className='justify-center items-center w-full h-screen flex overflow-x-hidden overflow-y-auto fixed z-50 outline-none focus:outline-none bg-[#0009]'>
        <div className='h-full w-full flex justify-center items-center '>
            <div className='bg-white  w-[60%] pb-7 rounded-md'>
                <div className='flex justify-between items-center bg-[#0079E9] rounded-t-md p-4 pl-7 w-full'>
                    <h1 className='font-bold text-[34px] text-white'>Report Error </h1>
                    <div className='cursor-pointer' onClick={()=> setReportError(false)}>
                        <XWhite/>
                    </div>
                </div>
                <div>
                    <div className='flex items-center gap-x-3 px-7 py-4 '>
                        <input id='functionalError' type='checkbox' name='functionalError' className='errorCheckbox' onClick={(e)=>handleChange(e)} checked={reportData.functionalError}/>
                        <label htmlFor='functionalError' className='font-medium text-sm'>Website not working</label> 
                    </div>
                    <div className='flex items-center gap-x-3 px-7 py-4 '>
                        <input id='styleError' type='checkbox' name='styleError' className='errorCheckbox' onClick={(e)=>handleChange(e)} checked={reportData.styleError}/>
                        <label htmlFor='styleError' className='font-medium text-sm'>Phone not reachable</label> 
                    </div>
                    <div className='flex items-center gap-x-3 px-7 py-4 '>
                        <input id='offensiveContent' type='checkbox' name='offensiveContent' className='errorCheckbox' onClick={(e)=>handleChange(e)} checked={reportData.offensiveContent}/>
                        <label htmlFor='offensiveContent' className='font-medium text-sm'>Business hours updated</label> 
                    </div>
                    <div className='flex items-center gap-x-3 px-7 py-4 '>
                        <input id='otherError' type='checkbox' name='otherError' className='errorCheckbox' onClick={(e)=>handleChange(e)} checked={reportData.otherError}/>
                        <label htmlFor='otherError' className='font-medium text-sm'>Out of business</label> 
                    </div>
                    <div className='flex items-center gap-x-3 px-7 py-4 '>
                        <input id='otherError' type='checkbox' name='otherError' className='errorCheckbox' onClick={(e)=>handleChange(e)} checked={reportData.otherError}/>
                        <label htmlFor='otherError' className='font-medium text-sm'>Other</label> 
                    </div>
                    <div className='flex flex-wrap items-center gap-x-3 px-7 py-4 '>
                        <label htmlFor='detailsError' className='font-medium text-sm'>Please Describe in Detail</label> 
                        <textarea id='detailsError' rows={5} name='detailsError' className={`py-3 px-4 mt-2 w-full font-normal text-sm bg-[#F9F9F9] border border-[#E9E9E9] rounded-md`} value={reportData.detailsError} onChange={e=>handleChange(e)}/>
                    </div>
                    
                    <div className='flex gap-x-7 px-7 py-4'>
                        <button className='py-5 px-7 font-bold text-lg text-white bg-[#0079E9] rounded-sm'>Report Error</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ReportError