import { useRouter } from 'next/router'
import React, { useContext, useEffect, useState } from 'react'
import axios from "axios";

const MerchantSignUpContext = React.createContext()
export const MerchantSignUpProvider = ({ children }) => {

    const [step, setStep] = useState(1)

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
        if(formOneVals.primMName === '' || formOneVals.primMName === null || formOneVals.primMName === undefined){
            setFormOneErrors(prevState => ({...prevState, primMName:'Field is empty'}))
        }else{
            setFormOneErrors(prevState => ({...prevState, primMName:false}))
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

        otherInfoRemoteSupport: 'no',
        otherInfoInStoreService: 'no',
        otherInfoHouseCall: 'no',
        otherInfoPickUpDrop: 'no',
        otherInfoResidentialService: 'no',
        otherInfoBusinessService: 'no',
        otherInfoCreditDebitCardPayment: 'no',
        otherInfoPaypalPayment: 'no',
        otherInfoApplePayPayment: 'no',
        otherInfoGooglePayPayment: 'no',
        otherInfoCashPayment: 'no',
        otherInfoCryptoCurrencyPayment: 'no',
        otherInfoOneTimePlan: 'no',
        otherInfoMonthlyPlan: 'no',
        otherInfoYearlyPlan: 'no',
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
        
        if(formTwoVals.businessWebAddress === '' || formTwoVals.businessWebAddress === null || formTwoVals.businessWebAddress === undefined){
            setFormTwoErrors(prevState => ({...prevState, businessWebAddress:'Field is empty'}))
        }else{
            setFormTwoErrors(prevState => ({...prevState, businessWebAddress:false}))
        }
        
        if(formTwoVals.businessWorkNumber === '' || formTwoVals.businessWorkNumber === null || formTwoVals.businessWorkNumber === undefined || isNaN(formTwoVals.businessWorkNumber) || formTwoVals.businessWorkNumber.length !== 10 ){
            setFormTwoErrors(prevState => ({...prevState, businessWorkNumber:'Phone number invalid'}))
        }else{
            setFormTwoErrors(prevState => ({...prevState, businessWorkNumber:false}))
        }
        
        if(formTwoVals.businessDescription === '' || formTwoVals.businessDescription === null || formTwoVals.businessDescription === undefined){
            setFormTwoErrors(prevState => ({...prevState, businessDescription:'Field is empty'}))
        }else{
            setFormTwoErrors(prevState => ({...prevState, businessDescription:false}))
        }
        
        {/************************************************************Certificates and Accrediations************************************************************/}

        // if(formTwoVals.certificationsAll === '' || formTwoVals.certificationsAll === null || formTwoVals.certificationsAll === undefined || Object.keys(formTwoVals.certificationsAll).length === 0){
        //     setFormTwoErrors(prevState => ({...prevState, certificationsAll:'Field is empty'}))
        //     setFormTwoErrors(prevState=>({...prevState, certificationsAll:{...formTwoErrors.certificationsAll, [`cert0`]: {'certUrl':'Field is empty','certTitle':'Field is empty','certFile':'Field is empty'}}}))
        // }else if(Object.keys(formTwoVals.certificationsAll).length > 0){
        // if(Object.keys(formTwoVals.certificationsAll).length > 0){
        //     for (let [key, value] of Object.entries(formTwoVals.certificationsAll)) {
        //         for (let [subKey, subValue] of Object.entries(value)) {
        //             console.log(subKey,subValue);
        //             if(subKey === 'certTitle'){
        //                 if(subValue === '' || subValue === null || subValue === undefined){
        //                     // setFormTwoErrors(prevState=>({...prevState, certificationsAll:{...formTwoErrors.certificationsAll, [`cert${cert}`]: {...formTwoErrors.certificationsAll[`cert${cert}`],'certTitle':'Field is empty'}}}))
        //                     setFormTwoErrors(prevState=>({...prevState, certificationsAll:{...prevState.certificationsAll, [key]: {...prevState.certificationsAll[key],'certTitle':'Field is empty'}}}))
        //                 }
        //                 else{
        //                     setFormTwoErrors(prevState=>({...prevState, certificationsAll:{...prevState.certificationsAll, [key]: {...prevState.certificationsAll[key],'certTitle':false}}}))
        //                 }
        //             }
        //             else if(subKey === 'certUrl'){
        //                 if(subValue === '' || subValue === null || subValue === undefined){
        //                     setFormTwoErrors(prevState=>({...prevState, certificationsAll:{...prevState.certificationsAll, [key]: {...prevState.certificationsAll[key],'certUrl':'Field is empty'}}}))
        //                 }
        //                 else{
        //                     setFormTwoErrors(prevState=>({...prevState, certificationsAll:{...prevState.certificationsAll, [key]: {...prevState.certificationsAll[key],'certUrl':false}}}))
        //                 }
        //             }
        //             else if(subKey === 'certFile'){
        //                 if(subValue === '' || subValue === null || subValue === undefined){
        //                     setFormTwoErrors(prevState=>({...prevState, certificationsAll:{...prevState.certificationsAll, [key]: {...prevState.certificationsAll[key],'certFile':'Field is empty'}}}))
        //                 }
        //                 else{
        //                     setFormTwoErrors(prevState=>({...prevState, certificationsAll:{...prevState.certificationsAll, [key]: {...prevState.certificationsAll[key],'certFile':false}}}))
        //                 }
        //             }
        //         }   
        //     }
        // }
        // const checkTitleTrue = (key) => {
        //     setTimeout(
        //         setFormTwoErrors(prevState=>({...prevState, certificationsAll:{...prevState.certificationsAll, [key]: {...prevState.certificationsAll[key],'certTitle':'Field is empty'}}}))
        //                 ,0)
        // }
        // const checkTitleFalse = (key) => {
        //     setTimeout(
        //         setFormTwoErrors(prevState=>({...prevState, certificationsAll:{...prevState.certificationsAll, [key]: {...prevState.certificationsAll[key],'certTitle':false}}}))
        //                 ,0)
        // }
        // const checkUrlTrue = (key) => {
        //     setTimeout(
        //         setFormTwoErrors(prevState=>({...prevState, certificationsAll:{...prevState.certificationsAll, [key]: {...prevState.certificationsAll[key],'certUrl':'Field is empty'}}}))
        //                 ,0)
        // }
        // const checkUrlFalse = (key) => {
        //     setTimeout(
        //         setFormTwoErrors(prevState=>({...prevState, certificationsAll:{...prevState.certificationsAll, [key]: {...prevState.certificationsAll[key],'certUrl':false}}}))
        //                 ,0)
        // }
        // const checkFileTrue = (key) => {
        //     setTimeout(
        //         setFormTwoErrors(prevState=>({...prevState, certificationsAll:{...prevState.certificationsAll, [key]: {...prevState.certificationsAll[key],'certFile':'Field is empty'}}}))
        //                 ,0)
        // }
        // const checFileFalse = (key) => {
        //     setTimeout(
        //         setFormTwoErrors(prevState=>({...prevState, certificationsAll:{...prevState.certificationsAll, [key]: {...prevState.certificationsAll[key],'certFile':false}}}))
        //                 ,0)
        // }
        // for (let [key, value] of Object.entries(formTwoVals.certificationsAll)) {
        //     for (let [subKey, subValue] of Object.entries(value)) {
        //         console.log(subKey,subValue);
        //         if(subKey === 'certTitle'){
        //             if(subValue === '' || subValue === null || subValue === undefined){
        //                 // setFormTwoErrors(prevState=>({...prevState, certificationsAll:{...formTwoErrors.certificationsAll, [`cert${cert}`]: {...formTwoErrors.certificationsAll[`cert${cert}`],'certTitle':'Field is empty'}}}))
        //                 checkTitleTrue(key)
        //             }
        //             else{
        //                 checkTitleFalse(key)
        //             }
        //         }
        //         else if(subKey === 'certUrl'){
        //             if(subValue === '' || subValue === null || subValue === undefined){
        //                 checkUrlTrue(key)
                        
        //             }
        //             else{
        //                 checkUrlFalse(key)
        //             }
        //         }
        //         else if(subKey === 'certFile'){
        //             if(subValue === '' || subValue === null || subValue === undefined){
        //                 checkFileTrue(key)
        //             }
        //             else{
        //                 checFileFalse(key)
        //             }
        //         }
        //     }   
        // }

        {/************************************************************Business Location************************************************************/}
        
        if(formTwoVals.businessLocationAddressType === '' || formTwoVals.businessLocationAddressType === null || formTwoVals.businessLocationAddressType === undefined){
            setFormTwoErrors(prevState => ({...prevState, businessLocationAddressType:'Field is empty'}))
        }else{
            setFormTwoErrors(prevState => ({...prevState, businessLocationAddressType:false}))
        }

        if(formTwoVals.businessLocationAddressType === '' || formTwoVals.businessLocationAddressType === null || formTwoVals.businessLocationAddressType === undefined){
            setFormTwoErrors(prevState => ({...prevState, businessLocationAddressType:'Field is empty'}))
        }else{
            setFormTwoErrors(prevState => ({...prevState, businessLocationAddressType:false}))
        }
        
        if(formTwoVals.businessLocationStreetName === '' || formTwoVals.businessLocationStreetName === null || formTwoVals.businessLocationStreetName === undefined){
            setFormTwoErrors(prevState => ({...prevState, businessLocationStreetName:'Field is empty'}))
        }else{
            setFormTwoErrors(prevState => ({...prevState, businessLocationStreetName:false}))
        }
        
        if(formTwoVals.businessLocationCityName === '' || formTwoVals.businessLocationCityName === null || formTwoVals.businessLocationCityName === undefined){
            setFormTwoErrors(prevState => ({...prevState, businessLocationCityName:'Field is empty'}))
        }else{
            setFormTwoErrors(prevState => ({...prevState, businessLocationCityName:false}))
        }
        
        if(formTwoVals.businessLocationStateName === '' || formTwoVals.businessLocationStateName === null || formTwoVals.businessLocationStateName === undefined){
            setFormTwoErrors(prevState => ({...prevState, businessLocationStateName:'Field is empty'}))
        }else{
            setFormTwoErrors(prevState => ({...prevState, businessLocationStateName:false}))
        }
        
        if(formTwoVals.businessLocationCountryName === '' || formTwoVals.businessLocationCountryName === null || formTwoVals.businessLocationCountryName === undefined){
            setFormTwoErrors(prevState => ({...prevState, businessLocationCountryName:'Field is empty'}))
        }else{
            setFormTwoErrors(prevState => ({...prevState, businessLocationCountryName:false}))
        }

        if(formTwoVals.businessLocationZipCodeName === '' || formTwoVals.businessLocationZipCodeName === null || formTwoVals.businessLocationZipCodeName === undefined){
            setFormTwoErrors(prevState => ({...prevState, businessLocationZipCodeName:'Field is empty'}))
        }else{
            setFormTwoErrors(prevState => ({...prevState, businessLocationZipCodeName:false}))
        }

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

        if(formTwoVals.businessHours === '' || formTwoVals.businessHours === null || formTwoVals.businessHours === undefined){
            setFormTwoErrors(prevState => ({...prevState, businessHours:'Field is empty'}))
        }else{
            setFormTwoErrors(prevState => ({...prevState, businessHours:false}))
        }
        if(formTwoVals.businessHoursStart === '' || formTwoVals.businessHoursStart === null || formTwoVals.businessHoursStart === undefined){
            setFormTwoErrors(prevState => ({...prevState, businessHoursStart:'Field is empty'}))
        }else{
            setFormTwoErrors(prevState => ({...prevState, businessHoursStart:false}))
        }
        if(formTwoVals.businessHoursEnd === '' || formTwoVals.businessHoursEnd === null || formTwoVals.businessHoursEnd === undefined){
            setFormTwoErrors(prevState => ({...prevState, businessHoursEnd:'Field is empty'}))
        }else{
            setFormTwoErrors(prevState => ({...prevState, businessHoursEnd:false}))
        }
        if(formTwoVals.businessHoursTimezone === '' || formTwoVals.businessHoursTimezone === null || formTwoVals.businessHoursTimezone === undefined){
            setFormTwoErrors(prevState => ({...prevState, businessHoursTimezone:'Field is empty'}))
        }else{
            setFormTwoErrors(prevState => ({...prevState, businessHoursTimezone:false}))
        }

        {/************************************************************Other information************************************************************/}
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
    return (
        <MerchantSignUpContext.Provider value={{step, setStep, formOneVals, setFormOneVals, formOneErrors, setFormOneErrors, formOneValidate, formTwoVals, setFormTwoVals, formTwoErrors, setFormTwoErrors, formTwoValidate,formTwoCertificates, setFormTwoCertificates,formTwoCertificatesError, setFormTwoCertificatesError,formTwoCertificatesValidate, formTwoCertificatesStatus, formTwoBusinessHours, setFormTwoBusinessHours, formTwoBusinessHoursStatus, setFormTwoBusinessHoursStatus, formTwoBusinessHoursError, setFormTwoBusinessHoursError, formTwoBusinessHoursValidate}}>{children}</MerchantSignUpContext.Provider>
  )
}
// make sure use
export const useMerchantSignUpContext = () => {
  return useContext(MerchantSignUpContext)
}