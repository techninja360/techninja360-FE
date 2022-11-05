import { useRouter } from 'next/router'
import React, { useContext, useEffect, useState } from 'react'
import axios from "axios";

const MerchantSignUpContext = React.createContext()
export const MerchantSignUpProvider = ({ children }) => {

    const [step, setStep] = useState(1)

    const [primSalut, setPrimSalut] = useState()
    const [primFName, setPrimFName] = useState()
    const [primMName, setPrimMName] = useState()
    const [primLName, setPrimLName] = useState()
    const [primEmail, setPrimEmail] = useState()
    const [primPhone, setPrimPhone] = useState()
    const [primAltPh, setPrimAltPh] = useState()
    
    const [altSalut, setAltSalut] = useState()
    const [altFName, setAltFName] = useState()
    const [altMName, setAltMName] = useState()
    const [altLName, setAltLName] = useState()
    const [altEmail, setAltEmail] = useState()
    const [altPhone, setAltPhone] = useState()
    const [altAltPh, setAltAltPh] = useState()

    return (
        <MerchantSignUpContext.Provider value={{step, setStep, primSalut, setPrimSalut,primFName, setPrimFName,primMName, setPrimMName,primLName, setPrimLName,primEmail, setPrimEmail,primPhone, setPrimPhone,primAltPh, setPrimAltPh,altSalut, setAltSalut,altFName, setAltFName,altMName, setAltMName,altLName, setAltLName,altEmail, setAltEmail,altPhone, setAltPhone,altAltPh, setAltAltPh}}>{children}</MerchantSignUpContext.Provider>
  )
}
// make sure use
export const useMerchantSignUpContext = () => {
  return useContext(MerchantSignUpContext)
}