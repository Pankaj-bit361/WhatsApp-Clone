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
  const { state } = useContext(LoginContext);
  const [profile, setProfile] = useState(false);
  const [data, setData] = useState([]);
  const [swap, setSwap] = useState(true);
  const [person, setPerson] = useState({});
  const [search,setSearch]=useState("")

  const getUSers = () => {
    axios.get(`${ApiUrl}users`).then((res) => {
      let filteredData=res.data.filter((item)=>item.given_name.toLowerCase().includes(search.toLowerCase()))
      setData(filteredData);
    });
  };

  useEffect(() => {
    getUSers();
  }, [search]);

  const getSingleProfile = (id) => {
    axios.get(`${ApiUrl}users/${id}`).then((res) => {
      console.log(res.data);
      setPerson(res.data);
      setSwap(false);
    });
  };

  return (
    <div className="bg-[#ededed] relative">
      <div className="h-[18vh] bg-[#4f669b]"></div>
      <div className="flex h-[95vh] absolute w-[98%] border bg-white top-[3vh] left-[1%] shadow-2xl ">
        {profile ? (
          <div className="w-[30%]">
            <Profile setProfile={setProfile} profile={profile} />
          </div>
        ) : (
          <div className="w-[30%] border ">
            <div className="flex bg-[#f0f2f5]">
              <div className=" w-[50%] border ">
                <img
                  className=" border  rounded-full  w-[50px] h-[50px] ml-[5%]"
                  src={state.picture}
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
                className="border-none w-[90%] mt-2 h-[5vh] rounded ml-2 bg-[#f0f2f5] placeholder:text-[13px] "
                onChange={(e)=>setSearch(e.target.value)}
              />

              <div className="mt-2">
                <BiFilter size={25} color={"#455A64"} />
              </div>
            </div>
            <MessegeComponent1
              getSingleProfile={getSingleProfile}
              data={data}
            />
          </div>
        )}

        <div className="w-[70%]">
          {swap ? <MessegeComponent2 /> : <MessegeCompont3 {...person} />}
        </div>
      </div>
    </div>
  );
};

export default Messeger;
