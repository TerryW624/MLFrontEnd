import React from "react";
import DeleteSongComponent from "../DeleteSong/DeleteSong"

const DisplaySongs = ({ songsList, inSongObjectInfo }) => {

    let testsongs = songsList.filter((song) => (song.title.toLowerCase().includes(inSongObjectInfo)||song.album.includes(inSongObjectInfo)||song.genre.includes(inSongObjectInfo)||song.artist.includes(inSongObjectInfo)))
    console.log(testsongs);

    return ( 
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Artist</th>
                    <th>Album</th>
                    <th>Genre</th>
                    <th>Release Date</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {testsongs.map((song) => (
                    <tr key={song.id}>
                        <td>{song.title}</td>
                        <td>{song.artist}</td>
                        <td>{song.album}</td>
                        <td>{song.genre}</td>
                        <td>{song.release_date}</td>
                        <td><button><DeleteSongComponent id={song.id} /></button></td>
                    </tr>     
                ))}
            </tbody>
        </table>
     );
}
 
export default DisplaySongs;