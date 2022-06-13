import React from "react"; 
import "../../../App.css";
import ButtonsRow1 from "./buttons rows/buttonsrow1";
import ButtonsRow2 from "./buttons rows/buttonsrow2";
import ButtonsRow3 from "./buttons rows/buttonsrow3";

const Buttons = () => {
  return(
    <div className="buttons-sec">
      <ButtonsRow1 />
      <ButtonsRow2 />
      <ButtonsRow3 />
    </div>
  )
}

export default Buttons;