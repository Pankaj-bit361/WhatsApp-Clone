import React, { useContext, useState } from "react";
import MessegeComponent1 from "../components/MessegeComponent1";
import MessegeComponent2 from "../components/MessegeComponent2";
import { LoginContext } from "../context/LoginContextProvider";
import { BiSolidMessageDetail } from "react-icons/bi";
import { MdGroups } from "react-icons/md";
import { TbHistoryToggle } from "react-icons/tb";
import { MdMoreVert } from "react-icons/md";
import { BiFilter } from "react-icons/bi";
import Profile from "../components/Profile";

const Messeger = () => {
  const { state } = useContext(LoginContext);
  const [profile,setProfile]=useState(false)


  console.log(state);
  return (
    <div className="bg-[#ededed] relative">
      <div className="h-[18vh] bg-[#4f669b]"></div>
      <div className="flex h-[97vh] absolute w-[98%] border bg-white top-[3vh] left-[1%] shadow-2xl ">

      {profile?<div className="w-[30%]">
        <Profile setProfile={setProfile} profile={profile}/>
      </div>:
      <div className="w-[30%] border ">

<div className="flex bg-[#f0f2f5]">
  <div className=" w-[50%] border ">
    <img
      className=" border  rounded-full  w-[50px] h-[50px] ml-[5%]"
      src={state.picture}
      onClick={()=>setProfile(!profile)}
    />
  </div>
  <div className="flex w-[50%] justify-evenly place-items-center border">
    <MdGroups size={25} color={"#455A64"} />
    <BiSolidMessageDetail size={25} color={"#455A64"} />
    <TbHistoryToggle size={25} color={"#455A64"} />
    <MdMoreVert size={25} color={"#455A64"} />
  </div>
</div>
<div className='flex gap-2 shadow-md h-[7vh]'>
  <input className='border-none w-[90%] mt-2 h-[5vh] rounded ml-2 bg-[#f0f2f5]'/>
  <div className='mt-2'>
     <BiFilter size={25} color={"#455A64"}/></div>
</div>
<MessegeComponent1 />
</div>
      }
        {/* <div className="w-[30%] border ">

          <div className="flex bg-[#f0f2f5]">
            <div className=" w-[50%] border ">
              <img
                className=" border  rounded-full  w-[50px] h-[50px] ml-[5%]"
                src={state.picture}
                onClick={()=>setProfile(!profile)}
              />
            </div>
            <div className="flex w-[50%] justify-evenly place-items-center border">
              <MdGroups size={25} color={"#455A64"} />
              <BiSolidMessageDetail size={25} color={"#455A64"} />
              <TbHistoryToggle size={25} color={"#455A64"} />
              <MdMoreVert size={25} color={"#455A64"} />
            </div>
          </div>
          <div className='flex gap-2 shadow-md h-[7vh]'>
            <input className='border-none w-[90%] mt-2 h-[5vh] rounded ml-2 bg-[#f0f2f5]'/>
            <div className='mt-2'>
               <BiFilter size={25} color={"#455A64"}/></div>
          </div>
          <MessegeComponent1 />
        </div> */}
        <div className="w-[70%]">
          <MessegeComponent2 />
        </div>
      </div>
    </div>
  );
};

export default Messeger;
