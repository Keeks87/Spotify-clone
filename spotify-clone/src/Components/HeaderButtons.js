import React from 'react';
import chevronLeft from '../Images/chevronLeft.png';
import chevronRight from '../Images/chevronRight.png';
import '../App.css';

function HeaderButtons() {
  return (
    <div className="header-buttons">
      <div>
        <img src={chevronLeft} className="App-logo" alt="logo" />
        <img src={chevronRight} className="App-logo" alt="logo" />
      </div>
      <div>
        <span className="button-black">Sign up</span>
        <span className="button">Log In</span>
      </div>
    </div>
  );
}

export default HeaderButtons;
