import React, { useEffect, useRef, useState } from 'react'
import SelectInput from '../merchantProfile/SelectInput'
import XWhite from '../svg/XWhite'
import { services } from '../../data/merchantServicesDisplay'
import RadioInput from '../merchantProfile/RadioInput'
import CbCalender from '../svg/merchantDetails/CbCalender'
import { useMerchantDetailsContext } from '../../context/merchantDetails_context'
import Server from 'next/dist/server/base-server'

const RequestCallback = () => {

    const {reqCallback, setReqCallback} = useMerchantDetailsContext()

    const calenderRef = useRef()

    const [cbData, setCbData] = useState({
        category:'',
        subCategory:'',
        subCategoryService:'',
        callbackNow:'',
        callbackDate:'',
        callbackTime:''
    })

    const [agree, setAgree] = useState(false)


    const [subCategoryItems, setSubCategoryItems] = useState([{name:'',value:''}])
    const [subCategoryServiceItems, setSubCategoryServiceItems] = useState([{name:'',value:''}])

    const handleChange = (e) => {
        if(e.target.type === 'select'){
            setCbData(prevState => ({...prevState, [e.target.id]:e.target.value}))
        }
        else if(e.target.type === 'radio'){
            setCbData(prevState => ({...prevState, [e.target.name]:e.target.value}))
        }
        else if(e.target.type === 'date'){
            setCbData(prevState => ({...prevState, [e.target.id]:e.target.value}))
        }
        else{
            setCbData(prevState => ({...prevState, [e.target.id]:e.target.value}))
        }
    }

    // useEffect(()=>{

    //     let singleCategory = false
    //     let logArr = services.filter((service)=>{
    //         if(service.mainCategory === cbData.category){
    //             if(service.subCategories[0].subCategoryName ===''){
    //                 singleCategory = service.mainCategory
    //                 return service
    //             }
    //             else{
    //                 return service
    //             }
    //         }
    //     })

    //     if(singleCategory){
    //         console.log(logArr)
    //         logArr = logArr[0]?.subCategories[0]?.subCategoryServices
    //         logArr = logArr?.map((item)=>{
    //             return {name:item,value:item}
    //         })
    //         setSubCategoryItems(cbData.category === '' ? [{name:'',value:''}] : logArr)
    //     }
    //     else{
    //         logArr = logArr[0]?.subCategories  
    //         logArr = logArr?.map((item)=>{
    //             return {name:item.subCategoryName,value:item.subCategoryName}
    //         })
    //         setSubCategoryItems(cbData.category === '' ? [{name:'',value:''}] : logArr)
    //     }


    //     setCbData(prevState => ({...prevState, subCategory:''}))
    // },[cbData.category])

    // useEffect(()=>{
        
    //     let logArr = services.filter((service)=>{
    //         if(service.mainCategory === cbData.category){
    //             return service
    //         }
    //     })[0]?.subCategories

    //     logArr = logArr?.filter((subCategory)=>{
    //         if(subCategory.subCategoryName === ''){
    //             return subCategory
    //         }
    //         else if(subCategory.subCategoryName === cbData.subCategory){
    //             return subCategory
    //         }
    //     })[0]?.subCategoryServices

        
    //     if(logArr === undefined){
    //         logArr = []
    //     }
    //     else{
    //         logArr = logArr.map((item)=>{
    //             return {name:item,value:item}
    //         })
    //     }

    //     setSubCategoryServiceItems(cbData.subCategory === '' ? [{name:'',value:''}] : logArr)
    //     setCbData(prevState => ({...prevState, subCategoryService:''}))
    // },[cbData.subCategory,cbData.category])
    
    useEffect(()=>{

        let singleService = services.filter((service)=> {
            if(service.mainCategory === cbData.category){
                return service
            }
        })

        // console.log(singleService);
        if(singleService[0]?.noSubCategories === false){
            let subCategories = singleService[0]?.subCategories
    
            subCategories = subCategories?.map((subCategory)=>{
                return {name:subCategory.subCategoryName,value:subCategory.subCategoryName}
            })
    
            setSubCategoryItems(subCategories)
        }
        else{
            let subCategories = singleService[0]?.subCategories[0]?.subCategoryServices
            
            subCategories = subCategories?.map((subCategory)=>{
                return {name:subCategory,value:subCategory}
            })
            setSubCategoryItems(subCategories)
        }

        setCbData(prevState => ({...prevState, subCategory:''}))
        // console.log(subCategories)
    },[cbData.category])

    useEffect(()=>{
        
        let singleService = services.filter((service)=> {
            if(service.mainCategory === cbData.category){
                return service
            }
        })

        // console.log(singleService);
        if(singleService[0]?.noSubCategories === false){
            let subCategories = singleService[0]?.subCategories
    
            let singleSubCategory = subCategories?.filter((subCategory)=>{
                if(subCategory.subCategoryName === cbData.subCategory){
                    return subCategory
                }
            })

            let subCategoryServices = singleSubCategory[0]?.subCategoryServices

            subCategoryServices = subCategoryServices?.map((subCategoryService)=>{
                return {name:subCategoryService,value:subCategoryService}
            })

            setSubCategoryServiceItems(subCategoryServices)
            console.log(subCategoryServices)
    
            // setSubCategoryItems(subCategories)
        }
        else{
            setSubCategoryServiceItems(undefined)
        }

        setCbData(prevState => ({...prevState, subCategoryService:''}))
    },[cbData.subCategory,cbData.category])

  return (
    <div className='justify-center items-center w-full h-screen flex overflow-x-hidden overflow-y-auto fixed z-50 outline-none focus:outline-none bg-[#0009]'>
        <div className='h-full w-full flex justify-center items-center '>
            <div className='bg-white  w-[60%] pb-7 rounded-md'>
                <div className='flex justify-between items-center bg-[#0079E9] rounded-t-md p-4 w-full'>
                    <h1 className='font-bold text-[34px] text-white'>Request a call back </h1>
                    <div className='cursor-pointer' onClick={()=>setReqCallback(false)}>
                        <XWhite/>
                    </div>
                </div>
                <div>
                    <div className='flex gap-x-7 px-7 py-4 '>
                        <SelectInput 
                            title='Category'
                            // required={true}
                            id='category' 
                            items={services.map((service)=>{
                                return {name:service.mainCategory, value:service.mainCategory}
                            })}
                            placeholder='Select Category'
                            width={'w-1/2'}
                            value={cbData.category}
                            onChange={handleChange}
                            />
                        <SelectInput 
                            title='Sub Category'
                            // required={true}
                            id='subCategory' 
                            items={subCategoryItems}
                            placeholder='Select Sub Category'
                            width={'w-1/2'}
                            value={cbData.subCategory}
                            onChange={handleChange}
                            />
                    </div>

                    <div className='flex gap-x-7 px-7 py-4 '>
                        <SelectInput 
                                title='Sub Category Services'
                                // required={true}
                                id='subCategoryService' 
                                items={subCategoryServiceItems}
                                placeholder='Select Sub Category Services'
                                width={'w-1/2'}
                                value={cbData.subCategoryService}
                                onChange={handleChange}
                                />
                        <div className='w-1/2'></div>
                    </div>

                    <div className='flex gap-x-7 px-7 py-4 '>
                        <RadioInput 
                            id='callbackNow' 
                            items={[{value:'hour',name:'Within an Hour'},{value:'later',name:'Select a different time '}]} 
                            // required={true} 
                            title='Call back time' 
                            width='w-1/2' 
                            onChange={handleChange} 
                            value={cbData.callbackNow}/>
                    </div>
                    {
                        cbData.callbackNow === 'later' &&
                    
                    <div className='flex gap-x-7 px-7 py-4 '>
                        <div className={`flex flex-wrap w-1/2 relative`}>
                            <h3 className='font-semibold text-sm uppercase'>select date<span className='text-red-500'>*</span></h3>
                        
                            <input ref={calenderRef} value={cbData.callbackDate} className={`placeholder-[#B0B0B0] py-3 px-4 h-fit mt-2 w-full font-normal text-base bg-[#F9F9F9] border border-[#E9E9E9] rounded-md`} placeholder={'Select Date'} type="date" id={'callbackDate'} min={new Date().toISOString().slice(0, 10)} required={true} onClick={()=>calenderRef.current.showPicker()} onChange={handleChange}/>
                            
                            <div className='absolute right-4 top-11' onClick={()=>{
                                calenderRef.current.showPicker()
                            }}>
                                <CbCalender/>
                            </div>
                            {/* {warning || error!==false ? <p className={`font-normal text-[10px] italic ${error ?'text-red-500':'text-[#6A6A6A]'}  mt-2`}>{error ? error : warning}</p> : null} */}
                        </div>
                    </div>
                    }
                    {
                        cbData.callbackNow === 'later' &&
                    
                    <div className='flex gap-x-7 px-7 py-4 '>
                    <RadioInput 
                            id='callbackTime' 
                            items={[{value:'6am-9am',name:'Early morning 6am-9am'},{value:'9am-12pm',name:'Morning 9am -12pm'},{value:'12pm-3pm',name:'Afternoon 12pm - 3pm'},{value:'3pm-6pm',name:'Late afternoon 3pm -6pm'},{value:'6pm-9pm ',name:'Evening 6pm - 9pm '}]} 
                            required={true} 
                            title='select time' 
                            width='w-full' 
                            onChange={handleChange} 
                            value={cbData.callbackTime}/>
                    </div>
                    }

                    <div className='flex gap-x-3 ml-7 mt-4 '>
                        <input id='cbAgree' type="checkbox" checked={agree} onClick={()=>setAgree(!agree)}/>
                        <label htmlFor="cbAgree" className='text-sm font-light text-[#605F5F]'>I agree to share my phonenumber and name with the merchant</label>
                    </div>
                    <div className='flex gap-x-7 px-7 py-4 '>
                        <button className={`py-5 px-7 font-bold text-lg bg-[#0079E9] text-white ${agree? '': 'hidden' } rounded-sm`}>Submit request</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RequestCallback