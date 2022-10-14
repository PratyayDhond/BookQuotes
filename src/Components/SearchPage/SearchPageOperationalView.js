
import React from 'react';

import SearchBar from './SearchBar';
import SearchPageQuoteView from './SearchPageQuoteView';
// setQuotes={setQuotes} userFavourites={userFavourites}
const SearchPageOperationalView = ({searchQuery, setSearchQuery, filteredQuotes, setFilteredQuotes, userID}) =>{ 

    return(
        <>
            <SearchBar className="" searchQuery={searchQuery} setSearchQuery={setSearchQuery}  />
            <SearchPageQuoteView userID={userID} searchQuery={searchQuery} filteredQuotes={filteredQuotes} setSearchQuery={setSearchQuery} />
        </>
    );
}

export default SearchPageOperationalView;