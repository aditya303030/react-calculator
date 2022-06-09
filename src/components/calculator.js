import React,{useState} from "react";
import CalcAnswerSec from "./calculator components/calcAnswerSec";

const Calculator = () => {
  //states
  const [CurrInput,CurrInputHandler] = useState()
  const InputHandler = (e) => {
    CurrInputHandler(e.target.value)
    console.log(e.target.value)
  }
  return(
    <div className="Calculator-container">
      <input onChange={InputHandler} placeholder="input"></input>
      <CalcAnswerSec CurrInput={CurrInput} />
    </div>
  )
}

export default Calculator;