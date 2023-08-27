/*
Filename: YourLibrary.js

Code: This file contains the code for the sidebar. It contains the code for the
sidebar library logo and the sidebar library list.
*/

// Import necessary files
import React from 'react';
import library from '../Images/library.png';
import '../App.css';

// Main YourLibrary function
function YourLibrary() {
  // Return the sidebar
  return (
    // Sidebar for the library
    <div className="sidebar">
      <ul className="nav-list">
        <img src={library} className="App-logo" alt="logo" />
        <li>Your Library</li>
      </ul>
    </div>
  );
}

// Export the YourLibrary function
export default YourLibrary;
