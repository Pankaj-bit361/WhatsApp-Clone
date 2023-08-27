import axios from 'axios';
import React, { useEffect, useState } from 'react'
import MessegeCard from './MessegeCard';

const Allmesseges = ({con,flag}) => {

  const [messeges, setMesseges] = useState([]);
  const getMesseges = () => {
   axios
      .get(`http://localhost:8000/message/${con._id}`)
      .then((res) => {
        console.log("called")
        console.log(res.data)
        setMesseges(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };   

  useEffect(()=>{
  con._id && getMesseges()
  },[con._id,flag])

console.log(flag,"24")

  return (

     <div className="bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')] h-[80vh] w-[100%]">
{messeges &&  messeges?.map((item)=>(
<div className='pl-[2%] pr-[2%]'>
  <MessegeCard key={item.createdAt} {...item} />
</div>

))}

     </div>

  )
}

export default Allmesseges