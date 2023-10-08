import React, { useContext } from "react";
import { getDate } from "../api";
import { LoginContext } from "../context/LoginContextProvider";

const MessegeCard = ({ createdAt, text, senderId }) => {
  const { state } = useContext(LoginContext);

  return (
    <div>
      {state.sub == senderId ? (
        <div className="flex gap-1 max-w-[45%] mt-[2px] w-fit bg-[#dcf8c6]  p-[5px] rounded-[5px] break-words   ml-auto">
          {text?.includes(".png") ? (
            <ImageMessage text={text} createdAt={createdAt} />
          ) : (
            <>
              <h1 className="text-[14px] ">{text}</h1>
              <h1 className="text-[10px]  text-[#919191] mt-auto">
                {getDate(createdAt)}
              </h1>
            </>
          )}
        </div>
      ) : (
        <div className="flex gap-1 max-w-[45%] mt-[2px] w-fit bg-[#ffffff] p-[5px] rounded-[5px]  break-words">
          <h1 className="text-[14px]">{text}</h1>
          <h1 className="text-[10px] text-[#919191] mt-auto break-keep ">
            {getDate(createdAt)}
          </h1>
        </div>
      )}
    </div>
  );
};

const ImageMessage = ({ text, createdAt }) => {
  return (
    <div className="relative">
      <img className="w-[250px]" src={text} alt={"image"} />
      <h1 className="text-[10px]  text-[#f7f7f7] left-[85%] top-[92%] absolute mt-auto">
        {getDate(createdAt)}
      </h1>
    </div>
  );
};

export default MessegeCard;
