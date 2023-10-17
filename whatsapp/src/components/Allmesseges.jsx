import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import MessegeCard from "./MessegeCard";
import { ApiUrl } from "../api";

const Allmesseges = ({ con, flag, incoming }) => {
  const [messeges, setMesseges] = useState([]);
  const scrollRef = useRef(null)

  const getMesseges = async () => {
    await axios
      .get(`${ApiUrl}/message/${con._id}`)
      .then((res) => {
        setMesseges(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messeges])

  useEffect(() => {
    con._id && getMesseges();
  }, [con._id, flag]);

  useEffect(() => {
    incoming && con?.members?.includes(incoming.senderId)
      && setMesseges((prev) => [...prev, incoming])
  }, [incoming, con])



  return (
    <div ref={scrollRef} style={{
    }} className="bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')] overflow-x-auto h-[80vh] w-[100%]">
      <div className="pb-[5%]">
        {messeges &&
          messeges?.map((item) => (
            <div key={item.createdAt} className="pl-[2%] pr-[2%]">
              <MessegeCard {...item} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Allmesseges;
