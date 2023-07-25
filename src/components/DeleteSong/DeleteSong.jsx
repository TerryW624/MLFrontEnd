import React from 'react';
import axios from 'axios';

const DeleteSongComponent = (id) => {
  const deleteSongFunction = async () => {
    let key = id;
    let deletedSong = await axios.delete(`http://127.0.0.1:5000/api/songs/${key}`);
    if (deletedSong.status === 204) {
      getAllSongs(); // Assuming getAllSongs is defined elsewhere in the component
    }
  };

  return <button onClick={() => deleteSongFunction(someSongKey)}>Delete Song</button>
};

export default DeleteSongComponent;
