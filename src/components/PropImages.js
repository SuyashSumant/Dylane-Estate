import React, {useState} from 'react'
import './propimages.css'
import camera from '../Assets/camera.png.png';
import Submit from './Submit';

const PropImages = () => {
    const [isButtonPressed, setIsButtonPressed] = useState(false);
  
    const handleClick = () => {
      setIsButtonPressed(true);
    };
  return (
    <div className="proplist-container">
    {!isButtonPressed && ( // Render initial form when button not pressed
      <div className="proplist-box">
        <ul>
          <li>PROPERTY DETAILS</li>
          <li>LOCATION DETAILS</li>
          <li>FURNITURE & AMENITIES</li>
          <li>PRICE DETAILS</li>
          <li>PROPERTY IMAGES</li>
        </ul>
        <hr/>

        <div className="text">
            <h3>
            Add Photos / videos to attract more tenants! 
            </h3>
            <p>
            Add Photos of living room, bedroom, bathroom, floor, doors, kitchen, balcony, location map, neighborhood, etc
            </p> 
        </div>
            <div className="storage">
                <div className="btn">
                    <img src={camera} alt="" />
                    <br />
                    <button className="btn-inner" >+ Add Photos </button>
                </div>
            </div>
        
       
        <div className="prop-footer">
            <span>Need Help ? Call 9999999999 </span>
            <button className="btn" onClick={handleClick} >Save And Post</button>
          </div>
        
      </div>
    
    )
}
    {isButtonPressed && <Submit/>} 
    {/* Render Location component when button pressed */}
    
  </div>
  )
}

export default PropImages;
