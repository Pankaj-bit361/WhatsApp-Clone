import axios from 'axios';
import React, { useEffect, useState } from 'react'
import MessegeCard from './MessegeCard';
import { ApiUrl } from '../api';


const Allmesseges = ({con,flag}) => {

  const [messeges, setMesseges] = useState([]);



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

  useEffect(()=>{
  con._id && getMesseges()

  },[con._id,flag])



  return (

     <div className="bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')] overflow-x-auto h-[80vh] w-[100%]">
 <div className='pb-[5%]'>   
{messeges &&  messeges?.map((item)=>(
<div key={item.createdAt} className='pl-[2%] pr-[2%]'>
  <MessegeCard  {...item} />
</div>


))}
</div> 
     </div>

  )
}

export default Allmesseges