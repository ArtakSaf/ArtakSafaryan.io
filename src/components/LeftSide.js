import { useContext } from 'react';
import '../styles/leftside.css';
import { MyColor } from '../App';


const LeftSide = ()=>{

const back = useContext(MyColor)
     return (
       <div>
         <div
           className="parrent_container"
           style={{backgroundColor: back, transition: '0.3s', color: 'white'}}
         >
        
           <span>Text must be white</span>
         </div>
       </div>
     );
}

export default LeftSide;