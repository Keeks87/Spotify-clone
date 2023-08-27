/* 
Filename: CardNavbar.js

Code: This file contains the code for the card navbar component. It contains
the code for the title, subtitle, and button of the card navbar.
*/

// Import necessary files
import React from 'react';
import '../App.css';

// Main CardNavbar function
function CardNavbar(props) {
  // Return the card navbar
  return (
    // Card for the left navbar
    <div className="card-navbar">
      <h4>{props.title}</h4>
      <h5>{props.subtitle}</h5>
      <span className="button">{props.buttonText}</span>
    </div>
  );
}

export default CardNavbar;
