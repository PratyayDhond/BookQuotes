
import React from 'react';

import SearchBar from './SearchBar';
import SearchPageQuoteView from './SearchPageQuoteView';

const SearchPageOperationalView = ({searchQuery, setSearchQuery, filteredQuotes, setFilteredQuotes}) =>{ 

    return(
        <>
            <SearchBar className="" searchQuery={searchQuery} setSearchQuery={setSearchQuery} setFilteredQuotes={setFilteredQuotes} />
            <SearchPageQuoteView quotes={filteredQuotes}/>
        </>
    );
}

export default SearchPageOperationalView;