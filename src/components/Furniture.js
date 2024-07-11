import React ,{useState}from "react";
import './Furniture.css';
import Price from "./Price";

const Furniture = () => {

 
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
              <h3>General Preferance </h3>
              <div className="radio">
                <input type="radio" name="type" value="Non-veg" id="option1" />
                <label htmlFor="option1">Allowed</label>
                <input type="radio" name="type" value="Non-veg" id="option2" />
                <label htmlFor="option2">Not Allowed</label>
              </div>

              <h3>Pets Allowed </h3>
              <div className="radio">
                <input type="radio" name="type" value="pets" id="option1" />
                <label htmlFor="option1">Yes</label>
                <input type="radio" name="type" value="pets" id="option2" />
                <label htmlFor="option2">No</label>
              </div>

              <h3>* Water Supply:</h3>
              <div className="radio">
                <input type="radio" name="type" value="Supply" id="option3" />
                <label htmlFor="option3">Municipla Corporation (BMC)</label>
                <input type="radio" name="type" value="Supply" id="option4" />
                <label htmlFor="option4">Borewell</label>
                <input type="radio" name="type" value="Supply" id="option4" />
                <label htmlFor="option4">Both</label>
              </div>

            
              <h3>* Furnishing:</h3>
            <div className="checkbox">
              <div className="list">
                <input
                  type="checkbox"
                  name="interest"
                  value="coding"
                />
                <label htmlFor="coding">Fully Furnished</label>
              </div>
              <div className="list">
                <input
                  type="checkbox"
                  name="interest"
                  value="music"
                />
                <label htmlFor="music">Semi Furnished</label>
              </div>
             
            </div>
            </form>
            </div>
            <div className="prop-footer">
              <span>Need Help ? Call 9999999999 </span>
              <button className="btn" onClick={handleClick}>Next</button>
            </div>
          
        </div>
        )
      }
      {isButtonPressed && <Price/>} 
        
      </div>
    
  );
};


export default Furniture
