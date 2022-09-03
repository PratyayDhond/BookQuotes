import './SearchBar.css'
import React from 'react';

const SearchBar = ({searchQuery, setSearchQuery}) => {
    return(
        <>
            <label htmlFor="text"></label>
            <input type="text" value={searchQuery} onChange={(e) => {setSearchQuery(e.target.value)}} className='SearchBar-TextInput'  />
        </>
    )
}

export default SearchBar;