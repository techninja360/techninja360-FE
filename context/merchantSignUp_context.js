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
    
    return (
        <MerchantSignUpContext.Provider value={{step, setStep, formOneVals, setFormOneVals, formOneErrors, setFormOneErrors, formOneValidate}}>{children}</MerchantSignUpContext.Provider>
  )
}
// make sure use
export const useMerchantSignUpContext = () => {
  return useContext(MerchantSignUpContext)
}