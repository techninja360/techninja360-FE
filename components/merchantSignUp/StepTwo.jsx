import React, { useEffect, useRef, useState } from 'react'
// import dynamic from "next/dynamic"
import Certifications from './Certifications'
import SelectInput from './SelectInput'
import TextInput from './TextInput'
import UploadImageInput from './UploadImageInput'
import { timeZones } from '../../data/timeZones'
import { businessDays, businessTime } from '../../data/businessHoursVals'
import XWhite from '../svg/XWhite'
import RadioInput from './RadioInput'
import { useMerchantSignUpContext } from '../../context/merchantSignUp_context'
import TextareaInput from './TextareaInput'

// const StepTwoMap = dynamic(() => import("./StepTwoMap"), { ssr:false })

const StepTwo = () => {

    const {step, setStep,formTwoVals, setFormTwoVals, formTwoErrors, setFormTwoErrors, formTwoValidate,formTwoCertificates, setFormTwoCertificates,formTwoCertificatesError, setFormTwoCertificatesError,formTwoCertificatesValidate, formTwoCertificatesStatus, formTwoBusinessHours, setFormTwoBusinessHours, formTwoBusinessHoursStatus, setFormTwoBusinessHoursStatus, formTwoBusinessHoursError, setFormTwoBusinessHoursError, formTwoBusinessHoursValidate} = useMerchantSignUpContext()
    
    const [certifications, setCertifications] = useState([0])
    const [bnHours, setBnHours] = useState([0])

    const [initial, setInitial] = useState(true)

    const {
        businessSmallLogo ,
        businessLargeLogo ,
        businessName ,
        businessWebAddress ,
        businessTollFreePreFix ,
        businessTollFreeStart,
        businessTollFreeEnd,
        businessWorkNumber,
        businessYearsInBusiness,
        businessEmployeeStrength,
        businessDescription,

        // certificationsAll,
        listingCertificate,
        
        businessLocationAddressType,
        businessLocationStreetName,
        businessLocationCityName,
        businessLocationStateName,
        businessLocationCountryName,
        businessLocationZipCodeName,
        businessLocationServiceRadStart,
        businessLocationServiceRadEnd,
        businessLocationZipCoverd,

        businessHours,
        businessHoursStart,
        businessHoursEnd,
        businessHoursTimezone,
        businessHoursBusinessHours2,
        businessHoursStart2,
        businessHoursEnd2,
        businessHoursService247,

        otherInfoRemoteSupport,
        otherInfoInStoreService,
        otherInfoHouseCall,
        otherInfoPickUpDrop,
        otherInfoResidentialService,
        otherInfoBusinessService,
        otherInfoCreditDebitCardPayment,
        otherInfoPaypalPayment,
        otherInfoApplePayPayment,
        otherInfoGooglePayPayment,
        otherInfoCashPayment,
        otherInfoCryptoCurrencyPayment,
        otherInfoOneTimePlan,
        otherInfoMonthlyPlan,
        otherInfoYearlyPlan,} = formTwoVals
        

    const handleFormTwo = (e) => {
        e.preventDefault()
        formTwoValidate()
        formTwoCertificatesValidate()
        formTwoBusinessHoursValidate()
    }

    useEffect(()=>{
        const areTrue = Object.values(formTwoErrors).every(
            value => value === false
        );
        if(areTrue && !formTwoCertificatesStatus && !formTwoBusinessHoursStatus){
            if(initial){
                console.log('initial loaded')
                setInitial(false)
            }
            else{
                console.log('form good');
                setStep(3)
            }

        }
        else{
            console.log('form bad');
        }
    },[formTwoErrors])

    const goPrevious = (e) => {
        e.preventDefault()
        setStep(1)
    }
    
    
    const onChange = (e) =>{
        console.log(e.target.type)
        if(e.target.type === 'radio'){
            setFormTwoVals(prevState => ({...prevState, [e.target.name]:e.target.value}))
        }
        else if(e.target.type === 'checkbox'){
            if(businessHoursService247 === false){
                setBnHours([0])
                setFormTwoBusinessHours({bn0 : {bnDays:formTwoBusinessHours.bn0.bnDays,bnStart:formTwoBusinessHours.bn0.bnStart,bnEnd:formTwoBusinessHours.bn0.bnEnd}})
                setFormTwoBusinessHoursError({bn0 : {bnDays:setFormTwoBusinessHoursError.bn0.bnDays,bnStart:setFormTwoBusinessHoursError.bn0.bnStart,bnEnd:setFormTwoBusinessHoursError.bn0.bnEnd}})
            }
            setFormTwoVals(prevState => ({...prevState, [e.target.name]:!prevState[e.target.name] }))
        }
        else if(e.target.type === 'file'){
            setFormTwoVals(prevState => ({...prevState, [e.target.id]:e.target.files[0]}))
        }
        else{
            setFormTwoVals(prevState => ({...prevState, [e.target.id]:e.target.value}))
        }
    }
    
    const addCertificate =()=>{
        
        setCertifications([...certifications,parseInt(certifications[certifications.length-1])+1])
        setFormTwoCertificates(prevState=>({...prevState, [`cert${parseInt(certifications[certifications.length-1])+1}`]: {'certTitle':undefined,'certUrl':undefined,'certFile':undefined}}))
        setFormTwoCertificatesError(prevState=>({...prevState, [`cert${parseInt(certifications[certifications.length-1])+1}`]: {'certTitle':false,'certUrl':false,'certFile':false}}))
    }

    const removeCertificate=()=>{
        
        const newCertsList = certifications
        
        if(newCertsList.length > 1 ){
            newCertsList.pop()
        }
        setCertifications(newCertsList)

        const lastCert = `cert${parseInt(certifications[certifications.length-1]+1)}` ;
        const lastCertErr = `cert${parseInt(certifications[certifications.length-1]+1)}` ;

        const {[lastCert]:{}, ...newCerts} = formTwoCertificates;
        const {[lastCertErr]:{}, ...newCertsErr} = formTwoCertificatesError;
        
        setFormTwoCertificates(newCerts)
        setFormTwoCertificatesError(newCertsErr)
        
    }

    
    const addBnHours =()=>{
        
        setBnHours([...bnHours,parseInt(bnHours[bnHours.length-1])+1])
        setFormTwoBusinessHours(prevState=>({...prevState, [`bn${parseInt(bnHours[bnHours.length-1])+1}`]: {'bnDays':undefined,'bnStart':undefined,'bnEnd':undefined}}))
        setFormTwoBusinessHoursError(prevState=>({...prevState, [`bn${parseInt(bnHours[bnHours.length-1])+1}`]: {'bnDays':false,'bnStart':false,'bnEnd':false}}))
    }

    const removeBnHours=(bnHour)=>{
        
        const bnHoursList = bnHours
        
        if(bnHoursList.length > 1 ){
            // bnHoursList.slice(bnHour, 1)
            bnHoursList = bnHoursList.filter(item => item !== bnHour)
            console.log(bnHours, bnHoursList);
        }
        
        setBnHours(bnHoursList)

        const bn = `bn${parseInt(bnHours[bnHour]+1)}` ;
        const bnErr = `bn${parseInt(bnHours[bnHour]+1)}` ;
        
        const {[bn]:{}, ...newBnHours} = formTwoBusinessHours;
        const {[bnErr]:{}, ...newBnHoursErr} = formTwoBusinessHoursError;
        
        setFormTwoCertificates(newBnHours)
        setFormTwoCertificatesError(newBnHoursErr)
        
    }
    

    const onChangeCerti = (e, cert) =>{
        if(e.target.id.includes('certificateTitle')){
            setFormTwoCertificates(prevState=>({...prevState, [`cert${cert}`]: {...prevState[`cert${cert}`],'certTitle':e.target.value}}))
        }
        else if(e.target.id.includes('certificateURL')){
            setFormTwoCertificates(prevState=>({...prevState, [`cert${cert}`]: {...prevState[`cert${cert}`],'certUrl':e.target.value}}))
        }
        else if(e.target.type === 'file'){
            setFormTwoCertificates(prevState=>({...prevState, [`cert${cert}`]: {...prevState[`cert${cert}`],'certFile':e.target.files[0]}}))
        }
    }

    const onChangeBnHours = (e, bn) =>{
        if(e.target.id.includes('businessHoursDays')){
            setFormTwoBusinessHours(prevState=>({...prevState, [`bn${bn}`]: {...prevState[`bn${bn}`],'bnDays':e.target.value}}))
        }
        else if(e.target.id.includes('businessHoursStart')){
            setFormTwoBusinessHours(prevState=>({...prevState, [`bn${bn}`]: {...prevState[`bn${bn}`],'bnStart':e.target.value}}))
        }
        else if(e.target.id.includes('businessHoursEnd')){
            setFormTwoBusinessHours(prevState=>({...prevState, [`bn${bn}`]: {...prevState[`bn${bn}`],'bnEnd':e.target.value}}))
        }
    }

  return (
    <div className='w-full mt-16'>
        <form className='px-10'>
            

{/************************************************************Business Details************************************************************/}
            <div className='relative border border-[#D4D4D4] '>
                <div>
                    <h1 className=' absolute px-2 bg-white -top-4 left-7 font-semibold text-xl text-blue-500'>Business Details</h1>
                </div>

                <div className='py-7 px-7'>

                    <div className='mt-7 flex w-full gap-x-4 items-start'>
                        <UploadImageInput id='businessSmallLogo' title='UPLOAD LOGO' placeholder='Upload Image here' warning='Logo should be smaller size not more then 40kb*' width='w-1/2' required={true} onChange={e=>onChange(e)} imgSize={40960} sizeRule='lt' error={formTwoErrors.businessSmallLogo} value={businessSmallLogo}/>
                        <UploadImageInput id='businessLargeLogo' title='UPLOAD LOGO FOR MERCHANT LANDING PAGE' placeholder='Upload Image here' warning='Logo should be bigger size more then 250kb*' width='w-1/2' required={true} onChange={e=>onChange(e)} imgSize={256000} sizeRule='gt' error={formTwoErrors.businessLargeLogo} value={businessLargeLogo}/>
                    </div>

                    <div className='mt-7 flex w-full gap-x-4 items-start'>
                        
                        <TextInput id='businessName' title='Business Name' placeholder='Enter Business Name' width='w-1/3' required={true} onChange={onChange} error={formTwoErrors.businessName} value={businessName}/>
                        <TextInput id='businessWebAddress' title='Website Address' placeholder='Enter Website Addess' width='w-1/3' required={true} onChange={onChange} error={formTwoErrors.businessWebAddress} value={businessWebAddress}/>
                        
                        <div className={`flex flex-wrap w-1/3 relative`}>
                            <h3 className='font-semibold text-sm uppercase'>Toll Free Number</h3>
                            <div className='mt-2 flex w-full gap-x-4'>
                                <SelectInput id={'businessTollFreePreFix'} items={[{name:'800',value:'800'},{name:'1800',value:'1800'},{name:'1860',value:'1860'},]} placeholder='800' width='w-full' onChange={onChange} error={formTwoErrors.businessTollFreePreFix} value={businessTollFreePreFix}/>
                                <TextInput id={'businessTollFreeStart'} width='1/3' placeholder='123' onChange={onChange} error={formTwoErrors.businessTollFreeStart} value={businessTollFreeStart} />
                                <TextInput id={'businessTollFreeEnd'} width='1/3' placeholder='5678' onChange={onChange} error={formTwoErrors.businessTollFreeEnd} value={businessTollFreeEnd}/>
                            </div>                            
                        </div>

                    </div>

                    <div className='mt-7 flex w-full gap-x-4 items-start'>
                        <TextInput id='businessWorkNumber' title='Work Number' placeholder='(123)-456-7890' width='w-1/3' required={true} onChange={onChange} error={formTwoErrors.businessWorkNumber} value={businessWorkNumber}/>
                        <SelectInput id='businessYearsInBusiness' title='Years in business' items={[{name:'<1',value:0},{name:'1-5',value:5},{name:'5-10',value:10},{name:'10+',value:15}]} placeholder='Select Years' width='w-1/3' onChange={onChange} error={formTwoErrors.businessYearsInBusiness} value={businessYearsInBusiness}/>
                        <SelectInput id='businessEmployeeStrength' title='Employee strength' items={[{name:'Solo',value:1},{name:'1-5',value:5},{name:'5-10',value:10},{name:'10+',value:15}]} placeholder='Solo' width='w-1/3' onChange={onChange} error={formTwoErrors.businessEmployeeStrength} value={businessEmployeeStrength}/>
                    </div>

                    <div className='mt-7 flex w-full gap-x-4 items-start flex-wrap'>
                        {/* <h3 className='font-semibold text-sm uppercase'>Description <span className='text-red-500'>*</span></h3>
                        <textarea id="businessDescription" placeholder='Describe About Yourself' className='py-3 px-4 mt-2 w-full h-36 font-normal text-base bg-[#F9F9F9] border border-[#E9E9E9] rounded-md' onChange={onChange} error={formTwoErrors.businessDescription} value={businessDescription}></textarea> */}
                        <TextareaInput id='businessDescription' error={formTwoErrors.businessDescription} onChange={onChange} placeholder='Describe About Yourself' required={true} title='Description' value={businessDescription} width='w-full' height='h-36'/>
                    </div>
                
                </div>

            </div>


{/************************************************************Certificates and Accrediations************************************************************/}
            <div className='relative border border-[#D4D4D4] mt-12'>
                <div>
                    <h1 className=' absolute px-2 bg-white -top-4 left-7 font-semibold text-xl text-blue-500'>Certificates and Accrediations</h1>
                </div>
                <div className='py-7 px-7' >

                    {
                        certifications.map((cert,index)=>{
                            return (
                                <div key={index} className='mt-7 flex w-full gap-x-4 items-start'>
                                    <TextInput id={`certificateTitle${cert}`} width='w-1/3' title={`${parseInt(cert)+1} certificate title`} placeholder='Enter title' required={true} value={formTwoCertificates[ `cert${cert}`]?.certTitle} onChange={(e)=>onChangeCerti(e,cert)} error={formTwoCertificatesError[ `cert${cert}`]?.certTitle}/>
                                    
                                    <TextInput id={`certificateURL${cert}`} width='w-1/3' title='certificate url link' placeholder='Enter Website Address' required={true} value={formTwoCertificates[ `cert${cert}`]?.certUrl} onChange={(e)=>onChangeCerti(e,cert)} error={formTwoCertificatesError[ `cert${cert}`]?.certUrl}/>
                                    
                                    <UploadImageInput id={`certificateImage${cert}`}  title='UPLOAD LOGO' placeholder='Upload Image here' width='w-1/3' onChange={(e)=>onChangeCerti(e,cert)} required={true} error={formTwoCertificatesError[ `cert${cert}`]?.certFile} /> 
                                </div> 
                                
                            )
                        })
                    }
                    
                    <div className='mt-6 flex gap-x-4'>
                        <div className='py-3 px-5 w-fit bg-blue-500 text-white rounded-sm cursor-pointer' onClick={()=>addCertificate()}>Add New</div>
                        <div className='py-3 px-5 w-fit bg-red-500 text-white rounded-sm cursor-pointer' onClick={()=>removeCertificate()}>Remove</div>
                    </div>
                    

                    <div className='mt-7 flex w-full gap-x-4 items-start flex-wrap'>
                        <SelectInput id='listingCertificate' title='Choose Which Certificate Yiu wants to add in Listing Page' items={
                            certifications.map((cert)=>{
                                return {name:  `certificate ${cert+1}`, value : `cert${cert}`}
                            })
                        }
                         placeholder='1 certificate' width='w-1/2' onChange={onChange} value={listingCertificate}/>
                    </div>
                </div>
            </div>


{/************************************************************Business Location************************************************************/}
            <div className='relative border border-[#D4D4D4] mt-12'>
                <div>
                    <h1 className=' absolute px-2 bg-white -top-4 left-7 font-semibold text-xl text-blue-500'>Business Location</h1>
                </div>
                <div className='py-7 px-7'>
                    
                    <div className='mt-7 flex w-full gap-x-4 items-start'>
                        <RadioInput id='businessLocationAddressType' items={[{value:'remoteAdd',name:'Remote support'},{value:'inHouseAdd',name:'In House call'},{value:'pickAdd',name:'Pick up and drop'}]} required={true} title='What type of business address you have ?' width='w-3/5' onChange={onChange} error={formTwoErrors.businessLocationAddressType} value={businessLocationAddressType}/>
                    </div>

                    <div className='mt-7 flex w-full gap-x-4 items-start'>
                        <TextInput id='businessLocationStreetName' placeholder='Enter Street Address' title='street' required={true} width='w-3/4' onChange={onChange} error={formTwoErrors.businessLocationStreetName} value={businessLocationStreetName}/>
                        <TextInput id='businessLocationCityName' placeholder='Enter City Name' title='City' required={true} width='w-1/4' onChange={onChange} error={formTwoErrors.businessLocationCityName} value={businessLocationCityName}/>
                    </div>
                    
                    <div className='mt-7 flex w-full gap-x-4 items-start'>
                        <SelectInput id='businessLocationStateName' items={[{name:'gujarat',value:'gj'},{name:'Delhi',value:'dl'},{name:'Maharashtra',value:'mh'},]} placeholder='Select State' required={true} title='state' width='w-1/3' onChange={onChange} error={formTwoErrors.businessLocationStateName} value={businessLocationStateName}/>
                        <SelectInput id='businessLocationCountryName' items={[{name:'India',value:'in'},{name:'USA',value:'usa'},{name:'Canada',value:'ca'},]} placeholder='Select Country' required={true} title='Country' width='w-1/3' onChange={onChange} error={formTwoErrors.businessLocationCountryName} value={businessLocationCountryName}/>
                        <TextInput id='businessLocationZipCodeName' placeholder='Enter Zip Code' title='zip code' required={true} width='w-1/3' onChange={onChange} error={formTwoErrors.businessLocationZipCodeName} value={businessLocationZipCodeName}/>
                    </div>
                    
                    
                    {/* <StepTwoMap/> */}
                    
                    <div className='mt-7 flex w-full gap-x-4 items-start'>
                        <div className={`flex flex-wrap w-1/3 relative`}>
                            <h3 className='font-semibold text-sm uppercase'>Service Radius<span className='text-red-500'>*</span></h3>
                            <div className='w-full flex items-center justify-between mt-2'>
                            
                                <div className='flex w-full items-center gap-x-4'>
                                    <SelectInput id='businessLocationServiceRadStart' items={[{name:'01',value:1},{name:'02',value:2},{name:'03',value:3}]} placeholder='01' width={'w-1/2'} onChange={onChange} error={formTwoErrors.businessLocationServiceRadStart} value={businessLocationServiceRadStart}/>
                                    <p>Miles</p>
                                </div>
                                <div className='flex w-full items-center gap-x-4'>

                                    <SelectInput id='businessLocationServiceRadEnd' items={[{name:'10',value:10},{name:'20',value:20},{name:'25+',value:50}]} placeholder='10' width={'w-1/2'} onChange={onChange} error={formTwoErrors.businessLocationServiceRadEnd} value={businessLocationServiceRadEnd}/>
                                    <p>Miles</p>
                                </div>
                            </div>
                        </div>

                        <TextInput id='businessLocationZipCoverd' placeholder='Enter Covered Area' required={true} title='Zip Codes Covered' width='w-1/3' onChange={onChange} error={formTwoErrors.businessLocationZipCoverd} value={businessLocationZipCoverd}/>
                    </div>

                </div>

            </div>

{/************************************************************Business Hours************************************************************/}
            <div className='relative border border-[#D4D4D4] mt-12'>
                <div>
                    <h1 className=' absolute px-2 bg-white -top-4 left-7 font-semibold text-xl text-blue-500'>Business Hours</h1>
                </div>
                <div className='py-7 px-7'>
                    
                    <div className='mt-7 flex w-full gap-x-10 items-start'>
                        <div className={`flex flex-wrap w-1/2 relative`}>
                            <h3 className='font-semibold text-sm uppercase'>Business Hours<span className='text-red-500'>*</span></h3>
                            {
                                bnHours.map((bnHour,index)=>{
                                    return(
                                        <div key={index} className={`${bnHour !== 0 ? 'w-full mt-0' : 'w-[84.5%] mt-2'} w-full mb-5 flex items-start justify-between  gap-x-6`}>
                                            <SelectInput id={`businessHoursDays${bnHour}`} items={businessDays} placeholder='All Days' required={true} width='w-1/2' onChange={(e)=>onChangeBnHours(e,bnHour)} error={formTwoBusinessHoursError[ `bn${bnHour}`]?.bnDays} value={formTwoBusinessHours[ `bn${bnHour}`]?.bnDays}/>
                                            
                                            <SelectInput id={`businessHoursStart${bnHour}`} items={businessTime} placeholder='01' required={true} width='w-1/4' onChange={(e)=>onChangeBnHours(e,bnHour)} error={formTwoBusinessHoursError[ `bn${bnHour}`]?.bnStart} value={formTwoBusinessHours[ `bn${bnHour}`]?.bnStart}/>
                                            
                                            <SelectInput id={`businessHoursEnd${bnHour}`} items={businessTime} placeholder='12' required={true} width='w-1/4' onChange={(e)=>onChangeBnHours(e,bnHour)} error={formTwoBusinessHoursError[ `bn${bnHour}`]?.bnEnd} value={formTwoBusinessHours[ `bn${bnHour}`]?.bnEnd}/>
                                            
                                            {
                                                bnHour !== 0 && <div className='p-3 bg-red-500 rounded-sm cursor-pointer' onClick={()=>removeBnHours(bnHour)}><XWhite/></div>
                                            }
                                        </div>
                                    )
                                })
                            }
                            {!businessHoursService247 && <div className='mt-0 flex w-full gap-x-10 items-start'>
                                <div className='text-white px-5 py-3 bg-blue-500 font-semibold text-base rounded-sm cursor-pointer' onClick={addBnHours}>Add New</div>
                            </div>}
                        </div>
                        <div className='flex flex-wrap w-1/2 relative'>
                            <SelectInput id='businessHoursTimezone' items={timeZones} placeholder='Pick Timezone' required={true} title='Time Zone'  onChange={onChange} error={formTwoErrors.businessHoursTimezone} value={businessHoursTimezone}/>
                            <div className='mt-8'>
                                <input type="checkbox" id="businessHoursService247" name="businessHoursService247" checked={businessHoursService247} onClick={e=>onChange(e)}/><label htmlFor="businessHoursService247" className='font-semibold text-sm ml-3' > 24 X 7 Hours Service</label>
                            </div>
                        </div>

                    </div>

                    <div className='mt-7 flex w-full gap-x-10 items-start'>

                        
                    </div>

                    

                </div>
            </div>


{/************************************************************Other information************************************************************/}
            <div className='relative border border-[#D4D4D4] mt-12'>
                <div>
                    <h1 className=' absolute px-2 bg-white -top-4 left-7 font-semibold text-xl text-blue-500'>Other information</h1>
                </div>

                <div className='py-7 px-7'>
                
                    <div className='mt-7 flex w-full gap-x-10 items-start'>
                        <RadioInput id='otherInfoRemoteSupport' title='Remote Support' items={[{value:'yes',name:'Yes'},{value:'no',name:'No'}]}  width='w-1/3' onChange={onChange} value={otherInfoRemoteSupport}/>
                        <RadioInput id='otherInfoInStoreService' title='In Store Service' items={[{value:'yes',name:'Yes'},{value:'no',name:'No'}]}  width='w-1/3' onChange={onChange} value={otherInfoInStoreService}/>
                        <RadioInput id='otherInfoHouseCall' title='House Call' items={[{value:'yes',name:'Yes'},{value:'no',name:'No'}]}  width='w-1/3' onChange={onChange} value={otherInfoHouseCall}/>
                    </div>
                    <div className='mt-7 flex w-full gap-x-10 items-start'>
                        <RadioInput id='otherInfoPickUpDrop' title='Pick Up & Drop' items={[{value:'yes',name:'Yes'},{value:'no',name:'No'}]}  width='w-1/3' onChange={onChange} value={otherInfoPickUpDrop}/>
                        <RadioInput id='otherInfoResidentialService' title='Residential Service' items={[{value:'yes',name:'Yes'},{value:'no',name:'No'}]}  width='w-1/3' onChange={onChange} value={otherInfoResidentialService}/>
                        <RadioInput id='otherInfoBusinessService' title='Business Service' items={[{value:'yes',name:'Yes'},{value:'no',name:'No'}]}  width='w-1/3' onChange={onChange} value={otherInfoBusinessService}/>
                    </div>

                    <h1 className='font-semibold text-2xl mt-14'>Payment Method</h1>
                    <div className='mt-7 flex w-full gap-x-10 items-start'>
                        <RadioInput id='otherInfoCreditDebitCardPayment' title='Credit/ Debit Card' items={[{value:'yes',name:'Yes'},{value:'no',name:'No'}]}  width='w-1/3' onChange={onChange} value={otherInfoCreditDebitCardPayment}/>
                        <RadioInput id='otherInfoPaypalPayment' title='Paypal' items={[{value:'yes',name:'Yes'},{value:'no',name:'No'}]}  width='w-1/3' onChange={onChange} value={otherInfoPaypalPayment}/>
                        <RadioInput id='otherInfoApplePayPayment' title='Apple Pay' items={[{value:'yes',name:'Yes'},{value:'no',name:'No'}]}  width='w-1/3' onChange={onChange} value={otherInfoApplePayPayment}/>
                    </div>
                    <div className='mt-7 flex w-full gap-x-10 items-start'>
                        <RadioInput id='otherInfoGooglePayPayment' title='Google Pay' items={[{value:'yes',name:'Yes'},{value:'no',name:'No'}]}  width='w-1/3' onChange={onChange} value={otherInfoGooglePayPayment}/>
                        <RadioInput id='otherInfoCashPayment' title='Cash' items={[{value:'yes',name:'Yes'},{value:'no',name:'No'}]}  width='w-1/3' onChange={onChange} value={otherInfoCashPayment}/>
                        <RadioInput id='otherInfoCryptoCurrencyPayment' title='Crypto Currency' items={[{value:'yes',name:'Yes'},{value:'no',name:'No'}]}  width='w-1/3' onChange={onChange} value={otherInfoCryptoCurrencyPayment}/>
                    </div>

                    <h1 className='font-semibold text-2xl mt-14'>Plan Type</h1>
                    <div className='mt-7 flex w-full gap-x-10 items-start'>
                        <RadioInput id='otherInfoOneTimePlan' title='One Time' items={[{value:'yes',name:'Yes'},{value:'no',name:'No'}]}  width='w-1/3' onChange={onChange} value={otherInfoOneTimePlan}/>
                        <RadioInput id='otherInfoMonthlyPlan' title='Monthly' items={[{value:'yes',name:'Yes'},{value:'no',name:'No'}]}  width='w-1/3' onChange={onChange} value={otherInfoMonthlyPlan}/>
                        <RadioInput id='otherInfoYearlyPlan' title='Yearly' items={[{value:'yes',name:'Yes'},{value:'no',name:'No'}]}  width='w-1/3' onChange={onChange} value={otherInfoYearlyPlan}/>
                    </div>
                
                </div>
            </div>

            <div className='w-full flex justify-end mt-8 gap-x-6'>
                <button onClick={(e)=>goPrevious(e)} className='py-3 px-8 bg-red-500 text-white font-semibold text-base rounded-sm'>Previous Step</button>
                <button onClick={(e)=>handleFormTwo(e)} className='py-3 px-8 bg-blue-500 text-white font-semibold text-base rounded-sm'>Next Step</button>
            </div>
        </form>
    </div>
  )
}

export default StepTwo