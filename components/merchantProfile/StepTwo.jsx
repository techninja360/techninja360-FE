import React, { useEffect, useRef, useState } from 'react'
// import dynamic from "next/dynamic"
import Certifications from './Certifications'
import SelectInput from './SelectInput'
import TextInput from './TextInput'
import UploadImageInput from './UploadImageInput'
import { timeZones } from '../../data/timeZones'
import { businessDays, businessTime } from '../../data/businessHoursVals'
import { USStates } from '../../data/usStates'
import XWhite from '../svg/XWhite'
import RadioInput from './RadioInput'
import { useMerchantProfileContext } from '../../context/merchantProfile_context'
import TextareaInput from './TextareaInput'
import StepTwoMap from './StepTwoMap'
import { backend_server } from '../../config'
import { empStrength } from '../../data/businessDetailsData'

// const StepTwoMap = dynamic(() => import("./StepTwoMap"), { ssr:false })

const StepTwo = () => {

    const {merchData, step, setStep,formTwoVals, setFormTwoVals, formTwoErrors, setFormTwoErrors, formTwoValidate,formTwoCertificates, setFormTwoCertificates,formTwoCertificatesError, setFormTwoCertificatesError,formTwoCertificatesValidate, formTwoCertificatesStatus, formTwoBusinessHours, setFormTwoBusinessHours, formTwoBusinessHoursStatus, setFormTwoBusinessHoursStatus, formTwoBusinessHoursError, setFormTwoBusinessHoursError, formTwoBusinessHoursValidate} = useMerchantProfileContext()
    
    const [businessDetailsRO, setBusinessDetailsRO] = useState(true)
    const [certiRO, setCertiRO] = useState(true)
    const [businessLocationRO, setBusinessLocationRO] = useState(true)
    const [businessHoursRO, setBusinessHoursRO] = useState(true)
    const [businessOtherRO, setbusinessOtherRO] = useState(true)

    const [certifications, setCertifications] = useState([0])
    const [bnHours, setBnHours] = useState([0])

    useEffect(()=>{
        setBnHours(merchData?.business_hours?.weekly_hours?.length > 0 ? 
        merchData?.business_hours?.weekly_hours?.map((val,i)=>{
            return i
        }):[0])
        setCertifications(merchData?.certs_accrdts?.cert_list?.length > 0 ? 
            merchData?.certs_accrdts?.cert_list?.map((val,i)=>{
            return i
        }):[0])
    },merchData)

    const handleBusinessDetailstEdit = () => {
        if(businessDetailsRO){
            setBusinessDetailsRO(false)
        }
        else{
            //save edited
            let businesstDetails = {
                "business_name":formTwoVals.businessName,
                "website":formTwoVals.businessWebAddress,
                "contact":{
                    "toll_no": (String(formTwoVals.businessTollFreePreFix) + String(formTwoVals.businessTollFreeStart) + String(formTwoVals.businessTollFreeEnd) ).replace(/\D/g,''),
                    "work_no": String(formTwoVals.businessWorkNumber).replace(/\D/g,'')
                },
                "exp_years":formTwoVals.businessYearsInBusiness,
                "emp_strength":formTwoVals.businessEmployeeStrength,
                "description":formTwoVals.businessDescription
            }

            const postMerchData = async () => {
                
                    
                const merchRes = await fetch(`${backend_server}/api/merchant/register/business-details`,{
                    method:'POST',
                    body : JSON.stringify(businesstDetails),
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + sessionStorage.getItem('merchToken'),
                    },})
                    
                    const merchResData = await merchRes.json()
                
                // const merchResLogo = await fetch('http://localhost:8000/api/merchant/register/business-logo',{
                //     method:'POST',
                //     body : JSON.stringify(logoDetails),
                //     headers: {
                //         "Content-Type": "application/json",
                //         "Authorization": "Bearer " + sessionStorage.getItem('merchToken'),
                //     },})

                    const formData = new FormData();
                    formData.append('image', formTwoVals.businessSmallLogo );
                    formData.append('image', formTwoVals.businessLargeLogo );
                    const merchResLogo = await fetch(`${backend_server}/api/merchant/register/business-logo`,
                    {
                        method: 'POST',
                        body : formData,
                        headers: {
                                    // "Content-Type": "application/json",
                                    "Authorization": "Bearer " + sessionStorage.getItem('merchToken'),
                                }
                    }
                    );
                    
                    const merchResLogoData = await merchResLogo.json()
                    if(merchResData.status === 'ok'){
                        setBusinessDetailsRO(true)
                    }
            }

            let validated = formTwoValidate('businessDetails')
            console.log('validated', validated);
            if(validated){
                postMerchData()
            }

        }

    }

    const handleCertyEdit = () => {
        if(certiRO){
            setCertiRO(false)
        }
        else{
            //save edited
            const postMerchData = async () => {
                let businesstDetails = {
                    "show_cert": formTwoVals.listingCertificate
                }
                
                const merchResLogo = await fetch(`${backend_server}/api/merchant/register/certs-accrdts/show`,
                {
                    method: 'POST',
                    body : JSON.stringify(businesstDetails),
                    headers: {
                                "Content-Type": "application/json",
                                "Authorization": "Bearer " + sessionStorage.getItem('merchToken'),
                            }
                }
                );
                
                const merchResLogoData = await merchResLogo.json()
                console.log(merchResLogoData);
                if(merchResLogoData.status === 'ok'){
                    // setBusinessDetailsRO(true)
                    setCertiRO(true)
                }
            }
            if(!formTwoCertificatesStatus){
                uploadCerty(0)
                // postMerchData()
            }
        // }
        }

    }
    
    const handleBusinessLocationEdit = () => {
        if(businessLocationRO){
            setBusinessLocationRO(false)
        }
        else{
            //save edited
            let businessLocation = {
                "address_type":formTwoVals.businessLocationAddressType,
                "address":{
                    "street":formTwoVals.businessLocationStreetName,
                    "city":formTwoVals.businessLocationCityName,
                    "state":formTwoVals.businessLocationStateName,
                    "country":formTwoVals.businessLocationCountryName,
                    "zip_code":formTwoVals.businessLocationZipCodeName
                },
                // "service_radius":{
                //     "start":formTwoVals.businessLocationServiceRadStart,
                //     "end":formTwoVals.businessLocationServiceRadEnd
                // },
                "coordinates":{
                    "lat":formTwoVals.businessLocationPosititonX,
                    "long":formTwoVals.businessLocationPosititonY
                },
                // "zip_covered":formTwoVals.businessLocationZipCoverd.split(',')

            }
            

            const postMerchData = async () => {
                const merchRes = await fetch(`${backend_server}/api/merchant/register/business-location`,{
                    method:'POST',
                    body : JSON.stringify(businessLocation),
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + sessionStorage.getItem('merchToken'),
                    },})
                    
                const merchResData = await merchRes.json()
                if(merchResData.status === 'ok'){
                    setBusinessLocationRO(true)
                }
            }
            let validated = formTwoValidate('businessLocation')
            console.log('validated', validated);
            if(validated){
                postMerchData()
            }
        }

    }
    
    const handleBusinessHoursEdit = () => {
        if(businessHoursRO){
            setBusinessHoursRO(false)
        }
        else{
            //save edited
            let temp = Object.entries(formTwoBusinessHours)
            let businessHours = {
                "time_zone":formTwoVals.businessHoursTimezone,
                "is_service_247":formTwoVals.businessHoursService247,
                "weekly_hours": temp.map((bnHour)=>{
                    return (
                        {
                            "days":bnHour[1].bnDays,
                            "start_time":bnHour[1].bnStart,
                            "end_time":bnHour[1].bnEnd
                        }
                    )
                }),
            }
            

            const postMerchData = async () => {
                const merchRes = await fetch(`${backend_server}/api/merchant/register/business-hours`,{
                    method:'POST',
                    body : JSON.stringify(businessHours),
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + sessionStorage.getItem('merchToken'),
                    },})
                    
                const merchResData = await merchRes.json()
                console.log(merchResData);
                if(merchResData.status === 'ok'){
                    setBusinessHoursRO(true)
                }
            }
            let validated = formTwoValidate('businessHours')
            console.log('validated', validated);
            if(!formTwoBusinessHoursStatus && validated){
                postMerchData()
            }
        
        }

    }
    
    const handleBusinessOtherEdit = () => {
        if(businessOtherRO){
            setbusinessOtherRO(false)
        }
        else{
            //save edited
            let postBody = {
                "services":{
                    "remote_support":(formTwoVals.otherInfoRemoteSupport === "yes") ? true : (formTwoVals.otherInfoRemoteSupport === "no") ? false : undefined,
                    "inStore_service":(formTwoVals.otherInfoInStoreService === "yes") ? true : (formTwoVals.otherInfoInStoreService === "no") ? false : undefined,
                    "house_call":(formTwoVals.otherInfoHouseCall === "yes") ? true : (formTwoVals.otherInfoHouseCall === "no") ? false : undefined,
                    "pick_drop":(formTwoVals.otherInfoPickUpDrop === "yes") ? true : (formTwoVals.otherInfoPickUpDrop === "no") ? false : undefined,
                    "resident_service":(formTwoVals.otherInfoResidentialService === "yes") ? true : (formTwoVals.otherInfoResidentialService === "no") ? false : undefined,
                    "business_service":(formTwoVals.otherInfoBusinessService === "yes") ? true : (formTwoVals.otherInfoBusinessService === "no") ? false : undefined

                },
                "payment_method":{
                    "credit_debit": (formTwoVals.otherInfoCreditDebitCardPayment === "yes") ? true : (formTwoVals.otherInfoCreditDebitCardPayment === "no") ? false : undefined,
                    "paypal": (formTwoVals.otherInfoPaypalPayment === "yes") ? true : (formTwoVals.otherInfoPaypalPayment === "no") ? false : undefined,
                    "applePay": (formTwoVals.otherInfoApplePayPayment === "yes") ? true : (formTwoVals.otherInfoApplePayPayment === "no") ? false : undefined,
                    "googlePay": (formTwoVals.otherInfoGooglePayPayment === "yes") ? true : (formTwoVals.otherInfoGooglePayPayment === "no") ? false : undefined,
                    "cash": (formTwoVals.otherInfoCashPayment === "yes") ? true : (formTwoVals.otherInfoCashPayment === "no") ? false : undefined,
                    "crypto": (formTwoVals.otherInfoCryptoCurrencyPayment === "yes") ? true : (formTwoVals.otherInfoCryptoCurrencyPayment === "no") ? false : undefined
                },
                "plan_type":{
                    "one_time":(formTwoVals.otherInfoOneTimePlan === "yes") ? true : (formTwoVals.otherInfoOneTimePlan === "no") ? false : undefined,
                    "monthly":(formTwoVals.otherInfoMonthlyPlan === "yes") ? true : (formTwoVals.otherInfoMonthlyPlan === "no") ? false : undefined,
                    "yearly":(formTwoVals.otherInfoYearlyPlan === "yes") ? true : (formTwoVals.otherInfoYearlyPlan === "no") ? false : undefined
                }
                
            }

            const postMerchData = async () => {
                const merchRes = await fetch(`${backend_server}/api/merchant/register/business-others`,{
                    method:'POST',
                    body : JSON.stringify(postBody),
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + sessionStorage.getItem('merchToken'),
                    },})
                    
                    const merchResData = await merchRes.json()
                    if(merchResData.status === 'ok'){
                        setbusinessOtherRO(true)
                    }
            }
            let validated = formTwoValidate('businessOthers')
            console.log('validated', validated);
            if(validated){
                postMerchData()
            }
        }

    }


    const [initial, setInitial] = useState(true)
    const [fullAdd, setFullAdd] = useState(' ')
    const [latLng, setLatLng] = useState({lat: formTwoVals.businessLocationPosititonX ? formTwoVals.businessLocationPosititonX : 40.77,lng: formTwoVals.businessLocationPosititonY ? formTwoVals.businessLocationPosititonY : -74})

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
        setStep(3)
        // formTwoValidate()
        // formTwoCertificatesValidate()
        // formTwoBusinessHoursValidate()
    }

    // useEffect(()=>{
    //     const areTrue = Object.values(formTwoErrors).every(
    //         value => value === false
    //     );
    //     if(areTrue && !formTwoCertificatesStatus && !formTwoBusinessHoursStatus){
    //         if(initial){
    //             console.log('initial loaded')
    //             setInitial(false)
    //         }
    //         else{
    //             console.log('form good');
    //             setStep(3)
    //         }

    //     }
    //     else{
    //         console.log('form bad');
    //     }
    //     // setStep(3)
    // },[formTwoErrors])

    const goPrevious = (e) => {
        e.preventDefault()
        setStep(1)
    }
    
    
    const onChange = (e) =>{
        // console.log(e.target.type)

        if(e.target.id === 'businessWorkNumber'){

            function phoneFormat(input) {//returns (###) ###-####
                input = input.replace(/\D/g,'');
                var size = input.length;
                if (size>0) {input="("+input}
                if (size>3) {input=input.slice(0,4)+") "+input.slice(4,11)}
                if (size>6) {input=input.slice(0,9)+"-" +input.slice(9)}
                return input;
            }

              setFormTwoVals(prevState => ({...prevState, [e.target.id]: phoneFormat(e.target.value)}))
        }
        else if(e.target.type === 'radio'){
            setFormTwoVals(prevState => ({...prevState, [e.target.name]:e.target.value}))
        }
        else if(e.target.type === 'checkbox'){
            if(businessHoursService247 === false){
                setBnHours([0])
                setFormTwoBusinessHours({bn0 : {bnDays:formTwoBusinessHours.bn0.bnDays,bnStart:formTwoBusinessHours.bn0.bnStart,bnEnd:formTwoBusinessHours.bn0.bnEnd}})
                setFormTwoBusinessHoursError({bn0 : {bnDays:formTwoBusinessHoursError.bn0.bnDays,bnStart:formTwoBusinessHoursError.bn0.bnStart,bnEnd:formTwoBusinessHoursError.bn0.bnEnd}})
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

    const removeCertificate= async ()=>{
        
        const newCertsList = certifications
        
        if(newCertsList.length > 1 ){
            // formTwoCertificates[ `cert${cert}`]?.certTitle
            let lastCertTemp = `cert${parseInt(certifications[certifications.length-1])}` ;
            console.log(`${backend_server}/api/merchant/delete/certs/${formTwoCertificates[lastCertTemp]?.certTitle}`)
            const merchCerty = await fetch(`${backend_server}/api/merchant/delete/certs/${formTwoCertificates[lastCertTemp]?.certTitle}`,
                    {
                        method: 'DELETE',
                        headers: {
                                    // "Content-Type": "application/json",
                                    "Authorization": "Bearer " + sessionStorage.getItem('merchToken'),
                                }
                    }
            );

            const merchCertyData = await merchCerty.json()
            console.log(merchCertyData);
            if(merchCertyData.status === 'ok'){
                // setBusinessDetailsRO(true)
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
        }
        
        
    }

    
    const addBnHours =()=>{
        
        setBnHours([...bnHours,parseInt(bnHours[bnHours.length-1])+1])
        setFormTwoBusinessHours(prevState=>({...prevState, [`bn${parseInt(bnHours[bnHours.length-1])+1}`]: {'bnDays':undefined,'bnStart':undefined,'bnEnd':undefined}}))
        setFormTwoBusinessHoursError(prevState=>({...prevState, [`bn${parseInt(bnHours[bnHours.length-1])+1}`]: {'bnDays':false,'bnStart':false,'bnEnd':false}}))
    }

    const removeBnHours = async (bnHour) =>{  
        const bnHoursList = bnHours;
        if(bnHoursList.length > 1 ){
           
            // console.log(formTwoBusinessHours);
            console.log('init bnHour', bnHour);
            let toBeDeleted = formTwoBusinessHours[`bn${bnHour}`]
            console.log('toBeDeleted', toBeDeleted);

            const businesstDetails = {
                "days": toBeDeleted.bnDays,
                "start_time": toBeDeleted.bnStart,
                "end_time": toBeDeleted.bnEnd
            }
            const bnHourReq = await fetch(`${backend_server}/api/merchant/delete/weekly-hours`,
                    {
                        method: 'DELETE',
                        body : JSON.stringify(businesstDetails),
                        headers: {
                                    "Content-Type": "application/json",
                                    "Authorization": "Bearer " + sessionStorage.getItem('merchToken'),
                                }
                    }
            );

            const bnHourData = await bnHourReq.json()
            console.log(bnHourData);
            if(bnHourData.status === 'ok'){
        
                if(bnHoursList.length > 1 ){
                    // bnHoursList.slice(bnHour, 1)
                    console.log('this is bnhour to be removed', bnHour);
                    bnHoursList = bnHoursList.filter(item => item !== bnHour)
                    // bnHoursList = bnHoursList.map((hr,i)=>{
                    //     return i
                    // })
                    console.log('this is bnHoursList', bnHoursList);
                }
                
                setBnHours(bnHoursList)

                const bn = `bn${parseInt(bnHour)}` ;
                const bnErr = `bn${parseInt(bnHour)}` ;

                console.log('bn',bn)
                console.log('bnErr',bnErr)
                
                const {[bn]:{}, ...newBnHours} = formTwoBusinessHours;
                const {[bnErr]:{}, ...newBnHoursErr} = formTwoBusinessHoursError;

                console.log('newBnHours', newBnHours)
                console.log('newBnHoursErr', newBnHoursErr)
                
                setFormTwoBusinessHours(newBnHours)
                setFormTwoBusinessHoursError(newBnHoursErr)
        
            }
        }
        
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

    const uploadCerty = async (cert) => {

        const formData = new FormData();
        console.log('cert_title', formTwoCertificates[ `cert${cert}`]?.certTitle)
        console.log('cert_img', formTwoCertificates[ `cert${cert}`]?.certFile)
        console.log('cert_url', formTwoCertificates[ `cert${cert}`]?.certUrl)

        formData.append('cert_title', formTwoCertificates[ `cert${cert}`]?.certTitle)
        formData.append('cert_img', formTwoCertificates[ `cert${cert}`]?.certFile)
        formData.append('cert_url', formTwoCertificates[ `cert${cert}`]?.certUrl)

        const merchCerty = await fetch(`${backend_server}/api/merchant/register/certs-accrdts`,
                {
                    method: 'POST',
                    body : formData,
                    headers: {
                                // "Content-Type": "application/json",
                                "Authorization": "Bearer " + sessionStorage.getItem('merchToken'),
                            }
                }
        );

        const merchCertyData = await merchCerty.json()
        console.log(merchCertyData);
        if(merchCertyData.status === 'ok'){
            setCertiRO(true)
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

    const handleAddress = () => {
        setFullAdd(`${businessLocationStreetName}, ${businessLocationCityName}, ${businessLocationStateName}, ${businessLocationCountryName}, ${businessLocationZipCodeName}`)
    }

    useEffect(()=>{
        
        // console.log(fullAdd);
        const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${fullAdd}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`
    
        const fetchLatLng = async () => {
          const res = await fetch(url)
          const resData = await res.json()
    
          if(resData.status === "OK"){
            const lat = resData.results[0].geometry.location.lat
            const lng = resData.results[0].geometry.location.lng
            setLatLng({lat:lat,lng:lng})
          }
          else{
            console.log("error")
            console.log(resData)
          }
        }
    
        fetchLatLng()
    
      },[fullAdd])
  return (
    <div className='w-full mt-16'>
        <form className='px-10'>
            

{/************************************************************Business Details************************************************************/}
            <div className='relative border border-[#D4D4D4] '>
                <div>
                    <h1 className=' absolute px-2 bg-white -top-4 left-7 font-semibold text-xl text-blue-500'>Business Details</h1>
                </div>
                <div className='absolute -top-6 right-7 mb-6 bg-white px-2 flex justify-end gap-x-4'>
                    <div className='py-3 px-5 w-fit bg-blue-500 text-white rounded-sm cursor-pointer' onClick={handleBusinessDetailstEdit}>{businessDetailsRO ? 'Edit' : 'Save'}</div>
                </div>
                <div className='py-7 px-7'>

                    <div className='mt-7 flex w-full gap-x-4 items-start'>
                        <UploadImageInput id='businessSmallLogo' title='UPLOAD LOGO' placeholder='Upload Image here' warning='Logo should be smaller size not more then 40kb*' width='w-1/2'  onChange={e=>onChange(e)} imgSize={40960} sizeRule='lt' error={formTwoErrors.businessSmallLogo} value={businessSmallLogo} readOnly={businessDetailsRO}/>
                        <UploadImageInput id='businessLargeLogo' title='UPLOAD LOGO FOR MERCHANT LANDING PAGE' placeholder='Upload Image here' warning='Logo should be bigger size more then 250kb*' width='w-1/2'  onChange={e=>onChange(e)} imgSize={256000} sizeRule='gt' error={formTwoErrors.businessLargeLogo} value={businessLargeLogo} readOnly={businessDetailsRO}/>
                    </div>

                    <div className='mt-7 flex w-full gap-x-4 items-start'>
                        
                        <TextInput id='businessName' title='Business Name' placeholder='Enter Business Name' width='w-1/3' required={true} onChange={onChange} error={formTwoErrors.businessName} value={businessName} readOnly={businessDetailsRO}/>
                        <TextInput id='businessWebAddress' title='Website Address' placeholder='Enter Website Addess' width='w-1/3' onChange={onChange} error={formTwoErrors.businessWebAddress} value={businessWebAddress} readOnly={businessDetailsRO}/>
                        
                        <div className={`flex flex-wrap w-1/3 relative`}>
                            <h3 className='font-semibold text-sm uppercase'>Toll Free Number</h3>
                            <div className='mt-2 flex w-full gap-x-4'>
                                <SelectInput id={'businessTollFreePreFix'} items={[{name:'800',value:'800'},{name:'888',value:'888'},{name:'877',value:'877'},{name:'866',value:'866'},{name:'855',value:'855'},{name:'844',value:'844'},{name:'833',value:'833'},]} placeholder='800' width='w-full' onChange={onChange} error={formTwoErrors.businessTollFreePreFix} value={businessTollFreePreFix} readOnly={businessDetailsRO}/>
                                <TextInput id={'businessTollFreeStart'} width='1/3' placeholder='123' onChange={onChange} error={formTwoErrors.businessTollFreeStart} value={businessTollFreeStart} limit={3} readOnly={businessDetailsRO}/>
                                <TextInput id={'businessTollFreeEnd'} width='1/3' placeholder='5678' onChange={onChange} error={formTwoErrors.businessTollFreeEnd} value={businessTollFreeEnd} limit={4} readOnly={businessDetailsRO}/>
                            </div>                            
                        </div>

                    </div>

                    <div className='mt-7 flex w-full gap-x-4 items-start'>
                        <TextInput id='businessWorkNumber' title='Work Number' placeholder='(123)-456-7890' width='w-1/3' required={true} onChange={onChange} error={formTwoErrors.businessWorkNumber} value={businessWorkNumber} limit={15} readOnly={businessDetailsRO}/>
                        <SelectInput id='businessYearsInBusiness' title='Years in business' items={[{name:'1',value:1},{name:'2',value:2},{name:'3',value:3},{name:'4',value:4},{name:'5',value:5},{name:'6',value:6},{name:'7',value:7},{name:'8',value:8},{name:'9',value:9},{name:'10',value:10},{name:'11',value:11},{name:'12',value:12},{name:'13',value:13},{name:'14',value:14},{name:'15',value:15},{name:'16',value:16},{name:'17',value:17},{name:'18',value:18},{name:'19',value:19},{name:'20+',value:20},]} placeholder='Select Years' width='w-1/3' onChange={onChange} error={formTwoErrors.businessYearsInBusiness} value={businessYearsInBusiness} readOnly={businessDetailsRO}/>
                        <SelectInput id='businessEmployeeStrength' title='Employee strength' items={empStrength} placeholder='Solo' width='w-1/3' onChange={onChange} error={formTwoErrors.businessEmployeeStrength} value={businessEmployeeStrength} readOnly={businessDetailsRO}/>
                    </div>

                    <div className='mt-7 flex w-full gap-x-4 items-start flex-wrap'>
                        {/* <h3 className='font-semibold text-sm uppercase'>Description <span className='text-red-500'>*</span></h3>
                        <textarea id="businessDescription" placeholder='Describe About Yourself' className='py-3 px-4 mt-2 w-full h-36 font-normal text-base bg-[#F9F9F9] border border-[#E9E9E9] rounded-md' onChange={onChange} error={formTwoErrors.businessDescription} value={businessDescription}></textarea> */}
                        <TextareaInput id='businessDescription' error={formTwoErrors.businessDescription} onChange={onChange} placeholder='Describe About Yourself' required={true} title='Description' value={businessDescription} width='w-full' height='h-36' wordLimit={500} readOnly={businessDetailsRO}/>
                    </div>

                    
                
                </div>

            </div>


{/************************************************************Certificates and Accrediations************************************************************/}
            <div className='relative border border-[#D4D4D4] mt-12'>
                <div>
                    <h1 className=' absolute px-2 bg-white -top-4 left-7 font-semibold text-xl text-blue-500'>Certificates and Accrediations</h1>
                </div>
                <div className='absolute -top-6 right-7 mb-6 bg-white px-2  flex justify-end gap-x-4'>
                    <div className='py-3 px-5 w-fit bg-blue-500 text-white rounded-sm cursor-pointer' onClick={handleCertyEdit}>{certiRO ? 'Edit' : 'Save'}</div>
                </div>
                <div className='py-7 px-7' >

                    {
                        certifications.map((cert,index)=>{
                            if(index === 0){
                                return (
                                    <>
                                        <div key={index} className='mt-7 flex w-full gap-x-4 items-start'>
                                            <TextInput id={`certificateTitle${cert}`} width='w-1/3' title={`${parseInt(cert)+1} certificate title`} placeholder='Enter title' value={formTwoCertificates[ `cert${cert}`]?.certTitle} onChange={(e)=>onChangeCerti(e,cert)} error={formTwoCertificatesError[ `cert${cert}`]?.certTitle} readOnly={certiRO}/>
                                            
                                            <TextInput id={`certificateURL${cert}`} width='w-1/3' title='certificate url link' placeholder='Enter Website Address' value={formTwoCertificates[ `cert${cert}`]?.certUrl} onChange={(e)=>onChangeCerti(e,cert)} error={formTwoCertificatesError[ `cert${cert}`]?.certUrl} readOnly={certiRO}/>
                                            
                                            <UploadImageInput id={`certificateImage${cert}`}  title='Upload Image' placeholder='Upload Image here' width='w-1/3' onChange={(e)=>onChangeCerti(e,cert)} error={formTwoCertificatesError[ `cert${cert}`]?.certFile} readOnly={certiRO}/> 

                                            {/* {!certiRO && <div className='mt-6 flex gap-x-4 items-center'>
                                                <div className='py-3 mt-1 px-5 w-fit bg-blue-500 text-white rounded-sm cursor-pointer' onClick={()=>uploadCerty(cert)}>Upload</div>
                                            </div>} */}
                                        </div>
                                        {!certiRO && <div className='w-full flex justify-center'>
                                            <p className={`font-normal text-[10px] italic text-[#6A6A6A] mt-2`}>Please press Upload if you make any changes to this certificate</p>
                                        </div> }
                                    </>
                                )
                            }
                        })
                    }
                    
                    {/* {!certiRO && <div className='mt-6 flex gap-x-4'>
                        <div className='py-3 px-5 w-fit bg-blue-500 text-white rounded-sm cursor-pointer' onClick={()=>addCertificate()}>Add New</div>
                        <div className='py-3 px-5 w-fit bg-red-500 text-white rounded-sm cursor-pointer' onClick={()=>removeCertificate()}>Remove</div>
                    </div>} */}
                    

                    {/* <div className='mt-7 flex w-full gap-x-4 items-start flex-wrap'>
                        <SelectInput id='listingCertificate' title='Choose Which Certificate Yiu wants to add in Listing Page' items={
                            certifications.map((cert)=>{
                                return {name:  `certificate ${cert+1}`, value : `cert${cert}`}
                            })
                        }
                         placeholder='Select Certificate' width='w-1/2' onChange={onChange} value={listingCertificate} readOnly={certiRO}/>
                    </div> */}

                   
                </div>
            </div>


{/************************************************************Business Location************************************************************/}
            <div className='relative border border-[#D4D4D4] mt-12'>
                <div>
                    <h1 className=' absolute px-2 bg-white -top-4 left-7 font-semibold text-xl text-blue-500'>Business Location</h1>
                </div>
                <div className='absolute -top-6 right-7 mb-6 bg-white px-2 flex justify-end gap-x-4'>
                        <div className='py-3 px-5 w-fit bg-blue-500 text-white rounded-sm cursor-pointer' onClick={handleBusinessLocationEdit}>{businessLocationRO ? 'Edit' : 'Save'}</div>
                    </div>
                <div className='py-7 px-7'>
                    
                    <div className='mt-7 flex w-full gap-x-4 items-start'>
                        <RadioInput id='businessLocationAddressType' items={[{value:'businessAdd',name:'Business Address'},{value:'residentialAdd',name:'Residential Address'}]} required={true} title='What type of address you have ?' width='w-3/5' onChange={onChange} error={formTwoErrors.businessLocationAddressType} value={businessLocationAddressType} readOnly={businessLocationRO}/>
                    </div>

                    <StepTwoMap latLng={latLng} address={fullAdd} readOnly={businessLocationRO}/>
                    
                    <div className='mt-7 flex w-full gap-x-4 items-start'>
                        <TextInput id='businessLocationStreetName' placeholder='Enter Street Address' title='street' width='w-3/4' onChange={onChange} error={formTwoErrors.businessLocationStreetName} value={businessLocationStreetName} onBlur={handleAddress} readOnly={businessLocationRO}/>
                        <TextInput id='businessLocationCityName' placeholder='Enter City Name' title='City' width='w-1/4' onChange={onChange} error={formTwoErrors.businessLocationCityName} value={businessLocationCityName} onBlur={handleAddress} readOnly={businessLocationRO}/>
                    </div>
                    
                    <div className='mt-7 flex w-full gap-x-4 items-start'>
                        <SelectInput id='businessLocationStateName' items={USStates} placeholder='Select State' title='state' width='w-1/3' onChange={onChange} error={formTwoErrors.businessLocationStateName} value={businessLocationStateName} onBlur={handleAddress} readOnly={businessLocationRO}/>
                        <SelectInput id='businessLocationCountryName' items={[{name:'USA',value:'USA'}]} placeholder='Select Country' title='Country' width='w-1/3' onChange={onChange} error={formTwoErrors.businessLocationCountryName} value={businessLocationCountryName} onBlur={handleAddress} readOnly={businessLocationRO}/>
                        <TextInput id='businessLocationZipCodeName' placeholder='Enter Zip Code' title='zip code' width='w-1/3' onChange={onChange} error={formTwoErrors.businessLocationZipCodeName} value={businessLocationZipCodeName} onBlur={handleAddress} readOnly={businessLocationRO}/> 
                    </div>
                    
                    
                    
                    {/* <div className='mt-7 flex w-full gap-x-4 items-start'>
                        <div className={`flex flex-wrap w-1/3 relative`}>
                            <h3 className='font-semibold text-sm uppercase'>Service Radius<span className='text-red-500'>*</span></h3>
                            <div className='w-full flex items-center justify-between mt-2'>
                            
                                <div className='flex w-full items-center gap-x-4'>
                                    <SelectInput id='businessLocationServiceRadStart' items={[{name:'01',value:1},{name:'02',value:2},{name:'03',value:3}]} placeholder='01' width={'w-1/2'} onChange={onChange} error={formTwoErrors.businessLocationServiceRadStart} value={businessLocationServiceRadStart} readOnly={businessLocationRO}/>
                                    <p>Miles</p>
                                </div>
                                <div className='flex w-full items-center gap-x-4'>

                                    <SelectInput id='businessLocationServiceRadEnd' items={[{name:'10',value:10},{name:'20',value:20},{name:'25+',value:50}]} placeholder='10' width={'w-1/2'} onChange={onChange} error={formTwoErrors.businessLocationServiceRadEnd} value={businessLocationServiceRadEnd} readOnly={businessLocationRO}/>
                                    <p>Miles</p>
                                </div>
                            </div>
                        </div>

                        <TextInput id='businessLocationZipCoverd' placeholder='Enter Covered Area' required={true} title='Zip Codes Covered' width='w-1/3' onChange={onChange} error={formTwoErrors.businessLocationZipCoverd} value={businessLocationZipCoverd} readOnly={businessLocationRO}/>
                    </div> */}
                    
                </div>

            </div>

{/************************************************************Business Hours************************************************************/}
            <div className='relative border border-[#D4D4D4] mt-12'>
                <div>
                    <h1 className=' absolute px-2 bg-white -top-4 left-7 font-semibold text-xl text-blue-500'>Business Hours</h1>
                </div>
                <div className='absolute -top-6 right-7 mb-6 bg-white px-2 flex justify-end gap-x-4'>
                    <div className='py-3 px-5 w-fit bg-blue-500 text-white rounded-sm cursor-pointer' onClick={handleBusinessHoursEdit}>{businessHoursRO ? 'Edit' : 'Save'}</div>
                </div>
                <div className='py-7 px-7'>
                    
                    <div className='mt-7 flex w-full gap-x-10 items-start'>
                        <div className={`flex flex-wrap w-2/3 relative`}>
                            <h3 className='font-semibold text-sm uppercase'>Business Hours<span className='text-red-500'>*</span></h3>
                            {
                                bnHours.map((bnHour,index)=>{
                                    return(
                                        <div key={index} className={`${bnHour !== 0 ? businessDetailsRO === false ? 'w-[88.5%] mt-0' : 'w-full mt-0' : 'w-full mt-2'}  w-full mb-5 flex items-start justify-between  gap-x-6`}>
                                            <SelectInput id={`businessHoursDays${bnHour}`} items={businessDays} placeholder='Days' required={true} width='w-1/2' onChange={(e)=>onChangeBnHours(e,bnHour)} error={formTwoBusinessHoursError[ `bn${bnHour}`]?.bnDays} value={formTwoBusinessHours[ `bn${bnHour}`]?.bnDays} readOnly={businessHoursRO}/>
                                            
                                            <SelectInput id={`businessHoursStart${bnHour}`} items={businessTime} placeholder='Opening' required={true} width='w-1/4' onChange={(e)=>onChangeBnHours(e,bnHour)} error={formTwoBusinessHoursError[ `bn${bnHour}`]?.bnStart} value={formTwoBusinessHours[ `bn${bnHour}`]?.bnStart} readOnly={businessHoursRO}/>
                                            
                                            <SelectInput id={`businessHoursEnd${bnHour}`} items={businessTime} placeholder='Closing' required={true} width='w-1/4' onChange={(e)=>onChangeBnHours(e,bnHour)} error={formTwoBusinessHoursError[ `bn${bnHour}`]?.bnEnd} value={formTwoBusinessHours[ `bn${bnHour}`]?.bnEnd} readOnly={businessHoursRO}/>
                                            
                                            {
                                                bnHour !== 0 && !businessHoursRO && <div className={`p-3 bg-red-500 rounded-sm cursor-pointer`} onClick={()=>removeBnHours(bnHour)}><XWhite/></div>
                                            }
                                        </div>
                                    )
                                })
                            }
                            {(!businessHoursService247 && !businessHoursRO) ? <div className='mt-0 flex w-full gap-x-10 items-start'>
                                <div className='text-white px-5 py-3 bg-blue-500 font-semibold text-base rounded-sm cursor-pointer' onClick={addBnHours}>Add New</div>
                            </div> : null}
                        </div>
                        <div className='flex flex-wrap w-1/3 relative'>
                            <SelectInput id='businessHoursTimezone' items={timeZones} placeholder='Pick Timezone' required={true} title='Time Zone'  onChange={onChange} error={formTwoErrors.businessHoursTimezone} value={businessHoursTimezone} readOnly={businessHoursRO}/>
                            <div className='mt-8'>
                                <input type="checkbox" id="businessHoursService247" name="businessHoursService247" checked={businessHoursService247} onClick={e=>onChange(e)} disabled={businessHoursRO}/><label htmlFor="businessHoursService247" className='font-semibold text-sm ml-3' > 24 X 7 Hours Service</label>
                            </div>
                        </div>

                    </div>

                    {/* <div className='mt-7 flex w-full gap-x-10 items-start'>

                        
                    </div> */}

                    

                </div>
            </div>


{/************************************************************Other information************************************************************/}
            <div className='relative border border-[#D4D4D4] mt-12'>
                <div>
                    <h1 className=' absolute px-2 bg-white -top-4 left-7 font-semibold text-xl text-blue-500'>Other information</h1>
                </div>
                <div className='absolute -top-6 right-7 mb-6 bg-white px-2 flex justify-end gap-x-4'>
                    <div className='py-3 px-5 w-fit bg-blue-500 text-white rounded-sm cursor-pointer' onClick={handleBusinessOtherEdit}>{businessOtherRO ? 'Edit' : 'Save'}</div>
                </div>
                <div className='py-7 px-7'>
                
                    <div className='mt-7 flex w-full gap-x-10 items-start'>
                        <RadioInput id='otherInfoRemoteSupport' title='Remote Support' items={[{value:'yes',name:'Yes'},{value:'no',name:'No'}]}  width='w-1/3' onChange={onChange} value={otherInfoRemoteSupport} required={true} error={formTwoErrors.otherInfoRemoteSupport} readOnly={businessOtherRO}/>
                        <RadioInput id='otherInfoInStoreService' title='In Store Service' items={[{value:'yes',name:'Yes'},{value:'no',name:'No'}]}  width='w-1/3' onChange={onChange} value={otherInfoInStoreService} required={true} error={formTwoErrors.otherInfoInStoreService} readOnly={businessOtherRO}/>
                        <RadioInput id='otherInfoHouseCall' title='House Call' items={[{value:'yes',name:'Yes'},{value:'no',name:'No'}]}  width='w-1/3' onChange={onChange} value={otherInfoHouseCall} required={true} error={formTwoErrors.otherInfoHouseCall} readOnly={businessOtherRO}/>
                    </div>
                    <div className='mt-7 flex w-full gap-x-10 items-start'>
                        <RadioInput id='otherInfoPickUpDrop' title='Pick Up & Drop' items={[{value:'yes',name:'Yes'},{value:'no',name:'No'}]}  width='w-1/3' onChange={onChange} value={otherInfoPickUpDrop} required={true} error={formTwoErrors.otherInfoPickUpDrop} readOnly={businessOtherRO}/>
                        <RadioInput id='otherInfoResidentialService' title='Residential Service' items={[{value:'yes',name:'Yes'},{value:'no',name:'No'}]}  width='w-1/3' onChange={onChange} value={otherInfoResidentialService} required={true} error={formTwoErrors.otherInfoResidentialService} readOnly={businessOtherRO}/>
                        <RadioInput id='otherInfoBusinessService' title='Business Service' items={[{value:'yes',name:'Yes'},{value:'no',name:'No'}]}  width='w-1/3' onChange={onChange} value={otherInfoBusinessService} required={true} error={formTwoErrors.otherInfoBusinessService} readOnly={businessOtherRO}/>
                    </div>

                    <h1 className='font-semibold text-2xl mt-14'>Payment Method</h1>
                    <div className='mt-7 flex w-full gap-x-10 items-start'>
                        <RadioInput id='otherInfoCreditDebitCardPayment' title='Credit/ Debit Card' items={[{value:'yes',name:'Yes'},{value:'no',name:'No'}]}  width='w-1/3' onChange={onChange} value={otherInfoCreditDebitCardPayment} required={true} error={formTwoErrors.otherInfoCreditDebitCardPayment} readOnly={businessOtherRO}/>
                        <RadioInput id='otherInfoPaypalPayment' title='Paypal' items={[{value:'yes',name:'Yes'},{value:'no',name:'No'}]}  width='w-1/3' onChange={onChange} value={otherInfoPaypalPayment} required={true} error={formTwoErrors.otherInfoPaypalPayment} readOnly={businessOtherRO}/>
                        <RadioInput id='otherInfoApplePayPayment' title='Apple Pay' items={[{value:'yes',name:'Yes'},{value:'no',name:'No'}]}  width='w-1/3' onChange={onChange} value={otherInfoApplePayPayment} required={true} error={formTwoErrors.otherInfoApplePayPayment} readOnly={businessOtherRO}/>
                    </div>
                    <div className='mt-7 flex w-full gap-x-10 items-start'>
                        <RadioInput id='otherInfoGooglePayPayment' title='Google Pay' items={[{value:'yes',name:'Yes'},{value:'no',name:'No'}]}  width='w-1/3' onChange={onChange} value={otherInfoGooglePayPayment} required={true} error={formTwoErrors.otherInfoGooglePayPayment} readOnly={businessOtherRO}/>
                        <RadioInput id='otherInfoCashPayment' title='Cash' items={[{value:'yes',name:'Yes'},{value:'no',name:'No'}]}  width='w-1/3' onChange={onChange} value={otherInfoCashPayment} required={true} error={formTwoErrors.otherInfoCashPayment} readOnly={businessOtherRO}/>
                        <RadioInput id='otherInfoCryptoCurrencyPayment' title='Crypto Currency' items={[{value:'yes',name:'Yes'},{value:'no',name:'No'}]}  width='w-1/3' onChange={onChange} value={otherInfoCryptoCurrencyPayment} required={true} error={formTwoErrors.otherInfoCryptoCurrencyPayment} readOnly={businessOtherRO}/>
                    </div>

                    <h1 className='font-semibold text-2xl mt-14'>Plan Type</h1>
                    <div className='mt-7 flex w-full gap-x-10 items-start'>
                        <RadioInput id='otherInfoOneTimePlan' title='One Time' items={[{value:'yes',name:'Yes'},{value:'no',name:'No'}]}  width='w-1/3' onChange={onChange} value={otherInfoOneTimePlan} required={true} error={formTwoErrors.otherInfoOneTimePlan} readOnly={businessOtherRO}/>
                        <RadioInput id='otherInfoMonthlyPlan' title='Monthly' items={[{value:'yes',name:'Yes'},{value:'no',name:'No'}]}  width='w-1/3' onChange={onChange} value={otherInfoMonthlyPlan} required={true} error={formTwoErrors.otherInfoMonthlyPlan} readOnly={businessOtherRO}/>
                        <RadioInput id='otherInfoYearlyPlan' title='Yearly' items={[{value:'yes',name:'Yes'},{value:'no',name:'No'}]}  width='w-1/3' onChange={onChange} value={otherInfoYearlyPlan} required={true} error={formTwoErrors.otherInfoYearlyPlan} readOnly={businessOtherRO}/>
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