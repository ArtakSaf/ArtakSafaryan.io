import '../styles/smollbtn.css'
import {AiOutlineStar} from 'react-icons/ai'
const SmallBtn  = ()=>{
     return (
       <div className="buttons_small">
         <button className="b_btn">
           <AiOutlineStar />
           Star
         </button>
         <button className="b_btn s_btn">10,690</button>
       </div>
     );
}

export default SmallBtn;