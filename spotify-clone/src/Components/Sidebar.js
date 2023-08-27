/*
Filename: Sidebar.js

Code: This file contains the code for the sidebar. It contains the code for the
sidebar logo and the sidebar list. The sidebar list contains the home and
search buttons.
*/

// Import necessary files
import React from 'react';
import homepage from '../Images/homepage.png';
import search from '../Images/search.png';
import '../App.css';

// Sidebar function
function Sidebar() {
  // Return the sidebar
  return (
    // Sidebar container
    <div className="sidebar">
      <ul className="nav-list">
        <img src={homepage} className="App-logo" alt="logo" />
        <li>Home</li>
      </ul>
      <ul className="nav-list">
        <img src={search} className="App-logo" alt="logo" />
        <li>Search</li>
      </ul>
    </div>
  );
}

// Export the sidebar
export default Sidebar;
