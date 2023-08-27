import React, { useContext } from "react";
import { LoginContext } from "../context/LoginContextProvider";

const ChatUser = ({item ,getSingleProfile}) => {

const {setPerson1}=useContext(LoginContext)

const handleMesseges=({})=>{
  setPerson1(item)
  getSingleProfile()
}

  return (
    <div className="flex h-[12vh] w-[100%] place-items-center gap-4 " onClick={handleMesseges}>
      <div className="ml-4 w-[50px] h-[50px] ">
        <img className="w-[100%] h-[100%] rounded-full" src={item.picture}/>
      </div>
      <div>
        <p className='text-[16px]'>{item.given_name}</p>
        <p className="text-[13px]">will be there</p>
      </div>
  
    </div>
  );
};

export default ChatUser;
