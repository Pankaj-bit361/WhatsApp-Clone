import React, { useContext } from "react";

import Qr from "../Images/qr.png";
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode"
import { LoginContext } from "../context/LoginContextProvider";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios"


import {ApiUrl} from "../api"

const Home = () => {
const {state,setState}=useContext(LoginContext)
const navigate=useNavigate()


 const loginSuccess=(res)=>{
  const decode=jwt_decode(res.credential)
   setState(decode)
    axios.post(`${ApiUrl}/users`,decode)
    .then((res)=>{
  
    })
   navigate("/messenger")
 } 
 
const loginError=(res)=>{
console.log(res)
}




    
  return (
    <div className="font-[Open_Sans] bg-[#ededed]">
      <div className="h-[30vh] bg-[#4f669b] relative">
        <div className="flex ml-[17.5%] pt-6 gap-4 ">
          <div className="w-10 ">
            <img
              className="w-10"
              src="https://www.freepnglogos.com/uploads/wechat-logo-32.png"
            />
          </div>
          <p className="text-white pt-2 font-medium text-sm">WHATSAPP WEB</p>
        </div>
      </div>

      <div className=" border w-[72%]  bg-white h-[88vh] absolute top-[12%] left-[14%] shadow-2xl rounded ">
        <div className='flex w-[90%] m-auto gap-[5%] mt-[7%]'>
          <div className="w-[65%]">
            <h1 className='text-[28px] leading-loose font-light'>Use WhatsApp on your Computer</h1>
            <p className="mt-14 text-[20px]">1. Open WhatAapp on your phone</p>
            <div className='mt-5 text-[20px]'>
            <span>2. Tap </span>
            <span className='font-semibold'> Menu</span>
            <span> or</span>
            <span className='font-semibold'> Settings</span>
            <span > and select</span>
            <span className='font-semibold'> Linked Devices</span>
            </div>
            
<div className='mt-5 text-[20px]'>

            <span>3. Tap on</span>
            <span className='font-semibold'> Link a device</span></div>
            <p className='mt-5 text-[20px]'>4. Point your phone to this screen to capture the QR Code</p>
          </div>
          <div className='w-[30%] relative '>
            <img className='w-[100%]' src={Qr} />
            <div className='absolute top-[25%]'>
            <GoogleLogin onSuccess={loginSuccess}  onError={loginError}/></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
