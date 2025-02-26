import React, { useContext, useEffect, useState } from "react";
import MessegeComponent1 from "../components/MessegeComponent1";
import MessegeComponent2 from "../components/MessegeComponent2";
import { LoginContext } from "../context/LoginContextProvider";
import { BiSolidMessageDetail } from "react-icons/bi";
import { MdGroups } from "react-icons/md";
import { TbHistoryToggle } from "react-icons/tb";
import { MdMoreVert } from "react-icons/md";
import { BiFilter } from "react-icons/bi";
import Profile from "../components/Profile";
import axios from "axios";
import { ApiUrl } from "../api";
import MessegeCompont3 from "../components/MessegeCompont3";

const Messeger = () => {
  let oathData = JSON.parse(localStorage.getItem("oath"));

  const { state, setState, socket, setActiveUsers } = useContext(LoginContext);
  const [profile, setProfile] = useState(false);
  const [data, setData] = useState([]);
  const [swap, setSwap] = useState(false);
  const [hide, sethide] = useState(false)
  const [search, setSearch] = useState("");

  const { person1 } = useContext(LoginContext);
  const getUSers = () => {
    axios.get(`${ApiUrl}/users`).then((res) => {

      let filteredData = res.data.filter((item) =>
        item.given_name.toLowerCase().includes(search.toLowerCase())
      );
      setData(filteredData);
    });
  };

  useEffect(() => {
    getUSers();
  }, [search]);

  useEffect(() => {
    oathData && oathData.sub && setState(oathData)
  }, [])

  const getSingleProfile = async () => {
    let ob = {
      recieverId: person1.sub,
      senderId: state.sub,
    };
    await axios.post(`${ApiUrl}/chat`, ob);
    sethide(true)
  };

  useEffect(() => {
    socket.current && socket.current.emit('addUsers', state)
    socket.current && socket.current.on('getUsers', (users) => {
      setActiveUsers(users)
      let myuser = users.find((item) => item.sub == state.sub)
      localStorage.setItem("oath", JSON.stringify(myuser));
      setState(myuser)
    })
  }, [state.socketId])

  return (
    <div className="bg-[#ededed] relative">
      <div className="h-[18vh] bg-[#05a884]"></div>
      <div className="flex flex-col h-[95vh] absolute w-[98%] border bg-white top-[3vh] left-[1%] shadow-2xl md:flex-row">
        {profile ? (
          <div className={`${hide ? 'hidden' : 'block'} w-[100%] md:w-[30%]`}>
            <Profile setProfile={setProfile} profile={profile} />
          </div>

        ) : (
          <div className={`w-[100%] ${hide ? 'hidden' : 'block'} w-full md:w-[30%]`}>
            <div className="flex bg-[#f0f2f5]">
              <div className=" w-[50%] border ">
                <img
                  className=" border  rounded-full  w-[50px] h-[50px] ml-[5%]"
                  src={oathData?.picture}
                  onClick={() => setProfile(!profile)}
                />
              </div>
              <div className="flex w-[50%] justify-evenly place-items-center border">
                <MdGroups size={25} color={"#455A64"} />
                <BiSolidMessageDetail size={25} color={"#455A64"} />
                <TbHistoryToggle size={25} color={"#455A64"} />
                <MdMoreVert size={25} color={"#455A64"} />
              </div>
            </div>
            <div className="flex gap-2 shadow-md h-[7vh]">
              <input
                placeholder="  Search or start a new chat"
                className="border-none w-[90%] mt-2 h-[5vh] pl-2 outline-none text-[14px] rounded ml-2 bg-[#f0f2f5] placeholder:text-[13px] "
                onChange={(e) => setSearch(e.target.value)}
              />

              <div className="mt-2">
                <BiFilter size={25} color={"#455A64"} />
              </div>
            </div>
            <MessegeComponent1
              getSingleProfile={getSingleProfile}
              data={data}
              swap={swap} setSwap={setSwap}
            />
          </div>
        )}

        <div className={`w-full ${hide ? 'block' : 'hidden'} sm:w-full md:block w-[70%]`}>
          {Object.keys(person1).length == 0 ? (
            <MessegeComponent2 />
          ) : (
            <MessegeCompont3 swap={swap} setSwap={setSwap} sethide={sethide} {...person1} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Messeger;