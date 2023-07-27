import React from 'react';
import './App.css';
import { Searchbar } from '../Searchbar/Searchbar';
import { SearchResults } from '../SearchResults/SearchResults';
import { Playlist } from '../Playlist/Playlist';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [
        {
          name: "Example Track Name",
          artist: "Example Track Artist",
          album: "Example Track Album",
          id: 1,
        },
        {
          name: "Example Track Name 2",
          artist: "Example Track Artist 2",
          album: "Example Track Album 2",
          id: 2,
        },
      ],
    }
  }


  render() {
    return (
      <div>
        <h1 className="App">
          Spotify Playlist Builder
        </h1>
        <div class="App">
          <Searchbar />
          <div className="App-playlist">
          <SearchResults searchResults={this.state.searchResults}/>
          <Playlist />
          </div>
        </div>
      </div>
    );
  }
}

export default App;