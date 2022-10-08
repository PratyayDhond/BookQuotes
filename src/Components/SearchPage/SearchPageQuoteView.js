import React from "react";
import './SearchPageQuoteView.css'
import SearchPageViewQuoteCardHooks from './SearchPageViewQuoteCardHooks'

const SearchPageQuoteView = ({quotes,userFavourites, searchQuery, setSearchQuery, setViewableQuotes,userID}) => {

    return(
        <>
            {
                quotes.length === 0 ? 
                <div></div> :
                <div className="SearchPageQuoteCard-QuotesArea" >
                    {
                        quotes.map((quote) =>   
                            <SearchPageViewQuoteCardHooks userID={userID} userFavourites={userFavourites} searchQuery={searchQuery} setSearchQuery={setSearchQuery} quote={quote} key={quote.id} setViewableQuotes={setViewableQuotes} />
                        )
                    }
                </div> 
            }
        </>
    );
    
}

export default SearchPageQuoteView;