import React, { createContext, useContext, useEffect, useState } from 'react'

const MerchantDetailsContext = createContext()
export const MerchantDetailsProvider = ({ children }) => {

    const [active, setActive] = useState(0)
    
    return (
        <MerchantDetailsContext.Provider value={{active, setActive}}>{children}</MerchantDetailsContext.Provider>
    )
}

export const useMerchantDetailsContext = () => {
    return useContext(MerchantDetailsContext)
  }