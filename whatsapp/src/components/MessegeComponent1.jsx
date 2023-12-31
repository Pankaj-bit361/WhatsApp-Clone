import React, { useContext, useEffect } from 'react'
import ChatUser from './ChatUser'
import { LoginContext } from '../context/LoginContextProvider'

const MessegeComponent1 = ({ data, getSingleProfile ,swap, setSwap }) => {

  // const { state } = useContext(LoginContext)
  let oathData = JSON.parse(localStorage.getItem("oath"));
  return (
    <div className='divide-y overflow-x-auto h-[80vh]'>
      {data.length > 0 && data.map((item) => (
        item.sub !== oathData.sub &&
        <div key={item.sub}>
          <ChatUser swap={swap} setSwap={setSwap} getSingleProfile={getSingleProfile} item={item} />
        </div>

      ))}
    </div>
  )
}

export default MessegeComponent1