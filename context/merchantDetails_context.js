import React, { createContext, useContext, useEffect, useState } from 'react'

const MerchantDetailsContext = createContext()
export const MerchantDetailsProvider = ({ children }) => {

    const [active, setActive] = useState(1)
    const [reqCallback, setReqCallback] = useState(false)
    const [reportError, setReportError] = useState(false)
    const [chatOpen, setChatOpen] = useState(false)
    
    return (
        <MerchantDetailsContext.Provider value={{active, setActive, reqCallback, setReqCallback, reportError, setReportError,chatOpen, setChatOpen}}>{children}</MerchantDetailsContext.Provider>
    )
}

export const useMerchantDetailsContext = () => {
    return useContext(MerchantDetailsContext)
  }