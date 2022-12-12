import React, { useState } from 'react'
import Plus from '../svg/merchantSignUp/Plus'
import PlusSmall from '../svg/merchantSignUp/PlusSmall'
import { services } from '../../data/merchantServices'
import Minus from '../svg/merchantSignUp/Minus'
import MinusSmall from '../svg/merchantSignUp/MinusSmall'
import { useMerchantProfileContext } from '../../context/merchantProfile_context'

const StepThree = () => {

    const {step, setStep, formThreeVals, setFormThreeVals, formThreeValidate} = useMerchantProfileContext()
    const [businessServicesRO, setBusinessServicesRO] = useState(true)

    const mainCategoryOpenInit =services.map((category)=>{
        return ({[category.mainCategory]: false})
    })

    let mainCategoryOpenInitFinal = Object.assign({},...mainCategoryOpenInit)

    
    let allSubCategories = []
    
    services.map((category)=>{
        category.subCategories.map((subCategory)=>{
            allSubCategories.push((category.mainCategory + "##" + subCategory.subCategoryName).replaceAll(' ','_'))
        })
    })

    allSubCategories = allSubCategories.map((subCategory)=>{
        return ({[subCategory]: false})
    })
    
    let subCategoryOpenInitFinal = Object.assign({},...allSubCategories)

    const [mainCategoryOpen, setMainCategoryOpen] = useState(mainCategoryOpenInitFinal)
    const [subCategoryOpen, setSubCategoryOpen] = useState(subCategoryOpenInitFinal)

    
    const handleMainCategoryOpen = (category) => {
        setMainCategoryOpen({...mainCategoryOpen, [category]: !mainCategoryOpen[category]})
    }

    const handleSubCategoryOpen = (subCategory) => {
        setSubCategoryOpen({...subCategoryOpen, [subCategory]: !subCategoryOpen[subCategory]})
    }

    const goPrevious = () => {
        setStep(2)
    }

    const checkNum = (val) => {
        if(isNaN(val)){
            return null
        }
        else{
            return val
        }
    }

    const handleChange = (e,subCategoryServiceId) => {

        if(e.target.id.includes('Audio/_Video_&_TV_Mounting##TV_Mounting')){
            
            if(e.target.type === 'checkbox'){
                if(formThreeVals[subCategoryServiceId].available){
                    setFormThreeVals(prevState => ({...prevState, [subCategoryServiceId]:{...prevState[subCategoryServiceId], available:!formThreeVals[subCategoryServiceId].available , fees:"", error:''}}))
                    
                }
                else{
                    setFormThreeVals(prevState => ({...prevState, [subCategoryServiceId]:{...prevState[subCategoryServiceId], available:!formThreeVals[subCategoryServiceId].available}}))
                }
            }
            
            else if(e.target.id.includes('Fees')){
                setFormThreeVals(prevState => ({...prevState, [subCategoryServiceId]:{...prevState[subCategoryServiceId], available:true, fees:(e.target.value.replace(/[^0-9.]/g, ''))}}))
            }
            else if(e.target.id === 'Audio/Video&TVMountingTVMountingDesc'){
                setFormThreeVals(prevState => ({...prevState, 'Audio/Video&TVMountingTVMountingDesc':e.target.value}))
            }

        }
        else if(e.target.type === 'checkbox'){
            if(formThreeVals[subCategoryServiceId].available){
                setFormThreeVals(prevState => ({...prevState, [subCategoryServiceId]:{...prevState[subCategoryServiceId], available:!formThreeVals[subCategoryServiceId].available , fees:{flat:'', hourly:'', custom:'', call:''}, desc:'', error:''}}))
                
                const feesRadio = document.getElementsByName(subCategoryServiceId + 'fees')

                feesRadio.forEach((element)=>{
                    element.checked = false
                })
            }
            else{
                setFormThreeVals(prevState => ({...prevState, [subCategoryServiceId]:{...prevState[subCategoryServiceId], available:!formThreeVals[subCategoryServiceId].available}}))
            }
        }
        else if(e.target.id.includes('FlatFees') && e.target.type === 'text'){
            
            setFormThreeVals(prevState => ({...prevState, [subCategoryServiceId]:{...prevState[subCategoryServiceId], available:true, fees:{flat:(e.target.value.replace(/[^0-9.]/g, '')), hourly:'', custom:'', call:''}}}))
            const feesRadio = document.getElementById(subCategoryServiceId + 'Radio' +'FlatFees')
            feesRadio.checked = true
        }
        else if(e.target.id.includes('HourlyFees') && e.target.type === 'text'){
            setFormThreeVals(prevState => ({...prevState, [subCategoryServiceId]:{...prevState[subCategoryServiceId], available:true, fees:{hourly:(e.target.value.replace(/[^0-9.]/g, '')), flat:'', custom:'', call:''}}}))
            const feesRadio = document.getElementById(subCategoryServiceId + 'Radio' +'HourlyFees')
            feesRadio.checked = true
        }
        else if(e.target.id.includes('CustomFees') && e.target.type === 'text'){
            setFormThreeVals(prevState => ({...prevState, [subCategoryServiceId]:{...prevState[subCategoryServiceId], available:true, fees:{custom:(e.target.value.replace(/[^0-9.]/g, '')), flat:'', hourly:'', call:''}}}))
            const feesRadio = document.getElementById(subCategoryServiceId + 'Radio' +'CustomFees')
            feesRadio.checked = true
        }
        else if(e.target.id.includes('CallFees')){
            setFormThreeVals(prevState => ({...prevState, [subCategoryServiceId]:{...prevState[subCategoryServiceId], available:true, fees:{call:true, flat:'', hourly:'', custom:''}}}))
            const feesRadio = document.getElementById(subCategoryServiceId + 'Radio' +'CallFees')
            feesRadio.checked = true
        }
        else if(e.target.id.includes('Desc')){
            setFormThreeVals(prevState => ({...prevState, [subCategoryServiceId]:{...prevState[subCategoryServiceId], available:true, desc:e.target.value}}))
        }
        

    }

    const handleFormThree = (e) => {
        e.preventDefault()
        formThreeValidate()
    }

    const handleBusinessServicesEdit = (e) => {
        e.preventDefault()
        var values = Object.values(formThreeVals);

        // Convert the array of values into an array of objects, with each object
        // having the properties "name" and "properties"
        var services = values.map(function(value) {
        return {
            "name": Object.keys(formThreeVals).find(key => formThreeVals[key] === value),
            "properties": value
        };
        });
        console.log('services', services);
        let tempServices = services.map((service)=>{
            if(service.properties.available === true){
                let service_category = service.name.split('##')[0]
                let service_type = service.name.split('##')[1]
                let service_name = service.name.split('##')[2]
                let pricing_type = ""
                let service_price = ""
                if(service.properties.fees.call !== ""){
                    pricing_type = "call"
                    service_price = "on call"
                }
                else if(service.properties.fees.custom !== ""){
                    pricing_type = "custom"
                    service_price = service.properties.fees.custom
                }
                else if(service.properties.fees.flat !== ""){
                    pricing_type = "flat"
                    service_price = service.properties.fees.flat
                }
                else if(service.properties.fees.hourly !== ""){
                    pricing_type = "hourly"
                    service_price = service.properties.fees.hourly
                }
                let service_desc = service.properties.desc
                return {
                        "service_category": service_category,
                        "service_type": service_type,
                        "service_name": service_name,
                        "pricing_type": pricing_type,
                        "service_price": service_price,
                        "service_desc": service_desc
                }
            }
        })
        tempServices = tempServices.filter((service)=>{
            if(service !== undefined){
                return service
            }
        })
        console.log('tempServices', tempServices)
        if(businessServicesRO){
            setBusinessServicesRO(false)
        }
        else{
            // save edited
            let businesstDetails = {
                "services": tempServices
            }

            // let temp = Object.entries(formThreeVals)
            // console.log(temp)
            const postMerchData = async () => {
                const formData = new FormData();
                    
                const merchRes = await fetch('http://localhost:8000/api/merchant/register/business-services',{
                    method:'POST',
                    body : JSON.stringify(businesstDetails),
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + sessionStorage.getItem('merchToken'),
                    },})
                    
                    const merchResData = await merchRes.json()
                    console.log(merchResData);
                    if(merchResData.status === 'ok'){
                        setBusinessServicesRO(true)
                    }
            }
            postMerchData()

        }

    }

  return (
    <div className='w-full mt-16'>
        <form className='px-10'>

            {
                services.map((service,index)=>{
                    return(
                    <div key={index}>
                        <div className='flex mt-9 border-b border-[#E6E6E6] items-center justify-between cursor-pointer' onClick={()=>handleMainCategoryOpen(service.mainCategory)}>
                            <div className='w-full h-14 flex flex-col justify-between'>
                                <h1 className='text-3xl font-semibold w-full'>{service.mainCategory}</h1>
                                <div className='w-16 h-1 bg-blue-500'></div>
                            </div>
                            <div className=' flex items-center h-[50px]' >
                                {mainCategoryOpen[service.mainCategory] ? <Minus/> : <Plus/>}
                            </div>
                        </div>
                        <div  className={`${mainCategoryOpen[service.mainCategory] === false ? 'hidden':''}`}>

                            {
                                service.subCategories.map((subCategory,index)=>{
                                    return(
                                        <div key={index}>
                                            <div className={`${subCategory.subCategoryName === '' ? 'hidden' : ''} w-full mt-7 flex bg-blue-500 items-center pl-5 ${subCategoryOpen[(service.mainCategory + '##' + subCategory.subCategoryName).replaceAll(' ','_')]? 'rounded-md rounded-b-none':'rounded-md'}  cursor-pointer`} onClick={()=> handleSubCategoryOpen((service.mainCategory + '##' + subCategory.subCategoryName).replaceAll(' ','_'))}>
                                                <div className='bg-white h-8 w-8 flex justify-center items-center rounded-full'>
                                                    {subCategoryOpen[(service.mainCategory + '##' + subCategory.subCategoryName).replaceAll(' ','_')]?  <MinusSmall/> : <PlusSmall/> }
                                                </div>
                                                <h1 className='text-xl p-3 font-semibold text-white'>{subCategory.subCategoryName}</h1>
                                            </div>
                                            <div className={`${subCategory.subCategoryName === '' ? 'block' : subCategoryOpen[(service.mainCategory + '##' + subCategory.subCategoryName).replaceAll(' ','_')] === false ? 'hidden':''} ${subCategory.subCategoryName === '' ? 'mt-6 border-t border-t-[#D4D4D4]' : 'border-t-0'} relative border border-[#D4D4D4]  px-8 pb-12`}>
                                            {
                                                (service.mainCategory + '##' + subCategory.subCategoryName).replaceAll(' ','_') === 'Audio/_Video_&_TV_Mounting##TV_Mounting'  ?
                                                        <div className='flex flex-wrap gap-x-6 w-full'>
                                                            
                                                            {
                                                                subCategory.subCategoryServices.map((subCategoryService,index)=>{
                                                                    let subCategoryServiceId = (service.mainCategory + '##' + subCategory.subCategoryName + '##' + subCategoryService).replaceAll(' ','_')

                                                                    return (
                                                                        <div key={index} className='w-[31.5%]'>
                                                                            <div className='pt-10'>
                                                                                <input type="checkbox" id={subCategoryServiceId + 'available'} name={subCategoryServiceId + 'available'} checked={formThreeVals[subCategoryServiceId].available} onChange={(e)=>handleChange(e,subCategoryServiceId)}/><label htmlFor={subCategoryServiceId + 'available'} className={`${formThreeVals[subCategoryServiceId].error === '' || formThreeVals[subCategoryServiceId].error === undefined ?'text-black':'text-red-500'} font-semibold text-base ml-3`} >{subCategoryService}</label>
                                                                                <p className='font-normal text-[10px] italic text-red-500 mt-2 pr-10'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{formThreeVals[subCategoryServiceId].error}</p> 
                                                                            </div>
                                                                            <div className='mt-3'>
                                                                                <input type='text' id={subCategoryServiceId + 'Text' +'Fees'} value={formThreeVals[subCategoryServiceId].fees} className={`placeholder-[#B0B0B0] py-3 px-4 h-fit mt-0 w-full font-normal text-base bg-[#F9F9F9] border border-[#E9E9E9] rounded-md`} placeholder='Flat Fees (Amount)' onChange={(e)=>handleChange(e,subCategoryServiceId)}/>
                                                                            </div>
                                                                        </div>
                                                                    )
                                                                })
                                                            }
                                                            <div className='mt-6 w-full'>
                                                                <input type='text' id={'Audio/Video&TVMountingTVMountingDesc'} value={formThreeVals['Audio/Video&TVMountingTVMountingDesc']} className={`placeholder-[#B0B0B0] py-3 px-4 h-fit mt-0 w-full font-normal text-base bg-[#F9F9F9] border border-[#E9E9E9] rounded-md`} placeholder='Describe Your Service in some words... (Optional)' onChange={(e)=>handleChange(e,'Audio/Video&TVMountingTVMountingDesc')} maxLength={100}/>
                                                            </div>
                                                        </div>
                                                        
                                                        :
                                            
                                                
                                                    subCategory.subCategoryServices.map((subCategoryService, index)=>{
                                                        let subCategoryServiceId = (service.mainCategory + '##' + subCategory.subCategoryName + '##' + subCategoryService).replaceAll(' ','_')
                                                        return(
                                                            <div key={index}>
                                                                <div className='pt-10 flex'>
                                                                    <input type="checkbox" id={subCategoryServiceId + 'available'} name={subCategoryServiceId + 'available'} checked={formThreeVals[subCategoryServiceId].available} onChange={(e)=>handleChange(e,subCategoryServiceId)}/>
                                                                    <label htmlFor={subCategoryServiceId + 'available'} className={`${formThreeVals[subCategoryServiceId].error === '' || formThreeVals[subCategoryServiceId].error === undefined ?'text-black':'text-red-500'} font-semibold text-base ml-3`} >{subCategoryService}</label>
                                                                    <p className='font-normal text-[10px] italic text-red-500 mt-2 pr-10'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{formThreeVals[subCategoryServiceId].error}</p> 
                                                                </div>
                                                                <div className='mt-4'>
                                                                    <div className='flex gap-x-10 h-25'>
                                                                    
                                                                    <div className='flex items-center gap-x-3'>
                                                                        <input type="radio" id={subCategoryServiceId + 'Radio' +'FlatFees'} name={subCategoryServiceId + 'fees'} value={formThreeVals[subCategoryServiceId].fees.flat}/>
                                                                        <input type='text' id={subCategoryServiceId + 'Text' +'FlatFees'} value={formThreeVals[subCategoryServiceId].fees.flat} className={`placeholder-[#B0B0B0] py-3 px-4 h-fit mt-0 w-full font-normal text-base bg-[#F9F9F9] border border-[#E9E9E9] rounded-md`} placeholder='Flat Fees (Amount)' onChange={(e)=>handleChange(e,subCategoryServiceId)}/>
                                                                    </div>

                                                                    <div className='flex items-center gap-x-3'>
                                                                        <input type="radio" id={subCategoryServiceId + 'Radio' +'HourlyFees'} name={subCategoryServiceId + 'fees'} value={formThreeVals[subCategoryServiceId].fees.hourly}/>
                                                                        <input type='text' id={subCategoryServiceId + 'Text' +'HourlyFees'} value={formThreeVals[subCategoryServiceId].fees.hourly} className={`placeholder-[#B0B0B0] py-3 px-4 h-fit mt-0 w-full font-normal text-base bg-[#F9F9F9] border border-[#E9E9E9] rounded-md`} placeholder='Hourly Fees (Amount)' onChange={(e)=>handleChange(e,subCategoryServiceId)}/>
                                                                    </div>

                                                                    <div className='flex items-center gap-x-3'>
                                                                        <input type="radio" id={subCategoryServiceId + 'Radio' +'CustomFees'} name={subCategoryServiceId + 'fees'} value={formThreeVals[subCategoryServiceId].fees.custom}/>
                                                                        <input type='text' id={subCategoryServiceId + 'Text' +'CustomFees'} value={formThreeVals[subCategoryServiceId].fees.custom} className={`placeholder-[#B0B0B0] py-3 px-4 h-fit mt-0 w-full font-normal text-base bg-[#F9F9F9] border border-[#E9E9E9] rounded-md`} placeholder='Starts At' onChange={(e)=>handleChange(e,subCategoryServiceId)}/>
                                                                    </div>

                                                                    <div className='flex items-center gap-x-3 w-1/4'>
                                                                        <input type="radio" id={subCategoryServiceId + 'Radio' +'CallFees'} name={subCategoryServiceId + 'fees'} value={formThreeVals[subCategoryServiceId].fees.call} onClick={(e)=>handleChange(e,subCategoryServiceId)}/>
                                                                        <label htmlFor={subCategoryServiceId + 'Radio' +'CallFees'} className={`h-fit mt-0 w-full font-normal text-base`}>Call For Pricing</label>
                                                                    </div>
                                                                        
                                                                    </div>
                                                                    <div className='mt-6'>
                                                                        <input type='text' id={subCategoryServiceId + 'Desc'} value={formThreeVals[subCategoryServiceId].desc} className={`placeholder-[#B0B0B0] py-3 px-4 h-fit mt-0 w-full font-normal text-base bg-[#F9F9F9] border border-[#E9E9E9] rounded-md`} placeholder='Describe Your Service in some words... (Optional)' maxLength={100} onChange={(e)=>handleChange(e,subCategoryServiceId)}/>
                                                                    </div>
                                                                </div>
                                                        </div>
                                                        )
                                                    })
                                                
                                            }
                                            </div>
                                            
                                        </div>
                                    )
                                })
                            }
                            
                        </div>
                    </div>
                    )
                })
            }
            

            <div className='w-full flex justify-end mt-10 gap-x-6'>
                <button onClick={(e)=>goPrevious(e)} className='py-3 px-8 bg-red-500 text-white font-semibold text-base rounded-sm'>Previous Step</button>
                <button  onClick={e => handleBusinessServicesEdit(e)} className='py-3 px-8 bg-blue-500 text-white font-semibold text-base rounded-sm' >{businessServicesRO ? 'Edit' : 'Save'}</button>
            </div>
        </form>
    </div>
  )
}

export default StepThree