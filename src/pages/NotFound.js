import React from 'react';
import './styles/NotFound.css';
import img from '../images/Scarecrow.png';

function NotFound() {
  return (
    <div className="main-container">
      <div className="logo-container">
        <img src={img} alt="logo 404 NOT FOUND" className=" not-found-logo"></img>
      </div>
      <div className="message-container">
        <h1 className="message-title">I have bad news for you</h1>
        <p className="message-description">The page you are looking for might be removed or is temporarily unavailable</p>
        <button className="back-button">BACK TO PAGE</button>
      </div>
    </div>
  );
}

export default NotFound;
