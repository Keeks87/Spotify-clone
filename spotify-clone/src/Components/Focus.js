import React from 'react';
import '../App.css';

function Focus(props) {
  return (
    <div className="cards-container">
      <div className="heading">
        <h2>{props.title}</h2>
        <p>Show all</p>
      </div>
      <div className="content">
        {props.playlists.map((playlist, index) => (
          <div key={index} className="card">
            <header className="App-cards">
              <img src={playlist.imageUrl} className="Card-img" alt="logo" />
              <h6>{playlist.name}</h6>
              <p>{playlist.description}</p>
            </header>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Focus;
