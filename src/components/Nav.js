import React from 'react';
import './Nav.css';
import translate from "../Assets/Frame.png"
import login from "../Assets/Frame (2).png"

const Nav = () => {
  return (
    <div>
     <nav className='navbar'>
      <ul>
        <li className='logo'>
          Dylane Estate
          </li>
        <li>PROPERTIES</li>
        <li>DASHBOARD/MY ACTIVITY</li>
        <li>LIST YOUR PROPERTY</li>
        <li>CONTACT US</li>
        <li>MORE</li>
        <li>|</li>
        <li><span><img src={translate} alt="" /></span></li>
        <li><span><img src={login} alt="" /></span></li>
      </ul>
     </nav>
     
      
    </div>
  )
}

export default Nav
