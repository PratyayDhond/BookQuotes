import React from "react";
import './SearchPageQuoteView.css'
import SearchPageViewQuoteCardHooks from './SearchPageViewQuoteCardHooks'
const SearchPageQuoteView = ({quotes, searchQuery, setSearchQuery, setViewableQuotes,userID}) => {

    // console.log(quotes);
    // var QuoteComponents = [];
    // for(let i = 0; i < quotes.length; i++){
    //     QuoteComponents.push(<SearchPageViewQuoteCardHooks quote={quotes[i]} key={i}/>)
    // }



    return(
        <>
            {
                quotes.length === 0 ? 
                <div></div> :
                <div className="SearchPageQuoteCard-QuotesArea" >
                    {
                        quotes.map((quote) =>   
                            <SearchPageViewQuoteCardHooks userID={userID} searchQuery={searchQuery} setSearchQuery={setSearchQuery} quote={quote} key={quote.id} setViewableQuotes={setViewableQuotes} />
                        )
                    }
                    {/* {QuoteComponents.map(quoteComponent => QuoteComponent )} */}
                </div> 
            }
        </>
    );
    
}

export default SearchPageQuoteView;