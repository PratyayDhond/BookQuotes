import React from "react";
import './SearchPageQuoteView.css'
import SearchPageViewQuoteCardHooks from './SearchPageViewQuoteCardHooks'

const SearchPageQuoteView = ({ filteredQuotes, searchQuery, setSearchQuery, userID}) => {

    return(
        <>
            {
                filteredQuotes.length === 0 ? 
                <div></div> :
                <div className="SearchPageQuoteCard-QuotesArea" >
                    {
                        filteredQuotes.map((quote) =>   
                            <SearchPageViewQuoteCardHooks userID={userID} searchQuery={searchQuery} setSearchQuery={setSearchQuery} quote={quote} key={quote.id} />
                        )
                    }
                </div> 
            }
        </>
    );
    
}

export default SearchPageQuoteView;