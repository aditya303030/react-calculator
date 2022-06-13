import React from "react";
import CalcAnswerSec from "./calculator components/calcAnswerSec";

const Calculator = () => {
  return(
    <div className="Calculator-container">
      {/* <input onChange={InputHandler} placeholder="input"></input> */}
      <CalcAnswerSec />
    </div>
  )
}

export default Calculator;