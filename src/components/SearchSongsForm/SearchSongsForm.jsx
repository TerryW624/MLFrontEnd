import tambourine from '../../tambourine.svg';
import React, { useState } from 'react';

const SearchSongsForm = ({inSongObjectInfo, setInSongObjectInfo}) => {
    

    function handleSearchBoxChange(e){
        setInSongObjectInfo(e.target.value)
        console.log(inSongObjectInfo)
    }

    return ( 
        <form onChange={handleSearchBoxChange} className="searchBar">
            <img src={tambourine} className="App-logo1" alt="logo" />
            <h2>Percussive</h2>
            <label htmlFor="searchBox">Search songs</label>
            <input name="searchBox" placeholder="Search by title, genre, artist etc."/>
        </form>
     );
}
 
export default SearchSongsForm;