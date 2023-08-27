import React, { useContext } from 'react'
import { getDate } from '../api'
import { LoginContext } from '../context/LoginContextProvider'

const MessegeCard = ({createdAt,text,senderId}) => {

const {state} =useContext(LoginContext)



  return (
    <div>
 {state.sub==senderId?<div className='flex gap-1 max-width:[50%] mt-[2px] w-fit bg-[#dcf8c6] p-[5px] rounded-[5px] break-words ml-auto'>
        <h1  className='text-[14px]'>{text}</h1>
        <h1 className='text-[10px] text-[#919191] mt-auto'>{getDate(createdAt)}</h1>
    </div>:
    
    <div className='flex gap-1 max-width:[50%] mt-[2px] w-fit bg-[#ffffff] p-[5px] rounded-[5px] break-words '>
        <h1  className='text-[14px]'>{text}</h1>
        <h1 className='text-[10px] text-[#919191] mt-auto break-keep '>{getDate(createdAt)}</h1>
    </div>
    }
    
    
    
    </div>
  )
}

export default MessegeCard