import tambourine from './tambourine.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import axios from "axios"
import DisplaySongs from './components/DisplaySongs/DisplaySongs';
import AddNewSongForm from './components/AddNewSongForm/AddNewSongForm';


function App() {
  const [songsList, setSongsList] = useState([]);

  useEffect(
    () => {getAllSongs();}, []
  )

  async function getAllSongs() {
    let songDisplay = await axios.get("http://127.0.0.1:5000/api/songs")
    setSongsList(songDisplay.data);
  }

  async function addNewSong(newSong) {
    let addedSong = await axios.post("http://127.0.0.1:5000/api/songs", newSong)
    if (addedSong === 201) {
      getAllSongs();
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={tambourine} className="App-logo" alt="logo" />
        <AddNewSongForm addNewSong={addNewSong} />
        <DisplaySongs songsList={songsList} />
      </header>
    </div>
  );
}

export default App;
