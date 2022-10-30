import React, { useContext, useEffect, useState } from 'react'

const SignUpContext = React.createContext()
export const SignUpProvider = ({ children }) => {

    const [signUpOpen, setSignUpOpen] = useState(false)

  return (
    <SignUpContext.Provider value={{signUpOpen, setSignUpOpen}}>{children}</SignUpContext.Provider>
  )
}
// make sure use
export const useSignUpContext = () => {
  return useContext(SignUpContext)
}