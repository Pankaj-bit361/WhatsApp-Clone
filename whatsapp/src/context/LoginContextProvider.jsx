import React, {  createContext, useState } from 'react'

export const LoginContext=createContext()

const LoginContextProvider = ({children}) => {

const [state,setState]=useState({})
const [person1,setPerson1]=useState({})

  return (
    <LoginContext.Provider value={{state,setState,person1,setPerson1}} >
    {children}
    </LoginContext.Provider>
  )
}

export default LoginContextProvider