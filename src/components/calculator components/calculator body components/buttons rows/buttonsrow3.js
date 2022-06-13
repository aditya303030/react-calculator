import React from "react";

const ButtonsRow3 = ({HandleChange}) => {
  return(
    <div className="button-row-3">
      <button type="submit" onClick={HandleChange} value="7" >7</button>
      <button type="submit" onClick={HandleChange} value="8" >8</button>
      <button type="submit" onClick={HandleChange} value="9" >9</button>
      <button type="submit" onClick={HandleChange} value="0" >0</button>
    </div>
  )
}

export default ButtonsRow3;