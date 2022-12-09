import './App.css';
import { FaCartArrowDown } from "react-icons/fa";
function Header(props) {
  return (
    <div>
    <ul>
  <li><a class="active" onClick={() => props.handle(false)}>Home</a></li>
  <li><a href="#contact">Contact</a></li>
  <li><a href="#about">About</a></li>
  <li style={{position:'absolute' ,left:'94%' , top:'10px'}} onClick={() => props.handle(true)}>
  <FaCartArrowDown style={{ height:'24',width:'24' , color:'white'}}/> 
  <sup className='cartxt'  >{props.count}</sup>
</li>
</ul>
    </div>
  );
}

export default Header;
   /*<div className='headtxt' onClick={() => props.handle(false)}> My E-Commerce Store</div>
       <div  onClick={() => props.handle(true)}>
       <FaCartArrowDown style={{height:'30',width:'30'}}/> 
        <sup className='cartxt' >{props.count}</sup>
       </div>*/