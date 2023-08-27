import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { FiMoreVertical } from "react-icons/fi";
import { BsEmojiSmile } from "react-icons/bs";
import { BsMicFill } from "react-icons/bs";
import { HiPlus } from "react-icons/hi";

const MessegeCompont3 = ({ picture, given_name,handleMessege }) => {

const [word,setword]=useState("")




  return (
    <div>
      <div className="flex h-[7.4vh] bg-[#f0f2f5] justify-between">
        <div className="flex ml-4 gap-3 place-items-center">
          <div className="h-[45px] w-[45px]">
            <img className="w-[100%]  h-[45px] rounded-full" src={picture} />
          </div>
          <div>
            <p className="text-[14px]">{given_name}</p>
            <p className="text-[12px] text-[grey]">
              click here for contact info
            </p>
          </div>
        </div>

        <div className="flex gap-8 place-items-center mr-5">
          <div>
            <AiOutlineSearch size={22} />
          </div>
          <div>
            <FiMoreVertical size={22} />
          </div>
        </div>
      </div>

      <div className="bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')] h-[80vh] w-[100%]"></div>


      <div className="flex place-items-center h-[7.3vh] bg-[#f0f2f5]">
        <div className="flex w-[6%]  place-content-center">
          <BsEmojiSmile size={24} color={"#455A64"} />
        </div>
        <div className="flex w-[6%] place-content-center">
          <HiPlus size={24} color={"#455A64"}/>
        </div>
        <div className="w-[82%]   ">
          <input className="w-[100%] h-[5vh] bg-white rounded" placeholder="   Type a messege" onChange={(e)=>setword(e.target.value)} onKeyUp={(e)=>handleMessege(e)}/>
        </div>
        <div className="flex w-[6%]   place-content-center">
          <BsMicFill size={24} color={"#455A64"}/>
        </div>
      </div>
    </div>
  );
};

export default MessegeCompont3;
