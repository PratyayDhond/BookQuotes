import React from "react";
import './SearchPageQuoteView.css'
import SearchPageQuoteCard from "./SearchPageQuoteCards";
const SearchPageQuoteView = ({quotes}) => {

    console.log(quotes);
    var QuoteComponents = [];
    for(let i = 0; i < quotes.length; i++){
        QuoteComponents.push(<SearchPageQuoteCard quote={quotes[i]} key={i}/>)
    }


    return(
        <>
            {
                quotes.length === 0 ? 
                <div></div> :
                <div className="SearchPageQuoteCard-QuotesArea" onClick={()=> {console.log("clicked")}}>
                    {QuoteComponents}
                </div> 
            }
        </>
    );
    
}

export default SearchPageQuoteView;