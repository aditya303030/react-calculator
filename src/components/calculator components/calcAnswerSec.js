import React,{useState} from "react";
import Buttons from "./calculator body components/buttonsSec";

const CalcAnswerSec = () => {
  //states
  const [inputText,setInputText] = useState(0);
  const HandleChange = (event) => {
    setInputText(event.target.value)
    console.log(event.target.value)
  }

  return(
    <div className="answer-sec">
      <div className="answer-status">{inputText}</div>
      <Buttons HandleChange = {HandleChange} />
    </div>
  )
}

export default CalcAnswerSec;