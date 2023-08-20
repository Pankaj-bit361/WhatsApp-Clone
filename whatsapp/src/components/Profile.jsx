import React, { useContext } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { LoginContext } from "../context/LoginContextProvider";
import { MdModeEditOutline } from "react-icons/md";

const Profile = ({setProfile,profile}) => {

const handleClick=()=>{
  setProfile(!profile)
}

  const { state } = useContext(LoginContext);
  return (

    <div className="bg-[#f0f2f5] h-full transition delay-150 duration-300 ease-in-out">
      <div className="h-[15vh] bg-[#38496f] ">
        <div className="pt-16 ml-6 flex gap-8">
          <div className="mt-[1%]" onClick={handleClick} >
            <AiOutlineArrowLeft  size={22} color={"white"} />
          </div>
          <p className="text-[19px] text-white font-semibold">Profile</p>
        </div>
      </div>
      <div className="flex h-[35vh]  place-content-center place-items-center">
        <div className="w-[40%]">
          <img className="w-[100%] border rounded-full" src={state.picture} />
        </div>
      </div>



      <div className="bg-white">
        <p className="pt-4 text-[14px] ml-[7%] text-[#38496f]">Your name</p>
        <div className="flex pt-4 ml-[7%] pb-4 justify-between">
          <h1>{state.given_name}</h1>
          <div className="mr-[5%]">
            <MdModeEditOutline color={"grey"} />
          </div>
        </div>
      </div>



 <p className='text-[14px] text-left w-[86%] m-auto mt-4 text-[grey]'>This is not your username or pin. This name is visible to your WhatsApp contacts.</p>
 <div className="bg-white mt-4">
        <p className="pt-4 text-[14px] ml-[7%] text-[#38496f]">About</p>
        <div className="flex pt-4 ml-[7%] pb-4 justify-between">
          <h1>{state.name}</h1>
          <div className="mr-[5%]">
            <MdModeEditOutline color={"grey"} />
          </div>
        </div>
      </div>




    </div>
  );
};

export default Profile;
