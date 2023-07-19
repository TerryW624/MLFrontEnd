import React from "react";

const DisplaySongs = ({ songsList }) => {
    return ( 
        <table>
            <tr>
                <th>Title</th>
                <th>Artist</th>
                <th>Album</th>
                <th>Genre</th>
                <th>Release Date</th>
            </tr>
            {songsList.map((song) => (
                <tr key={song.id}>
                    <td>{song.title}</td>
                    <td>{song.artist}</td>
                    <td>{song.album}</td>
                    <td>{song.genre}</td>
                    <td>{song.release_date}</td>
                </tr>     
            ))}
        </table>
     );
}
 
export default DisplaySongs;