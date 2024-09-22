import axios from "axios";

export const ApiUrl = `http://localhost:5000`

export const getDate = (date) => {
  let gethours = new Date(date).getHours()
  let getMin = new Date(date).getMinutes()

  return `${gethours < 10 ? '0' + gethours : gethours}:${getMin < 10 ? '0' + getMin : getMin}`
}

