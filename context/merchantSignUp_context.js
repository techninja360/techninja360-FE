import { useRouter } from 'next/router'
import React, { useContext, useEffect, useState } from 'react'
import { services } from '../data/merchantServices';
import axios from "axios";

const MerchantSignUpContext = React.createContext()
export const MerchantSignUpProvider = ({ children }) => {

    const [merchantSignUpOpen, setMerchantSignUpOpen] = useState(false)
    const [step, setStep] = useState(1)
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
        if(formOneVals.primPhone === '' || formOneVals.primPhone === null || formOneVals.primPhone === undefined || isNaN(formOneVals.primPhone) || formOneVals.primPhone.length !== 10 ){
            setFormOneErrors(prevState => ({...prevState, primPhone:'Phone number invalid'}))
        }else{
            setFormOneErrors(prevState => ({...prevState, primPhone:false}))
        }
        if(formOneVals.primAltPh !== ''){
            if(isNaN(formOneVals.primAltPh) || formOneVals.primAltPh.length !== 10 ){
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
            if(isNaN(formOneVals.altAltPh) || formOneVals.altAltPh.length !== 10 ){
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
            if(isNaN(formOneVals.altPhone) || formOneVals.altPhone.length !== 10 ){
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
                console.log(subKey,subValue);
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
                console.log(subKey,subValue);
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
                allServices.push((category.mainCategory + subCategory.subCategoryName + subCategoryService).replaceAll(' ',''))
            })
        })
    })

    allServices = allServices.map((service)=>{
        if(service.includes('Audio/Video&TVMountingTVMounting')){
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
                if(Object.keys(service)[0].includes('Audio/Video&TVMountingTVMounting')){
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
        <MerchantSignUpContext.Provider value={{merchantSignUpOpen, setMerchantSignUpOpen, step, setStep, formOneVals, setFormOneVals, formOneErrors, setFormOneErrors, formOneValidate, formTwoVals, setFormTwoVals, formTwoErrors, setFormTwoErrors, formTwoValidate,formTwoCertificates, setFormTwoCertificates,formTwoCertificatesError, setFormTwoCertificatesError,formTwoCertificatesValidate, formTwoCertificatesStatus, formTwoBusinessHours, setFormTwoBusinessHours, formTwoBusinessHoursStatus, setFormTwoBusinessHoursStatus, formTwoBusinessHoursError, setFormTwoBusinessHoursError, formTwoBusinessHoursValidate, formThreeVals, setFormThreeVals, formThreeValidate}}>{children}</MerchantSignUpContext.Provider>
  )
}
// make sure use
export const useMerchantSignUpContext = () => {
  return useContext(MerchantSignUpContext)
}