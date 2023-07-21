import tambourine from './tambourine.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import axios from "axios"
import DisplaySongs from './components/DisplaySongs/DisplaySongs';
import AddNewSongForm from './components/AddNewSongForm/AddNewSongForm';
import SearchSongsForm from './components/SearchSongsForm/SearchSongsForm';


function App() {
  const [songsList, setSongsList] = useState([]);
  const [inSongObjectInfo, setInSongObjectInfo] = useState("");

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
        <SearchSongsForm inSongObjectInfo={inSongObjectInfo} setInSongObjectInfo={setInSongObjectInfo} />
        <img src={tambourine} className="App-logo" alt="logo" />
        <DisplaySongs songsList={songsList} inSongObjectInfo={inSongObjectInfo} />
        <AddNewSongForm addNewSong={addNewSong} />
      </header>
    </div>
  );
}

export default App;
