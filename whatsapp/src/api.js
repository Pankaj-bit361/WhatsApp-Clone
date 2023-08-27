import axios from "axios"

export const ApiUrl=`https://whats-app-clone-hazel.vercel.app/`

export const getDate=(date)=>{
  let gethours=new Date(date).getHours()
  let getMin=new Date(date).getMinutes()

  return `${gethours<10?'0'+gethours:gethours}:${getMin<10?'0'+getMin:getMin}`
}

