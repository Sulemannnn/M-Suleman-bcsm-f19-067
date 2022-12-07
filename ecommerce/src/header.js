import './App.css';
import { FaCartArrowDown } from "react-icons/fa";
function Header(props) {
  return (
    <div className='flex shpCard'>
       <div className='headtxt' onClick={() => props.handle(false)}> My E-Commerce Store</div>
       <div  onClick={() => props.handle(true)}>
       <FaCartArrowDown style={{height:'30',width:'30'}}/> 
        <sup className='cartxt' >{props.count}</sup>
       </div>
    </div>
  );
}

export default Header;
