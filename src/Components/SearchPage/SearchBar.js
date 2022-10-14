import './SearchBar.css'
import React from 'react';

const SearchBar = ({searchQuery, setSearchQuery}) => {
    return(
        <>
            <div className='SearchBar-TextInputDiv'>
                <input type="text" value={searchQuery} onChange={(e) => {setSearchQuery(e.target.value)}} placeholder="Search a Quote here" className='SearchBar-TextInput'  />
            </div>
        </>
    )
}

export default SearchBar;