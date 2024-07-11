import React,{useState} from 'react';
import PropImages from './PropImages';
import './Price.css'

const Price = () => {
    
        const [isButtonPressed, setIsButtonPressed] = useState(false);
      
        const handleClick = () => {
          setIsButtonPressed(true);
        }
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
         
        <div className="Location-name">
                <div className="column">
                  <label htmlFor="">Rent :</label>
                  <br />
                  <input type="text" placeholder="₹    /Month" />
                </div>

                <div className="column">
                  <label htmlFor="">Security *</label>
                  <br />
                  <input type="text" placeholder="₹         /Month" />
                </div>
                </div>

                <div className="Location-name">
                <div className="column">
                  <label htmlFor="">Maintainence *</label>
                  <br />
                  <input type="text" placeholder="₹     /Month" />
                </div>

                <div className="column">
                  <label htmlFor="">Maintainence *</label>
                  <br />
                  <input type="text" placeholder="₹ Maintainence" />
                  <input type="text" placeholder=" / month" />
                  
                </div>
                </div>

        </form>

        <div className="details">
          <h3>Additional Pricing details to convey to agent?</h3>
          <input type="text" placeholder='Do you have any concerns regarding pricing of your property? Add your concerns here or call us.' />
               
            </div>
        </div>
        <div className="prop-footer">
            <span>Need Help ? Call 9999999999 </span>
            <button className="btn"  onClick={handleClick}>Next</button>
          </div>
        
      </div>
    )}

    {isButtonPressed && <PropImages />} 
    {/* Render Location component when button pressed */}
    
  </div>
  )
}



export default Price;
