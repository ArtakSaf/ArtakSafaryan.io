import '../styles/last_btns.css';
import {BsTwitter} from 'react-icons/bs';
import {IoLogoFacebook} from 'react-icons/io'

const Last_btns = ()=>{
     return <div className='last_btns'>
        <button className='tweet'><BsTwitter/> TWEET</button>
        <button className='share'><IoLogoFacebook /> SHARE</button>
     </div>
}

export default Last_btns;