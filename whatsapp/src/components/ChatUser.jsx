import React from "react";

const ChatUser = ({ picture, given_name,_id,getSingleProfile }) => {


const handleMesseges=()=>{
  getSingleProfile(_id)
}

  return (
    <div className="flex h-[12vh] w-[100%] place-items-center gap-4 " onClick={handleMesseges}>
      <div className="ml-4 w-[50px] h-[50px] ">
        <img className="w-[100%] h-[100%] rounded-full" src={picture}/>
      </div>
      <div>
        <p className='text-[16px]'>{given_name}</p>
        <p className="text-[13px]">will be there</p>
      </div>
  
    </div>
  );
};

export default ChatUser;
