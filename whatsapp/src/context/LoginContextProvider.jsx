import React, {  createContext, useState } from 'react'

export const LoginContext=createContext()

const LoginContextProvider = ({children}) => {

const [state,setState]=useState({})

  return (
    <LoginContext.Provider value={{state,setState}} >
    {children}
    </LoginContext.Provider>
  )
}

export default LoginContextProvider