import React, { useState } from "react";
import "./Hero.css";
import Bullet from "../Assets/Bullet.png";
import { useNavigate } from 'react-router-dom';


const Hero = () => {
  const [isButtonPressed, setIsButtonPressed] = useState(false);
 
  const [isnext, setNext] = useState(false);
  const navigate = useNavigate(); // Get the navigate function

  const handleClicknext = () => {
    setNext(true);
    navigate('/Proplist'); // Navigate to the new page route
  };

  const handleClick = () => {
    setIsButtonPressed(true);
  };
 

 
  return (
    
    <div className="hero">
      <div className="container">
        <h1>Sell or Rent your Property for Free</h1>
        <p>
          Whether you’re ready to sell or looking for answers, we’ll guide you
          with data and expertise specific to your needs.
        </p>
      </div>
      <div className="box">
        <div className="left">
          <h2>Upload your property in 4 simple steps</h2>
          <ul>
            <li>
              <span>
                <img src={Bullet} alt="" />
              </span>
              Add your properties Basic Details
            </li>
            <li>
              <span>
                <img src={Bullet} alt="" />
              </span>
              Add property Location
            </li>
            <li>
              <span>
                <img src={Bullet} alt="" />
              </span>
              Add property Features and amenities
            </li>
            <li>
              <span>
                <img src={Bullet} alt="" />
              </span>
              Add Price details
            </li>
            <li>
              <span>
                <img src={Bullet} alt="" />
              </span>
              Add your best Property Shots
            </li>
          </ul>
        </div>
        {isButtonPressed ?(
          <div className="right">
          <h2>LET'S GET STARTED</h2>
          <form action="">
            <div className="name">
              <label htmlFor="">Enter OTP sent on 999-999-9999</label>
              <br />
              <input type="email" placeholder=" 0 0 0 0 " />
            </div>
          </form>

          <div className=" form-footer">
            <span>Need Help ? Call 9999999999 </span>
            <button className="btn" onClick={handleClicknext} >Next</button>
            
          </div>
        </div>
        
        ) :(
       

        <div className="right">
          <h2>LET'S GET STARTED</h2>
          <form action="">
            <h3>*I am:</h3> 
            <div className="radio">            
              <input type="radio" name="type" value="Owner" />
            <label htmlFor="option1" id="optn">
              Owner
            </label>

            <input type="radio" name="type" value="Builder" />
            <label htmlFor="option2" id="optn">
              Builder
            </label>
            </div>

            <br></br>

            <div className="name">
              <label htmlFor="">Your name</label>
              <br />
              <input type="text" placeholder="name" />
            </div>

            <div className="name">
              <label htmlFor="">Country *</label>
              <br />
              <input type="text" placeholder="name" />
            </div>

            <div className="name">
              <label htmlFor="">Phone *</label>
              <br />
              <input type="number" placeholder="Phone number" />
            </div>

            <p>OR</p>

            <div className="name">
              <label htmlFor="">Email *</label>
              <br />
              <input type="email" placeholder="email" />
            </div>
          </form>

          <div className=" form-footer">
            <span>Need Help ? Call 9999999999 </span>
            <button onClick={handleClick} className="btn">
              Next
            </button>
          </div>
        </div>
        )
      }
      </div>
    </div>
  );

};

export default Hero;
