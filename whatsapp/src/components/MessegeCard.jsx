import React, { useContext } from "react";
import { getDate } from "../api";
import { LoginContext } from "../context/LoginContextProvider";
import pdfIcon from '../Images/pdfIcon.png'
import { AiFillFileText } from 'react-icons/ai';
import { BiSolidDownload } from 'react-icons/bi'
const MessegeCard = ({ createdAt, text, senderId }) => {
  const { state } = useContext(LoginContext);

  return (
    <div>
      {state.sub == senderId ? (
        <div className="flex gap-1 max-w-[45%] mt-[2px] w-fit bg-[#dcf8c6]  p-[5px] rounded-[5px] break-words   ml-auto">
          {text?.includes('https://whats-app-clone-orpin.vercel.app') ? (
            <ImageMessage text={text} createdAt={createdAt} />
          ) : (
            <>
              <h1 className="text-[14px]  break-before-all break-all">{text}</h1>
              <h1 className="text-[10px] break-before-all  text-[#919191] mt-auto">
                {getDate(createdAt)}
              </h1>
            </>
          )}
        </div>
      ) : (
        <div className="flex gap-1 max-w-[60%] mt-[2px] w-fit bg-[#ffffff] p-[5px] rounded-[5px]  break-words">
          {text?.includes('https://whats-app-clone-orpin.vercel.app') ? (
            <ImageMessage text={text} createdAt={createdAt} />
          ) : (
            <>
              <h1 className="text-[13px] md:text-[14px] break-all">{text}</h1>
              <h1 className="text-[10px]  text-[#919191] mt-auto">
                {getDate(createdAt)}
              </h1>
            </>
          )}
        </div>
      )}
    </div>
  );
};

const ImageMessage = ({ text, createdAt }) => {

  let extend = text.split('.').pop().toLowerCase();
  return (
    <div className="relative overflow-x-hidden">
      {['jpeg', 'jpg', 'png', 'gif'].includes(extend) ? <div><img className="w-[200px] h-[180px]" src={text} alt={"image"} />
        <div className="left-[60%] top-[83%] absolute flex gap-2 place-items-center md:left-[70%]">
          <div className="border-[1px] p-1 border-grey rounded">
            <BiSolidDownload color="white" size={'0.8em'} />
          </div>
          <h1 className="text-[10px]  text-white">
            {getDate(createdAt)}
          </h1>
        </div></div> : extend == 'pdf' ? <div className="flex gap-1 place-items-center">
          <img className=" w-[18%] " src={pdfIcon} alt='pdf' />
          <p className="text-[12px]">{text.split('/').pop()}</p>
          <div className="left-[85%] top-[92%] absolute">
            <div>
              <BiSolidDownload />
            </div>
            <h1 className="text-[10px]  text-[#919191] mt-auto">
              {getDate(createdAt)}
            </h1>
          </div>
        </div> : <div>
        <div className="flex gap-1 place-items-center">
          <AiFillFileText size={'4em'} />
          <p className="text-[12px]">{text.split('/').pop()}</p>
          <div className="left-[78%] top-[75%] absolute flex gap-2 place-items-center">
            <div className="border-[1px] p-1 border-grey rounded">
              <BiSolidDownload color="grey" size={'0.8em'} />
            </div>
            <h1 className="text-[10px]  text-[#919191]">
              {getDate(createdAt)}
            </h1>
          </div>

        </div>
      </div>}
    </div>
  );
};

export default MessegeCard;