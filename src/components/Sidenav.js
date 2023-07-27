import React, { createContext } from "react";
import ".././styles/sidenav.css";
import { useState} from "react";

const Sidenav = ({transparent, white, dark}) => {

  const [btnColor, setBtnColor] = useState(false)

  return (
    <div className="sidenav_bellow">
      <button className="btn dark"  onClick={dark} >Dark</button>
      <button className="btn middle" onClick={transparent}>Transparent</button>
      <button className="btn" onClick={white}>White</button>
    </div>
  );
};

export default Sidenav;
