import React, { useContext, useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { FiMoreVertical } from "react-icons/fi";
import { BsEmojiSmile } from "react-icons/bs";
import { BsMicFill } from "react-icons/bs";
import { HiPlus } from "react-icons/hi";
import Allmesseges from "./Allmesseges";
import { LoginContext } from "../context/LoginContextProvider";
import axios from "axios";
import { ApiUrl } from "../api";




const MessegeCompont3 = ({ picture, given_name, sub }) => {
  const [word, setword] = useState("");
  const { state } = useContext(LoginContext);
  const [con, setcon] = useState({});
  const [flag, setflag] = useState(false);




  const getConversation = async () => {
    let ob = { receiverId: sub, senderId: state.sub };
    await axios.post(`${ApiUrl}/chat/conversation`, ob).then((res) => {
      console.log(res.data);
      setcon(res.data);
    });
  };

  useEffect(() => {
    getConversation();
  }, [sub]);

  const handleMessege = async (e) => {
    if (e.keyCode === 13) {
      let messege = {
        receiverId: sub,
        senderId: state.sub,
        conversationId: con._id,
        text: word,
        type: "text",
      };
      await axios.post(`${ApiUrl}/message`, messege);
      setflag((prev) => !prev);
      setword("");
    }
  };

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

      <Allmesseges con={con} flag={flag} />

      <div className="flex place-items-center h-[7.3vh] bg-[#f0f2f5]">
        <div className="flex w-[6%]  place-content-center">
          <BsEmojiSmile size={24} color={"#455A64"} />
        </div>
        
          <input type="file" style={{display:"none"}} 
            id="fileinput"
          />
      
        <div className="flex w-[6%] place-content-center">
          <label htmlFor="fileinput">
          <HiPlus size={24} color={"#455A64"} />
          </label>
        </div>
        <div className="w-[82%]   ">
          <input
            className="w-[100%] h-[5vh] bg-white rounded "
            placeholder="   Type a messege"
            onChange={(e) => setword(e.target.value)}
            onKeyUp={(e) => handleMessege(e)}
            value={word}
          />
        </div>
        <div className="flex w-[6%]   place-content-center">
          <BsMicFill size={24} color={"#455A64"} />
        </div>
      </div>
    </div>
  );
};

export default MessegeCompont3;
