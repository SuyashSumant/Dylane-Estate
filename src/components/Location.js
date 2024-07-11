import React, { useState } from "react";
import "./Location.css";
import map from "../Assets/map.png";
import Furniture from "./Furniture";

const Loation = () => {
  const [isButtonPressed, setIsButtonPressed] = useState(false);

  const handleClick = () => {
    setIsButtonPressed(true);
  };
  return (
    
      
        <div className="proplist-container">
          {!isButtonPressed && (
            <div className="proplist-box">
            <ul>
              <li>PROPERTY DETAILS</li>
              <li>LOCATION DETAILS</li>
              <li>FURNITURE &AMENITIES</li>
              <li>PRICE DETAILS</li>
              <li>PROPERTY IMAGES</li>
            </ul>
            <hr/>
          

          <div className="info">
            <form action="">
              <h3>*Property for</h3>
              <div className="Location-name">
                <div className="column">
                  <label htmlFor="">Building/Society name :</label>
                  <br />
                  <input type="text" placeholder="Enter the apartment name" />
                </div>

                <div className="column">
                  <label htmlFor="">Locality Area *</label>
                  <br />
                  <input type="text" placeholder="Eg. Sheetal nagar" />
                </div>
              </div>

              <div className="Location-name">
                <div className="column">
                  <label htmlFor="">Landmark/Street name :</label>
                  <br />
                  <input type="text" placeholder="Prominent Landmark" />
                </div>

                <div className="column">
                  <label htmlFor="">City *</label>
                  <br />
                  <input type="text" placeholder="Solapur" />
                </div>
              </div>

              <div className="img">
                <input type="text" placeholder="Enter the location" />

                <img src={map} alt="" />
              </div>
            </form>
          </div>

          <div className=" prop-footer">
            <span>Need Help ? Call 9999999999 </span>
            <button className="btn" onClick={handleClick}>
              Next
            </button>
          </div>
        </div>
          )}
          
          {isButtonPressed && <Furniture />} {/* Render Location component when button pressed */}
    </div>
  );
};

export default Loation;
