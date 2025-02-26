import React, { useContext, useEffect, useState } from "react";
import { LoginContext } from "../context/LoginContextProvider";
import { ApiUrl } from "../api";
import axios from "axios";

const ChatUser = ({ item, getSingleProfile, swap }) => {

  const { setPerson1, state, currentUser, setCurrentUser } = useContext(LoginContext)
  const [solo, setSolo] = useState('')


  const handleMesseges = () => {
    setPerson1(item)
    getSingleProfile()
    setCurrentUser({ senderId: state.sub, reciverId: item.sub })
  }

  const getSingleMessege = () => {

    if (currentUser) {
      if (currentUser.senderId != state.sub || currentUser.reciverId != item.sub) {
        return
      }
    }

    axios.get(`${ApiUrl}/chat/singleMessage?senderId=${state.sub}&receiverId=${item.sub}`)
      .then((res) => {
        if (res.data && res.data.messege) {
          setSolo(res.data.messege)
        }

      })
  }

  useEffect(() => {
    getSingleMessege()
  }, [swap])
  return (
    <div className="flex h-[12vh] w-[100%] items-center gap-4 p-2 " onClick={handleMesseges}>
      <div className="ml-4 w-[50px] h-[50px] ">
        <img className="w-[100%] h-[100%] rounded-full" src={item.picture} />
      </div>
      <div className="w-[calc(100%-70px)]">
        <p className='text-[16px]'>{item.given_name}</p>
        <p className="text-[13px] q-webkit">{solo && solo?.includes('https://whats-app-clone-orpin.vercel.app') ? 'file' : solo}</p>
      </div>

    </div>
  );
};


const getFile = () => {

}

export default ChatUser;
