import axios from 'axios'
import React, { createContext, useEffect, useRef, useState } from 'react'
import { io } from 'socket.io-client'
export const LoginContext = createContext()

const LoginContextProvider = ({ children }) => {

  const [state, setState] = useState({})
  const [person1, setPerson1] = useState({})
  const [activeUsers, setActiveUsers] = useState([])
  const [currentUser, setCurrentUser] = useState(null)
  const socket = useRef()

  useEffect(() => {
    socket.current = io('https://whatsapp-socket-cpkh.onrender.com/')
  }, [])

  return (
    <LoginContext.Provider value={{ state, setState, setActiveUsers, activeUsers, person1, setPerson1, socket , setCurrentUser, currentUser }} >
      {children}
    </LoginContext.Provider>
  )
}

export default LoginContextProvider