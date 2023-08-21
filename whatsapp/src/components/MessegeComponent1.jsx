import React, { useContext, useEffect } from 'react'
import ChatUser from './ChatUser'
import { LoginContext } from '../context/LoginContextProvider'

const MessegeComponent1 = ({data,getSingleProfile}) => {

const {state}=useContext(LoginContext)

  return (
    <div className='divide-y overflow-x-auto h-[80vh]'>
 {data.length>0 && data.map((item)=>(
  item.sub!==state.sub &&
  <div key={item.sub}>
    <ChatUser getSingleProfile={getSingleProfile}  {...item}/>
    </div>

 ))}
    </div>
  )
}

export default MessegeComponent1