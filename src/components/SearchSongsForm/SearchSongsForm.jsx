import React, { useState } from 'react';

const SearchSongsForm = ({inSongObjectInfo, setInSongObjectInfo}) => {
    

    function handleSearchBoxChange(e){
        setInSongObjectInfo(e.target.value)
        console.log(inSongObjectInfo)
    }

    return ( 
        <form onChange={handleSearchBoxChange}>
            <label htmlFor="searchBox">Search songs</label>
            <input name="searchBox" placeholder="Search by title, genre, artist etc."/>
        </form>
     );
}
 
export default SearchSongsForm;