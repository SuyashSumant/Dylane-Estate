import React from "react";
import "./Submit.css";

const Submit = () => {
  return (
   
    <div className="prop-container">
      <div className="text">
        <h1>Thank you for listing your property with us</h1>
        <p>
        Your listing will be reviewed and will go live within 24 hours.
        </p>
        <p>
        We will now manage your listing and get in touch with you after finding the best suitable tenant as per your preference. 

        </p>
        <p>Dylan Estates</p>

        <div> 
              <button className="submit-btn">Edit Property Listing</button>
              <button className="submit-btn">Preview Property Listing</button>
            </div>
      </div>
    </div>
    
  );
};
//   {isButtonPressed && <Last/>}

export default Submit;
