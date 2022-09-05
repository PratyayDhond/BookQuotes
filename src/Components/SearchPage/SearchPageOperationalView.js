
import React from 'react';

import SearchBar from './SearchBar';
import SearchPageQuoteView from './SearchPageQuoteView';

const SearchPageOperationalView = ({searchQuery, setViewableQuotes,setSearchQuery, filteredQuotes, setFilteredQuotes}) =>{ 

    return(
        <>
            <SearchBar className="" searchQuery={searchQuery} setSearchQuery={setSearchQuery} setFilteredQuotes={setFilteredQuotes} />
            <SearchPageQuoteView searchQuery={searchQuery} quotes={filteredQuotes} setSearchQuery={setSearchQuery} setViewableQuotes={setViewableQuotes}/>
        </>
    );
}

export default SearchPageOperationalView;