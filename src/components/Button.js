import React from 'react';
import '../styles/button.css';


const Button = ({clickPink,clickBlack,clickBlue, clickGreen,clickYello,clickRed})=>{
     return (
       <>
         <div className="colors_group">
           <button className="box_colors box-1" onClick={clickPink}>
             {" "}
           </button>
           <button className="box_colors box-2" onClick={clickBlack}>
             {" "}
           </button>
           <button className="box_colors box-3" onClick={clickBlue}>
             {" "}
           </button>
           <button className="box_colors box-4" onClick={clickGreen}>
             {" "}
           </button>
           <button className="box_colors box-5" onClick={clickYello}>
             {" "}
           </button>
           <button className="box_colors box-6" onClick={clickRed}>
             {" "}
           </button>
         </div>
       
       </>
     );
}

export default Button;