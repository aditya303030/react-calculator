import React from "react";
import "../../../../App.css";

const ButtonsRow1 = ({HandleChange}) => {
  return(
    <div className="button-row-1">
      <button type="submit" onClick={HandleChange} value="1">1</button>
      <button type="submit" onClick={HandleChange} value="2">2</button>
      <button type="submit" onClick={HandleChange} value="3">3</button>
      <button type="submit">+</button>
      <button type="submit">x</button>
    </div>
  )
}

export default ButtonsRow1;