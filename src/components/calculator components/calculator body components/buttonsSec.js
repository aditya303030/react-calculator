import React from "react"; 
import "../../../App.css";
import ButtonsRow1 from "./buttons rows/buttonsrow1";
import ButtonsRow2 from "./buttons rows/buttonsrow2";
import ButtonsRow3 from "./buttons rows/buttonsrow3";

const Buttons = ({HandleChange}) => {
  return(
    <div className="buttons-sec">
      <ButtonsRow1  HandleChange = {HandleChange} />
      <ButtonsRow2  HandleChange = {HandleChange} />
      <ButtonsRow3  HandleChange = {HandleChange} />
    </div>
  )
}

export default Buttons;