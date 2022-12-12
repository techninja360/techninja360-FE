import { useRouter } from 'next/router'
import React, { useContext, useEffect, useState } from 'react'
import { services } from '../data/merchantServices';
import axios from "axios";

const MerchantProfileContext = React.createContext()
export const MerchantProfileProvider = ({ children }) => {

    const router = useRouter()

    const [merchantSignUpOpen, setMerchantSignUpOpen] = useState(false)
    const [merchantLogin, setMerchantLogin] = useState(false)
    const [step, setStep] = useState(2)
    const [contextAuthorized, setContextAuthorized] = useState(false)
    const [merchantSignInDetails, setMerchantSignInDetails] = useState()

    const [merchData, setMerchData] = useState()
    const [contextMerchToken, setContextMerchToken] = useState()

    function phoneFormat(input) {//returns (###) ###-####
        input = input.replace(/\D/g,'');
        var size = input.length;
        if (size>0) {input="("+input}
        if (size>3) {input=input.slice(0,4)+") "+input.slice(4,11)}
        if (size>6) {input=input.slice(0,9)+"-" +input.slice(9)}
        return input;
    }

    useEffect(()=>{
        if(!router.isReady) return;
        const merchToken = sessionStorage.getItem('merchToken')
        if(merchToken){
                setContextAuthorized(true)

                const getMerchData = async () => {
                    const merchBusinessDetailsRes = await fetch('http://localhost:8000/api/merchant/fetch/business-details',{method:'GET',headers: {
                            "Content-Type": "application/json",
                            "Authorization": "Bearer " + merchToken,
                        },})

                    const merchBusinessDetailsResData = await merchBusinessDetailsRes.json()
                    
                    const merchContactRes = await fetch('http://localhost:8000/api/merchant/fetch/contacts',{method:'GET',headers: {
                            "Content-Type": "application/json",
                            "Authorization": "Bearer " + merchToken,
                        },})

                    const merchContactResData = await merchContactRes.json()
                    
                    // const merchLocationRes = await fetch('http://localhost:8000/api/merchant/fetch/contacts',{method:'GET',headers: {
                    //         "Content-Type": "application/json",
                    //         "Authorization": "Bearer " + merchToken,
                    //     },})

                    // const merchLocationResData = await merchLocationRes.json()
                    
                    setMerchData(prev=>({...prev , ...merchBusinessDetailsResData?.results, ...merchContactResData?.results}))
                    sessionStorage.setItem('merchData',JSON.stringify(merchBusinessDetailsResData))
                }

            getMerchData()


            }
        else{
            setContextAuthorized(false)
        }

    },[contextMerchToken])


    useEffect(()=>{


        setFormOneVals(prevState => ({...prevState, primSalut:merchData?.primary_contact?.title}))
        setFormOneVals(prevState => ({...prevState, primFName:merchData?.primary_contact?.name?.first_name}))
        setFormOneVals(prevState => ({...prevState, primMName:merchData?.primary_contact?.name?.middle_name}))
        setFormOneVals(prevState => ({...prevState, primLName:merchData?.primary_contact?.name?.last_name}))
        setFormOneVals(prevState => ({...prevState, primEmail:merchData?.primary_contact?.primary_email}))
        setFormOneVals(prevState => ({...prevState, primPhone:merchData?.primary_contact?.phone_no?.primary_ph}))
        setFormOneVals(prevState => ({...prevState, primAltPh:merchData?.primary_contact?.phone_no?.alternate_ph}))
        
        setFormOneVals(prevState => ({...prevState, altSalut:merchData?.alternate_contact?.title}))
        setFormOneVals(prevState => ({...prevState, altFName:merchData?.alternate_contact?.name?.first_name}))
        setFormOneVals(prevState => ({...prevState, altMName:merchData?.alternate_contact?.name?.middle_name}))
        setFormOneVals(prevState => ({...prevState, altLName:merchData?.alternate_contact?.name?.last_name}))
        setFormOneVals(prevState => ({...prevState, altEmail:merchData?.alternate_contact?.primary_email}))
        setFormOneVals(prevState => ({...prevState, altPhone:merchData?.alternate_contact?.phone_no?.primary_ph}))
        setFormOneVals(prevState => ({...prevState, altAltPh:merchData?.alternate_contact?.phone_no?.alternate_ph}))

        
        setFormTwoVals(prevState => ({...prevState, businessName:merchData?.business_details?.business_name}))
        setFormTwoVals(prevState => ({...prevState, businessWebAddress:merchData?.business_details?.website}))
        setFormTwoVals(prevState => ({...prevState, businessTollFreePreFix:String(merchData?.business_details?.contact.toll_no).slice(0,3)}))
        setFormTwoVals(prevState => ({...prevState, businessTollFreeStart:String(merchData?.business_details?.contact.toll_no).slice(3,6)}))
        setFormTwoVals(prevState => ({...prevState, businessTollFreeEnd:String(merchData?.business_details?.contact.toll_no).slice(6,10)}))
        setFormTwoVals(prevState => ({...prevState, businessYearsInBusiness:merchData?.business_details?.exp_years}))
        setFormTwoVals(prevState => ({...prevState, businessEmployeeStrength:merchData?.business_details?.emp_strength}))
        setFormTwoVals(prevState => ({...prevState, businessDescription:merchData?.business_details?.description}))
        
        
        setFormTwoVals(prevState => ({...prevState, businessLocationAddressType:merchData?.business_location?.address_type}))
        setFormTwoVals(prevState => ({...prevState, businessLocationStreetName:merchData?.business_location?.address?.street}))
        setFormTwoVals(prevState => ({...prevState, businessLocationCityName:merchData?.business_location?.address?.city}))
        setFormTwoVals(prevState => ({...prevState, businessLocationStateName:merchData?.business_location?.address?.state}))
        setFormTwoVals(prevState => ({...prevState, businessLocationCountryName:merchData?.business_location?.address?.country}))
        setFormTwoVals(prevState => ({...prevState, businessLocationZipCodeName:merchData?.business_location?.address?.zip_code}))
        setFormTwoVals(prevState => ({...prevState, businessLocationPosititonX:merchData?.business_location?.coordinates?.lat}))
        setFormTwoVals(prevState => ({...prevState, businessLocationPosititonY:merchData?.business_location?.coordinates?.long}))
        setFormTwoVals(prevState => ({...prevState, businessLocationServiceRadStart:merchData?.business_location?.service_radius?.start}))
        setFormTwoVals(prevState => ({...prevState, businessLocationServiceRadEnd:merchData?.business_location?.service_radius?.end}))
        
        
        setFormTwoVals(prevState => ({...prevState, businessHoursTimezone:merchData?.business_hours?.time_zone}))
        setFormTwoVals(prevState => ({...prevState, businessHoursService247:merchData?.business_hours?.is_service_247}))

        let tempArr = [
  {
    "days": "wed",
    "start_time": "8:00",
    "end_time": "17:30",
    "_id": "6396c3a17b553916be32761e"
  },
  {
    "days": "thurs",
    "start_time": "11:00",
    "end_time": "20:30",
    "_id": "6396c3a17b553916be32761f"
  },
  {
    "days": "sat",
    "start_time": "10:00",
    "end_time": "22:00",
    "_id": "6396c3a17b553916be327620"
  },
  {
    "days": "allDays",
    "start_time": "00",
    "end_time": "02",
    "_id": "6396c5cb7b553916be327648"
  },
  {
    "days": "SatSun",
    "start_time": "05",
    "end_time": "05",
    "_id": "6396c5cb7b553916be327649"
  },
  {
    "days": "Mon",
    "start_time": "05",
    "end_time": "09",
    "_id": "6396c5cb7b553916be32764a"
  },
  {
    "days": "Thu",
    "start_time": "10",
    "end_time": "22",
    "_id": "6396c5cb7b553916be32764b"
  },
  {
    "days": "allDays",
    "start_time": "00",
    "end_time": "02",
    "_id": "6396c60b7b553916be32765f"
  },
  {
    "days": "SatSun",
    "start_time": "05",
    "end_time": "05",
    "_id": "6396c60b7b553916be327660"
  },
  {
    "days": "Mon",
    "start_time": "05",
    "end_time": "09",
    "_id": "6396c60b7b553916be327661"
  },
  {
    "days": "Thu",
    "start_time": "10",
    "end_time": "22",
    "_id": "6396c60b7b553916be327662"
  },
  {
    "days": "allDays",
    "start_time": "00",
    "end_time": "02",
    "_id": "6396c63b7b553916be32767e"
  },
  {
    "days": "SatSun",
    "start_time": "05",
    "end_time": "05",
    "_id": "6396c63b7b553916be32767f"
  },
  {
    "days": "Mon",
    "start_time": "05",
    "end_time": "09",
    "_id": "6396c63b7b553916be327680"
  },
  {
    "days": "Thu",
    "start_time": "10",
    "end_time": "22",
    "_id": "6396c63b7b553916be327681"
  }
]        
        function convertArray(inputArr) {
            // Create an empty result object

            if(inputArr){
                let result = {};
    
                // Loop through each object in the input array
                inputArr.forEach((obj, index) => {
                    // Add a new property to the result object, with the key being "bn" followed by the index
                    // and the value being an object containing the days, start time, and end time
                    result[`bn${index}`] = {
                    bnDays: obj.days,
                    bnStart: obj.start_time,
                    bnEnd: obj.end_time
                    };
                });
    
                // Return the result object
                return result;
            }
        }
        
        const output = convertArray(merchData?.business_hours?.weekly_hours);
        console.log('output',output);
        
        setFormTwoBusinessHours(output ? output : {bn0 : {bnDays:undefined,bnStart:undefined,bnEnd:undefined}})
        
 
        setFormTwoVals(prevState => ({...prevState, otherInfoRemoteSupport:(merchData?.business_others?.services?.remote_support === true) ? "yes" : (merchData?.business_others?.services?.remote_support === false) ? "no" : undefined }))
        setFormTwoVals(prevState => ({...prevState, otherInfoInStoreService:(merchData?.business_others?.services?.inStore_service === true) ? "yes" : (merchData?.business_others?.services?.inStore_service === false) ? "no" : undefined }))
        setFormTwoVals(prevState => ({...prevState, otherInfoHouseCall:(merchData?.business_others?.services?.house_call === true) ? "yes" : (merchData?.business_others?.services?.house_call === false) ? "no" : undefined }))
        setFormTwoVals(prevState => ({...prevState, otherInfoPickUpDrop:(merchData?.business_others?.services?.pick_drop === true) ? "yes" : (merchData?.business_others?.services?.pick_drop === false) ? "no" : undefined }))
        setFormTwoVals(prevState => ({...prevState, otherInfoResidentialService:(merchData?.business_others?.services?.resident_service === true) ? "yes" : (merchData?.business_others?.services?.resident_service === false) ? "no" : undefined }))
        setFormTwoVals(prevState => ({...prevState, otherInfoBusinessService:(merchData?.business_others?.services?.business_service === true) ? "yes" : (merchData?.business_others?.services?.business_service === false) ? "no" : undefined }))
        
        setFormTwoVals(prevState => ({...prevState, otherInfoCreditDebitCardPayment:(merchData?.business_others?.payment_method?.credit_debit === true) ? "yes" : (merchData?.business_others?.payment_method?.credit_debit === false) ? "no" : undefined }))
        setFormTwoVals(prevState => ({...prevState, otherInfoPaypalPayment:(merchData?.business_others?.payment_method?.paypal === true) ? "yes" : (merchData?.business_others?.payment_method?.paypal === false) ? "no" : undefined }))
        setFormTwoVals(prevState => ({...prevState, otherInfoApplePayPayment:(merchData?.business_others?.payment_method?.applePay === true) ? "yes" : (merchData?.business_others?.payment_method?.applePay === false) ? "no" : undefined }))
        setFormTwoVals(prevState => ({...prevState, otherInfoGooglePayPayment:(merchData?.business_others?.payment_method?.googlePay === true) ? "yes" : (merchData?.business_others?.payment_method?.googlePay === false) ? "no" : undefined }))
        setFormTwoVals(prevState => ({...prevState, otherInfoCashPayment:(merchData?.business_others?.payment_method?.cash === true) ? "yes" : (merchData?.business_others?.payment_method?.cash === false) ? "no" : undefined }))
        setFormTwoVals(prevState => ({...prevState, otherInfoCryptoCurrencyPayment:(merchData?.business_others?.payment_method?.crypto === true) ? "yes" : (merchData?.business_others?.payment_method?.crypto === false) ? "no" : undefined }))
        
        setFormTwoVals(prevState => ({...prevState, otherInfoOneTimePlan:(merchData?.business_others?.plan_type?.one_time === true) ? "yes" : (merchData?.business_others?.plan_type?.one_time === false) ? "no" : undefined }))
        setFormTwoVals(prevState => ({...prevState, otherInfoMonthlyPlan:(merchData?.business_others?.plan_type?.monthly === true) ? "yes" : (merchData?.business_others?.plan_type?.monthly === false) ? "no" : undefined }))
        setFormTwoVals(prevState => ({...prevState, otherInfoYearlyPlan:(merchData?.business_others?.plan_type?.yearly === true) ? "yes" : (merchData?.business_others?.plan_type?.yearly === false) ? "no" : undefined }))

    },[merchData])


//--------------------------------------------Form 1 processing-------------------------------------------------------------------------------------
    const [formOneVals, setFormOneVals] = useState({
      primSalut:'',
      primFName:'',
      primMName:'',
      primLName:'',
      primEmail:'',
      primPhone:'',
      primAltPh:'',

      altSalut:'',
      altFName:'',
      altMName:'',
      altLName:'',
      altEmail:'',
      altPhone:'',
      altAltPh:'',
    })
    const [formOneErrors, setFormOneErrors] = useState({
      primSalut : false,
      primFName : false, 
      primMName : false, 
      primLName : false, 
      primEmail : false, 
      primPhone : false, 
      primAltPh : false,

      altFName : false, 
      altMName : false, 
      altLName : false, 
      altEmail : false, 
      altPhone : false, 
      altAltPh : false,
    })

    const formOneValidate = () => {
        if(formOneVals.primSalut === '' || formOneVals.primSalut === null || formOneVals.primSalut === undefined){
            setFormOneErrors(prevState => ({...prevState, primSalut:'Please select a value'}))
        }else{
            setFormOneErrors(prevState => ({...prevState, primSalut:false}))
        }
        if(formOneVals.primFName === '' || formOneVals.primFName === null || formOneVals.primFName === undefined){
            setFormOneErrors(prevState => ({...prevState, primFName:'Field is empty'}))
        }else{
            setFormOneErrors(prevState => ({...prevState, primFName:false}))
        }
        
        if(formOneVals.primLName === '' || formOneVals.primLName === null || formOneVals.primLName === undefined){
            setFormOneErrors(prevState => ({...prevState, primLName:'Field is empty'}))
        }else{
            setFormOneErrors(prevState => ({...prevState, primLName:false}))
        }
        if(formOneVals.primEmail === '' || formOneVals.primEmail === null || formOneVals.primEmail === undefined || !formOneVals.primEmail.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
            setFormOneErrors(prevState => ({...prevState, primEmail:'email is empty or invalid'}))
        }else{
            setFormOneErrors(prevState => ({...prevState, primEmail:false}))
        }

        if(formTwoVals.businessWorkNumber === '' || formTwoVals.businessWorkNumber === null || formTwoVals.businessWorkNumber === undefined || formTwoVals.businessWorkNumber.length !== 14 ){
            setFormTwoErrors(prevState => ({...prevState, businessWorkNumber:'Phone number invalid'}))
        }else{
            setFormTwoErrors(prevState => ({...prevState, businessWorkNumber:false}))
        }

        if(formOneVals.primPhone === '' || formOneVals.primPhone === null || formOneVals.primPhone === undefined || formOneVals.primPhone.length !== 14 ){
            setFormOneErrors(prevState => ({...prevState, primPhone:'Phone number invalid'}))
        }else{
            setFormOneErrors(prevState => ({...prevState, primPhone:false}))
        }
        if(formOneVals.primAltPh !== ''){
            if(formOneVals.primAltPh.length !== 14 ){
                setFormOneErrors(prevState => ({...prevState, primAltPh:'Phone number invalid'}))
            }
            else{
                setFormOneErrors(prevState => ({...prevState, primAltPh:false}))
            }
        }
        else if(formOneVals.primAltPh === '' || formOneVals.primAltPh === null || formOneVals.primAltPh === undefined){
            setFormOneErrors(prevState => ({...prevState, primAltPh:false}))
        }
        

        if(formOneVals.altAltPh !== ''){
            if(formOneVals.altAltPh.length !== 14 ){
                setFormOneErrors(prevState => ({...prevState, altAltPh:'Phone number invalid'}))
            }
            else{
                setFormOneErrors(prevState => ({...prevState, altAltPh:false}))
            }
        }
        else{
            setFormOneErrors(prevState => ({...prevState, altAltPh:false}))
        }
        if(formOneVals.altPhone !== ''){
            if(formOneVals.altPhone.length !== 14 ){
                setFormOneErrors(prevState => ({...prevState, altPhone:'Phone number invalid'}))
            }
            else{
                setFormOneErrors(prevState => ({...prevState, altPhone:false}))
            }
        }
        else{
            setFormOneErrors(prevState => ({...prevState, altPhone:false}))
        }
        
        if(formOneVals.altEmail !== ''){
            if(!formOneVals.altEmail.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
                setFormOneErrors(prevState => ({...prevState, altEmail:'email invalid'}))
            }else{
                setFormOneErrors(prevState => ({...prevState, altEmail:false}))
            }
        }
        else{
            setFormOneErrors(prevState => ({...prevState, altEmail:false}))
        }

    }
    

//--------------------------------------------Form 2 processing-------------------------------------------------------------------------------------
    

    


    const [formTwoVals, setFormTwoVals] = useState({
        businessSmallLogo : '',
        businessLargeLogo : '',
        businessName : '',
        businessWebAddress : '',
        businessTollFreePreFix : '',
        businessTollFreeStart: '',
        businessTollFreeEnd: '',
        businessWorkNumber: '',
        businessYearsInBusiness: '',
        businessEmployeeStrength: '',
        businessDescription: '',
        
        // certificationsAll:{cert0 : {certTitle:undefined,certUrl:undefined,certFile:undefined}},
        listingCertificate: '',
        
        businessLocationAddressType: '',
        businessLocationStreetName: '',
        businessLocationCityName: '',
        businessLocationStateName: '',
        businessLocationCountryName: '',
        businessLocationZipCodeName: '',
        businessLocationPosititonX: '',
        businessLocationPosititonY: '',
        businessLocationServiceRadStart: '',
        businessLocationServiceRadEnd: '',
        businessLocationZipCoverd: '',

        businessHours: '',
        businessHoursStart: '',
        businessHoursEnd: '',
        businessHoursTimezone: '',
        businessHoursBusinessHours2: '',
        businessHoursStart2: '',
        businessHoursEnd2: '',
        businessHoursService247: false,

        otherInfoRemoteSupport: '',
        otherInfoInStoreService: '',
        otherInfoHouseCall: '',
        otherInfoPickUpDrop: '',
        otherInfoResidentialService: '',
        otherInfoBusinessService: '',
        otherInfoCreditDebitCardPayment: '',
        otherInfoPaypalPayment: '',
        otherInfoApplePayPayment: '',
        otherInfoGooglePayPayment: '',
        otherInfoCashPayment: '',
        otherInfoCryptoCurrencyPayment: '',
        otherInfoOneTimePlan: '',
        otherInfoMonthlyPlan: '',
        otherInfoYearlyPlan: '',
    })

    const [formTwoCertificates, setFormTwoCertificates] = useState({cert0 : {certTitle:undefined,certUrl:undefined,certFile:undefined}})
    const [formTwoCertificatesStatus, setFormTwoCertificatesStatus] = useState(false)
    
    const [formTwoBusinessHours, setFormTwoBusinessHours] = useState({bn0 : {bnDays:undefined,bnStart:undefined,bnEnd:undefined}})
    const [formTwoBusinessHoursStatus, setFormTwoBusinessHoursStatus] = useState(false)

    const [formTwoErrors, setFormTwoErrors] = useState({
        businessSmallLogo : false,
        businessLargeLogo : false,
        businessName : false,
        businessWebAddress : false,
        businessTollFreePreFix : false,
        businessTollFreeStart: false,
        businessTollFreeEnd: false,
        businessWorkNumber: false,
        businessYearsInBusiness: false,
        businessEmployeeStrength: false,
        businessDescription: false,
        
        // certificationsAll : {cert0 : {certTitle:false,certUrl:false,certFile:false}},
        listingCertificate: false,
        
        businessLocationAddressType: false,
        businessLocationStreetName: false,
        businessLocationCityName: false,
        businessLocationStateName: false,
        businessLocationCountryName: false,
        businessLocationZipCodeName: false,
        businessLocationServiceRadStart: false,
        businessLocationServiceRadEnd: false,
        businessLocationZipCoverd: false,

        businessHours: false,
        businessHoursStart: false,
        businessHoursEnd: false,
        businessHoursTimezone: false,
        businessHoursBusinessHours2: false,
        businessHoursStart2: false,
        businessHoursEnd2: false,
        businessHoursService247: false,

        otherInfoRemoteSupport: false,
        otherInfoInStoreService: false,
        otherInfoHouseCall: false,
        otherInfoPickUpDrop: false,
        otherInfoResidentialService: false,
        otherInfoBusinessService: false,
        otherInfoCreditDebitCardPayment: false,
        otherInfoPaypalPayment: false,
        otherInfoApplePayPayment: false,
        otherInfoGooglePayPayment: false,
        otherInfoCashPayment: false,
        otherInfoCryptoCurrencyPayment: false,
        otherInfoOneTimePlan: false,
        otherInfoMonthlyPlan: false,
        otherInfoYearlyPlan: false,
    })

    const [formTwoCertificatesError, setFormTwoCertificatesError] = useState({cert0 : {certTitle:false,certUrl:false,certFile:false}})
    const [formTwoBusinessHoursError, setFormTwoBusinessHoursError] = useState({bn0 : {bnDays:false,bnStart:false,bnEnd:false}})

    const formTwoValidate = () => {
        {/************************************************************Business Details************************************************************/}
        if(formTwoVals.businessSmallLogo === '' || formTwoVals.businessSmallLogo === null || formTwoVals.businessSmallLogo === undefined){
            setFormTwoErrors(prevState => ({...prevState, businessSmallLogo:'Field is empty'}))
        }else{
            setFormTwoErrors(prevState => ({...prevState, businessSmallLogo:false}))
        }
        
        if(formTwoVals.businessLargeLogo === '' || formTwoVals.businessLargeLogo === null || formTwoVals.businessLargeLogo === undefined){
            setFormTwoErrors(prevState => ({...prevState, businessLargeLogo:'Field is empty'}))
        }else{
            setFormTwoErrors(prevState => ({...prevState, businessLargeLogo:false}))
        }
        
        if(formTwoVals.businessName === '' || formTwoVals.businessName === null || formTwoVals.businessName === undefined){
            setFormTwoErrors(prevState => ({...prevState, businessName:'Field is empty'}))
        }else{
            setFormTwoErrors(prevState => ({...prevState, businessName:false}))
        }
        
        if(formTwoVals.businessWorkNumber === '' || formTwoVals.businessWorkNumber === null || formTwoVals.businessWorkNumber === undefined || formTwoVals.businessWorkNumber.length !== 14 ){
            setFormTwoErrors(prevState => ({...prevState, businessWorkNumber:'Phone number invalid'}))
        }else{
            setFormTwoErrors(prevState => ({...prevState, businessWorkNumber:false}))
        }
        
        if(formTwoVals.businessDescription === '' || formTwoVals.businessDescription === null || formTwoVals.businessDescription === undefined){
            setFormTwoErrors(prevState => ({...prevState, businessDescription:'Field is empty'}))
        }else{
            setFormTwoErrors(prevState => ({...prevState, businessDescription:false}))
        }
        

        {/************************************************************Business Location************************************************************/}
        
        if(formTwoVals.businessLocationAddressType === '' || formTwoVals.businessLocationAddressType === null || formTwoVals.businessLocationAddressType === undefined){
            setFormTwoErrors(prevState => ({...prevState, businessLocationAddressType:'Field is empty'}))
        }else{
            setFormTwoErrors(prevState => ({...prevState, businessLocationAddressType:false}))
        }

        // if(formTwoVals.businessLocationAddressType === '' || formTwoVals.businessLocationAddressType === null || formTwoVals.businessLocationAddressType === undefined){
        //     setFormTwoErrors(prevState => ({...prevState, businessLocationAddressType:'Field is empty'}))
        // }else{
        //     setFormTwoErrors(prevState => ({...prevState, businessLocationAddressType:false}))
        // }
        
        // if(formTwoVals.businessLocationStreetName === '' || formTwoVals.businessLocationStreetName === null || formTwoVals.businessLocationStreetName === undefined){
        //     setFormTwoErrors(prevState => ({...prevState, businessLocationStreetName:'Field is empty'}))
        // }else{
        //     setFormTwoErrors(prevState => ({...prevState, businessLocationStreetName:false}))
        // }
        
        // if(formTwoVals.businessLocationCityName === '' || formTwoVals.businessLocationCityName === null || formTwoVals.businessLocationCityName === undefined){
        //     setFormTwoErrors(prevState => ({...prevState, businessLocationCityName:'Field is empty'}))
        // }else{
        //     setFormTwoErrors(prevState => ({...prevState, businessLocationCityName:false}))
        // }
        
        // if(formTwoVals.businessLocationStateName === '' || formTwoVals.businessLocationStateName === null || formTwoVals.businessLocationStateName === undefined){
        //     setFormTwoErrors(prevState => ({...prevState, businessLocationStateName:'Field is empty'}))
        // }else{
        //     setFormTwoErrors(prevState => ({...prevState, businessLocationStateName:false}))
        // }
        
        // if(formTwoVals.businessLocationCountryName === '' || formTwoVals.businessLocationCountryName === null || formTwoVals.businessLocationCountryName === undefined){
        //     setFormTwoErrors(prevState => ({...prevState, businessLocationCountryName:'Field is empty'}))
        // }else{
        //     setFormTwoErrors(prevState => ({...prevState, businessLocationCountryName:false}))
        // }

        // if(formTwoVals.businessLocationZipCodeName === '' || formTwoVals.businessLocationZipCodeName === null || formTwoVals.businessLocationZipCodeName === undefined){
        //     setFormTwoErrors(prevState => ({...prevState, businessLocationZipCodeName:'Field is empty'}))
        // }else{
        //     setFormTwoErrors(prevState => ({...prevState, businessLocationZipCodeName:false}))
        // }

        if(formTwoVals.businessLocationServiceRadStart === '' || formTwoVals.businessLocationServiceRadStart === null || formTwoVals.businessLocationServiceRadStart === undefined){
            setFormTwoErrors(prevState => ({...prevState, businessLocationServiceRadStart:'Field is empty'}))
        }else{
            setFormTwoErrors(prevState => ({...prevState, businessLocationServiceRadStart:false}))
        }

        if(formTwoVals.businessLocationServiceRadEnd === '' || formTwoVals.businessLocationServiceRadEnd === null || formTwoVals.businessLocationServiceRadEnd === undefined){
            setFormTwoErrors(prevState => ({...prevState, businessLocationServiceRadEnd:'Field is empty'}))
        }else{
            setFormTwoErrors(prevState => ({...prevState, businessLocationServiceRadEnd:false}))
        }

        if(formTwoVals.businessLocationZipCoverd === '' || formTwoVals.businessLocationZipCoverd === null || formTwoVals.businessLocationZipCoverd === undefined){
            setFormTwoErrors(prevState => ({...prevState, businessLocationZipCoverd:'Field is empty'}))
        }else{
            setFormTwoErrors(prevState => ({...prevState, businessLocationZipCoverd:false}))
        }

        {/************************************************************Business Hours************************************************************/}

        // if(formTwoVals.businessHours === '' || formTwoVals.businessHours === null || formTwoVals.businessHours === undefined){
        //     setFormTwoErrors(prevState => ({...prevState, businessHours:'Field is empty'}))
        // }else{
        //     setFormTwoErrors(prevState => ({...prevState, businessHours:false}))
        // }
        // if(formTwoVals.businessHoursStart === '' || formTwoVals.businessHoursStart === null || formTwoVals.businessHoursStart === undefined){
        //     setFormTwoErrors(prevState => ({...prevState, businessHoursStart:'Field is empty'}))
        // }else{
        //     setFormTwoErrors(prevState => ({...prevState, businessHoursStart:false}))
        // }
        // if(formTwoVals.businessHoursEnd === '' || formTwoVals.businessHoursEnd === null || formTwoVals.businessHoursEnd === undefined){
        //     setFormTwoErrors(prevState => ({...prevState, businessHoursEnd:'Field is empty'}))
        // }else{
        //     setFormTwoErrors(prevState => ({...prevState, businessHoursEnd:false}))
        // }
        if(formTwoVals.businessHoursTimezone === '' || formTwoVals.businessHoursTimezone === null || formTwoVals.businessHoursTimezone === undefined){
            setFormTwoErrors(prevState => ({...prevState, businessHoursTimezone:'Field is empty'}))
        }else{
            setFormTwoErrors(prevState => ({...prevState, businessHoursTimezone:false}))
        }

        {/************************************************************Other information************************************************************/}
        
        if(formTwoVals.otherInfoRemoteSupport === '' || formTwoVals.otherInfoRemoteSupport === null || formTwoVals.otherInfoRemoteSupport === undefined){
            setFormTwoErrors(prevState => ({...prevState, otherInfoRemoteSupport:'Field is empty'}))
        }else{
            setFormTwoErrors(prevState => ({...prevState, otherInfoRemoteSupport:false}))
        }
        
        if(formTwoVals.otherInfoInStoreService === '' || formTwoVals.otherInfoInStoreService === null || formTwoVals.otherInfoInStoreService === undefined){
            setFormTwoErrors(prevState => ({...prevState, otherInfoInStoreService:'Field is empty'}))
        }else{
            setFormTwoErrors(prevState => ({...prevState, otherInfoInStoreService:false}))
        }

        if(formTwoVals.otherInfoHouseCall === '' || formTwoVals.otherInfoHouseCall === null || formTwoVals.otherInfoHouseCall === undefined){
            setFormTwoErrors(prevState => ({...prevState, otherInfoHouseCall:'Field is empty'}))
        }else{
            setFormTwoErrors(prevState => ({...prevState, otherInfoHouseCall:false}))
        }

        if(formTwoVals.otherInfoPickUpDrop === '' || formTwoVals.otherInfoPickUpDrop === null || formTwoVals.otherInfoPickUpDrop === undefined){
            setFormTwoErrors(prevState => ({...prevState, otherInfoPickUpDrop:'Field is empty'}))
        }else{
            setFormTwoErrors(prevState => ({...prevState, otherInfoPickUpDrop:false}))
        }

        if(formTwoVals.otherInfoResidentialService === '' || formTwoVals.otherInfoResidentialService === null || formTwoVals.otherInfoResidentialService === undefined){
            setFormTwoErrors(prevState => ({...prevState, otherInfoResidentialService:'Field is empty'}))
        }else{
            setFormTwoErrors(prevState => ({...prevState, otherInfoResidentialService:false}))
        }

        if(formTwoVals.otherInfoBusinessService === '' || formTwoVals.otherInfoBusinessService === null || formTwoVals.otherInfoBusinessService === undefined){
            setFormTwoErrors(prevState => ({...prevState, otherInfoBusinessService:'Field is empty'}))
        }else{
            setFormTwoErrors(prevState => ({...prevState, otherInfoBusinessService:false}))
        }

        if(formTwoVals.otherInfoCreditDebitCardPayment === '' || formTwoVals.otherInfoCreditDebitCardPayment === null || formTwoVals.otherInfoCreditDebitCardPayment === undefined){
            setFormTwoErrors(prevState => ({...prevState, otherInfoCreditDebitCardPayment:'Field is empty'}))
        }else{
            setFormTwoErrors(prevState => ({...prevState, otherInfoCreditDebitCardPayment:false}))
        }

        if(formTwoVals.otherInfoPaypalPayment === '' || formTwoVals.otherInfoPaypalPayment === null || formTwoVals.otherInfoPaypalPayment === undefined){
            setFormTwoErrors(prevState => ({...prevState, otherInfoPaypalPayment:'Field is empty'}))
        }else{
            setFormTwoErrors(prevState => ({...prevState, otherInfoPaypalPayment:false}))
        }

        if(formTwoVals.otherInfoApplePayPayment === '' || formTwoVals.otherInfoApplePayPayment === null || formTwoVals.otherInfoApplePayPayment === undefined){
            setFormTwoErrors(prevState => ({...prevState, otherInfoApplePayPayment:'Field is empty'}))
        }else{
            setFormTwoErrors(prevState => ({...prevState, otherInfoApplePayPayment:false}))
        }

        if(formTwoVals.otherInfoGooglePayPayment === '' || formTwoVals.otherInfoGooglePayPayment === null || formTwoVals.otherInfoGooglePayPayment === undefined){
            setFormTwoErrors(prevState => ({...prevState, otherInfoGooglePayPayment:'Field is empty'}))
        }else{
            setFormTwoErrors(prevState => ({...prevState, otherInfoGooglePayPayment:false}))
        }

        if(formTwoVals.otherInfoCashPayment === '' || formTwoVals.otherInfoCashPayment === null || formTwoVals.otherInfoCashPayment === undefined){
            setFormTwoErrors(prevState => ({...prevState, otherInfoCashPayment:'Field is empty'}))
        }else{
            setFormTwoErrors(prevState => ({...prevState, otherInfoCashPayment:false}))
        }

        if(formTwoVals.otherInfoCryptoCurrencyPayment === '' || formTwoVals.otherInfoCryptoCurrencyPayment === null || formTwoVals.otherInfoCryptoCurrencyPayment === undefined){
            setFormTwoErrors(prevState => ({...prevState, otherInfoCryptoCurrencyPayment:'Field is empty'}))
        }else{
            setFormTwoErrors(prevState => ({...prevState, otherInfoCryptoCurrencyPayment:false}))
        }
        
        if(formTwoVals.otherInfoOneTimePlan === '' || formTwoVals.otherInfoOneTimePlan === null || formTwoVals.otherInfoOneTimePlan === undefined){
            setFormTwoErrors(prevState => ({...prevState, otherInfoOneTimePlan:'Field is empty'}))
        }else{
            setFormTwoErrors(prevState => ({...prevState, otherInfoOneTimePlan:false}))
        }

        if(formTwoVals.otherInfoMonthlyPlan === '' || formTwoVals.otherInfoMonthlyPlan === null || formTwoVals.otherInfoMonthlyPlan === undefined){
            setFormTwoErrors(prevState => ({...prevState, otherInfoMonthlyPlan:'Field is empty'}))
        }else{
            setFormTwoErrors(prevState => ({...prevState, otherInfoMonthlyPlan:false}))
        }

        if(formTwoVals.otherInfoYearlyPlan === '' || formTwoVals.otherInfoYearlyPlan === null || formTwoVals.otherInfoYearlyPlan === undefined){
            setFormTwoErrors(prevState => ({...prevState, otherInfoYearlyPlan:'Field is empty'}))
        }else{
            setFormTwoErrors(prevState => ({...prevState, otherInfoYearlyPlan:false}))
        }

        
    }


    const formTwoCertificatesValidate = () => {

        const checkTitleTrue = (key) => {
            setTimeout(
                            function(){
                                setFormTwoCertificatesError(prevState=>({...prevState, [key]:{...prevState[key], 'certTitle':'Field is empty'}}))
                                setFormTwoCertificatesStatus(true)
                            }
                        ,0)
        }
        const checkTitleFalse = (key) => {
            setTimeout(
                function(){
                    setFormTwoCertificatesError(prevState=>({...prevState, [key]:{...prevState[key], 'certTitle':false}}))
                    setFormTwoCertificatesStatus(false)
                }
                        ,0)
        }
        const checkUrlTrue = (key) => {
            setTimeout(
                function(){
                    setFormTwoCertificatesError(prevState=>({...prevState, [key]:{...prevState[key], 'certUrl':'Field is empty'}}))
                    setFormTwoCertificatesStatus(true)
                }
                        ,0)
        }
        const checkUrlFalse = (key) => {
            setTimeout(
                function(){
                    setFormTwoCertificatesError(prevState=>({...prevState, [key]:{...prevState[key], 'certUrl':false}}))
                    setFormTwoCertificatesStatus(false)
                }
                        ,0)
        }
        const checkFileTrue = (key) => {
            setTimeout(
                function(){
                    setFormTwoCertificatesError(prevState=>({...prevState, [key]:{...prevState[key], 'certFile':'Field is empty'}}))
                    setFormTwoCertificatesStatus(true)
                }
                        ,0)
        }
        const checFileFalse = (key) => {
            setTimeout(
                function(){
                    setFormTwoCertificatesError(prevState=>({...prevState, [key]:{...prevState[key], 'certFile':false}}))
                    setFormTwoCertificatesStatus(false)
                }
                        ,0)
        }
        for (let [key, value] of Object.entries(formTwoCertificates)) {
            for (let [subKey, subValue] of Object.entries(value)) {
                if(subKey === 'certTitle'){
                    if(subValue === '' || subValue === null || subValue === undefined){
                        // setFormTwoErrors(prevState=>({...prevState, certificationsAll:{...formTwoErrors.certificationsAll, [`cert${cert}`]: {...formTwoErrors.certificationsAll[`cert${cert}`],'certTitle':'Field is empty'}}}))
                        checkTitleTrue(key)
                    }
                    else{
                        checkTitleFalse(key)
                    }
                }
                else if(subKey === 'certUrl'){
                    if(subValue === '' || subValue === null || subValue === undefined){
                        checkUrlTrue(key)
                        
                    }
                    else{
                        checkUrlFalse(key)
                    }
                }
                else if(subKey === 'certFile'){
                    if(subValue === '' || subValue === null || subValue === undefined){
                        checkFileTrue(key)
                    }
                    else{
                        checFileFalse(key)
                    }
                }
            }   
        }
    
    }


    const formTwoBusinessHoursValidate = () => {

        const checkDaysTrue = (key) => {
            setTimeout(
                            function(){
                                setFormTwoBusinessHoursError(prevState=>({...prevState, [key]:{...prevState[key], 'bnDays':'Field is empty'}}))
                                setFormTwoBusinessHoursStatus(true)
                            }
                        ,0)
        }
        const checkDaysFalse = (key) => {
            setTimeout(
                function(){
                    setFormTwoBusinessHoursError(prevState=>({...prevState, [key]:{...prevState[key], 'bnDays':false}}))
                    setFormTwoBusinessHoursStatus(false)
                }
                        ,0)
        }
        const checkStartTrue = (key) => {
            setTimeout(
                function(){
                    setFormTwoBusinessHoursError(prevState=>({...prevState, [key]:{...prevState[key], 'bnStart':'Field is empty'}}))
                    setFormTwoBusinessHoursStatus(true)
                }
                        ,0)
        }
        const checkStartFalse = (key) => {
            setTimeout(
                function(){
                    setFormTwoBusinessHoursError(prevState=>({...prevState, [key]:{...prevState[key], 'bnStart':false}}))
                    setFormTwoBusinessHoursStatus(false)
                }
                        ,0)
        }
        const checkEndTrue = (key) => {
            setTimeout(
                function(){
                    setFormTwoBusinessHoursError(prevState=>({...prevState, [key]:{...prevState[key], 'bnEnd':'Field is empty'}}))
                    setFormTwoBusinessHoursStatus(true)
                }
                        ,0)
        }
        const checkEndFalse = (key) => {
            setTimeout(
                function(){
                    setFormTwoBusinessHoursError(prevState=>({...prevState, [key]:{...prevState[key], 'bnEnd':false}}))
                    setFormTwoBusinessHoursStatus(false)
                }
                        ,0)
        }
        for (let [key, value] of Object.entries(formTwoBusinessHours)) {
            for (let [subKey, subValue] of Object.entries(value)) {
                if(subKey === 'bnDays'){
                    if(subValue === '' || subValue === null || subValue === undefined){
                        // setFormTwoErrors(prevState=>({...prevState, certificationsAll:{...formTwoErrors.certificationsAll, [`cert${cert}`]: {...formTwoErrors.certificationsAll[`cert${cert}`],'certTitle':'Field is empty'}}}))
                        checkDaysTrue(key)
                    }
                    else{
                        checkDaysFalse(key)
                    }
                }
                else if(subKey === 'bnStart'){
                    if(subValue === '' || subValue === null || subValue === undefined){
                        checkStartTrue(key)
                        
                    }
                    else{
                        checkStartFalse(key)
                    }
                }
                else if(subKey === 'bnEnd'){
                    if(subValue === '' || subValue === null || subValue === undefined){
                        checkEndTrue(key)
                    }
                    else{
                        checkEndFalse(key)
                    }
                }
            }   
        }
    
    }

//--------------------------------------------Form 3 processing-------------------------------------------------------------------------------------

    let allServices = []

    services.map((category)=>{
        category.subCategories.map((subCategory)=>{
            subCategory.subCategoryServices.map((subCategoryService)=>{
                allServices.push((category.mainCategory + '##' + subCategory.subCategoryName + '##' + subCategoryService).replaceAll(' ','_'))
            })
        })
    })

    allServices = allServices.map((service)=>{
        if(service.includes('Audio/_Video_&_TV_Mounting##TV_Mounting')){
            return(
                {[service]:{
                    available:false,
                    fees : ''
                    }
                }
            )
        }
        return (
            {[service]: {
            available:false,
            fees : {
                flat : '',
                hourly : '',
                custom : '',
                call : '',
            },
            desc : '',
            error:''
        }})
    })
    allServices.push({'Audio/Video&TVMountingTVMountingDesc':''})
    let allServicesInit = Object.assign({},...allServices)
    const [formThreeVals, setFormThreeVals] = useState(allServicesInit)

    const formThreeValidate = () => {
        allServices.map((service)=>{
            if(formThreeVals[Object.keys(service)[0]].available === true){
                if(Object.keys(service)[0].includes('Audio/_Video_&_TV_Mounting##TV_Mounting')){
                    if(formThreeVals[Object.keys(service)[0]].fees === ''){
                        setFormThreeVals(prevState => ({...prevState, [Object.keys(service)[0]]:{...prevState[Object.keys(service)[0]], error:'Please fill the value'}}))
                    }
                }

                else if(formThreeVals[Object.keys(service)[0]].fees.flat !== '' || formThreeVals[Object.keys(service)[0]].fees.hourly !== '' || formThreeVals[Object.keys(service)[0]].fees.custom !== '' || formThreeVals[Object.keys(service)[0]].fees.call != ''){
                    setFormThreeVals(prevState => ({...prevState, [Object.keys(service)[0]]:{...prevState[Object.keys(service)[0]], error:''}}))
                }
                else{
                    setFormThreeVals(prevState => ({...prevState, [Object.keys(service)[0]]:{...prevState[Object.keys(service)[0]], error:'Please fill the value'}}))
                }
            }
        })
    }

    return (
        <MerchantProfileContext.Provider value={{merchData, phoneFormat,contextMerchToken, setContextMerchToken, merchantSignInDetails, setMerchantSignInDetails, merchantLogin, setMerchantLogin, merchantSignUpOpen, setMerchantSignUpOpen, step, setStep, formOneVals, setFormOneVals, formOneErrors, setFormOneErrors, formOneValidate, formTwoVals, setFormTwoVals, formTwoErrors, setFormTwoErrors, formTwoValidate,formTwoCertificates, setFormTwoCertificates,formTwoCertificatesError, setFormTwoCertificatesError,formTwoCertificatesValidate, formTwoCertificatesStatus, formTwoBusinessHours, setFormTwoBusinessHours, formTwoBusinessHoursStatus, setFormTwoBusinessHoursStatus, formTwoBusinessHoursError, setFormTwoBusinessHoursError, formTwoBusinessHoursValidate, formThreeVals, setFormThreeVals, formThreeValidate}}>{children}</MerchantProfileContext.Provider>
  )
}
// make sure use
export const useMerchantProfileContext = () => {
  return useContext(MerchantProfileContext)
}