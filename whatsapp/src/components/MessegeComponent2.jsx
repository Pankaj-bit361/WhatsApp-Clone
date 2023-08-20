import React, { useState } from 'react'
import image from "../Images/WhatsLogo2.png"
import { BiSolidLockAlt } from "react-icons/bi";

const MessegeComponent2 = () => {

 


  return (
    <div className='bg-[#f0f2f5] h-full border-b-[6px] border-[#4f669b]'>
    <div className='flex flex-col place-content-center place-items-center h-[88vh]'>
    <img className='w-[35%]' src={image}/>
    <h1 className='text-[28px] font-light leading-10 mt-5'>WhatsApp Web</h1>
    <p className='text-[14px] text-[grey] mt-2'>Send and receive messages keeping your phone online.</p>
    <p className='text-[14px] text-[grey]'>Use WhatsApp on up to 4 linked devices and 1 phone at the same time.</p>
   
    </div>
    <div className='flex justify-center'>
    <div>
    <BiSolidLockAlt color='grey' size={18}/></div>
    <p className='text-[14px] text-[grey]'>End-to-end encrypted </p>
    </div>
   
   
    </div>
  )
}

export default MessegeComponent2