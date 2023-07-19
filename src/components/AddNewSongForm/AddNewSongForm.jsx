import React, { useState } from 'react';

const AddNewSongForm = ({ addNewSong }) => {
    const [title, setTitle] = useState("");
    const [artist, setArtist] = useState("");
    const [album, setAlbum] = useState("");
    const [genre, setGenre] = useState("");
    const [release_date, setRelease_date] = useState("");

    function handleNewSongSubmit(e) {
        e.preventDefault();
        let newSong = {
            title: title,
            artist: artist,
            album: album,
            genre: genre,
            release_date: release_date,
        };
        addNewSong(newSong);
    };

    return ( 
        <form onSubmit={handleNewSongSubmit}>
            <label htmlFor="title">What is the Title?😄</label>
            <input value={title} onChange={(e) => setTitle(e.target.value)} name="title" />
            <label htmlFor="artist">What is the Name of the Artist?🧑‍🎨</label>
            <input value={artist} onChange={(e) => setArtist(e.target.value)} name="artist" />
            <label htmlFor="album">What is the Name of the Album?💿</label>
            <input value={album} onChange={(e) => setAlbum(e.target.value)} name="album" />
            <label htmlFor="genre">What is the Genre?🎙️</label>
            <input value={genre} onChange={(e) => setGenre(e.target.value)} name="genre" />
            <label htmlFor="release_date">What is the Release Date?📅</label>
            <input type="date" value={release_date} onChange={(e) => setRelease_date(e.target.value)} name="release_date" />
            <button type="submit">Submit</button>
        </form>
     );
}
 
export default AddNewSongForm;