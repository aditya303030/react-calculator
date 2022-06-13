import React from "react";

const ButtonsRow2 = ({HandleChange}) => {
  return(
    <div className="button-row-2">
      <button type="submit" onClick={HandleChange} value="4">4</button>
      <button type="submit" onClick={HandleChange} value="5">5</button>
      <button type="submit" onClick={HandleChange} value="6">6</button>
      <button type="submit">-</button>
      <button type="submit">÷</button>
    </div>
  )
}

export default ButtonsRow2;