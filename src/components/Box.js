import React from "react";

import "../styles/box.css";



const Box = ({ color}) => {
  
  return (
    <div>
      <div className="card" style={{ backgroundColor: color }}></div>
    </div>
  );
};

export default Box;
