/* 
Filename: App.js

Code: This file contains the main code for the Spotify Clone App. It
contains the code for the sidebar, library, the header buttons, the spotify
playlists, and the focus playlists. It also contains the code for the spotify
playlists and focus playlists objects.
*/

// Import necessary files
import React from 'react';
import './App.css';
import Sidebar from './Components/Sidebar';
import YourLibrary from './Components/YourLibrary';
import CardNavbar from './Components/CardNavbar';
import HeaderButtons from './Components/HeaderButtons';
import SpotifyPlaylists from './Components/SpotifyPlaylists';
import Focus from './Components/Focus';

// Main App function
function App() {
  // Spotify playlists object
  const spotifyPlaylists = [
    {
      imageUrl: 'https://i.scdn.co/image/ab67706f0000000261b43bc8c113ab93d6466509',
      name: "Today's Top Hits",
      description: 'Peggy Gou is on top of the Hottest 50!'
    },

    {
      imageUrl: 'https://i.scdn.co/image/ab67706f0000000264c1526220b3f0a3e88cf8c0',
      name: "RapCaviar",
      description: 'New music from Quavo, Polo G and Lil Durk.'
    },

    {
      imageUrl: 'https://i.scdn.co/image/ab67706f00000002b0fe40a6e1692822f5a9d8f1',
      name: "All Out 2010s",
      description: 'The biggest songs of the 2010s.'
    },

    {
      imageUrl: 'https://i.scdn.co/image/ab67706f0000000278b4745cb9ce8ffe32daaf7e',
      name: "Rock Classics",
      description: 'Rock legends & epic songs that continue to...'
    },

    {
      imageUrl: 'https://i.scdn.co/image/ab67706f00000002b60db5d1bcdd9c4fd1ebcffe',
      name: "Chill Hits",
      description: 'Kick back to the best new and recent chill...'
    },
  ];

  // Focus playlists object
  const focusPlaylists = [
    {
      imageUrl: 'https://i.scdn.co/image/ab67706f00000002d073e656e546e43bc387ad79',
      name: 'Peaceful Piano',
      description: 'Peaceful piano to help you slow down...'
    },

    {
      imageUrl: 'https://i.scdn.co/image/ab67706f00000002d6d48b11fd3b11da654c3519',
      name: 'Deep Focus',
      description: 'Keep calm and focus with ambient and post-rock music.'
    },

    {
      imageUrl: 'https://i.scdn.co/image/ab67706f00000002fe24d7084be472288cd6ee6c',
      name: 'Instrumental Study',
      description: 'Focus with soft study music in the background.'
    },

    {
      imageUrl: 'https://i.scdn.co/image/ab67706f00000002e435ce0a86a8b9dc24527618',
      name: 'Workday Lounge',
      description: 'Lounge and chill out music for your workday.'
    },

    {
      imageUrl: 'https://i.scdn.co/image/ab67706f00000002724554ed6bed6f051d9b0bfc',
      name: 'Focus Flow',
      description: 'Uptempo instrumental hip hop beats.'
    },
  ];

  // Return the main app
  return (
    // Main app container
    <div className="container">
      {/* Sidebar container */}
      <div class="container-sidebar">
        <Sidebar />
        <YourLibrary />
      <div className="sidebar">
        <CardNavbar title="Create your first playlist" subtitle="it's easy, we'll help you" buttonText="Create Playlist" />
        <CardNavbar title="Let's find some podcasts to follow" subtitle="We'll keep you updated on new episodes" buttonText="Browse Podcasts" />
      </div>
      </div>
        {/* Main content container */}
        <div class="content">
          <HeaderButtons />
          <SpotifyPlaylists title="Spotify Playlists" playlists={spotifyPlaylists} />
          <Focus title="Focus" playlists={focusPlaylists} />
        </div>
    </div>
  );
}

// Export the App
export default App;
