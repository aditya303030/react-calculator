import React from "react";
import Buttons from "./calculator body components/buttonsSec";

const CalcAnswerSec = ({CurrInput}) => {
  return(
    <div className="answer-sec">
      <div className="answer-status">{CurrInput}</div>
      <Buttons />
    </div>
  )
}

export default CalcAnswerSec;