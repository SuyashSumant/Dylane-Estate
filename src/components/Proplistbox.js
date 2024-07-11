import React, { useState } from "react";
import "./Proplistbox.css"; // Assuming Proplistbox.css exists for styling
import Location from "./Location"; // Assuming Location component exists

const Proplistbox = () => {
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
         <div className="info">
          <form action="">
            <h3>*Property for</h3>
            <div className="radio">
              <input type="radio" name="type" value="Rent" id="option1" />
              <label htmlFor="option1">Rent</label>
              <input type="radio" name="type" value="Sale" id="option2" />
              <label htmlFor="option2">Sale</label>
            </div>

            <br />

            <h3>* Property Type:</h3>
            <div className="radio">
              <input type="radio" name="type" value="Residential" id="option3" />
              <label htmlFor="option3">Residential</label>
              <input type="radio" name="type" value="Commercial" id="option4" />
              <label htmlFor="option4">Commercial</label>
              <input type="radio" name="type" value="land" id="option5" />
              <label htmlFor="option5">Land/plot</label>
            </div>

            <div className="name">
              <label htmlFor="builtUpArea">Built Up Area</label>
              <input type="text" id="builtUpArea" placeholder="0" />

              <label htmlFor="carpetArea">Carpet area *</label>
              <input type="text" id="carpetArea" placeholder="0" />
            </div>

            <div className="buttons">
              <div className="age">
                <h3>* Property Age:</h3>
                <button className="list-btn">Less than 1 year</button>
                <button className="list-btn">1-3 Years</button>
                <button className="list-btn">3-5 Years</button>
                <button className="list-btn">5-8 Years</button>
                <button className="list-btn">10+ Years</button>
              </div>

              <div className="age">
                <h3>* BHK Type:</h3>
                <button className="list-btn">1 RK</button>
                <button className="list-btn">1BHK</button>
                <button className="list-btn">2 BHK</button>
                <button className="list-btn">3 BHK</button>
                <button className="list-btn">5+ BHK</button>
              </div>
            </div>
          </form>
          </div>
          <div className="prop-footer">
              <span>Need Help ? Call 9999999999 </span>
              <button className="btn" onClick={handleClick}>NEXT</button>
            </div>
          
        </div>
      )}

      {isButtonPressed && <Location />} {/* Render Location component when button pressed */}
      
    </div>
  );
};

export default Proplistbox;
