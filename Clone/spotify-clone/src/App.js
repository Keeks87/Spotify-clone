import spotify from './Images/spotify.png';
import './App.css';

function App() {
  return (
    <div class="container">
      <div class="container-sidebar">

        <div class="sidebar">
          <ul class="nav-list">
            <img src={spotify} className="App-logo" alt="logo" />
              <li>Home</li>
          </ul>
          <ul class="nav-list">
            <img src={spotify} className="App-logo" alt="logo" />
              <li>Search</li>
          </ul>
        </div>
        
      <div class="sidebar">
        <ul class="nav-list">
          <img src={spotify} className="App-logo" alt="logo" />
            <li>Your Library</li>
        </ul>
      </div>
      <br></br>
      <div class="sidebar">
        <div class="card-navbar">
          <h4>
            Create your first playlist
          </h4>
          <h5>
            it's easy,we'll help you
          </h5>
          <span class="button">
            Create Playlist
          </span>
        </div>
      
      <br></br>

        <div class="card-navbar">
          <h4>
            Let's fin some podcasts to follow
          </h4>
          <h5>
            We'll keep you updated on new episodes
          </h5>
          <span class="button">
            Browse Podcasts
          </span>
        </div>
      </div>
    </div>

      <div className="content-header">
        <div className="header-buttons">
        <span class="button-black">
            Sign up
          </span>
          <span class="button">
            Log In
          </span>
        </div>

        <div className="cards-container">
          <div class="heading">
            <h2>
              Spotify Playlists
            </h2>
            <p>
              Show all
            </p>
          </div>
          <div class="content">
            
            <div class="card">
              <header className="App-cards">
                <img src={"https://i.scdn.co/image/ab67706f0000000261b43bc8c113ab93d6466509"} className="Card-img" alt="logo" />
                <h6>
                  Today's Top Hits
                </h6>
                <p>
                  Peggy Gou is on top of the Hottest 50!
                </p>
              </header>
            </div>

            <div class="card">
              <header className="App-cards">
                <img src={"https://i.scdn.co/image/ab67706f0000000264c1526220b3f0a3e88cf8c0"} className="Card-img" alt="logo" />
                <h6>
                  RapCaviar
                </h6>
                <p>
                  New music from Quavo, Polo G and Lil Durk.
                </p>
              </header>
            </div>

            <div class="card">
              <header className="App-cards">
                <img src={"https://i.scdn.co/image/ab67706f00000002b0fe40a6e1692822f5a9d8f1"} className="Card-img" alt="logo" />
                <h6>
                  All Out 2010s
                </h6>
                <p>
                  The biggest songs of the 2010s.
                </p>
              </header>
            </div>

            <div class="card">
              <header className="App-cards">
                <img src={"	https://i.scdn.co/image/ab67706f0000000278b4745cb9ce8ffe32daaf7e"} className="Card-img" alt="logo" />
                <h6>
                  Rock Classics
                </h6>
                <p>
                  Rock legends & epic songs that continue to...
                </p>
              </header>
            </div>

            <div class="card">
              <header className="App-cards">
                <img src={"https://i.scdn.co/image/ab67706f00000002b60db5d1bcdd9c4fd1ebcffe"} className="Card-img" alt="logo" />
                <h6>
                  Chill Hits
                </h6>
                <p>
                  Kick back to the best new and recent chill...
                </p>
              </header>
            </div>
          </div>
        </div>

        <div className="cards-container">
        <div class="heading">
            <h2>
              Focus
            </h2>
            <p>
              Show all
            </p>
          </div>
          <div class="content">

            <div class="card">
              <header className="App-cards">
                <img src={"https://i.scdn.co/image/ab67706f00000002d073e656e546e43bc387ad79"} className="Card-img" alt="logo" />
                <h6>
                  Peaceful Piano
                </h6>
                <p>
                  Peaceful piano to help you slow down, breath, and relax.
                </p>
              </header>
            </div>

            <div class="card">
              <header className="App-cards">
                <img src={"https://i.scdn.co/image/ab67706f00000002d6d48b11fd3b11da654c3519"} className="Card-img" alt="logo" />
                <h6>
                  Deep Focus
                </h6>
                <p>
                  Keep calm and focus with ambient and post-rock music.
                </p>
              </header>
            </div>

            <div class="card">
              <header className="App-cards">
                <img src={"https://i.scdn.co/image/ab67706f00000002fe24d7084be472288cd6ee6c"} className="Card-img" alt="logo" />
                <h6>
                  Instrumental Study
                </h6>
                <p>
                  Focus with soft study music in the background.
                </p>
              </header>
            </div>

            <div class="card">
              <header className="App-cards">
                <img src={"https://i.scdn.co/image/ab67706f00000002e435ce0a86a8b9dc24527618"} className="Card-img" alt="logo" />
                <h6>
                  Workday Lounge
                </h6>
                <p>
                  Lounge and chill out music for your workday.
                </p>
              </header>
            </div>

            <div class="card">
              <header className="App-cards">
                <img src={"	https://i.scdn.co/image/ab67706f00000002724554ed6bed6f051d9b0bfc"} className="Card-img" alt="logo" />
                <h6>
                  Focus Flow
                </h6>
                <p>
                  Uptempo instrumental hip hop beats.
                </p>
              </header>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
