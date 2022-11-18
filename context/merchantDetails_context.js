import React, { createContext, useContext, useEffect, useState } from 'react'

const MerchantDetailsContext = createContext()
export const MerchantDetailsProvider = ({ children }) => {

    const [active, setActive] = useState(0)
    const [reqCallback, setReqCallback] = useState(false)
    
    return (
        <MerchantDetailsContext.Provider value={{active, setActive, reqCallback, setReqCallback}}>{children}</MerchantDetailsContext.Provider>
    )
}

export const useMerchantDetailsContext = () => {
    return useContext(MerchantDetailsContext)
  }