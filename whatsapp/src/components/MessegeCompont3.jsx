import React, { useContext, useEffect, useState } from "react";
import { AiOutlineArrowLeft, AiOutlineSearch, AiOutlineSend } from "react-icons/ai";
import { FiMoreVertical } from "react-icons/fi";
import { BsEmojiSmile } from "react-icons/bs";
import { BsMicFill } from "react-icons/bs";
import { HiPlus } from "react-icons/hi";
import Allmesseges from "./Allmesseges";
import { LoginContext } from "../context/LoginContextProvider";
import axios from "axios";
import { ApiUrl } from "../api";

const MessegeCompont3 = ({ picture, given_name, sub, swap, setSwap, sethide }) => {
  const [word, setword] = useState("");
  const { state, socket, activeUsers } = useContext(LoginContext);
  const [con, setcon] = useState({});
  const [flag, setflag] = useState(false);
  const [file, setFile] = useState();
  const [image, setImage] = useState("");
  const [incoming, setincoming] = useState({})

  const getConversation = async () => {
    let ob = { receiverId: sub, senderId: state.sub };
    await axios.post(`${ApiUrl}/chat/conversation`, ob).then((res) => {
      setcon(res.data);
    });
  };

  useEffect(() => {
    getConversation();
  }, [sub]);



  useEffect(() => {
    socket.current.on('getMessege', (data) => {
      setincoming({
        ...data,
        createdAt: Date.now()
      })
    })
  }, [])

  const postMessage = async () => {
    if (file) {
      let messege = {
        receiverId: sub,
        senderId: state.sub,
        conversationId: con._id,
        text: image,
        type: "file",
      };
      socket.current.emit('sendMessege', messege)
      await axios.post(`${ApiUrl}/message`, messege);
      setflag((prev) => !prev);
      setword("");
      setImage('')
      setFile('')
      setSwap(!swap)
    } else {
      let messege = {
        receiverId: sub,
        senderId: state.sub,
        conversationId: con._id,
        text: word,
        type: "text",
      };
      socket.current.emit('sendMessege', messege)
      try {
        await axios.post(`${ApiUrl}/message`, messege);
        setflag((prev) => !prev);
        setword("");
        setFile('')
        setSwap(!swap)
      } catch (error) {
        console.log(error.message)
      }

    }
  }

  const handleMessege = async (e) => {
    if (word.length > 0) {
      if (e.keyCode === 13) {
        postMessage()
      }
    }

  };

  const getFile = async () => {
    if (file) {
      const data = new FormData();
      data.append("name", file.name);
      data.append("file", file);
      try {
        await axios.post(`${ApiUrl}/file`, data).then((res) => {
          setImage(res.data)
        });
      } catch (error) {
        console.log(error.message);
      }
    }
  };

  useEffect(() => {
    if (file) {
      getFile();
    }

  }, [file]);

  const handleFile = (e) => {
    setFile(e.target.files[0]);
    setword(e.target.files[0].name);
  };

  return (
    <div>
      <div className="flex h-[7.4vh] bg-[#f0f2f5] justify-between">
        <div className="flex ml-4 gap-3 place-items-center">
          <div className="cursor-pointer" onClick={() => sethide(false)}>
            <AiOutlineArrowLeft size={22} color={"black"} />
          </div>
          <div className="h-[45px] w-[45px]">
            <img className="w-[100%]  h-[45px] rounded-full" src={picture} />
          </div>
          <div>
            <p className="text-[14px]">{given_name}</p>
            <p className="text-[12px] text-[grey]">
              {activeUsers.find((item) => item.sub == sub) ? 'online' : 'offline'}
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

      <Allmesseges con={con} flag={flag} incoming={incoming} />

      <div className="flex place-items-center h-[7.3vh] bg-[#f0f2f5]">
        <div className="flex w-[6%]  place-content-center">
          <BsEmojiSmile size={24} color={"#455A64"} />
        </div>

        <input
          onChange={handleFile}
          type="file"
          style={{ display: "none" }}
          id="fileinput"
        />

        <div className="flex w-[6%] place-content-center">
          <label htmlFor="fileinput">
            <HiPlus size={24} color={"#455A64"} />
          </label>
        </div>
        <div className="w-[82%]   ">
          <input
            className="w-[100%] h-[5vh] bg-white rounded focus:outline-none p-5"
            placeholder="   Type a messege"
            onChange={(e) => setword(e.target.value)}
            onKeyUp={(e) => handleMessege(e)}
            value={word}
            minLength={1}
          />
        </div>
        <div className="flex w-[6%]   place-content-center">
          {word ? <div onClick={() => postMessage()}><AiOutlineSend size={24} /></div> : <BsMicFill size={24} color={"#455A64"} />}
        </div>
      </div>
    </div>
  );
};

export default MessegeCompont3;